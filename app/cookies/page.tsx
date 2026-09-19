import Link from "next/link"

export default function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
     <h1 className="text-2xl font-semibold">
  Política de Cookies
</h1>

      <p className="mt-6 text-muted-foreground">
        Última actualización: septiembre de 2026
      </p>

     <section className="mt-8 space-y-7 text-sm leading-7">

        {/* 1 */}
        <div>
          <h2 className="text-base font-medium">
            1. ¿Qué son las cookies y tecnologías similares?
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Las cookies son pequeños archivos o fragmentos de información
              que pueden almacenarse en el dispositivo del usuario cuando
              visita un sitio web.
            </p>

            <p>
              Además de las cookies, una web puede utilizar otras tecnologías
              de almacenamiento local o mecanismos técnicos necesarios para
              prestar determinadas funcionalidades.
            </p>

            <p>
              En esta Política de Cookies explicamos las principales
              tecnologías utilizadas actualmente en Trader Run y su finalidad.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-semibold">
            2. Tecnologías utilizadas en Trader Run
          </h2>

          <p className="mt-3 text-muted-foreground">
            Trader Run utiliza principalmente tecnologías técnicas y
            funcionales necesarias para proporcionar servicios como la
            autenticación, el mantenimiento de sesiones, el acceso privado
            a determinadas áreas y la reproducción de contenidos
            audiovisuales.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-base font-medium">
  3. Cookies de autenticación y sesión
</h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Trader Run utiliza Supabase para determinadas funciones de
              autenticación y gestión de usuarios.
            </p>

            <p>
              Como parte de este funcionamiento pueden utilizarse cookies
              técnicas necesarias para identificar una sesión autenticada,
              mantener el acceso del usuario y permitir el funcionamiento
              seguro de las áreas privadas de la plataforma.
            </p>

            <p>
              Estas tecnologías son necesarias para prestar las
              funcionalidades solicitadas por el usuario, como iniciar sesión
              y acceder a Trader Run Academy.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-base font-medium">
  4. Cookie técnica de acceso de previsualización
</h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Trader Run dispone de un sistema técnico de previsualización
              utilizado para permitir determinados accesos privados o de
              administración durante la gestión y mantenimiento de la web.
            </p>

            <p>
              Este sistema puede utilizar una cookie denominada{" "}
              <strong className="font-semibold text-foreground/80">
                trader_preview
              </strong>
              , cuya finalidad es exclusivamente técnica y está relacionada
              con el control de dicho acceso.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-base font-medium">
  5. Reproductor de vídeo de Bunny / MediaDelivery
</h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Determinados contenidos audiovisuales de Trader Run Academy se
              reproducen mediante infraestructura de Bunny / MediaDelivery.
            </p>

            <p>
              Al acceder a una lección que contiene un vídeo, el navegador
              puede establecer una conexión con los servidores del proveedor
              para cargar y reproducir el contenido.
            </p>

            <p>
              El reproductor puede utilizar almacenamiento local del navegador
              para recordar determinadas preferencias funcionales del usuario,
              como la velocidad de reproducción seleccionada.
            </p>

            <p>
              Estas preferencias permiten conservar la configuración del
              reproductor entre reproducciones y mejorar su funcionamiento.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-base font-medium">
            6. Analítica de la web
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Trader Run utiliza Vercel Web Analytics para obtener información
              sobre el funcionamiento y uso general de la web.
            </p>

            <p>
              La implementación utilizada está diseñada para proporcionar
              métricas de uso sin recurrir a cookies publicitarias o de
              seguimiento entre diferentes sitios web.
            </p>

            <p>
              Esta información se utiliza para comprender el funcionamiento
              general de la plataforma, detectar posibles problemas y mejorar
              la experiencia de uso.
            </p>
          </div>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-base font-medium">
            7. Cookies publicitarias y seguimiento comercial
          </h2>

          <p className="mt-3 text-muted-foreground">
            En el momento de la última actualización de esta política,
            Trader Run no utiliza en la web tecnologías publicitarias como
            Meta Pixel ni herramientas equivalentes destinadas a realizar
            publicidad comportamental o seguimiento del usuario entre
            diferentes sitios web.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-base font-medium">
            8. Tecnologías de terceros
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Algunas funcionalidades de Trader Run dependen de proveedores
              tecnológicos externos. Estos proveedores pueden recibir
              determinada información técnica necesaria para prestar sus
              servicios cuando el usuario utiliza la funcionalidad
              correspondiente.
            </p>

            <p>
              Entre los proveedores relacionados con las tecnologías descritas
              en esta política se encuentran Supabase, Vercel y Bunny /
              MediaDelivery.
            </p>

            <p>
              Los proveedores externos pueden aplicar sus propias políticas de
              privacidad y tecnologías de almacenamiento en el contexto de los
              servicios que prestan.
            </p>
          </div>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-base font-medium">
            9. Gestión desde el navegador
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los principales navegadores permiten consultar, bloquear o
              eliminar cookies y datos almacenados por los sitios web desde
              sus opciones de privacidad y seguridad.
            </p>

            <p>
              El bloqueo o eliminación de tecnologías estrictamente necesarias
              puede provocar que determinadas funcionalidades de Trader Run,
              como el inicio de sesión, el mantenimiento de la sesión o
              determinadas preferencias, dejen de funcionar correctamente.
            </p>
          </div>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-base font-medium">
            10. Consentimiento y cambios futuros
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Si Trader Run incorpora en el futuro cookies o tecnologías que,
              conforme a la normativa aplicable, requieran el consentimiento
              previo del usuario, se implementarán los mecanismos necesarios
              para solicitar dicho consentimiento antes de su utilización.
            </p>

            <p>
              En ese supuesto, el usuario podrá aceptar, rechazar o configurar
              las tecnologías correspondientes y modificar posteriormente su
              elección mediante los mecanismos que se habiliten.
            </p>
          </div>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-base font-medium">
            11. Modificaciones de esta Política de Cookies
          </h2>

          <p className="mt-3 text-muted-foreground">
            Trader Run podrá actualizar esta Política de Cookies cuando se
            incorporen nuevas funcionalidades, cambien las tecnologías
            utilizadas o resulte necesario adaptarla a modificaciones
            normativas o criterios de las autoridades competentes. La fecha
            de última actualización aparecerá indicada al comienzo de esta
            página.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-base font-medium">
            12. Información adicional
          </h2>

          <p className="mt-3 text-muted-foreground">
  Para obtener más información sobre el tratamiento de datos
  personales puede consultar nuestra{" "}
  <Link
    href="/privacidad"
    className="font-medium text-primary hover:underline"
  >
    Política de Privacidad
  </Link>
  .
</p>
        </div>

        {/* 13 */}
        <div>
          <h2 className="text-base font-medium">
            13. Contacto
          </h2>

          <p className="mt-3 text-muted-foreground">
            Para cualquier consulta relacionada con esta Política de Cookies
            puede contactar con Trader Run en{" "}
            <strong className="font-semibold text-foreground/80">
              soporte@traderrun.com
            </strong>
            .
          </p>
        </div>

      </section>
    </div>
  )
}