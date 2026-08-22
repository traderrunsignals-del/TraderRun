import {
  BarChart3,
  Brain,
  GraduationCap,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react"

const pillars = [
  {
    icon: TrendingUp,
    title: "+7 años de experiencia",
    desc: "Años de experiencia operando y analizando los mercados financieros nos han permitido desarrollar una visión práctica y realista del trading.",
  },
  {
    icon: GraduationCap,
    title: "Formación continua",
    desc: "El mercado evoluciona constantemente. Por eso seguimos formándonos, analizando y perfeccionando nuestra metodología para seguir avanzando.",
  },
  {
    icon: Target,
    title: "Una metodología propia",
    desc: "Trabajamos con una metodología estructurada que combina análisis del precio, estrategia, contexto y toma de decisiones.",
  },
  {
    icon: ShieldCheck,
    title: "Gestión del riesgo",
    desc: "Entendemos el riesgo como una parte fundamental del trading. Aprender a proteger el capital es tan importante como encontrar una oportunidad.",
  },
  {
    icon: Brain,
    title: "Psicología y disciplina",
    desc: "Una buena estrategia necesita una correcta ejecución. Trabajamos también la disciplina y el control emocional que exige operar en los mercados.",
  },
  {
    icon: BarChart3,
    title: "Entender, no depender",
    desc: "Nuestro objetivo es que aprendas a interpretar el mercado y desarrolles el criterio necesario para tomar tus propias decisiones.",
  },
]

export function AboutUs() {
  return (
    <section className="border-y border-border/60 bg-secondary/20">

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">

        {/* CABECERA */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre Trader Run
          </p>

          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Más de 7 años de experiencia detrás de una metodología propia
          </h2>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Trader Run nace de años de experiencia real en los mercados
            financieros, formación continua y una búsqueda constante por
            entender cómo se mueve el precio y cómo tomar mejores decisiones
            frente al mercado.
          </p>

        </div>

        {/* HISTORIA */}

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-primary/20 bg-card p-8 shadow-xl shadow-primary/5 sm:p-10">

          <div className="flex items-center gap-3">

            <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <TrendingUp className="size-5" />
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Nuestra filosofía
              </p>

              <h3 className="mt-1 font-display text-xl font-semibold">
                Trading con conocimiento, criterio y disciplina
              </h3>
            </div>

          </div>

          <div className="mt-7 space-y-4 text-sm leading-7 text-muted-foreground">

            <p>
              Durante estos años nos hemos formado, hemos operado diferentes
              mercados y hemos vivido en primera persona las distintas etapas
              que atraviesa un trader. Todo ese aprendizaje nos ha llevado a
              desarrollar una forma de trabajar basada en el análisis, la
              estrategia, la gestión del riesgo y, sobre todo, la disciplina.
            </p>

            <p>
              Nuestro objetivo como academia no es que dependas de nosotros
              para operar. Queremos que aprendas a entender el mercado y
              desarrolles tu propio criterio.
            </p>

            <p>
              Por eso combinamos formación estructurada, análisis de mercado,
              estrategia, gestión del riesgo y psicología del trading.
              Explicamos no solo qué hacemos, sino también por qué lo hacemos,
              para que puedas comprender el proceso que hay detrás de cada
              decisión.
            </p>

          </div>

        </div>

        {/* PILARES */}

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {pillars.map((pillar, index) => {

            const Icon = pillar.icon

            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl border border-border/60 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
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
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {pillar.desc}
                </p>

              </div>
            )
          })}

        </div>

        {/* CIERRE */}

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-primary/20 bg-primary/5 p-7 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestro objetivo
          </p>

          <p className="mt-3 text-lg font-semibold leading-relaxed">
            No queremos que dependas de una señal.
            Queremos que entiendas por qué se toma una operación.
          </p>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Convertirse en un buen trader es un proceso. Se necesita
            conocimiento, práctica, disciplina y una correcta gestión del
            riesgo. En Trader Run queremos acompañarte durante ese proceso y
            ayudarte a construir una operativa con criterio propio.
          </p>

        </div>

      </div>
    </section>
  )
}