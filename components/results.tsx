import Image from "next/image"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

const results = [
  {
    image: "/testimonio-764.png",
    symbol: "XAUUSD",
    label: "Operación compartida",
    result: "+764,23 €",
    description:
      "Ejemplo de una operación gestionada siguiendo una estructura definida de análisis y gestión de la posición.",
  },
  {
    image: "/testimonio-239.png",
    symbol: "GOLD",
    label: "Operación compartida",
    result: "+239,24 €",
    description:
      "Una operación real compartida dentro de la comunidad, mostrando el proceso seguido hasta el cierre.",
  },
  {
    image: "/testimonio-405.png",
    symbol: "EURCAD · XAUUSD",
    label: "Dos operaciones",
    result: "+405,33 €",
    description:
      "Resultado combinado de dos operaciones ganadoras compartidas dentro de la comunidad.",
  },
]

export function Results() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden border-t border-border/40"
    >

      {/* Glow muy sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Operativa real
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Así se aplica la metodología
            <span className="text-muted-foreground">
              {" "}en el mercado.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            No enseñamos una estrategia basada en promesas. Analizamos
            operaciones reales para mostrar cómo se estructura una decisión,
            cómo se gestiona el riesgo y cuándo una operación deja de tener
            sentido.
          </p>

        </div>

        {/* =====================================================
            OPERACIONES
        ===================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-3">

          {results.map((result) => (

            <article
              key={result.image}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-card/80 transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-black/10"
            >

              {/* Imagen */}

              <div className="relative h-[340px] overflow-hidden bg-secondary/20 p-3">

                <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/40 bg-background">

                  <Image
                    src={result.image}
                    alt={`${result.symbol} - operación compartida por la comunidad Trader Run`}
                    width={900}
                    height={650}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                  />

                </div>

              </div>

              {/* Información */}

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      {result.label}
                    </p>

                    <p className="mt-1 text-sm font-medium text-foreground">
                      {result.symbol}
                    </p>

                  </div>

                  <div className="flex size-9 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
                    <ArrowUpRight className="size-4 text-primary" />
                  </div>

                </div>

                <div className="mt-6 flex items-end justify-between gap-4">

                  <div>

                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                      Resultado de la operación
                    </p>

                    <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-primary">
                      {result.result}
                    </p>

                  </div>

                </div>

                <p className="mt-4 border-t border-border/50 pt-4 text-sm leading-6 text-muted-foreground">
                  {result.description}
                </p>

              </div>

            </article>

          ))}

        </div>

        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-xl border border-border/50 bg-secondary/20 px-5 py-4">

          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />

          <p className="text-xs leading-5 text-muted-foreground">
            Las operaciones mostradas corresponden a experiencias reales
            compartidas por miembros de la comunidad. El rendimiento pasado
            no garantiza resultados futuros.
          </p>

        </div>

      </div>

    </section>
  )
}