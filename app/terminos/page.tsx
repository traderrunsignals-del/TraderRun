import Link from "next/link"

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <Link
          href="/"
          className="mb-10 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver a Trader Run
        </Link>

        <header className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Información contractual
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Términos y Condiciones
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Última actualización: septiembre de 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Objeto y ámbito de aplicación
            </h2>

            <p>
              Los presentes Términos y Condiciones regulan el acceso,
              contratación y utilización de los productos y servicios
              ofrecidos bajo la marca Trader Run a través de traderrun.com y
              de los canales asociados al servicio.
            </p>

            <p className="mt-3">
              Trader Run ofrece contenidos de carácter educativo e
              informativo relacionados con trading, mercados financieros,
              análisis técnico, gestión del riesgo y materias relacionadas.
            </p>

            <p className="mt-3">
              Entre los servicios ofrecidos pueden encontrarse Trader Run VIP,
              Trader Run Academy, cursos de formación, herramientas e
              indicadores de análisis técnico y otros productos o servicios
              que se indiquen expresamente en la web.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Requisitos de contratación
            </h2>

            <p>
              Para contratar los servicios de Trader Run, el usuario deberá
              tener capacidad legal suficiente para contratar y facilitar
              información veraz, completa y actualizada durante el proceso de
              compra o registro.
            </p>

            <p className="mt-3">
              Cuando sea necesario crear una cuenta o facilitar datos de acceso
              a servicios externos, el usuario será responsable de mantener la
              confidencialidad de sus credenciales y de no permitir su uso por
              terceros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Trader Run VIP
            </h2>

            <p>
              Trader Run VIP es un servicio de suscripción mensual que da
              acceso, mientras la suscripción permanezca activa, al grupo
              privado de Telegram y a los contenidos y servicios VIP
              anunciados en la web.
            </p>

            <p className="mt-3">
              El servicio puede incluir, entre otros contenidos, análisis
              diarios de Nasdaq y S&amp;P, señales con niveles de entrada,
              stop loss y objetivos, seguimiento de operaciones, contenido
              sobre cartera de acciones, psicotrading, planificación y acceso
              a la comunidad privada.
            </p>

            <p className="mt-3">
              El precio actual de Trader Run VIP es de{" "}
              <strong className="text-foreground">49,95 € al mes</strong>,
              salvo que en el momento de contratación se muestre expresamente
              otra oferta o condición.
            </p>

            <p className="mt-3">
              La contratación de Trader Run VIP implica una suscripción con
              renovación mensual. El importe correspondiente se cobrará
              mediante el método de pago utilizado durante la contratación.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Cancelación de Trader Run VIP
            </h2>

            <p>
              El usuario puede solicitar la cancelación de su suscripción a
              Trader Run VIP en cualquier momento escribiendo a{" "}
              <strong className="text-foreground">
                traderrunsignals@gmail.com
              </strong>
              .
            </p>

            <p className="mt-3">
              Una vez tramitada la cancelación, no se efectuarán nuevas
              renovaciones. El usuario conservará el acceso correspondiente al
              periodo que ya hubiera sido abonado hasta la finalización de
              dicho periodo.
            </p>

            <p className="mt-3">
              Si una nueva mensualidad ya hubiera sido cobrada antes de
              tramitarse la solicitud de cancelación, la cancelación tendrá
              efectos sobre la siguiente renovación y el acceso continuará
              durante el periodo ya abonado, sin perjuicio de los derechos que
              legalmente correspondan al consumidor.
            </p>

            <p className="mt-3">
              Al finalizar el último periodo abonado, el usuario dejará de
              tener derecho de acceso a los servicios exclusivos de Trader Run
              VIP y podrá ser retirado del grupo privado correspondiente.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Renovaciones y pagos fallidos de Trader Run VIP
            </h2>

            <p>
              Si no pudiera procesarse correctamente una renovación, Trader
              Run podrá comunicar al usuario la incidencia para que pueda
              revisar o actualizar su método de pago.
            </p>

            <p className="mt-3">
              Actualmente, el sistema contempla un periodo de gracia de hasta
              48 horas tras un pago de renovación fallido. Durante ese periodo
              podrá mantenerse temporalmente el acceso mientras se intenta
              resolver la incidencia.
            </p>

            <p className="mt-3">
              Si el pago no se regulariza dentro del periodo aplicable, el
              acceso a Trader Run VIP podrá ser suspendido o finalizado.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Trader Run Academy
            </h2>

            <p>
              Trader Run Academy es el espacio formativo de Trader Run y puede
              albergar diferentes cursos, programas y contenidos educativos.
              La contratación de un curso concreto no implica el acceso
              automático a todos los cursos presentes o futuros de Trader Run
              Academy.
            </p>

            <p className="mt-3">
              Las características, precio, duración y elementos incluidos en
              cada formación serán los indicados durante su proceso de
              contratación.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Curso de Oferta y Demanda
            </h2>

            <p>
              El Curso de Oferta y Demanda disponible actualmente en Trader
              Run Academy está compuesto por 10 módulos formativos y desarrolla
              la metodología de Trader Run basada, entre otros elementos, en
              oferta y demanda, estructura de mercado, gestión del riesgo y
              aplicación práctica de la estrategia.
            </p>

            <p className="mt-3">
              El precio de lanzamiento del curso es de{" "}
              <strong className="text-foreground">825 €</strong>, mediante un
              único pago, mientras dicha oferta permanezca disponible.
            </p>

            <p className="mt-3">
              El precio mostrado en la página de contratación en el momento de
              realizar la compra será el precio aplicable al contrato.
            </p>

            <p className="mt-3">
             La compra incluye los elementos que se indiquen expresamente en
la oferta y, en las condiciones actuales del curso, comprende el
acceso a los 10 módulos, el Indicador Trader Run asociado al
curso, dos meses de soporte y acompañamiento y el acceso durante
dicho periodo al grupo privado de Telegram, en el que podrán
compartirse ejemplos prácticos relacionados con la formación.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Activación y duración del acceso al curso
            </h2>

            <p>
              Tras la compra, el usuario dispondrá de un plazo máximo de{" "}
              <strong className="text-foreground">30 días naturales</strong>{" "}
              desde la fecha de compra para realizar la primera activación de
              su acceso a Trader Run Academy.
            </p>

            <p className="mt-3">
              Una vez realizada correctamente la primera activación, comenzará
              el periodo de acceso al Curso de Oferta y Demanda, que tendrá una
              duración de{" "}
              <strong className="text-foreground">3 meses</strong>.
            </p>

            <p className="mt-3">
              El plazo de tres meses se computará desde esa primera activación,
              independientemente de que el comprador ya dispusiera previamente
              de una cuenta de usuario en los sistemas de Trader Run.
            </p>

            <p className="mt-3">
              Si el usuario no realiza la activación dentro de los 30 días
              naturales posteriores a la compra, el enlace o derecho de
              activación podrá quedar vencido. Esta limitación no afectará a
              los derechos imperativos que correspondan al consumidor conforme
              a la legislación aplicable.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Soporte incluido con el curso
            </h2>

            <p>
              La compra del Curso de Oferta y Demanda incluye{" "}
              <strong className="text-foreground">
                2 meses de soporte y acompañamiento
              </strong>
              .
            </p>

            <p className="mt-3">
              Este periodo comienza en la fecha de compra, y no en la fecha de
              activación del curso. Por tanto, retrasar voluntariamente la
              activación de Academy no amplía ni desplaza el periodo de
              soporte.
            </p>

            <p className="mt-3">
              Para cuestiones relacionadas con Trader Run Academy, el usuario
              podrá contactar a través de{" "}
              <strong className="text-foreground">
                soporte@traderrun.com
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              10. Indicador Trader Run
            </h2>

            <p>
              La compra del Curso de Oferta y Demanda incluye, conforme a las
              condiciones actuales de la oferta, acceso personal al Indicador
              Trader Run utilizado como herramienta de apoyo para aplicar la
              metodología explicada durante la formación.
            </p>

            <p className="mt-3">
              Una vez concedido correctamente el acceso al indicador, dicho
              acceso no tiene actualmente una fecha de caducidad
              predeterminada asociada a la finalización de los tres meses de
              acceso al curso.
            </p>

            <p className="mt-3">
              El acceso al indicador es personal e intransferible. El usuario
              no podrá vender, ceder, compartir, sublicenciar ni facilitar a
              terceros el acceso al indicador ni intentar reproducir,
              distribuir o explotar su funcionamiento o código de forma no
              autorizada.
            </p>

            <p className="mt-3">
              Cuando el acceso dependa de plataformas de terceros, como
              TradingView, será necesario que el usuario facilite correctamente
              el nombre de usuario requerido para autorizar el acceso.
            </p>

            <p className="mt-3">
              El indicador constituye una herramienta de análisis técnico y no
              un servicio de asesoramiento financiero, gestión de inversiones
              ni una garantía de resultados.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              11. Derecho de desistimiento y contenido digital
            </h2>

            <p>
              Cuando el comprador tenga la condición legal de consumidor, le
              resultará aplicable el derecho de desistimiento en los términos
              y plazos establecidos por la normativa vigente, salvo que
              concurra alguna de las excepciones legalmente previstas.
            </p>

            <p className="mt-3">
              Con carácter general, el plazo legal de desistimiento aplicable
              a los contratos celebrados a distancia es de 14 días naturales,
              cuando proceda.
            </p>

            <p className="mt-3">
              En aquellos productos que impliquen el suministro inmediato de
              contenido digital no prestado en soporte material, el inicio de
              la ejecución durante el plazo de desistimiento y, cuando
              legalmente corresponda, la pérdida de dicho derecho requerirán el
              consentimiento previo y expreso del consumidor, así como su
              reconocimiento de las consecuencias correspondientes y la
              confirmación exigida por la normativa aplicable.
            </p>

            <p className="mt-3">
              El proceso de contratación podrá solicitar separadamente dicho
              consentimiento cuando resulte necesario. La mera aceptación de
              estos Términos y Condiciones no sustituirá los consentimientos
              específicos que legalmente deban recabarse.
            </p>

            <p className="mt-3">
              Nada de lo dispuesto en estas condiciones limita los derechos
              irrenunciables que la legislación de consumidores reconozca al
              usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              12. Contratación electrónica
            </h2>

            <p>
              La contratación de los servicios se realiza por medios
              electrónicos. Antes de efectuar el pago, el usuario tendrá acceso
              a la información esencial del producto o servicio contratado, su
              precio y las condiciones aplicables.
            </p>

            <p className="mt-3">
              La aceptación de las condiciones mediante los mecanismos
              habilitados durante la contratación tendrá los efectos previstos
              por la normativa aplicable a la contratación electrónica.
            </p>

            <p className="mt-3">
              Trader Run podrá conservar evidencias electrónicas relacionadas
              con la contratación, incluyendo la fecha, producto contratado,
              versión de las condiciones aceptadas y consentimientos
              facilitados por el usuario, con las finalidades legales,
              contractuales y probatorias correspondientes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              13. Uso personal de los servicios
            </h2>

            <p>
              Salvo autorización expresa por escrito, los contenidos,
              formaciones, señales, análisis, indicadores, documentos, vídeos,
              materiales y demás recursos proporcionados por Trader Run están
              destinados exclusivamente al uso personal del usuario que los
              haya contratado.
            </p>

            <p className="mt-3">
              Queda prohibido compartir cuentas, accesos, enlaces privados,
              materiales o contenidos con terceros, así como revenderlos,
              redistribuirlos, publicarlos o explotarlos comercialmente sin
              autorización.
            </p>

            <p className="mt-3">
              Trader Run podrá suspender el acceso cuando existan indicios
              razonables de uso fraudulento, cesión no autorizada de cuentas o
              incumplimiento grave de estas condiciones, sin perjuicio de los
              derechos legalmente aplicables al usuario.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              14. Propiedad intelectual e industrial
            </h2>

            <p>
              Los contenidos propios de Trader Run, incluyendo textos,
              materiales formativos, vídeos, metodologías, diseños, elementos
              gráficos, documentación, software, indicadores y demás recursos
              protegibles, están sujetos a los derechos de propiedad
              intelectual o industrial que correspondan.
            </p>

            <p className="mt-3">
              La contratación de un producto o servicio concede únicamente el
              derecho de uso personal correspondiente y no implica la cesión
              de los derechos de propiedad intelectual o industrial sobre
              dichos contenidos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              15. Naturaleza educativa y riesgos
            </h2>

            <p>
              Trader Run ofrece formación, información, análisis y herramientas
              de carácter educativo. Los contenidos proporcionados no
              constituyen asesoramiento financiero, fiscal, jurídico o de
              inversión personalizado.
            </p>

            <p className="mt-3">
              Operar en mercados financieros implica riesgos y puede producir
              pérdidas parciales o totales del capital destinado a la
              operativa.
            </p>

            <p className="mt-3">
              Los ejemplos, operaciones, análisis, resultados históricos,
              señales o escenarios mostrados no garantizan resultados futuros.
              Cada usuario es responsable de sus propias decisiones y de
              valorar si la operativa resulta adecuada a sus circunstancias.
            </p>

            <p className="mt-3">
              Puede consultarse información adicional en el{" "}
              <Link
                href="/aviso-riesgo"
                className="text-foreground underline underline-offset-4"
              >
                Aviso de Riesgo
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              16. Servicios y plataformas de terceros
            </h2>

            <p>
              Determinadas funcionalidades pueden depender de proveedores o
              plataformas de terceros, entre ellas servicios de pago,
              alojamiento, correo electrónico, Telegram, TradingView u otras
              herramientas tecnológicas.
            </p>

            <p className="mt-3">
              Trader Run no controla la disponibilidad permanente de servicios
              prestados directamente por terceros y no será responsable de
              interrupciones exclusivamente imputables a dichos proveedores,
              sin perjuicio de las obligaciones que legalmente correspondan a
              Trader Run frente al consumidor.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              17. Protección de datos
            </h2>

            <p>
              Los datos personales facilitados por los usuarios serán tratados
              conforme a la normativa aplicable y a la Política de Privacidad
              de Trader Run.
            </p>

            <p className="mt-3">
  Puede consultarse la información correspondiente en la{" "}
  <Link
    href="/privacidad"
    className="text-foreground underline underline-offset-4"
  >
    Política de Privacidad
  </Link>{" "}
  y en el{" "}
  <Link
    href="/aviso-legal"
    className="text-foreground underline underline-offset-4"
  >
    Aviso Legal
  </Link>
  .
</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              18. Incidencias y atención al usuario
            </h2>

            <p>
              Para cuestiones generales o relacionadas con Trader Run Academy,
              el usuario puede contactar mediante{" "}
              <strong className="text-foreground">
                soporte@traderrun.com
              </strong>
              .
            </p>

            <p className="mt-3">
              Para cuestiones operativas relacionadas específicamente con
              Trader Run VIP, incluyendo solicitudes de cancelación, puede
              utilizarse{" "}
              <strong className="text-foreground">
                traderrunsignals@gmail.com
              </strong>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              19. Modificación de los servicios y de estas condiciones
            </h2>

            <p>
              Trader Run podrá actualizar sus productos, servicios o estas
              condiciones cuando resulte necesario por motivos operativos,
              técnicos, comerciales o legales.
            </p>

            <p className="mt-3">
              Las modificaciones no afectarán retroactivamente a derechos ya
              adquiridos por los usuarios cuando ello resulte contrario a la
              normativa aplicable.
            </p>

            <p className="mt-3">
              Cuando una modificación resulte relevante para una relación
              contractual vigente, se comunicará o aplicará de acuerdo con las
              obligaciones legales correspondientes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              20. Legislación aplicable y resolución de controversias
            </h2>

            <p>
              Estas condiciones se regirán por la legislación española.
            </p>

            <p className="mt-3">
              En caso de controversia, serán competentes los juzgados y
              tribunales que correspondan conforme a la normativa aplicable.
              Cuando el usuario tenga la condición de consumidor, se respetarán
              en todo caso las reglas imperativas de competencia territorial y
              protección de consumidores.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              21. Contacto
            </h2>

            <p>
              Para cualquier consulta relacionada con estas condiciones puede
              contactarse con Trader Run mediante{" "}
              <strong className="text-foreground">
                soporte@traderrun.com
              </strong>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}