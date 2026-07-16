import {
  LineChart,
  Bell,
  Brain,
  MessageSquare,
} from "lucide-react"

const features = [
  
  
  {
    icon: Bell,
    title: "Señales y alertas",
    desc: "Ideas de trading con puntos de entrada, stop loss y objetivos, siempre con su razonamiento.",
  },
  {
    icon: LineChart,
    title: "Gestión de riesgo",
    desc: "Aprende a proteger tu capital con reglas claras de posición, exposición y drawdown.",
  },
  {
    icon: Brain,
    title: "Psicología del trading",
    desc: "Controla el miedo y la codicia con marcos mentales y rutinas que usan los profesionales.",
  },
  {
    icon: MessageSquare,
    title: "Comunidad activa",
    desc: "Un espacio para compartir análisis, resolver dudas y crecer junto a otros traders.",
  },
]

export function Features() {
  return (
    <section id="programa" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          ¿Por qué elegir TraderRun?
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Todo lo que necesitas para mejorar tu trading
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Recibe señales de trading, análisis del mercado y el apoyo de una comunidad activa para ayudarte a tomar mejores decisiones.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
              <f.icon className="size-5" />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
