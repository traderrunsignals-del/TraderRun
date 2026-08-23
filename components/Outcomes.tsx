import {
  BarChart3,
  Brain,
  Check,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react"

const outcomes = [
  {
    icon: BarChart3,
    title: "Leer el mercado con estructura",
    desc: "Aprenderás a interpretar el precio, identificar su estructura y entender qué está ocurriendo antes de tomar una decisión.",
  },
  {
    icon: Target,
    title: "Tener un plan de trading",
    desc: "Dejarás de entrar al mercado por intuición y comenzarás a trabajar con un proceso definido para analizar tus operaciones.",
  },
  {
    icon: ShieldCheck,
    title: "Gestionar tu riesgo",
    desc: "Aprenderás a definir cuánto arriesgar, proteger tu capital y entender por qué la gestión del riesgo es una parte fundamental de cualquier operativa.",
  },
  {
    icon: Brain,
    title: "Operar con más disciplina",
    desc: "Trabajarás la parte psicológica para aprender a respetar tu estrategia incluso cuando el mercado no se comporte como esperabas.",
  },
  {
    icon: TrendingUp,
    title: "Aplicar una metodología",
    desc: "Aprenderás nuestra forma de analizar el mercado y cómo utilizar el indicador Trader Run como herramienta de apoyo.",
  },
  {
    icon: Check,
    title: "Tomar tus propias decisiones",
    desc: "El objetivo no es que dependas de señales. Queremos que entiendas por qué se plantea una operación y puedas desarrollar tu propio criterio.",
  },
]

export function Outcomes() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* FONDO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">

        {/* CABECERA */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            El objetivo de la Academia
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            No se trata solo de aprender trading.
            <span className="block text-muted-foreground">
              Se trata de aprender a tomar decisiones.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            La Academia Trader Run está diseñada para que puedas pasar de
            observar el mercado sin una estructura clara a entender qué estás
            viendo, por qué ocurre y cómo actuar siguiendo un plan.
          </p>

        </div>

        {/* RESULTADOS */}

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {outcomes.map((outcome) => {
            const Icon = outcome.icon

            return (
              <article
                key={outcome.title}
                className="group rounded-3xl border border-border/60 bg-card/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
              >

                <div className="flex size-11 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5" />
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                  {outcome.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {outcome.desc}
                </p>

              </article>
            )
          })}

        </div>

        {/* CIERRE */}

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/20 bg-primary/[0.045] p-7 text-center sm:p-9">

          <div className="mx-auto flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Target className="size-5" />
          </div>

          <p className="mt-5 font-display text-xl font-semibold tracking-tight sm:text-2xl">
            El objetivo final es que entiendas lo que haces.
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            No queremos que dependas eternamente de una señal, de una persona
            o de una entrada concreta. Queremos darte las herramientas para
            que puedas analizar, planificar y tomar decisiones con criterio
            propio.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">

            {[
              "Criterio",
              "Metodología",
              "Gestión del riesgo",
              "Disciplina",
              "Independencia",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-border/60 bg-background/60 px-3.5 py-1.5 text-[10px] font-semibold text-muted-foreground"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}