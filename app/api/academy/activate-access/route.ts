import { NextResponse } from "next/server"
import { createSupabaseServerClient } from "@/lib/supabase-server"
import { supabaseAdmin } from "@/lib/supabase-admin"

const ACADEMY_PRODUCT_ID =
  "6fe51583-a729-41ac-89e4-e2c1e69a62db"

export async function POST() {
  try {
    /*
     * IDENTIFICAR AL USUARIO AUTENTICADO
     */

    const supabase =
      await createSupabaseServerClient()

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json(
        {
          error: "Usuario no autenticado",
        },
        { status: 401 }
      )
    }

    /*
     * BUSCAR SU ACCESO A ACADEMY
     */

    const {
      data: access,
      error: accessError,
    } = await supabaseAdmin
      .from("user_products")
      .select("id, expires_at, active")
      .eq("user_id", user.id)
      .eq("product_id", ACADEMY_PRODUCT_ID)
      .maybeSingle()

    if (accessError) {
      console.error(
        "Error buscando acceso Academy:",
        accessError
      )

      return NextResponse.json(
        {
          error: "No se ha podido comprobar el acceso",
        },
        { status: 500 }
      )
    }

    if (!access) {
      return NextResponse.json(
        {
          error: "No existe acceso a Academy",
        },
        { status: 403 }
      )
    }

    /*
     * SI YA TIENE FECHA DE CADUCIDAD,
     * NO REINICIAR LOS 3 MESES
     */

    if (access.expires_at) {
      return NextResponse.json({
        success: true,
        alreadyActivated: true,
        expiresAt: access.expires_at,
      })
    }

    /*
     * CALCULAR 3 MESES DESDE LA ACTIVACIÓN
     */

    const activatedAt = new Date()

    const expiresAt =
      new Date(activatedAt)

    expiresAt.setUTCMonth(
      expiresAt.getUTCMonth() + 3
    )

    /*
     * ACTIVAR EL PERIODO DE ACCESO
     *
     * El filtro expires_at IS NULL evita que
     * dos peticiones simultáneas puedan
     * reiniciar el periodo.
     */

    const {
      data: updatedAccess,
      error: updateError,
    } = await supabaseAdmin
      .from("user_products")
      .update({
        active: true,
        expires_at: expiresAt.toISOString(),
      })
      .eq("id", access.id)
      .is("expires_at", null)
      .select("expires_at")
      .maybeSingle()

    if (updateError) {
      console.error(
        "Error activando periodo Academy:",
        updateError
      )

      return NextResponse.json(
        {
          error: "No se ha podido activar el acceso",
        },
        { status: 500 }
      )
    }

    /*
     * Si otra petición lo activó justo antes,
     * recuperamos la fecha ya guardada.
     */

    if (!updatedAccess) {
      const {
        data: currentAccess,
        error: currentAccessError,
      } = await supabaseAdmin
        .from("user_products")
        .select("expires_at")
        .eq("id", access.id)
        .single()

      if (
        currentAccessError ||
        !currentAccess?.expires_at
      ) {
        console.error(
          "No se ha podido recuperar la fecha de acceso:",
          currentAccessError
        )

        return NextResponse.json(
          {
            error: "No se ha podido confirmar la activación",
          },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        alreadyActivated: true,
        expiresAt: currentAccess.expires_at,
      })
    }

    return NextResponse.json({
      success: true,
      alreadyActivated: false,
      expiresAt: updatedAccess.expires_at,
    })
  } catch (error) {
    console.error(
      "Error inesperado activando acceso Academy:",
      error
    )

    return NextResponse.json(
      {
        error: "Error interno del servidor",
      },
      { status: 500 }
    )
  }
}