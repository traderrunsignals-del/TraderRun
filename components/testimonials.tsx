import {
  MessageSquare,
  Quote,
  Users,
} from "lucide-react"

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
      className="relative overflow-hidden border-b border-border/40 bg-secondary/[0.10]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
            <Users className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Comunidad Trader Run
            </span>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Aprender acompañado
            <span className="block text-muted-foreground">
              también forma parte del proceso.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            Detrás de los gráficos hay personas aprendiendo, compartiendo
            experiencias y trabajando cada día para mejorar su forma de operar.
          </p>
        </div>

        {/* =====================================================
            TESTIMONIO DESTACADO
        ===================================================== */}

        <div className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.045] p-7 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/[0.08] blur-[100px]"
          />

          <Quote className="relative size-7 text-primary/60" />

          <blockquote className="relative mt-6 max-w-3xl font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            “{featuredTestimonial.quote}”
          </blockquote>

          <div className="relative mt-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary ring-1 ring-primary/20">
              {featuredTestimonial.name.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-semibold">
                {featuredTestimonial.name}
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {featuredTestimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            TESTIMONIOS
        ===================================================== */}

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[260px] flex-col rounded-[26px] border border-border/60 bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
            >
              <Quote className="size-5 text-primary/50" />

              <blockquote className="mt-6 flex-1 text-sm leading-7 text-muted-foreground">
                “{testimonial.quote}”
              </blockquote>

              <div className="mt-7 border-t border-border/50 pt-5">
                <p className="text-sm font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <MessageSquare className="mx-auto size-4 text-primary" />

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Una comunidad aporta algo que ningún vídeo puede ofrecer por sí
            solo:
            <span className="font-medium text-foreground">
              {" "}contrastar ideas, resolver dudas y seguir aprendiendo junto a otros traders.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}