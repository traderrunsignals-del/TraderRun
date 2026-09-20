import { NextResponse } from "next/server"
import { Resend } from "resend"

import { supabaseAdmin } from "@/lib/supabase-admin"

import {
  INDICATOR_LICENSE_VERSION,
} from "@/lib/indicator-license"

import {
  generateIndicatorLicensePdf,
} from "@/lib/indicator-license-document"

import {
  buildInternalLicenseSignedEmail,
} from "@/lib/indicator-license-email"

const resend = new Resend(
  process.env.RESEND_API_KEY as string
)

type RouteContext = {
  params: Promise<{
    token: string
  }>
}

/*
 * ============================================================
 * GET
 * CONSULTAR LICENCIA
 * ============================================================
 */

export async function GET(
  _request: Request,
  context: RouteContext
) {
  const { token } = await context.params

  if (!token) {
    return NextResponse.json(
      {
        error: "Token no válido",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * BUSCAR LICENCIA
   */

  const {
    data: license,
    error: licenseError,
  } =
    await supabaseAdmin
      .from("indicator_licenses")
      .select(
        `
          id,
          purchase_id,
          status,
          contract_version,
          signed_at
        `
      )
      .eq(
        "signing_token",
        token
      )
      .maybeSingle()

  if (licenseError) {
    console.error(
      "❌ Error buscando licencia del indicador:",
      licenseError
    )

    return NextResponse.json(
      {
        error: "Error comprobando la licencia",
      },
      {
        status: 500,
      }
    )
  }

  if (!license) {
    return NextResponse.json(
      {
        error: "Licencia no encontrada",
      },
      {
        status: 404,
      }
    )
  }

  /*
   * BUSCAR COMPRA
   */

  const {
    data: purchase,
    error: purchaseError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .select(
        `
          name,
          email,
          tradingview_user,
          payment_status,
          refund_status
        `
      )
      .eq(
        "id",
        license.purchase_id
      )
      .maybeSingle()

  if (purchaseError) {
    console.error(
      "❌ Error buscando compra de la licencia:",
      purchaseError
    )

    return NextResponse.json(
      {
        error: "Error comprobando la compra",
      },
      {
        status: 500,
      }
    )
  }

  if (!purchase) {
    return NextResponse.json(
      {
        error: "Compra no encontrada",
      },
      {
        status: 404,
      }
    )
  }

  /*
   * COMPROBAR COMPRA ACTIVA
   */

  if (
    purchase.payment_status !== "paid" ||
    purchase.refund_status === "full"
  ) {
    return NextResponse.json(
      {
        error: "La compra asociada no está activa",
      },
      {
        status: 403,
      }
    )
  }

  /*
   * RESPUESTA
   */

  return NextResponse.json({
    license: {
      status:
        license.status,

      contractVersion:
        license.contract_version,

      signedAt:
        license.signed_at,

      customer: {
        name:
          purchase.name,

        email:
          purchase.email,

        tradingViewUser:
          purchase.tradingview_user,
      },
    },
  })
}

/*
 * ============================================================
 * POST
 * FIRMAR LICENCIA
 * ============================================================
 */

export async function POST(
  request: Request,
  context: RouteContext
) {
  const { token } = await context.params

  /*
   * VALIDAR TOKEN
   */

  if (!token) {
    return NextResponse.json(
      {
        error: "Token no válido",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * LEER DATOS RECIBIDOS
   */

  let body: {
    documentType?: unknown
    documentNumber?: unknown
    identityConfirmed?: unknown
    contractAccepted?: unknown
    personalLicenseAccepted?: unknown
    contractVersion?: unknown
    signatureData?: unknown
  }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      {
        error: "Datos no válidos",
      },
      {
        status: 400,
      }
    )
  }

  const {
    documentType,
    documentNumber,
    identityConfirmed,
    contractAccepted,
    personalLicenseAccepted,
    contractVersion,
    signatureData,
  } = body

  /*
   * VALIDAR DOCUMENTO
   */

  if (
    documentType !== "dni" &&
    documentType !== "nie" &&
    documentType !== "passport"
  ) {
    return NextResponse.json(
      {
        error: "Tipo de documento no válido",
      },
      {
        status: 400,
      }
    )
  }

  if (
    typeof documentNumber !== "string" ||
    documentNumber.trim().length < 3 ||
    documentNumber.trim().length > 30
  ) {
    return NextResponse.json(
      {
        error: "Número de documento no válido",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * VALIDAR ACEPTACIONES
   */

  if (
    identityConfirmed !== true ||
    contractAccepted !== true ||
    personalLicenseAccepted !== true
  ) {
    return NextResponse.json(
      {
        error:
          "Debes aceptar todas las declaraciones de la licencia",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * VALIDAR VERSIÓN CONTRACTUAL
   */

  if (
    contractVersion !==
    INDICATOR_LICENSE_VERSION
  ) {
    return NextResponse.json(
      {
        error:
          "La versión del contrato no es válida",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * VALIDAR FIRMA
   */

  if (
    typeof signatureData !== "string" ||
    !signatureData.startsWith(
      "data:image/png;base64,"
    ) ||
    signatureData.length < 100 ||
    signatureData.length > 1_000_000
  ) {
    return NextResponse.json(
      {
        error: "Firma no válida",
      },
      {
        status: 400,
      }
    )
  }

  /*
   * BUSCAR LICENCIA
   */

  const {
    data: license,
    error: licenseError,
  } =
    await supabaseAdmin
      .from("indicator_licenses")
      .select(
        `
          id,
          purchase_id,
          status,
          contract_version
        `
      )
      .eq(
        "signing_token",
        token
      )
      .maybeSingle()

  if (licenseError) {
    console.error(
      "❌ Error buscando licencia para firma:",
      licenseError
    )

    return NextResponse.json(
      {
        error:
          "Error comprobando la licencia",
      },
      {
        status: 500,
      }
    )
  }

  if (!license) {
    return NextResponse.json(
      {
        error: "Licencia no encontrada",
      },
      {
        status: 404,
      }
    )
  }

  /*
   * COMPROBAR ESTADO
   */

  if (license.status === "signed") {
    return NextResponse.json(
      {
        error:
          "Esta licencia ya ha sido firmada",
      },
      {
        status: 409,
      }
    )
  }

  if (license.status !== "pending") {
    return NextResponse.json(
      {
        error:
          "Esta licencia no puede firmarse",
      },
      {
        status: 403,
      }
    )
  }

  /*
   * COMPROBAR VERSIÓN GUARDADA
   */

  if (
    license.contract_version !==
    INDICATOR_LICENSE_VERSION
  ) {
    return NextResponse.json(
      {
        error:
          "La versión de la licencia no coincide",
      },
      {
        status: 409,
      }
    )
  }

  /*
   * COMPROBAR COMPRA
   */

  const {
    data: purchase,
    error: purchaseError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .select(
  `
    name,
    email,
    tradingview_user,
    payment_status,
    refund_status
  `
)
      .eq(
        "id",
        license.purchase_id
      )
      .maybeSingle()

  if (purchaseError) {
    console.error(
      "❌ Error comprobando compra antes de firmar:",
      purchaseError
    )

    return NextResponse.json(
      {
        error:
          "Error comprobando la compra",
      },
      {
        status: 500,
      }
    )
  }

  if (!purchase) {
    return NextResponse.json(
      {
        error: "Compra no encontrada",
      },
      {
        status: 404,
      }
    )
  }

  /*
   * COMPROBAR COMPRA ACTIVA
   */

  if (
    purchase.payment_status !== "paid" ||
    purchase.refund_status === "full"
  ) {
    return NextResponse.json(
      {
        error:
          "La compra asociada no está activa",
      },
      {
        status: 403,
      }
    )
  }

  /*
   * GUARDAR FIRMA
   */

  const signedAt =
    new Date().toISOString()

  const {
    data: signedLicense,
    error: updateError,
  } =
    await supabaseAdmin
      .from("indicator_licenses")
      .update({
        document_type:
          documentType,

        document_number:
          documentNumber
            .trim()
            .toUpperCase(),

        identity_confirmed:
          true,

        contract_accepted:
          true,

        personal_license_accepted:
          true,

        signature_data:
          signatureData,

        signed_at:
          signedAt,

        status:
          "signed",

        updated_at:
          signedAt,
      })
      .eq(
        "id",
        license.id
      )
      .eq(
        "status",
        "pending"
      )
      .select(
        `
          id,
          status,
          signed_at,
          contract_version
        `
      )
      .maybeSingle()

  if (updateError) {
    console.error(
      "❌ Error guardando firma de licencia:",
      updateError
    )

    return NextResponse.json(
      {
        error:
          "No se pudo guardar la firma",
      },
      {
        status: 500,
      }
    )
  }

  if (!signedLicense) {
    return NextResponse.json(
      {
        error:
          "La licencia ya no estaba disponible para firma",
      },
      {
        status: 409,
      }
    )
  }

/*
 * ============================================================
 * GENERAR PDF FIRMADO
 * ============================================================
 */

let signedPdf: Uint8Array | null =
  null

try {
  signedPdf =
    await generateIndicatorLicensePdf({
      licenseId:
        signedLicense.id,

      name:
        purchase.name,

      email:
        purchase.email,

      tradingViewUser:
        purchase.tradingview_user,

      documentType,

      documentNumber:
        documentNumber
          .trim()
          .toUpperCase(),

      signedAt:
        new Date(
          signedLicense.signed_at
        ),

      signatureData,
    })

  console.log(
    "✅ PDF de licencia generado:",
    signedLicense.id
  )
} catch (error) {
  console.error(
    "❌ Error generando PDF de licencia:",
    error
  )
}

/*
 * ============================================================
 * ENVIAR CONTRATO FIRMADO A TRADER RUN
 * ============================================================
 */

if (signedPdf) {
  try {
    const internalEmail =
      buildInternalLicenseSignedEmail({
        name:
          purchase.name,

        email:
          purchase.email,

        tradingViewUser:
          purchase.tradingview_user,

        signedAt:
          new Date(
            signedLicense.signed_at
          ),

        licenseId:
          signedLicense.id,
      })

    const {
      error: internalEmailError,
    } =
      await resend.emails.send(
        {
          from:
            "Trader Run Academy <no-reply@traderrun.com>",

          to:
            "soporte@traderrun.com",

          replyTo:
            purchase.email,

          subject:
            internalEmail.subject,

          html:
            internalEmail.html,

          attachments: [
            {
              filename:
                `licencia-indicador-${signedLicense.id}.pdf`,

              content:
                Buffer.from(
                  signedPdf
                ),
            },
          ],
        },
        {
          idempotencyKey:
            `indicator-license-signed/${signedLicense.id}`,
        }
      )

    if (internalEmailError) {
      console.error(
        "❌ Error enviando licencia firmada a Trader Run:",
        internalEmailError
      )
    } else {
      console.log(
        "✅ Licencia firmada enviada a Trader Run:",
        signedLicense.id
      )
    }
  } catch (error) {
    console.error(
      "❌ Error preparando envío de licencia firmada:",
      error
    )
  }
}

  /*
   * RESPUESTA
   */

  return NextResponse.json({
    success: true,

    license: {
      status:
        signedLicense.status,

      signedAt:
        signedLicense.signed_at,

      contractVersion:
        signedLicense.contract_version,
    },
  })
}