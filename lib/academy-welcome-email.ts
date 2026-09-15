type AcademyWelcomeEmailParams = {
  name: string
  supportUntil: Date
}

export function buildAcademyWelcomeEmail({
  name,
  supportUntil,
}: AcademyWelcomeEmailParams) {
  const formattedSupportUntil =
    new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Madrid",
    }).format(supportUntil)

  return {
    subject: "Bienvenido/a a Trader Run Academy",

    html: `
      <div style="margin:0;padding:40px 20px;background:#07110c;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
        <div style="max-width:600px;margin:0 auto;background:#0d1a13;border:1px solid #1d3326;border-radius:16px;padding:40px;">

          <div style="font-size:13px;font-weight:700;letter-spacing:2px;color:#35d06f;margin-bottom:14px;">
            TRADER RUN ACADEMY
          </div>

          <h1 style="margin:0 0 20px;font-size:28px;line-height:1.2;color:#ffffff;">
            Bienvenido/a a Trader Run Academy
          </h1>

          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#c5d1c9;">
            Hola ${name},
          </p>

          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#c5d1c9;">
            Gracias por confiar en Trader Run y formar parte de la Academy.
          </p>

          <p style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#c5d1c9;">
            A partir de ahora tendrás acceso a la formación de Trader Run Academy.
            Te recomendamos avanzar por los módulos en orden y a tu ritmo.
            Revisa cada lección las veces que necesites, toma notas y practica
            los conceptos antes de continuar.
          </p>

          <div style="background:#102319;border:1px solid #21442f;border-radius:12px;padding:22px;margin:0 0 28px;">
            <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
              Tus 2 meses de acompañamiento
            </div>

            <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#b9c8be;">
              Durante este periodo podrás consultarnos las dudas relacionadas
              con la formación y con la aplicación del método.
            </p>

            <p style="margin:0;font-size:15px;line-height:1.7;color:#ffffff;">
              Tu periodo de soporte estará disponible hasta el
              <strong>${formattedSupportUntil}</strong>.
            </p>
          </div>

          <p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:#c5d1c9;">
            Para cualquier consulta relacionada con la Academy puedes escribirnos a:
          </p>

          <p style="margin:0 0 16px;font-size:16px;font-weight:700;">
            <a href="mailto:soporte@traderrun.com" style="color:#35d06f;text-decoration:none;">
              soporte@traderrun.com
            </a>
          </p>

          <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#8fa098;">
            Para que podamos ayudarte mejor, explica tu duda con el mayor
            detalle posible y adjunta capturas de pantalla cuando sean útiles.
          </p>

          <div style="border-top:1px solid #24372c;padding-top:24px;">
            <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
              Indicador Trader Run
            </div>

            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#b9c8be;">
              Tu acceso al indicador Trader Run para TradingView está incluido
              con la Academy. Revisaremos el usuario de TradingView que
              indicaste durante la compra para gestionar tu acceso.
            </p>
          </div>

          <div style="border-top:1px solid #24372c;padding-top:24px;">
            <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#c5d1c9;">
              El objetivo de Trader Run Academy es que aprendas a comprender
              y aplicar el método por ti mismo, no que dependas de copiar operaciones.
            </p>

            <p style="margin:0;font-size:13px;line-height:1.7;color:#7f9186;">
              El trading conlleva riesgo y puede producir pérdidas.
              La formación tiene carácter educativo y no constituye
              asesoramiento financiero ni garantiza resultados.
            </p>
          </div>

          <p style="margin:30px 0 0;font-size:15px;font-weight:700;color:#ffffff;">
            Equipo Trader Run
          </p>

        </div>
      </div>
    `,
  }
}