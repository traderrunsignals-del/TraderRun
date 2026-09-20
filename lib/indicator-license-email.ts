type InternalLicenseSignedEmailParams = {
  name: string
  email: string
  tradingViewUser: string
  signedAt: Date
  licenseId: string
}

function formatSignedAt(
  signedAt: Date
) {
  return new Intl.DateTimeFormat(
    "es-ES",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Madrid",
    }
  ).format(signedAt)
}

export function buildInternalLicenseSignedEmail({
  name,
  email,
  tradingViewUser,
  signedAt,
  licenseId,
}: InternalLicenseSignedEmailParams) {
  const formattedSignedAt =
    formatSignedAt(signedAt)

  return {
    subject:
      `Licencia firmada — ${tradingViewUser}`,

    html: `
      <div style="margin:0;padding:40px 20px;background:#07110c;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <div style="max-width:600px;margin:0 auto;background:#0d1a13;border:1px solid #1d3326;border-radius:16px;padding:40px;">

          <div style="font-size:13px;font-weight:700;letter-spacing:2px;color:#35d06f;margin-bottom:14px;">
            TRADER RUN ACADEMY
          </div>

          <h1 style="margin:0 0 20px;font-size:26px;line-height:1.2;color:#ffffff;">
            Nueva licencia firmada
          </h1>

          <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#c5d1c9;">
            Un alumno ha completado correctamente la firma
            de la licencia de uso del Indicador Trader Run.
          </p>

          <div style="background:#102319;border:1px solid #21442f;border-radius:12px;padding:22px;margin:0 0 24px;">

            <p style="margin:0 0 6px;font-size:13px;color:#8fa098;">
              Nombre
            </p>
            <p style="margin:0 0 18px;font-size:16px;color:#ffffff;">
              ${name}
            </p>

            <p style="margin:0 0 6px;font-size:13px;color:#8fa098;">
              Email
            </p>
            <p style="margin:0 0 18px;font-size:16px;color:#ffffff;">
              ${email}
            </p>

            <p style="margin:0 0 6px;font-size:13px;color:#8fa098;">
              Usuario de TradingView
            </p>
            <p style="margin:0 0 18px;font-size:18px;font-weight:700;color:#35d06f;">
              ${tradingViewUser}
            </p>

            <p style="margin:0 0 6px;font-size:13px;color:#8fa098;">
              Fecha de firma
            </p>
            <p style="margin:0 0 18px;font-size:16px;color:#ffffff;">
              ${formattedSignedAt}
            </p>

            <p style="margin:0 0 6px;font-size:13px;color:#8fa098;">
              Referencia de licencia
            </p>
            <p style="margin:0;font-size:13px;color:#b9c8be;word-break:break-all;">
              ${licenseId}
            </p>

          </div>

          <p style="margin:0;font-size:15px;line-height:1.7;color:#c5d1c9;">
            El contrato firmado se encuentra adjunto a este correo
            en formato PDF para su archivo.
          </p>

        </div>
      </div>
    `,
  }
}