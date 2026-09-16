import Stripe from "stripe"
import { Resend } from "resend"
import { supabaseAdmin } from "@/lib/supabase-admin"
import { buildAcademyWelcomeEmail } from "@/lib/academy-welcome-email"
export const runtime = "nodejs"

const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY as string
)

const resend = new Resend(
  process.env.RESEND_API_KEY as string
)

const ACADEMY_PRODUCT_ID =
  "6fe51583-a729-41ac-89e4-e2c1e69a62db"

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

         /*
     * VALIDAR PRODUCTO, IMPORTE Y MONEDA
     * DE TRADER RUN ACADEMY
     */

    const ACADEMY_PRODUCT_CODE =
      "trader_run_academy"

    const ACADEMY_PRICE = 82500

    const ACADEMY_EXPECTED_PRICE =
      process.env.ACADEMY_LIVE_TEST === "true"
        ? 100
        : ACADEMY_PRICE

    const ACADEMY_CURRENCY = "eur"

    if (
      session.metadata?.productCode !==
        ACADEMY_PRODUCT_CODE ||
      session.amount_total !==
        ACADEMY_EXPECTED_PRICE ||
      session.currency?.toLowerCase() !==
        ACADEMY_CURRENCY
    ) {
      console.error(
        "Checkout rechazado: producto, importe o moneda incorrectos",
        {
          sessionId: session.id,
          productCode:
            session.metadata?.productCode,
          amountTotal:
            session.amount_total,
          currency:
            session.currency,
        }
      )

      return new Response(
        "Checkout no válido para Trader Run Academy",
        { status: 400 }
      )
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

  const termsAcceptedAt =
  session.metadata?.termsAcceptedAt

/*
 * CALCULAR FIN DE LOS 2 MESES DE SOPORTE
 */

const purchaseDate =
  new Date(session.created * 1000)

const supportUntil =
  new Date(purchaseDate)

supportUntil.setUTCMonth(
  supportUntil.getUTCMonth() + 2
)

/*
 * COMPROBAR DATOS NECESARIOS
 */

    if (
  !email ||
  !name ||
  !tradingViewUser ||
  !termsAccepted ||
  !termsVersion ||
  !termsAcceptedAt ||
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

checkout_terms_accepted_at:
  termsAcceptedAt,

support_until:
  supportUntil.toISOString(),
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
          ACADEMY_PRODUCT_ID
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
              ACADEMY_PRODUCT_ID,

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
    /*
 * ENVIAR EMAIL DE BIENVENIDA
 */

const {
  data: purchase,
  error: purchaseLookupError,
} =
  await supabaseAdmin
    .from("academy_purchases")
    .select("welcome_email_sent_at")
    .eq(
      "stripe_session_id",
      session.id
    )
    .single()

if (purchaseLookupError) {
  console.error(
    "❌ Error comprobando email de bienvenida:",
    purchaseLookupError
  )

  return new Response(
    "Error comprobando email de bienvenida",
    { status: 500 }
  )
}

if (!purchase.welcome_email_sent_at) {
  const welcomeEmail =
    buildAcademyWelcomeEmail({
      name,
      supportUntil,
    })

  const {
  data: emailData,
  error: emailError,
} =
  await resend.emails.send(
    {
      from:
        "Trader Run Academy <no-reply@traderrun.com>",

      to:
        email,

      replyTo:
        "soporte@traderrun.com",

      subject:
        welcomeEmail.subject,

      html:
        welcomeEmail.html,
    },
    {
      idempotencyKey:
        `academy-welcome/${session.id}`,
    }
  )

  if (emailError) {
    console.error(
      "❌ Error enviando email de bienvenida:",
      emailError
    )

    return new Response(
      "Error enviando email de bienvenida",
      { status: 500 }
    )
  }

  const {
    error: markEmailError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .update({
        welcome_email_sent_at:
          new Date().toISOString(),
      })
      .eq(
        "stripe_session_id",
        session.id
      )

  if (markEmailError) {
    console.error(
      "❌ Email enviado pero no se pudo registrar el envío:",
      markEmailError
    )

    return new Response(
      "Error registrando email de bienvenida",
      { status: 500 }
    )
  }

  console.log(
    "✅ Email de bienvenida enviado:",
    {
      email,
      resendId: emailData?.id,
    }
  )
} else {
  console.log(
    "ℹ️ Email de bienvenida ya enviado anteriormente:",
    session.id
  )
}
  }

/*
 * PROCESAR REEMBOLSOS
 */

if (event.type === "charge.refunded") {
  const charge =
    event.data.object as Stripe.Charge

  const paymentIntentId =
    typeof charge.payment_intent === "string"
      ? charge.payment_intent
      : charge.payment_intent?.id ?? null

  if (!paymentIntentId) {
    console.error(
      "Reembolso sin payment_intent:",
      charge.id
    )

    return new Response("ok", {
      status: 200,
    })
  }

   const {
    data: purchase,
    error: purchaseError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .select(
        "id, user_id, amount_total, stripe_session_id"
      )
      .eq(
        "stripe_payment_intent_id",
        paymentIntentId
      )
      .maybeSingle()

  if (purchaseError) {
    console.error(
      "Error buscando compra para reembolso:",
      purchaseError
    )

    return new Response(
      "Error buscando compra",
      { status: 500 }
    )
  }

  if (!purchase) {
    console.log(
      "Reembolso sin compra Academy asociada:",
      paymentIntentId
    )

    return new Response("ok", {
      status: 200,
    })
  }


  const isFullRefund =
    charge.amount_refunded >=
    purchase.amount_total

  const {
    error: refundUpdateError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .update({
        refunded_at:
          new Date().toISOString(),

        refund_amount:
          charge.amount_refunded,

        refund_status:
          isFullRefund
            ? "full"
            : "partial",
      })
      .eq(
        "id",
        purchase.id
      )

  if (refundUpdateError) {
    console.error(
      "Error registrando reembolso:",
      refundUpdateError
    )

    return new Response(
      "Error registrando reembolso",
      { status: 500 }
    )
  }


  if (!isFullRefund) {
    console.log(
      "Reembolso parcial registrado. Se mantiene acceso Academy:",
      {
        sessionId:
          purchase.stripe_session_id,
        amountRefunded:
          charge.amount_refunded,
        amountTotal:
          purchase.amount_total,
      }
    )

    return new Response("ok", {
      status: 200,
    })
  }

  if (!purchase.user_id) {
    console.error(
      "Reembolso total sin user_id asociado:",
      purchase.stripe_session_id
    )

    return new Response(
      "Compra sin usuario asociado",
      { status: 500 }
    )
  }

  /*
   * COMPROBAR SI EL USUARIO TIENE
   * OTRA COMPRA VÁLIDA DE ACADEMY
   */

  const {
    data: otherValidPurchases,
    error: otherPurchasesError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .select("id")
      .eq(
        "user_id",
        purchase.user_id
      )
      .eq(
        "payment_status",
        "paid"
      )
      .neq(
        "id",
        purchase.id
      )
      .or(
        "refund_status.is.null,refund_status.neq.full"
      )
      .limit(1)

  if (otherPurchasesError) {
    console.error(
      "Error comprobando otras compras Academy:",
      otherPurchasesError
    )

    return new Response(
      "Error comprobando otras compras",
      { status: 500 }
    )
  }

  if (
    otherValidPurchases &&
    otherValidPurchases.length > 0
  ) {
    console.log(
      "Reembolso total registrado, pero se mantiene acceso Academy porque existe otra compra válida:",
      {
        userId:
          purchase.user_id,
        refundedSessionId:
          purchase.stripe_session_id,
      }
    )

    return new Response("ok", {
      status: 200,
    })
  }

  const {
    error: revokeAccessError,
  } =
    await supabaseAdmin
      .from("user_products")
      .update({
        active: false,
      })
      .eq(
        "user_id",
        purchase.user_id
      )
      .eq(
        "product_id",
        ACADEMY_PRODUCT_ID
      )

  if (revokeAccessError) {
    console.error(
      "Error retirando acceso Academy:",
      revokeAccessError
    )

    return new Response(
      "Error retirando acceso Academy",
      { status: 500 }
    )
  }

  console.log(
    "Reembolso total procesado. Acceso Academy retirado:",
    {
      userId:
        purchase.user_id,
      sessionId:
        purchase.stripe_session_id,
      paymentIntentId,
      amountRefunded:
        charge.amount_refunded,
    }
  )

  return new Response("ok", {
    status: 200,
  })
}


/*
 * PARA CUALQUIER OTRO EVENTO DE STRIPE
 * RESPONDEMOS 200 SIN HACER NADA
 */

return new Response("ok", {
  status: 200,
})
}