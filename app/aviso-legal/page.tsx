import Link from "next/link"

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <Link
          href="/"
          className="mb-8 inline-flex text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Volver a Trader Run
        </Link>

        <header className="mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            Información legal
          </p>

          <h1 className="text-2xl font-semibold tracking-tight">
            Aviso Legal
          </h1>

          <p className="mt-3 text-xs text-muted-foreground">
            Última actualización: septiembre de 2026
          </p>
        </header>

        <div className="space-y-9 text-sm leading-7 text-muted-foreground">

          {/* ====================================================== */}
          {/* 1. CONDICIONES GENERALES */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-base font-medium text-foreground">
              1. Condiciones generales de acceso y utilización
            </h2>

            <p>
              El presente Aviso Legal regula el acceso y utilización de
              traderrun.com, así como la información general relativa a los
              contenidos, productos y servicios ofrecidos bajo la marca Trader
              Run.
            </p>

            <p className="mt-3">
              El sitio web tiene como finalidad proporcionar información y
              facilitar, según corresponda, el acceso, registro o contratación
              de contenidos y servicios relacionados principalmente con la
              formación en trading, mercados financieros, análisis técnico,
              estructura de mercado, gestión del riesgo y otras materias
              relacionadas. Entre ellos pueden encontrarse Trader Run Academy,
              cursos y programas formativos, Trader Run VIP, contenidos
              educativos, análisis de mercado, comunidades privadas,
              herramientas e indicadores de análisis técnico.
            </p>

            <p className="mt-3">
              La disponibilidad, características, precio, duración y demás
              condiciones concretas de cada producto o servicio serán las
              indicadas en cada momento en la correspondiente página de
              información o contratación.
            </p>

            <p className="mt-3">
              El acceso a las áreas públicas del sitio web tiene, con carácter
              general, naturaleza libre, sin perjuicio de que determinadas
              funcionalidades, contenidos o servicios puedan requerir registro,
              contratación o identificación previa. El usuario se compromete a
              utilizar el sitio web de forma diligente, lícita y respetuosa con
              la normativa vigente, con este Aviso Legal y con los derechos e
              intereses de Trader Run y de terceros.
            </p>

            <p className="mt-3">
              No deberá utilizarse el sitio web para realizar actividades
              ilícitas, fraudulentas, abusivas o que puedan perjudicar su
              funcionamiento, seguridad, disponibilidad o integridad.
            </p>

            <p className="mt-3">
              Trader Run procura que los contenidos e información publicados
              sean adecuados y se mantengan razonablemente actualizados. No
              obstante, determinados contenidos pueden quedar desactualizados
              como consecuencia de cambios normativos, tecnológicos, de mercado
              o de las características de servicios prestados por terceros.
              Trader Run podrá corregir, actualizar, ampliar o modificar dichos
              contenidos cuando resulte necesario.
            </p>

            <p className="mt-3">
              Asimismo, se procurará mantener disponible el sitio web y los
              servicios digitales asociados, sin que pueda garantizarse una
              disponibilidad permanente e ininterrumpida. Pueden producirse
              interrupciones temporales derivadas de mantenimiento,
              actualizaciones, incidencias técnicas, problemas de conectividad,
              actuaciones de proveedores externos u otras circunstancias.
            </p>

            <p className="mt-3">
              Determinadas funcionalidades pueden depender de servicios o
              plataformas gestionadas por terceros, incluyendo sistemas de
              pago, alojamiento, correo electrónico, mensajería, vídeo,
              Telegram, TradingView u otras herramientas. La utilización de
              estos servicios puede estar sujeta a las condiciones de sus
              respectivos proveedores. Trader Run no controla su disponibilidad
              permanente, sin perjuicio de las obligaciones que legalmente le
              correspondan frente a sus usuarios y consumidores.
            </p>

            <p className="mt-3">
              El sitio web también puede contener enlaces a páginas, recursos o
              servicios gestionados por terceros. La inclusión de dichos enlaces
              no implica necesariamente la aprobación de la totalidad de sus
              contenidos, políticas o servicios.
            </p>

            <p className="mt-3">
              Trader Run podrá introducir cambios en la estructura, diseño,
              funcionalidades y contenidos del sitio web cuando resulte
              necesario por razones técnicas, operativas, comerciales,
              organizativas o legales. Las modificaciones que afecten a
              productos o servicios ya contratados se realizarán respetando los
              derechos adquiridos y las obligaciones derivadas de la normativa
              aplicable.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 2. FORMACIÓN Y RIESGOS */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-base font-medium text-foreground">
              2. Formación, mercados financieros y responsabilidad
            </h2>

            <p>
              Los contenidos publicados o proporcionados por Trader Run tienen
              carácter principalmente educativo e informativo y están destinados
              a ayudar al usuario a comprender conceptos, metodologías,
              herramientas y técnicas relacionadas con los mercados financieros
              y el trading.
            </p>

            <p className="mt-3">
              Los cursos, vídeos, ejemplos, gráficos, análisis, herramientas,
              indicadores y demás materiales tienen como finalidad transmitir
              conocimientos y mostrar la aplicación de determinadas
              metodologías. La formación proporcionada no supone una promesa de
              rentabilidad ni garantiza que el usuario vaya a obtener
              determinados resultados económicos o de trading.
            </p>

            <p className="mt-3">
              Los contenidos y servicios de carácter educativo o informativo
              proporcionados por Trader Run no constituyen asesoramiento
              financiero o de inversión personalizado, gestión discrecional de
              carteras ni una recomendación personalizada adaptada a las
              circunstancias particulares de cada usuario.
            </p>

            <p className="mt-3">
              Trader Run no presta a través de dichos contenidos un servicio de
              asesoramiento de inversión como empresa de servicios de inversión
              autorizada por la Comisión Nacional del Mercado de Valores (CNMV).
              El usuario deberá adoptar sus propias decisiones y valorar de
              forma independiente los riesgos asociados a cualquier operación
              que decida realizar.
            </p>

            <p className="mt-3">
              La operativa en mercados financieros implica riesgos y puede
              producir pérdidas parciales o totales del capital destinado a la
              operativa. La utilización de apalancamiento, derivados u otros
              instrumentos financieros puede incrementar significativamente el
              nivel de riesgo y no resulta adecuada para todas las personas.
            </p>

            <p className="mt-3">
              Los resultados históricos, operaciones anteriores, simulaciones,
              ejemplos, estadísticas o escenarios mostrados con finalidad
              educativa no constituyen una garantía de resultados futuros.
              Corresponde exclusivamente al usuario decidir si realiza o no una
              determinada operación y determinar las condiciones en las que la
              realiza.
            </p>

            <p className="mt-3">
              El usuario es responsable de valorar sus conocimientos,
              experiencia, situación económica, tolerancia al riesgo y demás
              circunstancias antes de operar con dinero real. La existencia de
              una metodología, análisis, señal, indicador, ejemplo o escenario
              de mercado no elimina los riesgos inherentes a la operativa.
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

          {/* ====================================================== */}
          {/* 3. CONTRATACIÓN, CONTENIDOS Y PRIVACIDAD */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-base font-medium text-foreground">
              3. Contratación, contenidos, privacidad y cookies
            </h2>

            <p>
              La contratación de productos y servicios a través de Trader Run
              está sometida a las condiciones comunicadas al usuario durante el
              correspondiente proceso de contratación. En ellas se regulan,
              entre otras cuestiones, las características del producto, precio,
              duración, acceso, renovación cuando corresponda, soporte y demás
              condiciones aplicables.
            </p>

            <p className="mt-3">
              Puede consultarse la información general correspondiente en los{" "}
              <Link
                href="/terminos"
                className="text-foreground underline underline-offset-4"
              >
                Términos y Condiciones
              </Link>
              .
            </p>

            <p className="mt-3">
              Los contenidos propios de Trader Run, incluyendo textos, vídeos,
              materiales formativos, documentación, metodologías, diseños,
              elementos gráficos, software, indicadores y demás recursos
              protegibles, están sujetos a los derechos de propiedad intelectual
              o industrial que correspondan.
            </p>

            <p className="mt-3">
              El acceso a la web o la contratación de un producto no supone la
              transmisión al usuario de los derechos de propiedad intelectual o
              industrial sobre dichos contenidos. Salvo autorización expresa o
              habilitación legal, queda prohibida su reproducción, distribución,
              comunicación pública, transformación, reventa, sublicencia o
              explotación comercial.
            </p>

            <p className="mt-3">
              Los accesos personales a cursos, comunidades, herramientas,
              indicadores, documentos y demás recursos privados no podrán
              compartirse con terceros salvo autorización expresa. Tampoco está
              permitido utilizar mecanismos destinados a eludir las medidas de
              acceso, seguridad o protección implantadas en la plataforma.
            </p>

            <p className="mt-3">
              Trader Run podrá adoptar las medidas razonablemente necesarias
              ante usos fraudulentos o no autorizados, respetando en todo caso
              los derechos que correspondan legalmente al usuario.
            </p>

            <p className="mt-3">
              Trader Run trata los datos personales necesarios para gestionar
              el funcionamiento del sitio web, las relaciones con usuarios y
              clientes, los procesos de contratación y las demás finalidades
              indicadas en cada caso. La información sobre categorías de datos,
              finalidades, bases jurídicas, conservación, destinatarios y
              ejercicio de derechos puede consultarse en la{" "}
              <Link
                href="/privacidad"
                className="text-foreground underline underline-offset-4"
              >
                Política de Privacidad
              </Link>
              .
            </p>

            <p className="mt-3">
              El sitio web puede utilizar cookies y otras tecnologías necesarias
              para su funcionamiento, así como aquellas otras que resulten
              aplicables de acuerdo con las preferencias manifestadas por el
              usuario. La información correspondiente se encuentra disponible
              en la{" "}
              <Link
                href="/cookies"
                className="text-foreground underline underline-offset-4"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </section>

          {/* ====================================================== */}
          {/* 4. INFORMACIÓN LEGAL */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-base font-medium text-foreground">
              4. Información legal
            </h2>

            <p>
              El presente Aviso Legal se rige por la legislación española.
              Cuando el usuario tenga la condición legal de consumidor, se
              respetarán en todo caso las disposiciones imperativas de
              protección de consumidores y usuarios que resulten aplicables.
            </p>

            <p className="mt-3">
              Este Aviso Legal podrá actualizarse para adaptarlo a cambios
              normativos, criterios interpretativos, modificaciones en los
              servicios o cambios técnicos y organizativos. La versión publicada
              en el sitio web será la disponible en cada momento, sin perjuicio
              de las condiciones contractuales correspondientes a productos
              previamente contratados.
            </p>

            <p className="mt-3" data-nosnippet>
  Trader Run es la marca utilizada para la presentación,
  comercialización y prestación de los productos y servicios
  descritos en este sitio web. En cumplimiento de la normativa
  aplicable a los servicios de la sociedad de la información, se
  facilita la información identificativa del prestador. La razón
  social del titular es Rap-3 green S.L., con NIF B22855654 y
  domicilio social en C/ Capitulaciones 28, 18194
  Churriana de la Vega (Granada). La sociedad consta inscrita en
  el Registro Mercantil de Granada, al folio electrónico, hoja
  GR-63669, IRUS 1000457725368, inscripción 1.ª. El correo
  electrónico de contacto es soporte@traderrun.com. Para consultas
  generales relacionadas con Trader Run, el sitio web o este Aviso
  Legal puede utilizarse dicho correo electrónico. Las consultas
  relativas a productos concretos podrán atenderse igualmente a
  través de los canales específicos indicados en las condiciones
  correspondientes a cada servicio.
</p>
          </section>
        </div>
      </div>
    </main>
  )
}