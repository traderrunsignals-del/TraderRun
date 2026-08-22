import Image from "next/image"
import { CheckCircle2, TrendingUp } from "lucide-react"

const results = [
  {
    image: "/testimonio-764.png",
    label: "Operación XAUUSD",
    result: "+764,23 €",
    description:
      "Operación compartida por un miembro de la comunidad siguiendo una gestión estructurada de la posición.",
  },
  {
    image: "/testimonio-239.png",
    label: "Operación GOLD",
    result: "+239,24 €",
    description:
      "Entrada individual compartida dentro de la comunidad con resultado positivo.",
  },
  {
    image: "/testimonio-405.png",
    label: "Dos operaciones",
    result: "+405,33 €",
    description:
      "Resultado combinado de dos operaciones ganadoras: EURCAD y XAUUSD.",
  },
]

export function Results() {
  return (
    <section
  id="resultados"
  className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
>
      {/* CABECERA */}

      <div className="mx-auto max-w-2xl text-center">

        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Resultados reales
        </p>

        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          El trabajo se demuestra con hechos
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Compartimos operaciones y experiencias reales de miembros de nuestra
          comunidad. Nuestro objetivo es mostrar cómo trabajamos, no prometer
          resultados.
        </p>

      </div>

      {/* RESULTADOS */}

      <div className="mt-14 grid gap-6 md:grid-cols-3">

        {results.map((result) => (

          <article
            key={result.image}
            className="group overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
          >

            {/* IMAGEN */}

            <div className="relative flex h-[360px] items-center justify-center overflow-hidden bg-secondary/20 p-3">

              <Image
  src={result.image}
  alt={`${result.label} - resultado compartido por la comunidad Trader Run`}
  width={900}
  height={650}
  className="h-auto max-h-[420px] w-full object-contain transition duration-500 group-hover:scale-[1.02]"
/>

            </div>

            {/* INFORMACIÓN */}

            <div className="p-6">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-2">

                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="size-4 text-primary" />
                  </span>

                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {result.label}
                  </span>

                </div>

              </div>

              <p className="mt-5 font-display text-3xl font-bold tracking-tight text-primary">
                {result.result}
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {result.description}
              </p>

            </div>

          </article>

        ))}

      </div>

      {/* AVISO */}

      <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-border/60 bg-secondary/30 p-5">

        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

        <p className="text-sm leading-6 text-muted-foreground">
          Resultados compartidos por miembros de la comunidad. El rendimiento
          pasado no garantiza resultados futuros.
        </p>

      </div>

    </section>
  )
}