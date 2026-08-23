import {
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
    description: "Entender qué está haciendo el mercado.",
    icon: Search,
  },
  {
    number: "02",
    title: "Zonas",
    description: "Localizar niveles donde el precio puede reaccionar.",
    icon: BarChart3,
  },
  {
    number: "03",
    title: "Confirmación",
    description: "Esperar que el precio valide la oportunidad.",
    icon: Crosshair,
  },
  {
    number: "04",
    title: "Entrada",
    description: "Definir entrada, invalidación y objetivo.",
    icon: Target,
  },
  {
    number: "05",
    title: "Riesgo",
    description: "Gestionar el capital antes y después de ejecutar.",
    icon: ShieldCheck,
  },
]

export function Methodology() {
  return (
    <section
      id="metodologia"
      className="relative overflow-hidden border-y border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.045] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[300px] size-[400px] rounded-full bg-primary/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Metodología Trader Run
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cinco pasos.
            <span className="text-muted-foreground">
              {" "}Una forma de decidir.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            No buscamos anticipar el mercado. Seguimos un proceso definido
            antes de tomar una decisión.
          </p>

        </div>

        {/* =====================================================
            SISTEMA CENTRAL
        ===================================================== */}

        <div className="relative mx-auto mt-14 max-w-6xl">

          {/* LÍNEA DE CONEXIÓN */}

          <div
            aria-hidden="true"
            className="absolute left-[32px] right-[32px] top-[32px] hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block"
          />

          <div className="grid gap-3 md:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.number}
                  className="group relative"
                >

                  {/* CARD */}

                  <div className="relative h-full rounded-2xl border border-border/60 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5">

                    {/* ICONO */}

                    <div className="relative z-10 flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">

                      <Icon className="size-5" />

                    </div>

                    {/* NUMERO */}

                    <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Paso {step.number}
                    </p>

                    {/* TITULO */}

                    <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                      {step.title}
                    </h3>

                    {/* TEXTO */}

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                </div>
              )
            })}

          </div>

        </div>

        {/* =====================================================
            BLOQUE VISUAL CENTRAL
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-5xl">

          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.035]">

            {/* Glow */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[100px]"
            />

            <div className="relative grid items-center gap-8 p-7 sm:p-9 lg:grid-cols-[1fr_auto_1fr]">

              {/* IZQUIERDA */}

              <div className="text-center lg:text-right">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Antes de entrar
                </p>

                <p className="mt-2 font-display text-lg font-semibold">
                  Analizar
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Contexto · Zonas · Confirmación
                </p>

              </div>

              {/* CENTRO */}

              <div className="mx-auto flex size-20 items-center justify-center rounded-3xl border border-primary/25 bg-primary/10 shadow-lg shadow-primary/10">

                <BarChart3 className="size-8 text-primary" />

              </div>

              {/* DERECHA */}

              <div className="text-center lg:text-left">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Antes de arriesgar
                </p>

                <p className="mt-2 font-display text-lg font-semibold">
                  Gestionar
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Entrada · Invalidación · Riesgo
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-4 py-2">

            <ShieldCheck className="size-3.5 text-primary" />

            <span className="text-[10px] font-medium text-muted-foreground">
              El riesgo forma parte del sistema
            </span>

          </div>

          <p className="mt-5 text-lg font-medium tracking-tight sm:text-xl">

            No necesitas acertar siempre.

            <span className="text-muted-foreground">
              {" "}Necesitas saber qué hacer cuando el mercado no hace lo que esperabas.
            </span>

          </p>

        </div>

      </div>
    </section>
  )
}