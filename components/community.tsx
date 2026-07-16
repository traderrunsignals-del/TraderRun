import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Video, Trophy } from "lucide-react"

const stats = [
  { icon: Users, value: "12k+", label: "Miembros activos" },
  { icon: Video, value: "300+", label: "Sesiones en vivo" },
  { icon: Trophy, value: "4.9/5", label: "Valoración media" },
]

export function Community() {
  return (
    <section id="comunidad" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Nunca operas solo
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Una comunidad que te empuja a mejorar
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Detrás de TraderRun hay traders con años de experiencia que comparten
            su proceso cada día. Recibe feedback sobre tus operaciones, participa
            en retos y rodéate de gente que quiere lo mismo que tú: constancia.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border/60 bg-card p-4 text-center"
              >
                <s.icon className="mx-auto size-5 text-primary" />
                <div className="mt-2 font-display text-2xl font-bold">
                  {s.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="mt-8 h-11 px-6 text-sm"
            render={<a href="#precios" />}
          >
            Unirme a la comunidad
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card">
            <img
              src="/mentor.png"
              alt="Mentor de trading de TraderRun"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border/60 bg-background/85 p-4 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex size-2 rounded-full bg-primary" />
                <span className="text-xs font-medium text-primary">
                  En directo ahora
                </span>
              </div>
              <p className="mt-1 text-sm font-medium">
                Análisis de apertura de mercado
              </p>
              <p className="text-xs text-muted-foreground">
                842 traders conectados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
