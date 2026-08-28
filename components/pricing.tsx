"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Brain,
  Check,
  Crown,
  GraduationCap,
  LineChart,
  MessageCircle,
  Newspaper,
  Send,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
  X,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "Fundamentos del Trading",
    desc: "Las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar.",
  },
  {
    number: "02",
    title: "Cómo funcionan los mercados",
    desc: "Comprende cómo se mueven los mercados, quién participa y por qué cambia el precio.",
  },
  {
    number: "03",
    title: "Conociendo tu plataforma de trading",
    desc: "Configura tu espacio de trabajo y aprende a utilizar las herramientas necesarias.",
  },
  {
    number: "04",
    title: "Aprende a leer el precio",
    desc: "Interpreta las velas y comienza a leer el comportamiento del precio de forma estructurada.",
  },
  {
    number: "05",
    title: "La estructura del mercado",
    desc: "Identifica tendencias, impulsos y retrocesos y comprende cómo se estructura el movimiento.",
  },
  {
    number: "06",
    title: "Soportes, resistencias y zonas clave",
    desc: "Aprende a identificar zonas relevantes e incorporarlas al análisis de oferta y demanda.",
  },
  {
    number: "07",
    title: "Gestión del riesgo",
    desc: "Define el riesgo, protege el capital y establece una gestión coherente antes de operar.",
  },
  {
    number: "08",
    title: "Psicología y disciplina",
    desc: "Trabaja la ejecución del plan, la disciplina y la gestión emocional.",
  },
  {
    number: "09",
    title: "Estrategia Trader Run",
    desc: "Une oferta, demanda, estructura y gestión dentro de un proceso operativo definido.",
  },
  {
    number: "10",
    title: "Casos prácticos",
    desc: "Lleva la metodología al gráfico mediante ejemplos prácticos de aplicación.",
  },
]

const freeFeatures = [
  {
    icon: Newspaper,
    text: "Noticias y actualidad de mercado",
  },
  {
    icon: TrendingUp,
    text: "Resultados y operaciones compartidas",
  },
  {
    icon: Users,
    text: "Acceso a la comunidad pública",
  },
]

const vipFeatures = [
  {
    icon: LineChart,
    text: "Análisis diarios de Nasdaq y S&P",
  },
  {
    icon: BellRing,
    text: "Señales diarias con entrada, SL y objetivos",
  },
  {
    icon: WalletCards,
    text: "Cartera de acciones en seguimiento",
  },
  {
    icon: Brain,
    text: "Acompañamiento y psicotrading",
  },
  {
    icon: BarChart3,
    text: "Premarket y planificación semanal",
  },
  {
    icon: Users,
    text: "Comunidad privada",
  },
]

const academyFeatures = [
  "10 módulos de formación",
  "Formación en oferta y demanda",
  "Metodología Trader Run",
  "Estrategia completa paso a paso",
  "Gestión del riesgo y psicología",
  "Casos prácticos sobre el gráfico",
  "Indicador Trader Run para TradingView",
  "Acceso ilimitado al indicador",
  "2 meses de soporte",
]

export function Pricing() {
  const [showCourseInfo, setShowCourseInfo] = useState(false)

  return (
    <section
      id="precios"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[650px] w-[950px] -translate-x-1/2 rounded-full bg-primary/[0.04] blur-[160px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Acceso Trader Run
            </span>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Tres formas de
            <span className="block text-muted-foreground">
              formar parte de Trader Run.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Empieza gratis, acompáñanos en nuestra operativa diaria o aprende
            la metodología Trader Run con nuestra formación completa.
          </p>
        </div>

        {/* =====================================================
            TRES OPCIONES
        ===================================================== */}

        <div className="mt-16 grid gap-5 lg:grid-cols-3">

          {/* ===================================================
              GRATIS
          =================================================== */}

          <article className="flex flex-col rounded-[28px] border border-border/60 bg-card/45 p-7">
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/30">
                <Send className="size-5 text-primary" />
              </div>

              <span className="rounded-full border border-border/60 bg-secondary/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Comunidad
              </span>
            </div>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Telegram gratuito
              </p>

              <div className="mt-2 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold">
                  Gratis
                </span>
              </div>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">
                La puerta de entrada a Trader Run para seguir contenido,
                noticias y parte del trabajo que compartimos con la comunidad.
              </p>
            </div>

            <div className="my-6 h-px bg-border/60" />

            <div className="space-y-4">
              {freeFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.text}
                    className="flex items-start gap-3"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-3.5 text-primary" />
                    </div>

                    <span className="pt-1 text-xs leading-5 text-muted-foreground">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-auto pt-8">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl font-semibold"
                render={
                  <a
                    href="https://t.me/tradingproNQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Entrar gratis
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                Acceso mediante Telegram
              </p>
            </div>
          </article>

          {/* ===================================================
              VIP
          =================================================== */}

          <article className="relative flex flex-col overflow-hidden rounded-[28px] border border-primary/35 bg-primary/[0.055] p-7 shadow-xl shadow-primary/5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-[280px] rounded-full bg-primary/[0.10] blur-[100px]"
            />

            <div className="relative flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Crown className="size-5 text-primary" />
              </div>

              <span className="rounded-full bg-primary px-3 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-primary-foreground">
                Más completo
              </span>
            </div>

            <div className="relative mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Trader Run VIP
              </p>

              <div className="mt-2 flex items-end gap-1.5">
                <span className="font-display text-4xl font-semibold">
                  49,95 €
                </span>

                <span className="mb-1 text-xs text-muted-foreground">
                  / mes
                </span>
              </div>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">
                Para quienes quieren seguir nuestro análisis, operaciones y
                acompañamiento diario de una forma más completa.
              </p>
            </div>

            <div className="relative my-6 h-px bg-primary/15" />

            <div className="relative space-y-4">
              {vipFeatures.map((feature) => {
                const Icon = feature.icon

                return (
                  <div
                    key={feature.text}
                    className="flex items-start gap-3"
                  >
                    <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-3.5 text-primary" />
                    </div>

                    <span className="pt-1 text-xs leading-5">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div>


            <div className="relative mt-auto pt-6">
              <Button
                className="h-12 w-full rounded-xl font-semibold"
                render={
                  <a
                    href="https://buy.stripe.com/3cIaEQ7hMdL00Kr3Qg8so05"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Acceder a Trader Run VIP
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <p className="mt-3 text-center text-[10px] leading-4 text-muted-foreground">
                Suscripción mensual · Cancela cuando quieras
              </p>
            </div>
          </article>

          {/* ===================================================
              ACADEMY
          =================================================== */}

          <article className="flex flex-col rounded-[28px] border border-border/60 bg-card/45 p-7">
            <div className="flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                <GraduationCap className="size-5 text-primary" />
              </div>

              <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-primary">
                Septiembre
              </span>
            </div>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                Trader Run Academy
              </p>

              <div className="mt-2">
                <span className="text-xs text-muted-foreground line-through">
                  1.150 €
                </span>

                <div className="flex items-end gap-2">
                  <span className="font-display text-4xl font-semibold">
                    825 €
                  </span>

                  <span className="mb-1 text-xs text-muted-foreground">
                    pago único
                  </span>
                </div>
              </div>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-muted-foreground">
                Formación de oferta y demanda, metodología Trader Run e
                indicador para aprender a construir tu propia operativa.
              </p>
            </div>

            <div className="my-6 h-px bg-border/60" />

            <div className="space-y-3">
              {academyFeatures.slice(0, 6).map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-3 text-primary" />
                  </span>

                  <span className="text-xs leading-5 text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-primary/15 bg-primary/[0.035] p-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-primary">
                Incluido
              </p>

              <p className="mt-2 text-xs font-medium">
                Indicador Trader Run + 2 meses de soporte
              </p>
            </div>

            <div className="mt-auto pt-6">
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl font-semibold"
                onClick={() => setShowCourseInfo(true)}
              >
                Ver programa completo
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                Promoción de lanzamiento · Disponible en septiembre
              </p>
            </div>
          </article>
        </div>

        {/* =====================================================
            DIFERENCIA ENTRE PRODUCTOS
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-5xl rounded-[26px] border border-border/60 bg-secondary/[0.10] p-6 sm:p-7">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Quiero empezar
              </p>

              <p className="mt-2 text-sm font-semibold">
                Telegram gratuito
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Quiero seguimiento diario
              </p>

              <p className="mt-2 text-sm font-semibold text-primary">
                Trader Run VIP
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Quiero aprender la metodología
              </p>

              <p className="mt-2 text-sm font-semibold">
                Trader Run Academy
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CONTACTO
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center">
          <MessageCircle className="mx-auto size-5 text-primary" />

          <h3 className="mt-4 font-display text-lg font-semibold">
            ¿No sabes qué opción elegir?
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Escríbenos y te ayudaremos a entender qué opción encaja mejor con
            lo que estás buscando.
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
        </div>
      </div>

      {/* =====================================================
          ÚNICO MODAL — ACADEMY
      ===================================================== */}

      {showCourseInfo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={() => setShowCourseInfo(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-border/60 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CERRAR */}

            <button
              type="button"
              onClick={() => setShowCourseInfo(false)}
              className="absolute right-5 top-5 z-20 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground backdrop-blur transition hover:border-primary/30 hover:text-foreground"
              aria-label="Cerrar programa"
            >
              <X className="size-5" />
            </button>

            {/* CABECERA */}

            <div className="relative overflow-hidden border-b border-border/60 bg-primary/[0.04] p-7 sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 size-[400px] rounded-full bg-primary/[0.08] blur-[120px]"
              />

              <div className="relative max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">
                  <GraduationCap className="size-3.5 text-primary" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Trader Run Academy
                  </span>
                </div>

                <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                  Aprende a leer la oferta y la demanda.
                  <span className="block text-muted-foreground">
                    Construye tu propia operativa.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Diez módulos para avanzar desde los fundamentos hasta la
                  aplicación de la metodología Trader Run, con nuestro
                  indicador como herramienta de apoyo sobre el gráfico.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px]">
                    10 módulos
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px]">
                    Oferta y demanda
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px]">
                    Indicador incluido
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px]">
                    Acceso ilimitado
                  </span>
                </div>
              </div>
            </div>

            {/* CONTENIDO */}

            <div className="p-7 sm:p-10">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  El programa
                </p>

                <h3 className="mt-2 font-display text-2xl font-semibold">
                  Diez módulos. Un proceso progresivo.
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                  Cada módulo incorpora una nueva pieza hasta llegar a la
                  estrategia y su aplicación práctica.
                </p>
              </div>

              {/* MÓDULOS */}

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {modules.map((module) => (
                  <article
                    key={module.number}
                    className="rounded-2xl border border-border/60 bg-secondary/[0.10] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[10px] font-bold text-primary">
                        {module.number}
                      </span>

                      <div>
                        <h4 className="text-sm font-semibold">
                          {module.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text-muted-foreground">
                          {module.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* INDICADOR + SOPORTE */}

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6">
                  <BarChart3 className="size-5 text-primary" />

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    Indicador Trader Run
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Acceso desde TradingView a la herramienta diseñada para
                    acompañar visualmente los conceptos trabajados durante la
                    formación.
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      TradingView
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      Sin instalaciones
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      Acceso ilimitado
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-border/60 bg-secondary/[0.10] p-6">
                  <MessageCircle className="size-5 text-primary" />

                  <h3 className="mt-5 font-display text-xl font-semibold">
                    2 meses de soporte
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Durante los primeros dos meses tendrás soporte para resolver
                    dudas relacionadas con la formación, la metodología y el
                    uso del indicador.
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      Resolución de dudas
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      Acompañamiento
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                      <Check className="size-3.5 text-primary" />
                      Aplicación de la metodología
                    </div>
                  </div>
                </div>
              </div>

              {/* PRECIO */}

              <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.045] p-6 sm:p-8">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Promoción de lanzamiento
                    </p>

                    <span className="mt-2 block text-sm text-muted-foreground line-through">
                      1.150 €
                    </span>

                    <div className="mt-1 flex items-end gap-2">
                      <span className="font-display text-4xl font-semibold sm:text-5xl">
                        825 €
                      </span>

                      <span className="mb-1 text-xs text-muted-foreground">
                        pago único
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground">
                      Disponible en septiembre
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 sm:items-end">
                    <Button
                      className="h-12 px-8 font-semibold"
                      onClick={() =>
                        alert(
                          "La Academia Trader Run estará disponible en septiembre."
                        )
                      }
                    >
                      Unirme al curso
                      <ArrowRight className="ml-2 size-4" />
                    </Button>

                    <span className="text-[10px] text-muted-foreground">
                      Lanzamiento: 825 € · Después: 1.150 €
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}