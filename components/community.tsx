import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MessageSquare,
  Newspaper,
  Play,
  Send,
  TrendingUp,
  Users,
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

const youtubeFeatures = [
  {
    icon: Play,
    title: "Análisis en vídeo",
    description:
      "Análisis de mercado explicados paso a paso, en formato vídeo.",
  },
  {
    icon: TrendingUp,
    title: "Metodología Trader Run",
    description:
      "Vídeos que desarrollan la estrategia y la forma de aplicarla sobre el gráfico.",
  },
  {
    icon: Users,
    title: "Contenido educativo",
    description:
      "Explicaciones pensadas para aprender, no solo para ver resultados.",
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
            Síguenos gratis
            <span className="block text-muted-foreground">
              en Telegram y en YouTube.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Dos formas gratuitas y sin compromiso de conocer Trader Run,
            seguir nuestro contenido y ver parte del trabajo que compartimos
            con la comunidad.
          </p>
        </div>

        {/* =====================================================
            TELEGRAM + YOUTUBE
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
              YOUTUBE
          =================================================== */}

          <div className="flex flex-col rounded-[30px] border border-border/60 bg-card/45 p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Comunidad
                </span>

                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight">
                  Canal de YouTube
                </h3>
              </div>

              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-secondary/30">
                <Play className="size-5 text-primary" />
              </div>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Vídeos de análisis de mercado y metodología Trader Run,
              explicados paso a paso y disponibles de forma gratuita.
            </p>

            <div className="mt-8 space-y-3">
              {youtubeFeatures.map((feature) => {
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
                  Contenido gratuito
                </span>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full rounded-xl"
                render={
                  <a
                    href="https://www.youtube.com/@Trader_run"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Ver canal de YouTube
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-sm leading-7 text-muted-foreground">
            Dos formas gratuitas de seguir a Trader Run:
            <span className="font-medium text-foreground">
              {" "}en Telegram y en YouTube.
            </span>{" "}
            Si buscas análisis diario, cartera de acciones o formación
            completa, descubre{" "}
            <a
              href="#precios"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Trader Run VIP y Academy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}