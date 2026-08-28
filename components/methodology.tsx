import {
  ArrowRight,
  BarChart3,
  Crosshair,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Contexto",
    description:
      "Entender qué está haciendo el mercado antes de buscar una oportunidad.",
    icon: Search,
  },
  {
    number: "02",
    title: "Zonas",
    description:
      "Identificar los niveles donde el precio puede ofrecer una reacción relevante.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Confirmación",
    description:
      "Esperar a que el precio valide el escenario antes de tomar una decisión.",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Entrada",
    description:
      "Definir el punto de entrada, la invalidación y el objetivo de la operación.",
    icon: Target,
  },
  {
    number: "05",
    title: "Riesgo",
    description:
      "Determinar cuánto capital estás dispuesto a arriesgar antes de ejecutar.",
    icon: ShieldCheck,
  },
]

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[500px] rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 size-[500px] rounded-full bg-primary/[0.03] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">
        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Metodología Trader Run
              </span>
            </div>

            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Cinco pasos.
              <span className="block text-muted-foreground">
                Una forma de decidir.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
              No buscamos anticipar cada movimiento del mercado. Seguimos un
              proceso para analizar, esperar y actuar únicamente cuando el
              escenario cumple nuestras condiciones.
            </p>
          </div>
        </div>

        {/* =====================================================
            PROCESO
        ===================================================== */}

        <div className="relative mt-16 sm:mt-20">
          {/* Línea desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-border/70 lg:block"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-border/60 bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/70"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                      <Icon className="size-4.5 text-primary" />
                    </span>

                    <span className="font-display text-xs font-semibold tracking-[0.16em] text-muted-foreground/35">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <div className="mt-6 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground/50 lg:hidden">
                      <span>Siguiente</span>
                      <ArrowRight className="size-3" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            SISTEMA CENTRAL
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.04] p-7 sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
            {/* ANTES DE ENTRAR */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Antes de entrar
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Analiza
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Contexto, zonas y confirmación. Primero entiende qué está
                ocurriendo y espera a que el precio valide tu escenario.
              </p>
            </div>

            {/* CENTRO */}
            <div className="flex justify-center">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-background/50">
                <Target className="size-5 text-primary" />
              </div>
            </div>

            {/* ANTES DE ARRIESGAR */}
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Antes de arriesgar
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold">
                Gestiona
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Entrada, invalidación y riesgo. La operación se define antes de
                ejecutarla, no mientras el mercado está en movimiento.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.045] px-4 py-2">
            <ShieldCheck className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              El riesgo forma parte del sistema
            </span>
          </div>

          <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
            No necesitas acertar siempre. Necesitas saber
            <span className="font-medium text-foreground">
              {" "}qué estás buscando, dónde te equivocas y cuánto puedes perder.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}