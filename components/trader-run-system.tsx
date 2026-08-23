import {
  BarChart3,
  Check,
  Crosshair,
  Search,
  ShieldCheck,
  Target,
} from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Entender",
    text: "Contexto",
    icon: Search,
  },
  {
    number: "02",
    title: "Analizar",
    text: "Zonas",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Confirmar",
    text: "Precio",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Ejecutar",
    text: "Plan",
    icon: Target,
  },
  {
    number: "05",
    title: "Gestionar",
    text: "Riesgo",
    icon: ShieldCheck,
  },
]

export function TraderRunSystem() {
  return (
    <section
      id="sistema"
      className="relative overflow-hidden border-y border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">

            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Sistema Trader Run
            </span>

          </div>

          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Antes de entrar,
            <span className="text-muted-foreground">
              {" "}hay un proceso.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Una operación no empieza cuando pulsas comprar o vender.
          </p>

        </div>

        {/* =====================================================
            SISTEMA
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-6xl">

          <div className="relative rounded-[28px] border border-border/60 bg-card/70 p-5 shadow-2xl shadow-black/5 backdrop-blur-sm sm:p-8">

            {/* Línea desktop */}

            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-[68px] hidden h-px bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 md:block"
            />

            <div className="relative grid gap-3 md:grid-cols-5">

              {steps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.number}
                    className="group relative"
                  >

                    <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/[0.035] md:block md:border-0 md:bg-transparent md:p-3 md:text-center md:hover:translate-y-0 md:hover:border-0 md:hover:bg-transparent">

                      {/* ICONO */}

                      <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105 md:mx-auto">

                        <Icon className="size-5" />

                      </div>

                      {/* TEXTO */}

                      <div className="min-w-0">

                        <p className="mt-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary md:mt-5">
                          {step.number}
                        </p>

                        <h3 className="mt-1 font-display text-base font-semibold md:text-lg">
                          {step.title}
                        </h3>

                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {step.text}
                        </p>

                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

        {/* =====================================================
            FRASE CENTRAL
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <div className="mx-auto flex items-center justify-center gap-3">

            <div className="h-px w-10 bg-border" />

            <Check className="size-4 text-primary" />

            <div className="h-px w-10 bg-border" />

          </div>

          <p className="mt-5 font-display text-xl font-medium tracking-tight sm:text-2xl">

            No buscamos adivinar el mercado.

            <span className="text-muted-foreground">
              {" "}Buscamos estar preparados para él.
            </span>

          </p>

        </div>

        {/* =====================================================
            MINI BLOQUE FINAL
        ===================================================== */}

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-3 py-1.5">

            <ShieldCheck className="size-3.5 text-primary" />

            <span className="text-[10px] font-medium text-muted-foreground">
              Metodología
            </span>

          </span>

          <span className="hidden text-muted-foreground sm:block">
            +
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-3 py-1.5">

            <Target className="size-3.5 text-primary" />

            <span className="text-[10px] font-medium text-muted-foreground">
              Gestión
            </span>

          </span>

          <span className="hidden text-muted-foreground sm:block">
            +
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-3 py-1.5">

            <BarChart3 className="size-3.5 text-primary" />

            <span className="text-[10px] font-medium text-muted-foreground">
              Disciplina
            </span>

          </span>

        </div>

      </div>
    </section>
  )
}