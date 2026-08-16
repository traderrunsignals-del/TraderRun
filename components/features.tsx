import {
  BarChart3,
  Bell,
  Brain,
  MessageSquare,
  ShieldCheck,
  Target,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Formación estructurada",
    desc: "Aprende a interpretar el mercado paso a paso, desde los fundamentos hasta la construcción de una operativa completa.",
  },
  {
    icon: Target,
    title: "Estrategia Trader Run",
    desc: "Una metodología clara para analizar el precio, identificar oportunidades y tomar decisiones con un plan definido.",
  },
  {
    icon: Bell,
    title: "Señales y análisis en tiempo real",
    desc: "Accede a operaciones, entradas, stop loss y objetivos acompañados del razonamiento detrás de cada escenario.",
  },
  {
    icon: ShieldCheck,
    title: "Gestión del riesgo",
    desc: "Aprende a proteger tu capital mediante reglas de riesgo, tamaño de posición, exposición y control del drawdown.",
  },
  {
    icon: Brain,
    title: "Psicología y disciplina",
    desc: "Desarrolla la mentalidad necesaria para ejecutar tu estrategia sin dejar que el miedo, la codicia o la impulsividad condicionen tus decisiones.",
  },
  {
    icon: MessageSquare,
    title: "Acompañamiento y comunidad",
    desc: "No tienes que aprender solo. Resuelve dudas, comparte análisis y avanza junto a una comunidad activa de traders.",
  },
]

export function Features() {
  return (
    <section
      id="programa"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >

      {/* CABECERA */}

      <div className="mx-auto max-w-2xl text-center">

        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Más que señales
        </p>

        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Un sistema completo para mejorar tu trading
        </h2>

        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Formación, estrategia, análisis, gestión del riesgo y
          acompañamiento. Todo lo necesario para desarrollar una operativa
          con criterio propio.
        </p>

      </div>

      {/* FEATURES */}

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature, index) => {
          const Icon = feature.icon

          return (
            <div
              key={feature.title}
              className={`group relative rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl ${
                index === 0
                  ? "lg:shadow-primary/5"
                  : ""
              }`}
            >

              {/* Número */}

              <div className="absolute right-6 top-6 text-xs font-semibold tracking-widest text-muted-foreground/30">
                0{index + 1}
              </div>

              {/* Icono */}

              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
                <Icon className="size-5" />
              </span>

              {/* Contenido */}

              <h3 className="mt-6 font-display text-lg font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {feature.desc}
              </p>

            </div>
          )
        })}

      </div>

      {/* CIERRE */}

      <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-primary/20 bg-primary/5 p-7 text-center">

        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          El objetivo
        </p>

        <p className="mt-3 text-lg font-semibold leading-relaxed">
          No queremos que dependas eternamente de una señal.
        </p>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Queremos que entiendas por qué se toma una operación, aprendas a
          gestionar el riesgo y desarrolles la capacidad de tomar tus propias
          decisiones.
        </p>

      </div>

    </section>
  )
}