import { Button } from "@/components/ui/button"
import { Check, Send, Crown, GraduationCap, Infinity as InfinityIcon } from "lucide-react"

const plans = [
  {
    name: "Telegram Gratuito",
    icon: Send,
    price: "0",
    period: "gratis para siempre",
    badge: null,
    desc: "Únete a la comunidad y empieza a aprender sin coste.",
    features: [
      "Acceso al grupo público de Telegram",
      "Análisis y noticias de mercado",
      "Ideas de trading ocasionales",
      "Comunidad de traders principiantes",
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
    desc: "Señales en tiempo real y acompañamiento diario del equipo.",
    features: [
      "Señales de trading en tiempo real",
      "Entradas, stop loss y take profit",
      "Análisis premium a diario",
      "Sesiones en vivo semanales",
      "Soporte directo del equipo",
    ],
    cta: "Suscribirme al VIP",
    highlighted: true,
  },
  
]

export function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Precios
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Elige cómo quieres empezar
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Empieza en nuestro grupo gratuito de Telegram para ver nuestros resultados, noticias y testimonios 
          o únete a nuestra comunidad VIP para empezar a aprender ya y tener acceso a nuestros análisis y señales
          en tiempo real.
      
        </p>
      </div>

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const Icon = plan.icon
          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.highlighted
                  ? "border-primary bg-card shadow-2xl shadow-primary/10"
                  : "border-border/60 bg-card"
              }`}
            >
              {plan.badge && (
                <span
                  className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-accent-foreground"
                  }`}
                >
                  {plan.badge}
                </span>
              )}

              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {plan.name}
                </h3>
              </div>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-bold">
                  {plan.price === "0" ? "Gratis" : `${plan.price}€`}
                </span>
                {plan.price !== "0" && (
                  <span className="mb-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                )}
              </div>

              {plan.lifetime && (
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <InfinityIcon className="size-3.5" />
                  Acceso de por vida
                </span>
              )}

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {plan.desc}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
  className="mt-8 h-11 w-full text-sm"
  variant={plan.highlighted ? "default" : "outline"}
  render={
    <a
      href={
        plan.name === "Telegram Gratuito"
          ? "https://t.me/tradingproNQ"
          : "https://buy.stripe.com/3cIaEQ7hMdL00Kr3Qg8so05"
      }
      target="_blank"
      rel="noopener noreferrer"
    />
  }
>
  {plan.cta}
</Button>
            </div>
          )
        })}
      </div>
      <div className="mt-12 rounded-2xl border border-border bg-card p-6 text-center">
  <h3 className="text-lg font-semibold">
    ¿Tienes algún problema con el pago?
  </h3>

  <p className="mt-2 text-sm text-muted-foreground">
    Si tienes cualquier duda o el pago no funciona correctamente, estaremos
    encantados de ayudarte.
  </p>

  <Button
    className="mt-6"
    render={
      <a href="mailto:traderrunsignals@gmail.com" />
    }
  >
    Contacta con nosotros
  </Button>

  <p className="mt-4 text-sm text-primary font-medium">
    traderrunsignals@gmail.com
  </p>
</div>
    </section>
  )
}
