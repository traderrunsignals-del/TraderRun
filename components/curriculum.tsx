import { Check } from "lucide-react"

const levels = [
  {
    tag: "Nivel 1",
    title: "Fundamentos del mercado",
    points: [
      "Cómo funcionan los mercados y los brokers",
      "Lectura de gráficos y velas japonesas",
      "Estructura de mercado y tendencias",
    ],
  },
  {
    tag: "Nivel 2",
    title: "Estrategia y ejecución",
    points: [
      "Soportes, resistencias y zonas clave",
      "Estrategias de tendencia y rango",
      "Plan de trading y backtesting",
    ],
  },
  {
    tag: "Nivel 3",
    title: "Riesgo y consistencia",
    points: [
      "Tamaño de posición y ratio riesgo/beneficio",
      "Gestión emocional bajo presión",
      "Journaling y mejora continua",
    ],
  },
]

export function Curriculum() {
  return (
    <section className="border-y border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Ruta de aprendizaje
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            De principiante a trader consistente
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Un camino claro dividido en tres niveles. Avanza a tu ritmo con
            lecciones prácticas y ejercicios reales.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {levels.map((lvl, i) => (
            <div
              key={lvl.tag}
              className="relative rounded-xl border border-border/60 bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/20">
                  {lvl.tag}
                </span>
                <span className="font-display text-2xl font-bold text-muted-foreground/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">
                {lvl.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {lvl.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
