import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Brain,
  LineChart,
  MessageSquare,
  Newspaper,
  Send,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react"

const freeFeatures = [
  {
    icon: Newspaper,
    title: "Noticias de mercado",
    description:
      "Actualizaciones y contenido relevante para mantenerte conectado con lo que ocurre en los mercados.",
  },
  {
    icon: TrendingUp,
    title: "Resultados compartidos",
    description:
      "Compartimos operaciones y resultados de la comunidad para mostrar parte del trabajo realizado dentro de Trader Run.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Un punto de entrada gratuito para conocer Trader Run y seguir nuestro contenido.",
  },
]

const vipFeatures = [
  {
    icon: BarChart3,
    title: "Análisis diarios",
    description:
      "Análisis de Nasdaq y S&P para preparar los principales escenarios de cada sesión.",
  },
  {
    icon: BellRing,
    title: "Señales diarias",
    description:
      "Operaciones compartidas con entrada, stop loss y objetivos definidos.",
  },
  {
    icon: WalletCards,
    title: "Cartera de acciones",
    description:
      "Seguimiento de oportunidades y posiciones dentro de nuestra cartera de acciones.",
  },
  {
    icon: Brain,
    title: "Psicotrading",
    description:
      "Acompañamiento para trabajar disciplina, gestión emocional y toma de decisiones.",
  },
]

export function Community() {
  return (
    <section
      id="comunidad"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 size-[500px] rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[500px] rounded-full bg-primary/[0.03] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
            <Send className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Comunidad Trader Run
            </span>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Elige cómo quieres
            <span className="block text-muted-foreground">
              seguir el mercado con nosotros.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Puedes empezar gratuitamente con nuestra comunidad o acceder a
            Trader Run VIP para recibir nuestro análisis y seguimiento diario
            del mercado.
          </p>
        </div>

        {/* =====================================================
            GRATIS + VIP
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-2">

          {/* ===================================================
              TELEGRAM GRATUITO
          =================================================== */}

          <div className="flex flex-col rounded-[30px] border border-border/60 bg-card/45 p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Comunidad
                </span>

                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  Telegram gratuito
                </h3>
              </div>

              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-secondary/30">
                <MessageSquare className="size-5 text-primary" />
              </div>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              La forma más sencilla de conocer Trader Run, seguir contenido de
              mercado y ver parte del trabajo que realizamos dentro de la
              comunidad.
            </p>

            <div className="mt-8 space-y-3">
              {freeFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-2xl border border-border/50 bg-background/20 p-4"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold">
                        {feature.title}
                      </p>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto pt-8">
              <div className="mb-5 flex items-end justify-between">
                <div>
                  <p className="font-display text-4xl font-semibold">
                    Gratis
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Sin suscripción
                  </p>
                </div>

                <span className="rounded-full border border-border/60 bg-secondary/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Punto de entrada
                </span>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl"
                render={
                  <a
                    href="https://t.me/tradingproNQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Entrar al Telegram gratuito
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>

          {/* ===================================================
              TRADER RUN VIP
          =================================================== */}

          <div className="relative flex flex-col overflow-hidden rounded-[30px] border border-primary/30 bg-primary/[0.045] p-7 sm:p-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-[300px] rounded-full bg-primary/[0.09] blur-[100px]"
            />

            <div className="relative flex items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Trader Run VIP
                  </span>

                  <span className="rounded-full bg-primary px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.13em] text-primary-foreground">
                    VIP
                  </span>
                </div>

                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  El mercado, cada día.
                </h3>
              </div>

              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
                <LineChart className="size-5 text-primary" />
              </div>
            </div>

            <p className="relative mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Para quienes quieren seguir nuestro trabajo diario de una forma
              más completa: análisis, operaciones, cartera de acciones y
              acompañamiento.
            </p>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {vipFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-primary/15 bg-background/25 p-4"
                  >
                    <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-4 text-primary" />
                    </div>

                    <p className="mt-4 text-sm font-semibold">
                      {feature.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="relative mt-auto pt-8">
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-end gap-1.5">
                    <p className="font-display text-4xl font-semibold">
                      49,95 €
                    </p>

                    <span className="mb-1 text-xs text-muted-foreground">
                      / mes
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Suscripción mensual
                  </p>
                </div>

                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Acceso completo
                </span>
              </div>

              <Button
                size="lg"
                className="h-12 w-full rounded-xl font-semibold"
                render={<a href="#precios" />}
              >
                Descubrir Trader Run VIP
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <p className="mt-3 text-center text-[10px] leading-5 text-muted-foreground">
                Las señales y análisis compartidos no constituyen asesoramiento
                financiero personalizado.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            ACADEMY
        ===================================================== */}

        <div className="relative mt-6 overflow-hidden rounded-[30px] border border-border/60 bg-card/40 p-7 sm:p-9">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 size-[350px] -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[110px]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Trader Run Academy
                </span>

                <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-[9px] font-semibold text-primary">
                  Septiembre
                </span>
              </div>

              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                ¿Quieres aprender a hacerlo tú?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                En septiembre llega nuestra formación de oferta y demanda:
                un curso estructurado para aprender la metodología Trader Run
                y llevarla al gráfico con nuestro indicador.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium">
                  Oferta y demanda
                </span>

                <span className="rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium">
                  Metodología Trader Run
                </span>

                <span className="rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium">
                  Indicador incluido
                </span>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="h-12 shrink-0 rounded-xl px-7"
              render={<a href="#academia" />}
            >
              Ver la Academy
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-7 text-muted-foreground">
            Tres formas distintas de formar parte de Trader Run:
            <span className="font-medium text-foreground">
              {" "}conocer nuestro trabajo, acompañarnos en el día a día o aprender nuestra metodología.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}