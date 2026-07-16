import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pasé de operar por impulso a tener un plan claro. Lo que más valoro es la gestión de riesgo, cambió por completo mi forma de operar.",
    name: "Laura M.",
    role: "Miembro Pro · 8 meses",
  },
  {
    quote:
      "Las sesiones en vivo son oro puro. Ver cómo piensan antes de entrar a una operación me enseñó más que cualquier curso.",
    name: "Diego R.",
    role: "Miembro Elite · 1 año",
  },
  {
    quote:
      "La comunidad marca la diferencia. Siempre hay alguien dispuesto a revisar tu análisis y darte feedback honesto.",
    name: "Carla V.",
    role: "Miembro Pro · 5 meses",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="border-y border-border/60 bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonios
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Historias reales de nuestra comunidad
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
