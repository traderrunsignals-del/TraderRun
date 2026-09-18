import Link from "next/link"

export default function AvisoLegalPage() {
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
            Información legal
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Aviso Legal
          </h1>

          <p className="mt-4 text-sm text-muted-foreground">
            Última actualización: septiembre de 2026
          </p>
        </header>

        <div className="space-y-10 text-sm leading-7 text-muted-foreground">
          {/* ====================================================== */}
          {/* 1. IDENTIFICACIÓN */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              1. Identificación del titular
            </h2>

            <p>
              El presente Aviso Legal regula el acceso y utilización del sitio
              web traderrun.com, así como la información general relativa a los
              productos, contenidos y servicios comercializados bajo la marca
              Trader Run.
            </p>

            <p className="mt-3">
              En cumplimiento de la normativa aplicable a los servicios de la
             sociedad de la información y al comercio electrónico, se facilita
              a continuación la información identificativa del titular del
              sitio web y prestador de los servicios.
            </p>

            <div data-nosnippet className="mt-3 space-y-1">
              <p>
                <strong className="text-foreground">Razón social:</strong>{" "}
                Rap-3 green S.L.
              </p>

              <p>
                <strong className="text-foreground">NIF:</strong>{" "}
                B22855654
              </p>

              <p>
                <strong className="text-foreground">
                  Domicilio social:
                </strong>{" "}
                C/ Capitulaciones 28, puerta A, 18194 Churriana de la Vega
                (Granada)
              </p>

              <p>
                <strong className="text-foreground">
                  Datos registrales:
                </strong>{" "}
                Registro Mercantil de Granada, al folio electrónico, hoja
                GR-63669, IRUS 1000457725368, inscripción 1.ª.
              </p>

              <p>
                <strong className="text-foreground">
                  Correo electrónico:
                </strong>{" "}
                soporte@traderrun.com
              </p>
            </div>

            <p className="mt-3">
              Trader Run es la marca utilizada para la presentación,
              comercialización y prestación de los productos y servicios
              descritos en este sitio web.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 2. OBJETO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              2. Objeto del sitio web
            </h2>

            <p>
              El sitio web tiene como finalidad proporcionar información sobre
              Trader Run y facilitar el acceso, registro o contratación, según
              corresponda, de diferentes contenidos, productos y servicios
              relacionados principalmente con la formación en trading, mercados
              financieros, análisis técnico, estructura de mercado, gestión del
              riesgo y otras materias relacionadas.
            </p>

            <p className="mt-3">
              Entre los productos y servicios ofrecidos pueden encontrarse
              Trader Run Academy, cursos y programas formativos, Trader Run VIP,
              contenidos educativos, análisis de mercado, comunidades privadas,
              herramientas e indicadores de análisis técnico.
            </p>

            <p className="mt-3">
              La disponibilidad, características y condiciones concretas de
              cada producto o servicio serán las indicadas en cada momento en
              la correspondiente página de información o contratación.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 3. ACCESO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              3. Acceso y utilización del sitio web
            </h2>

            <p>
              El acceso a las áreas públicas de traderrun.com tiene, con
              carácter general, naturaleza libre, sin perjuicio de que
              determinadas funcionalidades, contenidos o servicios puedan
              requerir registro, contratación o identificación previa.
            </p>

            <p className="mt-3">
              El usuario se compromete a utilizar el sitio web de forma
              diligente, lícita y respetuosa con la normativa vigente, con este
              Aviso Legal y con los derechos e intereses de Trader Run y de
              terceros.
            </p>

            <p className="mt-3">
              No deberá utilizarse el sitio web para realizar actividades
              ilícitas, fraudulentas, abusivas o que puedan perjudicar el
              funcionamiento, seguridad, disponibilidad o integridad de la
              plataforma.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 4. FORMACIÓN */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              4. Naturaleza educativa de los contenidos
            </h2>

            <p>
              Los contenidos publicados o proporcionados por Trader Run tienen
              carácter principalmente educativo e informativo y están
              destinados a ayudar al usuario a comprender conceptos,
              metodologías, herramientas y técnicas relacionadas con los
              mercados financieros y el trading.
            </p>

            <p className="mt-3">
              Los cursos, vídeos, ejemplos, gráficos, análisis, herramientas,
              indicadores y demás materiales tienen como finalidad transmitir
              conocimientos y mostrar la aplicación de determinadas
              metodologías.
            </p>

            <p className="mt-3">
              La formación proporcionada no supone una promesa de rentabilidad
              ni garantiza que el usuario vaya a obtener determinados
              resultados económicos o de trading.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 5. NO ASESORAMIENTO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              5. Ausencia de asesoramiento de inversión
            </h2>

            <p>
              Los contenidos y servicios de carácter educativo o informativo
              proporcionados por Trader Run no constituyen asesoramiento
              financiero o de inversión personalizado, gestión discrecional de
              carteras ni una recomendación personalizada adaptada a las
              circunstancias particulares de cada usuario.
            </p>

            <p className="mt-3">
              Trader Run no presta a través de dichos contenidos un servicio de
              asesoramiento de inversión como empresa de servicios de inversión
              autorizada por la Comisión Nacional del Mercado de Valores
              (CNMV).
            </p>

            <p className="mt-3">
              El usuario deberá adoptar sus propias decisiones y valorar de
              forma independiente los riesgos asociados a cualquier operación
              que decida realizar.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 6. RIESGOS */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              6. Riesgos asociados a los mercados financieros
            </h2>

            <p>
              La operativa en mercados financieros implica riesgos y puede
              producir pérdidas parciales o totales del capital destinado a la
              operativa.
            </p>

            <p className="mt-3">
              La utilización de apalancamiento, derivados u otros instrumentos
              financieros puede incrementar significativamente el nivel de
              riesgo y no resulta adecuada para todas las personas.
            </p>

            <p className="mt-3">
              Los resultados históricos, operaciones anteriores, simulaciones,
              ejemplos, estadísticas o escenarios mostrados con finalidad
              educativa no constituyen una garantía de resultados futuros.
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
          {/* 7. DECISIONES DEL USUARIO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              7. Responsabilidad sobre las decisiones del usuario
            </h2>

            <p>
              Corresponde exclusivamente al usuario decidir si realiza o no una
              determinada operación en los mercados financieros y determinar
              las condiciones en las que la realiza.
            </p>

            <p className="mt-3">
              El usuario es responsable de valorar sus conocimientos,
              experiencia, situación económica, tolerancia al riesgo y demás
              circunstancias antes de operar con dinero real.
            </p>

            <p className="mt-3">
              La existencia de una metodología, análisis, señal, indicador,
              ejemplo o escenario de mercado no elimina los riesgos inherentes
              a la operativa.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 8. INFORMACIÓN */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              8. Exactitud y actualización de la información
            </h2>

            <p>
              Trader Run procura que los contenidos e información publicados en
              el sitio web sean adecuados y se mantengan razonablemente
              actualizados.
            </p>

            <p className="mt-3">
              No obstante, determinados contenidos pueden quedar desactualizados
              como consecuencia de cambios normativos, tecnológicos, de mercado
              o de las características de servicios prestados por terceros.
            </p>

            <p className="mt-3">
              Trader Run podrá corregir, actualizar, ampliar o modificar los
              contenidos del sitio web cuando resulte necesario.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 9. DISPONIBILIDAD */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              9. Disponibilidad y funcionamiento
            </h2>

            <p>
              Trader Run procurará mantener disponible el sitio web y los
              servicios digitales asociados, sin que pueda garantizarse una
              disponibilidad permanente e ininterrumpida.
            </p>

            <p className="mt-3">
              Pueden producirse interrupciones temporales derivadas de
              mantenimiento, actualizaciones, incidencias técnicas, problemas
              de conectividad, actuaciones de proveedores externos u otras
              circunstancias.
            </p>

            <p className="mt-3">
              Las incidencias se gestionarán de acuerdo con las características
              del servicio afectado y con las obligaciones legales que resulten
              aplicables.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 10. TERCEROS */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              10. Plataformas y servicios de terceros
            </h2>

            <p>
              Determinadas funcionalidades de Trader Run pueden depender de
              servicios tecnológicos o plataformas gestionadas por terceros,
              incluyendo sistemas de pago, alojamiento, correo electrónico,
              mensajería, vídeo, Telegram, TradingView u otras herramientas.
            </p>

            <p className="mt-3">
              La utilización de estos servicios puede estar igualmente sujeta a
              las condiciones establecidas por sus respectivos proveedores.
            </p>

            <p className="mt-3">
              Trader Run no controla la disponibilidad permanente de servicios
              prestados directamente por terceros, sin perjuicio de las
              obligaciones que legalmente correspondan a Trader Run frente a
              sus usuarios y consumidores.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 11. ENLACES */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              11. Enlaces externos
            </h2>

            <p>
              El sitio web puede contener enlaces a páginas, plataformas,
              recursos o servicios gestionados por terceros.
            </p>

            <p className="mt-3">
              La inclusión de un enlace externo no implica necesariamente la
              aprobación de la totalidad de sus contenidos, políticas o
              servicios.
            </p>

            <p className="mt-3">
              Cuando el usuario acceda a una plataforma externa deberá tener en
              cuenta las condiciones y políticas aplicables a dicho servicio.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 12. PROPIEDAD INTELECTUAL */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              12. Propiedad intelectual e industrial
            </h2>

            <p>
              Los contenidos propios de Trader Run, incluyendo textos, vídeos,
              materiales formativos, documentación, metodologías, diseños,
              elementos gráficos, software, indicadores y demás recursos
              protegibles, están sujetos a los derechos de propiedad intelectual
              o industrial que correspondan.
            </p>

            <p className="mt-3">
              El acceso a la web o la contratación de un producto no supone la
              transmisión al usuario de los derechos de propiedad intelectual o
              industrial sobre dichos contenidos.
            </p>

            <p className="mt-3">
              Salvo autorización expresa o habilitación legal, queda prohibida
              su reproducción, distribución, comunicación pública,
              transformación, reventa, sublicencia o explotación comercial.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 13. USO NO AUTORIZADO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              13. Uso no autorizado de contenidos y accesos
            </h2>

            <p>
              Los accesos personales a cursos, comunidades, herramientas,
              indicadores, documentos y demás recursos privados no podrán
              compartirse con terceros salvo autorización expresa.
            </p>

            <p className="mt-3">
              Tampoco está permitido utilizar mecanismos destinados a eludir
              las medidas de acceso, seguridad o protección implantadas en la
              plataforma.
            </p>

            <p className="mt-3">
              Trader Run podrá adoptar las medidas razonablemente necesarias
              ante usos fraudulentos o no autorizados, respetando en todo caso
              los derechos que correspondan legalmente al usuario.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 14. DATOS */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              14. Protección de datos personales
            </h2>

            <p>
              Trader Run trata los datos personales necesarios para gestionar
              el funcionamiento del sitio web, las relaciones con usuarios y
              clientes, los procesos de contratación y las demás finalidades
              indicadas en cada caso.
            </p>

            <p className="mt-3">
              La información sobre categorías de datos, finalidades, bases
              jurídicas, conservación, destinatarios y ejercicio de derechos
              puede consultarse en la{" "}
              <Link
                href="/privacidad"
                className="text-foreground underline underline-offset-4"
              >
                Política de Privacidad
              </Link>
              .
            </p>
          </section>

          {/* ====================================================== */}
          {/* 15. COOKIES */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              15. Cookies y tecnologías similares
            </h2>

            <p>
              El sitio web puede utilizar cookies y otras tecnologías necesarias
              para su funcionamiento, así como aquellas otras que resulten
              aplicables de acuerdo con las preferencias manifestadas por el
              usuario.
            </p>

            <p className="mt-3">
              La información sobre su utilización, finalidad y gestión se
              encuentra disponible en la{" "}
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
          {/* 16. CONTRATACIÓN */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              16. Contratación de productos y servicios
            </h2>

            <p>
              La contratación de productos y servicios a través de Trader Run
              está sometida a las condiciones comunicadas al usuario durante el
              correspondiente proceso de contratación.
            </p>

            <p className="mt-3">
              En ellas se regulan, entre otras cuestiones, las características
              del producto, precio, duración, acceso, renovación cuando
              corresponda, soporte y demás condiciones aplicables.
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
          </section>

          {/* ====================================================== */}
          {/* 17. CAMBIOS */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              17. Modificaciones del sitio web
            </h2>

            <p>
              Trader Run podrá introducir cambios en la estructura, diseño,
              funcionalidades y contenidos del sitio web cuando resulte
              necesario por razones técnicas, operativas, comerciales,
              organizativas o legales.
            </p>

            <p className="mt-3">
              Las modificaciones que afecten a productos o servicios ya
              contratados se realizarán respetando los derechos adquiridos y las
              obligaciones que resulten de la normativa aplicable.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 18. AVISO LEGAL */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              18. Modificación del Aviso Legal
            </h2>

            <p>
              El presente Aviso Legal podrá actualizarse para adaptarlo a
              cambios normativos, criterios interpretativos, modificaciones en
              los servicios o cambios técnicos y organizativos.
            </p>

            <p className="mt-3">
              La versión publicada en el sitio web será la que se encuentre
              disponible en cada momento, sin perjuicio de las condiciones
              contractuales que correspondan a productos previamente
              contratados.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 19. LEGISLACIÓN */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              19. Legislación aplicable
            </h2>

            <p>
              El presente Aviso Legal se regirá por la legislación española.
            </p>

            <p className="mt-3">
              Cuando el usuario tenga la condición legal de consumidor, se
              respetarán en todo caso las disposiciones imperativas de
              protección de consumidores y usuarios que resulten aplicables.
            </p>
          </section>

          {/* ====================================================== */}
          {/* 20. CONTACTO */}
          {/* ====================================================== */}

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">
              20. Contacto
            </h2>

            <p>
              Para consultas generales relacionadas con Trader Run, el sitio web
              o este Aviso Legal puede utilizarse el correo electrónico{" "}
              <strong className="text-foreground">
                soporte@traderrun.com
              </strong>
              .
            </p>

            <p className="mt-3">
              Las consultas relativas a productos concretos podrán atenderse a
              través de los canales específicos indicados en las condiciones
              correspondientes a cada servicio.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}