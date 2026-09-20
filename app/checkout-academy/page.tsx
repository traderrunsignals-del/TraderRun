"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, LockKeyhole } from "lucide-react"

export default function CheckoutAcademyPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [tradingViewUser, setTradingViewUser] = useState("")
  const [accepted, setAccepted] = useState(false)
  const [digitalContentConsent, setDigitalContentConsent] = useState(false)

  const canContinue =
    name.trim() !== "" &&
    email.trim() !== "" &&
    tradingViewUser.trim() !== "" &&
    accepted &&
    digitalContentConsent

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!canContinue) return

    try {
      const response = await fetch("/api/academy/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          tradingViewUser,
          accepted,
          digitalContentConsent,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error(data)

        alert(
          "No se ha podido iniciar el pago. Inténtalo de nuevo."
        )

        return
      }

      if (!data.url) {
        alert(
          "No se ha recibido la URL de pago."
        )

        return
      }

      window.location.href = data.url
    } catch (error) {
      console.error(
        "Error iniciando checkout:",
        error
      )

      alert(
        "Ha ocurrido un error al conectar con Stripe."
      )
    }
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">

        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Trader Run Academy
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Completa tus datos antes de continuar al pago
          </h1>

         <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
  Estos datos se utilizarán para gestionar tu acceso a Trader Run
  Academy y al indicador de TradingView incluido en la formación.
</p>

<div className="mt-10 space-y-4">
  {[
  "Curso de Oferta y Demanda · 10 módulos",
  "3 meses de acceso al curso desde la primera activación",
  "Primera activación disponible durante 30 días desde la compra",
  "Indicador Trader Run para TradingView sin caducidad predeterminada una vez concedido",
  "2 meses de soporte y acompañamiento desde la fecha de compra",
  "Grupo privado de Telegram con ejemplos reales durante los 2 meses de soporte",
].map((item) => (
    <div
      key={item}
      className="flex items-start gap-3"
    >
      <div className="mt-1 rounded-full bg-primary/10 p-1">
        <Check className="h-4 w-4 text-primary" />
      </div>

      <p className="text-sm text-muted-foreground">
        {item}
      </p>
    </div>
  ))}
</div>

          <div className="mt-10 rounded-2xl border bg-card p-6">
            <p className="text-sm text-muted-foreground">
              Precio de lanzamiento
            </p>

            <div className="mt-2 flex items-end gap-3">
              <span className="text-4xl font-bold">
                825 €
              </span>

              <span className="pb-1 text-sm text-muted-foreground line-through">
                1.150 €
              </span>
            </div>

            <p className="mt-3 text-sm text-muted-foreground">
  Pago único · Precio final: 825 €
</p>
<p className="mt-3 max-w-xl text-xs leading-5 text-muted-foreground">
  Formación educativa sobre trading. Operar en los mercados financieros implica
  riesgo de pérdida. Los resultados pasados no garantizan resultados futuros.
</p>
          </div>
        </section>

        <section className="rounded-3xl border bg-card p-6 shadow-xl sm:p-8">
          <h2 className="text-2xl font-bold">
            Tus datos
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Completa la información necesaria para continuar.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <div>
              <label className="mb-2 block text-sm font-medium">
                Nombre y apellidos
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Nombre y apellidos"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="tu@email.com"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Usuario de TradingView
              </label>

              <input
                type="text"
                value={tradingViewUser}
                onChange={(e) =>
                  setTradingViewUser(
                    e.target.value
                  )
                }
                placeholder="Tu usuario de TradingView"
                required
                className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition focus:border-primary"
              />

              <p className="mt-2 text-xs text-muted-foreground">
                Utilizaremos este usuario para gestionar el acceso al indicador.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-4">
              <h3 className="font-semibold">
                Antes de continuar
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Al adquirir Trader Run Academy confirmas que entiendes que el
                indicador es una herramienta de análisis técnico, que su acceso
                es personal e intransferible y que no constituye asesoramiento
                financiero ni garantiza resultados.
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
  Con carácter general, dispones de 14 días naturales para ejercer
  el derecho de desistimiento cuando resulte aplicable. Si solicitas
  expresamente el inicio del suministro del contenido digital durante
  ese plazo, el derecho de desistimiento podrá perderse una vez
  iniciada su ejecución, en los términos previstos por la normativa
  aplicable.
</p>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <Link
                  href="/terminos"
                  target="_blank"
                  className="font-medium text-primary hover:underline"
                >
                  Condiciones de contratación
                </Link>

                <Link
                  href="/privacidad"
                  target="_blank"
                  className="font-medium text-primary hover:underline"
                >
                  Política de privacidad
                </Link>

                <Link
                  href="/aviso-riesgo"
                  target="_blank"
                  className="font-medium text-primary hover:underline"
                >
                  Aviso de riesgo
                </Link>
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) =>
                    setAccepted(
                      e.target.checked
                    )
                  }
                  required
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm leading-6">
                  He leído y acepto las condiciones de contratación, la licencia
                  de uso del indicador, la política de privacidad y el aviso de
                  riesgo.
                </span>
              </label>

              <label className="mt-4 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={digitalContentConsent}
                  onChange={(e) =>
                    setDigitalContentConsent(
                      e.target.checked
                    )
                  }
                  required
                  className="mt-1 h-4 w-4"
                />

                <span className="text-sm leading-6">
                  Solicito expresamente que el suministro del contenido digital
                  comience antes de que finalice el plazo legal de desistimiento
                  y reconozco que, una vez iniciada su ejecución, perderé mi
                  derecho de desistimiento cuando así lo establezca la normativa
                  aplicable.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Continuar al pago — 825 €
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <LockKeyhole className="h-4 w-4" />
              El pago se procesará de forma segura mediante Stripe
            </div>

          </form>
        </section>

      </div>
    </main>
  )
}