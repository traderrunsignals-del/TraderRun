import {
  ArrowRight,
  BarChart3,
  Brain,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"

const principles = [
  {
    icon: BarChart3,
    title: "Experiencia de mercado",
    description:
      "Nuestro enfoque nace de años analizando mercados, estudiando el comportamiento del precio y trabajando sobre operativa real.",
  },
  {
    icon: GraduationCap,
    title: "Formación continua",
    description:
      "El mercado evoluciona y nosotros también. Seguimos estudiando, revisando y mejorando nuestra forma de analizar y enseñar.",
  },
  {
    icon: ShieldCheck,
    title: "Riesgo antes que resultado",
    description:
      "Una buena operación no se define únicamente por cómo termina. La gestión del riesgo forma parte de cada decisión.",
  },
  {
    icon: Brain,
    title: "Proceso y disciplina",
    description:
      "Trabajamos para que análisis, ejecución y psicología formen parte de un mismo proceso y no de decisiones aisladas.",
  },
]

export function AboutUs() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden border-b border-border/40 bg-secondary/[0.08]"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 size-[500px] rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            PARTE PRINCIPAL
        ===================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* IZQUIERDA */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Detrás de Trader Run
              </span>
            </div>

            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Primero fuimos
              <span className="block text-muted-foreground">
                traders.
              </span>
              <span className="block text-primary">
                Después nació Trader Run.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Trader Run nace de nuestra propia experiencia intentando
              entender el mercado, desarrollar una operativa y construir un
              proceso que pudiéramos repetir con criterio.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              Con el tiempo, ese proceso se convirtió en una metodología y en
              una comunidad donde compartimos lo que hacemos, cómo lo hacemos
              y qué hemos aprendido durante el camino.
            </p>
          </div>

          {/* DERECHA */}

          <div className="grid gap-3 sm:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon

              return (
                <div
                  key={principle.title}
                  className="group rounded-[24px] border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>

                  <h3 className="mt-5 font-display text-base font-semibold">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            HISTORIA / POSICIONAMIENTO
        ===================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.04] p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-[320px] rounded-full bg-primary/[0.08] blur-[110px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Nuestra forma de entender el trading
              </p>

              <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                El objetivo nunca fue encontrar
                <span className="text-muted-foreground">
                  {" "}una entrada perfecta.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Fue entender qué necesitábamos ver antes de operar, cuándo
                tenía sentido participar y cuánto estábamos dispuestos a
                arriesgar cuando el escenario no salía como esperábamos.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-background/35 p-6 sm:p-7">
              <p className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
                “No podemos controlar lo que hará el mercado.
                <span className="text-primary">
                  {" "}Sí podemos controlar cómo tomamos nuestras decisiones.”
                </span>
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-primary/50" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Trader Run
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            QUÉ ES TRADER RUN
        ===================================================== */}

        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Hoy
            </p>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Trader Run es más que una sola forma de acompañarte.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Hemos construido un ecosistema donde puedes conocer nuestro
              trabajo, seguir nuestra operativa diaria o aprender la metodología
              con la que analizamos el mercado.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-3">

            {/* GRATUITO */}

            <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                01
              </span>

              <h4 className="mt-5 font-display text-lg font-semibold">
                Comunidad
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Noticias, contenido y resultados para conocer nuestro trabajo.
              </p>
            </div>

            {/* VIP */}

            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                02
              </span>

              <h4 className="mt-5 font-display text-lg font-semibold">
                Trader Run VIP
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Análisis, señales, cartera y acompañamiento para seguir el
                mercado con nosotros.
              </p>
            </div>

            {/* ACADEMY */}

            <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                03
              </span>

              <h4 className="mt-5 font-display text-lg font-semibold">
                Trader Run Academy
              </h4>

              <p className="mt-2 text-xs leading-5 text-muted-foreground">
                Formación en oferta y demanda, metodología e indicador Trader
                Run.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mt-14 flex justify-center">
          <a
            href="#precios"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Descubre las opciones de Trader Run
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}