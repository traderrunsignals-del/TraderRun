import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Gracias por compartir su conocimiento, por estar siempre presentes para apoyarnos, y por fomentar una comunidad de aprendizaje y compañerismo.",
    name: "Racolo",
    role: "Grupo Vip · 11 meses",
  },
  {
    quote:
      "En mas de 30 años currando (y en lo personal también) he dado con muy pocas personas que se entreguen a ayudar a los demás como lo hacéis vosotros...",
    name: "Francisco.",
    role: "Grupo Vip · 1 año",
  },
  {
    quote:
      "Cuando entré al grupo tenía la cuenta en cfd negativo y a día de hoy la lleno en +600",
    name: "Cristian",
    role: "Grupo Vip · 5 meses",
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
