import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Gracias por compartir su conocimiento, por estar siempre presentes para apoyarnos, y por fomentar una comunidad de aprendizaje y compañerismo.",
    name: "Racolo",
    role: "Grupo VIP · 11 meses",
  },
  {
    quote:
      "En más de 30 años currando (y en lo personal también) he dado con muy pocas personas que se entreguen a ayudar a los demás como lo hacéis vosotros...",
    name: "Francisco",
    role: "Grupo VIP · 1 año",
  },
  {
    quote:
      "Cuando entré al grupo tenía la cuenta en CFD negativo y a día de hoy la llevo en +600.",
    name: "Cristian",
    role: "Grupo VIP · 5 meses",
  },
]

const featuredTestimonial = {
  quote:
    "Dejo el Nasdaq para swing, los últimos 30 días he sacado 985 € de beneficio.",
  name: "Rafael",
  role: "Miembro de la comunidad",
}

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="border-y border-border/60 bg-secondary/20"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">

        {/* CABECERA */}

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Testimonios
          </p>

          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            La experiencia de nuestra comunidad
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Más allá de las operaciones, nuestros alumnos valoran el
            acompañamiento, la metodología y el aprendizaje compartido
            dentro de Trader Run.
          </p>

        </div>

        {/* TESTIMONIO DESTACADO */}

        <div className="mx-auto mt-12 max-w-4xl">

          <figure className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 shadow-xl shadow-primary/5 sm:p-10">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative">

              <div className="flex items-center justify-between">

                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10">
                  <Quote className="size-5 text-primary" />
                </span>

                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current"
                    />
                  ))}
                </div>

              </div>

              <blockquote className="mt-7 max-w-3xl text-2xl font-semibold leading-relaxed tracking-tight sm:text-3xl">
                “{featuredTestimonial.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-border/60 pt-6">

                <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-display font-semibold text-primary">
                  {featuredTestimonial.name.charAt(0)}
                </span>

                <div>

                  <div className="font-semibold">
                    {featuredTestimonial.name}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {featuredTestimonial.role}
                  </div>

                </div>

              </figcaption>

            </div>

          </figure>

        </div>

        {/* TESTIMONIOS */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          {testimonials.map((t) => (

            <figure
              key={t.name}
              className="group flex flex-col rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-current"
                    />
                  ))}
                </div>

                <Quote className="size-5 text-primary/40" />

              </div>

              <blockquote className="mt-6 flex-1 text-pretty text-sm leading-7 text-muted-foreground">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">

                <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </span>

                <div>

                  <div className="text-sm font-semibold">
                    {t.name}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {t.role}
                  </div>

                </div>

              </figcaption>

            </figure>

          ))}

        </div>

        {/* CIERRE */}

        <div className="mx-auto mt-10 max-w-2xl text-center">

          <p className="text-sm leading-6 text-muted-foreground">
            Una comunidad no se construye únicamente con resultados.
            Se construye con conocimiento, disciplina y personas que
            comparten el mismo objetivo.
          </p>

        </div>

      </div>
    </section>
  )
}