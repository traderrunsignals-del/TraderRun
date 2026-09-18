import Link from "next/link"

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">
        Política de Privacidad
      </h1>

      <p className="mt-6 text-muted-foreground">
        Última actualización: septiembre de 2026
      </p>

      <section className="mt-12 space-y-10">

        {/* 1 */}
        <div>
          <h2 className="text-2xl font-semibold">
            1. Responsable del tratamiento
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los datos personales tratados a través del sitio web,
              Trader Run Academy y los servicios ofrecidos bajo la marca
              Trader Run son responsabilidad del titular de Trader Run.
            </p>

            <p>
              La identidad y los datos legales completos del responsable
              pueden consultarse de forma permanente en el{" "}
              <Link
                href="/aviso-legal"
                className="font-medium text-primary hover:underline"
              >
                Aviso Legal
              </Link>
              .
            </p>

            <p>
              Para cuestiones relacionadas con protección de datos puede
              contactar con Trader Run mediante el correo electrónico{" "}
              <strong className="font-semibold text-foreground/80">
                soporte@traderrun.com
              </strong>
              .
            </p>
          </div>
        </div>

        {/* 2 */}
        <div>
          <h2 className="text-2xl font-semibold">
            2. Ámbito de esta política
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Esta Política de Privacidad describe el tratamiento de datos
              personales realizado en relación con la web de Trader Run,
              Trader Run Academy, los productos formativos, las compras,
              el acceso a contenidos, los servicios de soporte y las
              funcionalidades asociadas a Trader Run VIP.
            </p>

            <p>
              También resulta aplicable cuando el usuario se comunica
              directamente con Trader Run a través de los canales de
              contacto habilitados.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div>
          <h2 className="text-2xl font-semibold">
            3. Datos personales que podemos tratar
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Dependiendo del producto o servicio utilizado, podemos tratar
              las siguientes categorías de datos:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Datos identificativos, como nombre y dirección de correo
                electrónico.
              </li>
              <li>
                Datos necesarios para la creación y gestión de la cuenta
                de Trader Run Academy.
              </li>
              <li>
                Identificadores internos asociados a la cuenta del usuario.
              </li>
              <li>
                Información relacionada con compras, pagos y estado de las
                operaciones.
              </li>
              <li>
                Identificadores técnicos de Stripe relacionados con clientes,
                pagos, sesiones de compra o suscripciones.
              </li>
              <li>
                Nombre de usuario de TradingView cuando resulte necesario
                para conceder acceso a productos o herramientas adquiridas.
              </li>
              <li>
                Información sobre el acceso y progreso dentro de Trader Run
                Academy, como los módulos marcados como completados.
              </li>
              <li>
                Datos relacionados con el acceso y duración de productos o
                servicios contratados.
              </li>
              <li>
                Datos de Telegram necesarios para la gestión de Trader Run
                VIP, como el identificador de chat, nombre de usuario y nombre
                facilitado por Telegram.
              </li>
              <li>
                Estado de la suscripción VIP y datos técnicos asociados a su
                gestión.
              </li>
              <li>
                Información que el usuario facilite voluntariamente al
                contactar con Trader Run para solicitar soporte o realizar
                una consulta.
              </li>
            </ul>
          </div>
        </div>

        {/* 4 */}
        <div>
          <h2 className="text-2xl font-semibold">
            4. Finalidades del tratamiento
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los datos personales podrán ser tratados para las siguientes
              finalidades:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                Gestionar el registro, autenticación y acceso del usuario.
              </li>
              <li>
                Crear y administrar cuentas de Trader Run Academy.
              </li>
              <li>
                Gestionar compras, pagos, suscripciones y renovaciones.
              </li>
              <li>
                Comprobar el estado de productos y servicios contratados.
              </li>
              <li>
                Facilitar el acceso a cursos, contenidos y funcionalidades
                adquiridas.
              </li>
              <li>
                Registrar y mostrar el progreso del alumno dentro de Academy.
              </li>
              <li>
                Gestionar la activación y duración del acceso a los productos
                contratados.
              </li>
              <li>
                Gestionar el acceso al indicador u otras herramientas
                asociadas a productos adquiridos.
              </li>
              <li>
                Gestionar Trader Run VIP y el acceso a los espacios privados
                correspondientes.
              </li>
              <li>
                Gestionar incidencias de pago y cambios en el estado de las
                suscripciones.
              </li>
              <li>
                Enviar comunicaciones transaccionales relacionadas con
                compras, cuentas, accesos o servicios contratados.
              </li>
              <li>
                Atender consultas, solicitudes de soporte, incidencias y
                reclamaciones.
              </li>
              <li>
                Mantener la seguridad, estabilidad y correcto funcionamiento
                de la plataforma.
              </li>
              <li>
                Obtener información agregada sobre el uso y funcionamiento
                de la web mediante las herramientas de analítica implementadas.
              </li>
              <li>
                Cumplir las obligaciones legales, fiscales, contables y
                administrativas que resulten aplicables.
              </li>
            </ul>
          </div>
        </div>

        {/* 5 */}
        <div>
          <h2 className="text-2xl font-semibold">
            5. Bases jurídicas del tratamiento
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              La base jurídica dependerá de la finalidad concreta para la que
              se traten los datos.
            </p>

            <p>
              Cuando el tratamiento sea necesario para gestionar una compra,
              una suscripción, el acceso a Academy, el acceso a un producto
              adquirido o la prestación de soporte asociado a dicho producto,
              el tratamiento se basará principalmente en la ejecución de la
              relación contractual o en la aplicación de medidas
              precontractuales solicitadas por el usuario.
            </p>

            <p>
              Determinados tratamientos podrán ser necesarios para cumplir
              obligaciones legales aplicables a Trader Run, incluyendo
              obligaciones fiscales, contables, administrativas o relacionadas
              con la defensa de derechos y reclamaciones.
            </p>

            <p>
              Cuando un tratamiento requiera consentimiento conforme a la
              normativa aplicable, este será solicitado de manera específica.
              El usuario podrá retirarlo posteriormente sin que ello afecte a
              la licitud del tratamiento realizado con anterioridad a su
              retirada.
            </p>

            <p>
              Determinadas operaciones estrictamente necesarias para mantener
              la seguridad, prevenir usos indebidos y garantizar el correcto
              funcionamiento de los servicios podrán basarse en el interés
              legítimo del responsable, previa consideración de los derechos
              e intereses de los usuarios.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div>
          <h2 className="text-2xl font-semibold">
            6. Trader Run Academy
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Para proporcionar acceso a Trader Run Academy es necesario
              disponer de una cuenta de usuario. La cuenta puede estar
              asociada, entre otros datos, al correo electrónico, nombre e
              identificador interno del usuario.
            </p>

            <p>
              Trader Run utiliza esta información para autenticar al alumno,
              comprobar sus permisos de acceso y gestionar los productos
              formativos contratados.
            </p>
          </div>
        </div>

        {/* 7 */}
        <div>
          <h2 className="text-2xl font-semibold">
            7. Progreso dentro de Academy
          </h2>

          <p className="mt-3 text-muted-foreground">
            La plataforma puede registrar información relacionada con el
            progreso del alumno, incluyendo el identificador del usuario,
            el módulo correspondiente y su estado de finalización. Esta
            información permite mantener y mostrar el progreso asociado a
            la cuenta.
          </p>
        </div>

        {/* 8 */}
        <div>
          <h2 className="text-2xl font-semibold">
            8. Compras y pagos
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los pagos se gestionan mediante Stripe. Durante el proceso de
              compra pueden tratarse datos identificativos, datos de contacto,
              información sobre el producto adquirido, importe, moneda,
              estado del pago e identificadores técnicos necesarios para
              gestionar la operación.
            </p>

            <p>
              Los datos de los medios de pago son tratados por el proveedor
              de pagos conforme a sus propios procedimientos y condiciones.
              Trader Run no necesita almacenar directamente los datos
              completos de la tarjeta bancaria para gestionar las compras
              realizadas mediante Stripe.
            </p>

            <p>
              Trader Run podrá conservar identificadores y datos de la
              operación necesarios para comprobar el pago, gestionar el
              acceso, atender incidencias, tramitar reembolsos cuando
              procedan y cumplir las obligaciones legales correspondientes.
            </p>
          </div>
        </div>

        {/* 9 */}
        <div>
          <h2 className="text-2xl font-semibold">
            9. TradingView e indicador
          </h2>

          <p className="mt-3 text-muted-foreground">
            Cuando un producto adquirido incluya acceso a una herramienta o
            indicador gestionado mediante TradingView, Trader Run podrá
            solicitar y tratar el nombre de usuario de TradingView necesario
            para identificar al comprador y conceder o gestionar dicho acceso.
          </p>
        </div>

        {/* 10 */}
        <div>
          <h2 className="text-2xl font-semibold">
            10. Trader Run VIP y Telegram
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Trader Run VIP puede utilizar Telegram como medio de acceso y
              gestión de determinados servicios y comunidades privadas.
            </p>

            <p>
              Para esta finalidad pueden tratarse el identificador de chat de
              Telegram, nombre de usuario, nombre facilitado por Telegram,
              estado de la suscripción e identificadores técnicos asociados
              a Stripe.
            </p>

            <p>
              Estos datos se utilizan para identificar al usuario, comprobar
              el estado de su suscripción y gestionar el acceso o permanencia
              en los espacios privados correspondientes.
            </p>

            <p>
              El uso de Telegram implica asimismo una relación directa entre
              el usuario y Telegram, que tratará la información conforme a
              sus propias condiciones y política de privacidad.
            </p>
          </div>
        </div>

        {/* 11 */}
        <div>
          <h2 className="text-2xl font-semibold">
            11. Comunicaciones relacionadas con el servicio
          </h2>

          <p className="mt-3 text-muted-foreground">
            Trader Run puede enviar comunicaciones necesarias para gestionar
            una compra, una cuenta, una invitación, una activación, el acceso
            a un producto, una incidencia, una suscripción o cualquier otro
            aspecto directamente relacionado con un servicio solicitado o
            contratado por el usuario. Estas comunicaciones tienen carácter
            operativo o transaccional.
          </p>
        </div>

        {/* 12 */}
        <div>
          <h2 className="text-2xl font-semibold">
            12. Comunicaciones comerciales
          </h2>

          <p className="mt-3 text-muted-foreground">
            La aceptación de una compra, de los términos contractuales o de
            las condiciones de un producto no supone por sí misma la
            autorización para recibir comunicaciones comerciales que requieran
            consentimiento. Cuando sea necesario solicitar consentimiento
            específico para este tipo de comunicaciones, se realizará de
            forma separada y conforme a la normativa aplicable.
          </p>
        </div>

        {/* 13 */}
        <div>
          <h2 className="text-2xl font-semibold">
            13. Proveedores tecnológicos
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Para prestar sus servicios, Trader Run utiliza proveedores
              tecnológicos que pueden tratar datos por cuenta de Trader Run
              o prestar servicios directamente relacionados con el usuario.
            </p>

            <p>Entre los servicios utilizados actualmente se encuentran:</p>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="font-semibold text-foreground/80">
                  Supabase
                </strong>
                : autenticación, gestión de usuarios y almacenamiento de
                información necesaria para el funcionamiento de la plataforma.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  Stripe
                </strong>
                : procesamiento y gestión de pagos y suscripciones.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  Resend
                </strong>
                : envío de determinadas comunicaciones transaccionales por
                correo electrónico.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  Vercel
                </strong>
                : infraestructura, alojamiento, despliegue y analítica de la
                plataforma.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  Bunny / MediaDelivery
                </strong>
                : alojamiento y distribución del contenido audiovisual de
                determinados cursos.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  Telegram
                </strong>
                : comunicación y acceso a determinados canales, grupos o
                funcionalidades relacionadas con Trader Run VIP.
              </li>

              <li>
                <strong className="font-semibold text-foreground/80">
                  TradingView
                </strong>
                : plataforma externa utilizada para gestionar el acceso a
                determinadas herramientas o indicadores cuando formen parte
                del producto adquirido.
              </li>
            </ul>

            <p>
              Cada proveedor puede tratar la información necesaria para
              prestar su servicio de acuerdo con la función que desempeñe y
              con las condiciones que resulten aplicables.
            </p>
          </div>
        </div>

        {/* 14 */}
        <div>
          <h2 className="text-2xl font-semibold">
            14. Transferencias internacionales de datos
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Algunos proveedores tecnológicos utilizados por Trader Run
              pueden operar, almacenar información o utilizar infraestructura
              situada fuera del Espacio Económico Europeo.
            </p>

            <p>
              Cuando exista una transferencia internacional de datos
              personales, se aplicarán los mecanismos y garantías previstos
              por la normativa de protección de datos que correspondan en
              cada caso, tales como decisiones de adecuación de la Comisión
              Europea, cláusulas contractuales tipo u otras garantías
              reconocidas por el RGPD.
            </p>
          </div>
        </div>

        {/* 15 */}
        <div>
          <h2 className="text-2xl font-semibold">
            15. Conservación de los datos
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los datos personales se conservarán durante el tiempo necesario
              para cumplir la finalidad para la que fueron recopilados y
              gestionar correctamente la relación con el usuario.
            </p>

            <p>
              Los datos asociados a compras, pagos y facturación podrán
              conservarse durante los plazos necesarios para cumplir las
              obligaciones legales, fiscales, contables y administrativas
              aplicables y para atender posibles responsabilidades o
              reclamaciones.
            </p>

            <p>
              Los datos asociados a cuentas, accesos, progreso o servicios
              podrán conservarse mientras resulte necesario para proporcionar
              el producto o servicio correspondiente y, posteriormente,
              durante los plazos necesarios para atender posibles
              responsabilidades.
            </p>

            <p>
              Cuando el tratamiento se base exclusivamente en el
              consentimiento, los datos dejarán de utilizarse para esa
              finalidad cuando el consentimiento sea retirado, sin perjuicio
              de los datos que deban conservarse por otra base jurídica
              aplicable.
            </p>
          </div>
        </div>

        {/* 16 */}
        <div>
          <h2 className="text-2xl font-semibold">
            16. Destinatarios de los datos
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              Los datos no se comunicarán a terceros salvo cuando resulte
              necesario para prestar el servicio contratado, exista una
              obligación legal, sea necesario para la formulación, ejercicio
              o defensa de reclamaciones o exista otra base jurídica válida.
            </p>

            <p>
              Los proveedores tecnológicos indicados en esta política podrán
              tener acceso a determinados datos en la medida necesaria para
              prestar sus respectivos servicios.
            </p>
          </div>
        </div>

        {/* 17 */}
        <div>
          <h2 className="text-2xl font-semibold">
            17. Derechos de los usuarios
          </h2>

          <div className="mt-3 space-y-3 text-muted-foreground">
            <p>
              El usuario puede ejercer, cuando correspondan, los derechos
              reconocidos por la normativa de protección de datos, incluyendo:
            </p>

            <ul className="list-disc space-y-2 pl-6">
              <li>Derecho de acceso a sus datos personales.</li>
              <li>Derecho de rectificación de datos inexactos.</li>
              <li>Derecho de supresión.</li>
              <li>Derecho a la limitación del tratamiento.</li>
              <li>Derecho de oposición.</li>
              <li>Derecho a la portabilidad de los datos.</li>
              <li>
                Derecho a retirar el consentimiento cuando el tratamiento
                esté basado en él.
              </li>
            </ul>

            <p>
              Para ejercer estos derechos puede escribir a{" "}
              <strong className="font-semibold text-foreground/80">
                soporte@traderrun.com
              </strong>
              , indicando el derecho que desea ejercer y aportando, cuando
              resulte necesario, información suficiente para verificar su
              identidad.
            </p>
          </div>
        </div>

        {/* 18 */}
        <div>
          <h2 className="text-2xl font-semibold">
            18. Reclamaciones ante la autoridad de control
          </h2>

          <p className="mt-3 text-muted-foreground">
            Si considera que el tratamiento de sus datos personales no se
            ajusta a la normativa aplicable, puede presentar una reclamación
            ante la Agencia Española de Protección de Datos (AEPD), sin
            perjuicio de cualquier otro recurso administrativo o judicial
            que pudiera corresponderle.
          </p>
        </div>

        {/* 19 */}
        <div>
          <h2 className="text-2xl font-semibold">
            19. Seguridad de la información
          </h2>

          <p className="mt-3 text-muted-foreground">
            Trader Run adopta medidas técnicas y organizativas razonables
            orientadas a proteger los datos personales frente a pérdida,
            alteración, acceso no autorizado, divulgación o tratamiento
            indebido, teniendo en cuenta la naturaleza de los datos, el
            contexto del tratamiento y los riesgos existentes.
          </p>
        </div>

        {/* 20 */}
        <div>
          <h2 className="text-2xl font-semibold">
            20. Menores de edad
          </h2>

          <p className="mt-3 text-muted-foreground">
            Los productos y servicios de Trader Run relacionados con trading,
            mercados financieros y contratación de servicios de pago no están
            dirigidos a menores de edad. No debe contratarse un producto o
            servicio cuando no se disponga de capacidad legal suficiente para
            hacerlo.
          </p>
        </div>

        {/* 21 */}
        <div>
          <h2 className="text-2xl font-semibold">
            21. Cookies y tecnologías similares
          </h2>

          <p className="mt-3 text-muted-foreground">
            La información relativa al uso de cookies y tecnologías similares
            se encuentra disponible en la{" "}
            <Link
              href="/cookies"
              className="font-medium text-primary hover:underline"
            >
              Política de Cookies
            </Link>
            .
          </p>
        </div>

        {/* 22 */}
        <div>
          <h2 className="text-2xl font-semibold">
            22. Servicios y sitios web de terceros
          </h2>

          <p className="mt-3 text-muted-foreground">
            La web puede contener enlaces o integraciones con plataformas de
            terceros. Cuando el usuario accede directamente a dichos servicios,
            el tratamiento realizado por esas entidades se regirá también por
            sus propias condiciones y políticas de privacidad. Trader Run no
            controla las políticas de privacidad de terceros independientes.
          </p>
        </div>

        {/* 23 */}
        <div>
          <h2 className="text-2xl font-semibold">
            23. Modificaciones de esta Política de Privacidad
          </h2>

          <p className="mt-3 text-muted-foreground">
            Trader Run podrá actualizar esta Política de Privacidad cuando
            resulte necesario para adaptarla a cambios legales, técnicos,
            organizativos o relacionados con los productos y servicios
            ofrecidos. La versión publicada en esta página será la aplicable
            en cada momento, indicando su fecha de última actualización.
          </p>
        </div>

        {/* 24 */}
        <div>
          <h2 className="text-2xl font-semibold">
            24. Contacto
          </h2>

          <p className="mt-3 text-muted-foreground">
            Para consultas relacionadas con esta Política de Privacidad o con
            el tratamiento de datos personales puede contactar con Trader Run
            en{" "}
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