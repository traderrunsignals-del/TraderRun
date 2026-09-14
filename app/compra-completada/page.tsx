import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function CompraCompletadaPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl border bg-card p-8 text-center shadow-xl sm:p-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Trader Run Academy
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight">
            Compra completada
          </h1>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Hemos recibido correctamente tu pago.
          </p>

          <p className="mt-4 leading-7 text-muted-foreground">
            En breve gestionaremos tu acceso a Trader Run Academy y al
            indicador Trader Run para TradingView.
          </p>

          <div className="mt-8 rounded-2xl border bg-background p-5 text-left">
            <p className="font-semibold">
              ¿Qué ocurre ahora?
            </p>

            <div className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Recibirás las instrucciones necesarias para acceder a tu cuenta
                de Trader Run Academy.
              </p>

              <p>
                También utilizaremos el usuario de TradingView que has indicado
                durante la compra para gestionar el acceso al indicador.
              </p>
            </div>
          </div>

          <Link
            href="/login"
            className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-4 font-semibold text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            Ir al acceso de alumnos
          </Link>

          <p className="mt-6 text-xs leading-5 text-muted-foreground">
            Si acabas de realizar la compra, es posible que el acceso tarde unos
            instantes en quedar disponible.
          </p>

        </div>
      </div>
    </main>
  )
}