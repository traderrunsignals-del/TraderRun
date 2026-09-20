type AcademyWelcomeEmailParams = {
  name: string
  supportUntil: Date
  indicatorLicenseUrl: string
}

 export function buildAcademyWelcomeEmail({
  name,
  supportUntil,
  indicatorLicenseUrl,
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

          <p style="margin:0 0 16px;font-size:16px;line-height:1.7;color:#c5d1c9;">
  Tu compra del curso de Oferta y Demanda se ha completado correctamente.
  El curso incluye 3 meses de acceso a la formación, 2 meses de
  acompañamiento y el acceso al Indicador Trader Run para TradingView.
</p>

<div style="background:#102319;border:1px solid #21442f;border-radius:12px;padding:22px;margin:0 0 28px;">
  <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
    Tus 3 meses de acceso al curso
  </div>

  <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#b9c8be;">
    El periodo de 3 meses no comienza con la compra. Empezará cuando
    actives por primera vez tu acceso a Trader Run Academy.
  </p>

  <p style="margin:0;font-size:15px;line-height:1.7;color:#ffffff;">
    Recuerda realizar esa primera activación dentro de los
<strong>30 días naturales siguientes a la fecha de compra</strong>.
  </p>
</div>

          <div style="background:#102319;border:1px solid #21442f;border-radius:12px;padding:22px;margin:0 0 28px;">
            <div style="font-size:17px;font-weight:700;color:#ffffff;margin-bottom:10px;">
              Tus 2 meses de acompañamiento
            </div>

            <p style="margin:0 0 12px;font-size:15px;line-height:1.7;color:#b9c8be;">
  El periodo de acompañamiento comienza desde la fecha de compra
  y tiene una duración de 2 meses. Durante este tiempo podrás
  consultarnos las dudas relacionadas con la formación y con la
  aplicación del método.
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

  <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#b9c8be;">
    El Indicador Trader Run para TradingView está incluido con tu
    compra del curso de Oferta y Demanda.
  </p>

  <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#ffffff;">
    Para gestionar tu acceso al indicador, primero debes completar
    y firmar tu licencia personal de uso.
  </p>

  <div style="margin:0 0 20px;">
    <a
      href="${indicatorLicenseUrl}"
      style="display:inline-block;background:#35d06f;color:#07110c;text-decoration:none;font-size:15px;font-weight:700;padding:14px 22px;border-radius:10px;"
    >
      Firmar licencia del indicador
    </a>
  </div>

  <p style="margin:0 0 24px;font-size:13px;line-height:1.7;color:#8fa098;">
    Este enlace es personal. No lo compartas con terceros.
  </p>

  <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#b9c8be;">
    Una vez completada la firma, podremos gestionar el acceso para
    el usuario de TradingView indicado durante la compra. Una vez
    concedido, el acceso al indicador no tiene una fecha de
    caducidad predeterminada.
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