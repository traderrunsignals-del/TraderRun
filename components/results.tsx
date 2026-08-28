import Image from "next/image"
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react"

const results = [
  {
    image: "/testimonio-764.png",
    symbol: "XAUUSD",
    label: "Operación compartida",
    result: "+764,23 €",
    description:
      "Ejemplo real compartido dentro de la comunidad, con una estructura definida de análisis y gestión de la posición.",
  },
  {
    image: "/testimonio-239.png",
    symbol: "GOLD",
    label: "Operación compartida",
    result: "+239,24 €",
    description:
      "Una operación real que permite ver cómo se traslada el análisis previo a la ejecución y posterior gestión.",
  },
  {
    image: "/testimonio-405.png",
    symbol: "EURCAD · XAUUSD",
    label: "Dos operaciones",
    result: "+405,33 €",
    description:
      "Ejemplo de dos operaciones compartidas dentro de la comunidad y gestionadas siguiendo un proceso definido.",
  },
]

export function Results() {
  return (
    <section
      id="resultados"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-52 top-1/3 size-[500px] rounded-full bg-primary/[0.03] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Del aprendizaje al gráfico
              </span>
            </div>

            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              La metodología cobra sentido
              <span className="block text-muted-foreground">
                cuando tienes que ejecutarla.
              </span>
            </h2>
          </div>

          <p className="text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
            Dentro de la comunidad compartimos análisis y operaciones reales
            para estudiar cómo se toman decisiones cuando el mercado está en
            movimiento.
          </p>
        </div>

        {/* =====================================================
            MENSAJE
        ===================================================== */}

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <BarChart3 className="size-4 text-primary" />

            <p className="mt-4 text-sm font-semibold">
              Analizar
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Entender el contexto antes de buscar una oportunidad.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <CheckCircle2 className="size-4 text-primary" />

            <p className="mt-4 text-sm font-semibold">
              Ejecutar
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Esperar las condiciones definidas antes de tomar una decisión.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/40 p-5">
            <ShieldCheck className="size-4 text-primary" />

            <p className="mt-4 text-sm font-semibold">
              Gestionar
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Mantener el riesgo y la gestión dentro del plan establecido.
            </p>
          </div>
        </div>

        {/* =====================================================
            OPERACIONES
        ===================================================== */}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {results.map((item) => (
            <article
              key={`${item.symbol}-${item.result}`}
              className="group overflow-hidden rounded-[26px] border border-border/60 bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25"
            >
              {/* IMAGEN */}

              <div className="relative aspect-[4/3] overflow-hidden border-b border-border/50 bg-secondary/20">
                <Image
                  src={item.image}
                  alt={`Ejemplo de operación ${item.symbol} compartida en Trader Run`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-border/50 bg-background/80 px-3 py-1.5 backdrop-blur-md">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}

              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {item.symbol}
                    </p>

                    <p className="mt-2 font-display text-lg font-semibold">
                      Caso real compartido
                    </p>
                  </div>

                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground/50" />
                </div>

                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-5">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Resultado mostrado
                  </span>

                  <span className="font-display text-lg font-semibold text-primary">
                    {item.result}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/50 bg-secondary/[0.10] px-5 py-4 text-center">
          <p className="text-[11px] leading-5 text-muted-foreground">
            Los ejemplos mostrados corresponden a operaciones compartidas
            dentro de la comunidad y tienen una finalidad ilustrativa y
            educativa. No representan una promesa de rentabilidad. El
            rendimiento pasado no garantiza resultados futuros.
          </p>
        </div>
      </div>
    </section>
  )
}