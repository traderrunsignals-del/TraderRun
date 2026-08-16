import { Button } from "@/components/ui/button"
import {
  Check,
  Send,
  Crown,
  Camera,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"

const plans = [
  {
    name: "Telegram Gratuito",
    icon: Send,
    price: "0",
    period: "gratis para siempre",
    badge: null,
    desc: "Conoce Trader Run, sigue el mercado y descubre nuestra forma de trabajar.",
    features: [
      "Acceso al grupo público de Telegram",
      "Análisis y noticias de mercado",
      "Ideas de trading ocasionales",
      "Comunidad de traders",
    ],
    cta: "Entrar al grupo gratuito",
    highlighted: false,
  },
  {
    name: "Telegram VIP",
    icon: Crown,
    price: "36,95",
    period: "/mes",
    badge: "Más popular",
    desc: "La experiencia completa de Trader Run para traders que buscan análisis, señales y acompañamiento diario.",
    features: [
      "Señales de trading en tiempo real",
      "Entradas, stop loss y take profit",
      "Análisis diario de NQ y SP",
      "Razonamiento detrás de las operaciones",
      "Acompañamiento directo del equipo",
      "Acceso a la comunidad privada",
    ],
    cta: "Mantener precio actual",
    highlighted: true,
  },
  {
    name: "Instagram VIP",
    icon: Camera,
    price: "3,99",
    period: "/mes",
    badge: "Nuevo",
    desc: "Contenido exclusivo para suscriptores con análisis, directos y ventajas adicionales.",
    features: [
      "Insignia de suscriptor VIP",
      "Sesgo y análisis de los activos que revisamos",
      "Contenido exclusivo",
      "Pregúntanos lo que quieras",
      "Lanzamientos y acceso anticipado",
      "Descuentos en cuentas de fondeo",
      "Vídeos en directo durante Nueva York",
    ],
    cta: "Ver Instagram VIP",
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section
      id="precios"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >

      {/* CABECERA */}

      <div className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Acceso Trader Run
        </p>

        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Elige cómo quieres empezar
        </h2>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Empieza de forma gratuita o accede a nuestra comunidad VIP para
          recibir análisis, señales y acompañamiento diario.
        </p>

      </div>

      {/* PLANES */}

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">

        {plans.map((plan) => {

          const Icon = plan.icon

          return (

            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-7 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-2xl shadow-primary/10 lg:-translate-y-2"
                  : "border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              }`}
            >

              {/* BADGE */}

              {plan.badge && (
                <span
                  className={`absolute -top-3 left-7 rounded-full px-4 py-1.5 text-xs font-semibold ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              {/* CABECERA PLAN */}

              <div className="flex items-center gap-3">

                <span
                  className={`flex size-11 items-center justify-center rounded-2xl ${
                    plan.highlighted
                      ? "bg-primary/15 text-primary ring-1 ring-primary/20"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="size-5" />
                </span>

                <h3 className="font-display text-lg font-semibold">
                  {plan.name}
                </h3>

              </div>

              {/* PRECIO */}

              <div className="mt-7 flex items-end gap-1">

                <span className="font-display text-4xl font-bold tracking-tight">
                  {plan.price === "0"
                    ? "Gratis"
                    : `${plan.price}€`}
                </span>

                {plan.price !== "0" && (
                  <span className="mb-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}

              </div>

              {/* AVISO VIP */}

              {plan.name === "Telegram VIP" && (
                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/5 p-4">

                  <div className="flex items-center gap-2">

                    <ShieldCheck className="size-4 text-primary" />

                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Precio actual
                    </p>

                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    La tarifa actual es de{" "}
                    <span className="font-semibold text-foreground">
                      36,95 €/mes
                    </span>
                    .
                  </p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Próximamente pasará a{" "}
                    <span className="font-semibold text-foreground">
                      49,95 €/mes
                    </span>
                    .
                  </p>

                  <p className="mt-2 text-xs font-medium text-primary">
                    Accede ahora y mantén la tarifa actual mientras esté disponible.
                  </p>

                </div>
              )}

              {/* DESCRIPCIÓN */}

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                {plan.desc}
              </p>

              {/* FEATURES */}

              <ul className="mt-7 flex-1 space-y-3.5">

                {plan.features.map((feature) => (

                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm"
                  >

                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">

                      <Check className="size-3 text-primary" />

                    </span>

                    <span className="leading-6">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              {/* CTA */}

              <Button
                className="mt-8 h-12 w-full text-sm font-semibold"
                variant={plan.highlighted ? "default" : "outline"}
                render={
                  <a
                    href={
                      plan.name === "Telegram Gratuito"
                        ? "https://t.me/tradingproNQ"
                        : plan.name === "Instagram VIP"
                          ? "https://www.instagram.com/trader_run/"
                          : "https://buy.stripe.com/3cIaEQ7hMdL00Kr3Qg8so05"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {plan.cta}

                {plan.highlighted && (
                  <ArrowRight className="ml-2 size-4" />
                )}
              </Button>

              {plan.name === "Instagram VIP" && (
                <p className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                  Se abrirá nuestro perfil de Instagram.
                  <br />
                  Después pulsa{" "}
                  <span className="font-semibold text-primary">
                    "Suscribirse"
                  </span>{" "}
                  para activar tu membresía VIP.
                </p>
              )}

            </div>

          )
        })}

      </div>

      {/* CONFIANZA */}

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-border/60 bg-card p-7 text-center shadow-sm">

        <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10">
          <ShieldCheck className="size-5 text-primary" />
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold">
          ¿Necesitas ayuda?
        </h3>

        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Si tienes cualquier duda sobre el acceso, la suscripción o el
          funcionamiento de Trader Run, nuestro equipo estará encantado
          de ayudarte.
        </p>

        <Button
          className="mt-5"
          variant="outline"
          render={
            <a href="mailto:traderrunsignals@gmail.com" />
          }
        >
          Contactar con Trader Run
        </Button>

        <p className="mt-3 text-xs font-medium text-primary">
          traderrunsignals@gmail.com
        </p>

      </div>

    </section>
  )
}