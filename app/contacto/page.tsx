export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">

      <h1 className="text-4xl font-bold">
        Contacto
      </h1>

      <p className="mt-6 text-lg text-muted-foreground">
        Si tienes cualquier duda sobre la academia, la suscripción o el funcionamiento de Trader Run, estaremos encantados de ayudarte.
      </p>

      <div className="mt-12 space-y-8">

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            📧 Correo electrónico
          </h2>

          <p className="mt-4 text-muted-foreground">
            traderrunsignals@gmail.com
          </p>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            📲 Telegram
          </h2>

          <a
            href="https://t.me/tradingproNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary hover:underline"
          >
            Unirse al canal de Telegram
          </a>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-2xl font-semibold">
            ⏰ Tiempo de respuesta
          </h2>

          <p className="mt-4 text-muted-foreground">
            Intentamos responder todas las consultas en un plazo de 24 a 48 horas laborables.
          </p>
        </div>

      </div>

    </div>
  )
}