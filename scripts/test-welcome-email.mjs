import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const emailDestino = process.argv[2]

if (!emailDestino) {
  console.error(
    '❌ Indica un email: node --env-file=.env.local scripts/test-welcome-email.mjs "tu@email.com"'
  )
  process.exit(1)
}

const { data, error } = await resend.emails.send({
  from: "Trader Run Academy <no-reply@traderrun.com>",
  to: emailDestino,
  replyTo: "soporte@traderrun.com",
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
          Gracias por confiar en Trader Run y formar parte de la Academy.
        </p>

        <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#c5d1c9;">
          A partir de ahora tendrás acceso a la formación de Trader Run Academy y podrás avanzar por los módulos a tu ritmo.
        </p>

        <p style="margin:0 0 28px;font-size:16px;line-height:1.7;color:#c5d1c9;">
          Te recomendamos seguir la formación en orden, sin prisas. Revisa cada módulo las veces que necesites, toma notas y practica los conceptos antes de avanzar al siguiente.
        </p>

        <div style="background:#102319;border:1px solid #21442f;border-radius:12px;padding:22px;margin:0 0 28px;">
          <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
            Tus 2 meses de acompañamiento
          </div>

          <p style="margin:0;font-size:15px;line-height:1.7;color:#b9c8be;">
            Durante los próximos 2 meses tendrás soporte para resolver dudas relacionadas con la formación y ayudarte durante tu proceso de aprendizaje.
          </p>
        </div>

        <p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:#c5d1c9;">
          Puedes contactar con nosotros en:
        </p>

        <p style="margin:0 0 28px;font-size:16px;font-weight:700;">
          <a href="mailto:soporte@traderrun.com" style="color:#35d06f;text-decoration:none;">
            soporte@traderrun.com
          </a>
        </p>

        <p style="margin:0 0 28px;font-size:14px;line-height:1.7;color:#8fa098;">
          Para que podamos ayudarte mejor, intenta explicar tu duda con el mayor detalle posible y adjunta capturas de pantalla cuando sean útiles.
        </p>

        <div style="border-top:1px solid #24372c;padding-top:24px;margin-top:24px;">
          <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
            Indicador Trader Run
          </div>

          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#b9c8be;">
            Tu acceso al indicador de Trader Run para TradingView está incluido con la Academy. Revisaremos el usuario de TradingView que indicaste durante la compra para gestionar tu acceso.
          </p>
        </div>

        <div style="border-top:1px solid #24372c;padding-top:24px;margin-top:10px;">
          <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#c5d1c9;">
            El objetivo de Trader Run Academy es que aprendas a comprender y aplicar el método por ti mismo, no que dependas de copiar operaciones.
          </p>

          <p style="margin:0;font-size:13px;line-height:1.7;color:#7f9186;">
            El trading conlleva riesgo y puede producir pérdidas. La formación tiene carácter educativo y no constituye asesoramiento financiero ni garantiza resultados.
          </p>
        </div>

        <p style="margin:30px 0 0;font-size:15px;font-weight:700;color:#ffffff;">
          Equipo Trader Run
        </p>

      </div>
    </div>
  `,
})

if (error) {
  console.error("❌ Error enviando email:", error)
  process.exit(1)
}

console.log("✅ Email de bienvenida enviado correctamente")
console.log("Resend ID:", data?.id)