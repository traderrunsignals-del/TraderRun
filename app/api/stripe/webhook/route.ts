import Stripe from "stripe"
import { supabaseAdmin } from "@/lib/supabase-admin"

export const runtime = "nodejs"

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string
)

export async function POST(request: Request) {
  const signature =
    request.headers.get("stripe-signature")

  if (!signature) {
    return new Response(
      "Falta la firma de Stripe",
      { status: 400 }
    )
  }

  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error(
      "Falta STRIPE_WEBHOOK_SECRET"
    )

    return new Response(
      "Webhook no configurado",
      { status: 500 }
    )
  }

  const body = await request.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (error) {
    console.error(
      "Firma de webhook no válida:",
      error
    )

    return new Response(
      "Firma no válida",
      { status: 400 }
    )
  }

  console.log(
    "✅ Evento Stripe recibido:",
    event.type
  )

  /*
   * SOLO PROCESAMOS EL CHECKOUT COMPLETADO
   */

  if (event.type === "checkout.session.completed") {
    const session =
      event.data.object as Stripe.Checkout.Session

    console.log("✅ Checkout completado:", {
      sessionId: session.id,
      email:
        session.customer_details?.email ??
        session.customer_email,
      paymentStatus: session.payment_status,
      tradingViewUser:
        session.metadata?.tradingViewUser,
    })

    /*
     * SOLO PROCESAMOS PAGOS CONFIRMADOS
     */

    if (session.payment_status !== "paid") {
      console.log(
        "ℹ️ Checkout recibido pero todavía no está pagado:",
        session.id
      )

      return new Response("ok", {
        status: 200,
      })
    }

    const email =
      session.customer_details?.email ??
      session.customer_email

    const name =
      session.metadata?.name

    const tradingViewUser =
      session.metadata?.tradingViewUser

    const termsAccepted =
      session.metadata?.termsAccepted === "true"

    const termsVersion =
      session.metadata?.termsVersion

    /*
     * COMPROBAR DATOS NECESARIOS
     */

    if (
      !email ||
      !name ||
      !tradingViewUser ||
      !termsAccepted ||
      !termsVersion ||
      session.amount_total === null ||
      !session.currency
    ) {
      console.error(
        "❌ Checkout pagado pero faltan datos:",
        session.id
      )

      return new Response(
        "Faltan datos del checkout",
        { status: 500 }
      )
    }

    /*
     * GUARDAR COMPRA EN SUPABASE
     */

    const { error: purchaseError } =
      await supabaseAdmin
        .from("academy_purchases")
        .upsert(
          {
            stripe_session_id: session.id,

            stripe_payment_intent_id:
              typeof session.payment_intent === "string"
                ? session.payment_intent
                : session.payment_intent?.id ?? null,

            name,
            email,
            tradingview_user:
              tradingViewUser,

            amount_total:
              session.amount_total,

            currency:
              session.currency,

            payment_status:
              session.payment_status,

            terms_accepted:
              termsAccepted,

            terms_version:
              termsVersion,
          },
          {
            onConflict:
              "stripe_session_id",
          }
        )

    if (purchaseError) {
      console.error(
        "❌ Error guardando compra en Supabase:",
        purchaseError
      )

      return new Response(
        "Error guardando compra",
        { status: 500 }
      )
    }

    console.log(
      "✅ Compra guardada en academy_purchases:",
      session.id
    )

    /*
     * BUSCAR USUARIO EXISTENTE EN SUPABASE AUTH
     */

    const {
      data: usersData,
      error: usersError,
    } =
      await supabaseAdmin.auth.admin.listUsers({
        page: 1,
        perPage: 1000,
      })

    if (usersError) {
      console.error(
        "❌ Error buscando usuario en Supabase Auth:",
        usersError
      )

      return new Response(
        "Error buscando usuario",
        { status: 500 }
      )
    }

    const existingUser =
      usersData.users.find(
        (user) =>
          user.email?.toLowerCase() ===
          email.toLowerCase()
      )

    /*
     * SI NO EXISTE USUARIO, POR AHORA SOLO LO REGISTRAMOS
     *
     * Más adelante añadiremos creación/invitación automática.
     */

   let academyUser = existingUser

if (!academyUser) {
  console.log(
    "ℹ️ El comprador no tiene usuario. Enviando invitación:",
    email
  )

  const {
    data: inviteData,
    error: inviteError,
  } =
    await supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
        redirectTo:
  `${process.env.NEXT_PUBLIC_SITE_URL}/activar-cuenta`,
        data: {
          name,
        },
      }
    )

  if (inviteError) {
    console.error(
      "❌ Error invitando al nuevo usuario:",
      inviteError
    )

    return new Response(
      "Error creando usuario",
      { status: 500 }
    )
  }

  if (!inviteData.user) {
    console.error(
      "❌ Supabase no devolvió el usuario creado:",
      email
    )

    return new Response(
      "Usuario no creado",
      { status: 500 }
    )
  }

  academyUser = inviteData.user

  console.log(
    "✅ Nuevo usuario invitado:",
    academyUser.id
  )
} else {
  console.log(
    "✅ Usuario existente encontrado:",
    academyUser.id
  )
}

    console.log(
      "✅ Usuario existente encontrado:",
      academyUser.id
    )

    /*
     * VINCULAR LA COMPRA AL USUARIO
     */

    const {
      error: purchaseUserError,
    } =
      await supabaseAdmin
        .from("academy_purchases")
        .update({
          user_id:
            academyUser.id,
        })
        .eq(
          "stripe_session_id",
          session.id
        )

    if (purchaseUserError) {
      console.error(
        "❌ Error vinculando compra al usuario:",
        purchaseUserError
      )

      return new Response(
        "Error vinculando compra",
        { status: 500 }
      )
    }

    /*
     * COMPROBAR SI YA EXISTE ACCESO A ACADEMY
     */

    const academyProductId =
      "6fe51583-a729-41ac-89e4-e2c1e69a62db"

    const {
      data: existingAccess,
      error: accessLookupError,
    } =
      await supabaseAdmin
        .from("user_products")
        .select("id")
        .eq(
          "user_id",
          academyUser.id
        )
        .eq(
          "product_id",
          academyProductId
        )
        .maybeSingle()

    if (accessLookupError) {
      console.error(
        "❌ Error comprobando acceso existente:",
        accessLookupError
      )

      return new Response(
        "Error comprobando acceso",
        { status: 500 }
      )
    }

    /*
     * ACTIVAR O CREAR ACCESO
     */

    if (existingAccess) {
      const {
        error: updateAccessError,
      } =
        await supabaseAdmin
          .from("user_products")
          .update({
            active: true,
            expires_at: null,
          })
          .eq(
            "id",
            existingAccess.id
          )

      if (updateAccessError) {
        console.error(
          "❌ Error actualizando acceso Academy:",
          updateAccessError
        )

        return new Response(
          "Error actualizando acceso",
          { status: 500 }
        )
      }
    } else {
      const {
        error: insertAccessError,
      } =
        await supabaseAdmin
          .from("user_products")
          .insert({
            user_id:
              academyUser.id,

            product_id:
              academyProductId,

            started_at:
              new Date().toISOString(),

            expires_at:
              null,

            active:
              true,
          })

      if (insertAccessError) {
        console.error(
          "❌ Error creando acceso Academy:",
          insertAccessError
        )

        return new Response(
          "Error creando acceso",
          { status: 500 }
        )
      }
    }

    console.log(
      "✅ Acceso a Trader Run Academy activado:",
      academyUser.id
    )
  }

  /*
   * PARA CUALQUIER OTRO EVENTO DE STRIPE
   * RESPONDEMOS 200 SIN HACER NADA
   */

  return new Response("ok", {
    status: 200,
  })
}