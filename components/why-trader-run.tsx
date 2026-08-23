import { Brain, Target, ShieldCheck } from "lucide-react"

const pillars = [
  {
    number: "01",
    title: "Entender",
    text: "Leer el mercado antes de tomar una decisión.",
    icon: Brain,
  },
  {
    number: "02",
    title: "Decidir",
    text: "Seguir un proceso claro y estructurado.",
    icon: Target,
  },
  {
    number: "03",
    title: "Gestionar",
    text: "Proteger el capital y ejecutar con disciplina.",
    icon: ShieldCheck,
  },
]

export function WhyTraderRun() {
  return (
    <section
      id="porque-trader-run"
      className="relative overflow-hidden border-y border-border/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-20">

        {/* CABECERA */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            La filosofía Trader Run
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tres cosas antes de
            <span className="text-muted-foreground">
              {" "}entrar al mercado.
            </span>
          </h2>

        </div>

        {/* PILARES */}

        <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/50 md:grid-cols-3">

          {pillars.map((pillar) => {
            const Icon = pillar.icon

            return (
              <div
                key={pillar.number}
                className="bg-card/80 p-6 transition-colors duration-300 hover:bg-primary/[0.035] sm:p-7"
              >

                {/* NUMERO + ICONO */}

                <div className="flex items-center justify-between">

                  <span className="font-display text-xs font-semibold text-primary">
                    {pillar.number}
                  </span>

                  <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </div>

                </div>

                {/* TITULO */}

                <h3 className="mt-7 font-display text-xl font-semibold">
                  {pillar.title}
                </h3>

                {/* TEXTO */}

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {pillar.text}
                </p>

              </div>
            )
          })}

        </div>

        {/* FRASE */}

        <div className="mx-auto mt-10 max-w-2xl text-center">

          <p className="text-sm leading-6 text-muted-foreground">
            No buscamos que dependas de una señal.
            <span className="font-medium text-foreground">
              {" "}Buscamos que entiendas por qué tomas cada decisión.
            </span>
          </p>

        </div>

      </div>
    </section>
  )
}