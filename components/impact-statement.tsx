import {
  ArrowDown,
  BarChart3,
  ShieldCheck,
  Target,
} from "lucide-react"

const pillars = [
  {
    icon: BarChart3,
    title: "Lee el contexto",
    text: "Antes de buscar una entrada, entiende qué está haciendo el mercado.",
  },
  {
    icon: Target,
    title: "Define tu escenario",
    text: "Decide qué necesitas ver antes de considerar una oportunidad.",
  },
  {
    icon: ShieldCheck,
    title: "Controla el riesgo",
    text: "Conoce cuánto estás dispuesto a arriesgar antes de ejecutar.",
  },
]

export function ImpactStatement() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden border-y border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-4 py-2">
            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              La filosofía Trader Run
            </span>
          </div>

          <h2 className="mt-8 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Una operación no empieza
            <span className="block text-muted-foreground">
              cuando entras al mercado.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Empieza antes: cuando entiendes el contexto, defines qué esperas
            del precio y sabes exactamente cuánto estás dispuesto a arriesgar.
          </p>
        </div>

        {/* =====================================================
            FRASE CENTRAL
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-5xl sm:mt-16">
          <div className="relative overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.045] px-6 py-10 text-center sm:px-10 sm:py-12">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-primary/[0.08] blur-[100px]"
            />

            <div className="relative">
              <p className="font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                El mercado no te debe una operación.
              </p>

              <p className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-primary sm:text-3xl lg:text-4xl">
                Tu trabajo es estar preparado cuando aparezca.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TRES PRINCIPIOS
        ===================================================== */}

        <div className="mx-auto mt-8 grid max-w-5xl gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-border/60 bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/60"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/15">
                    <Icon className="size-4.5 text-primary" />
                  </span>

                  <span className="font-display text-xs font-semibold tracking-[0.15em] text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-lg font-semibold">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {pillar.text}
                </p>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Trader Run no está diseñado para enseñarte a perseguir operaciones.
            Está diseñado para enseñarte a
            <span className="font-medium text-foreground">
              {" "}tomar decisiones con un proceso.
            </span>
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#metodologia"
              className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                Descubre el método
              </span>

              <span className="flex size-8 items-center justify-center rounded-full border border-border/60 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}