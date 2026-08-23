import {
  BarChart3,
  BookOpen,
  ShieldCheck,
  Target,
  ArrowRight,
} from "lucide-react"

const valueItems = [
  {
    icon: BookOpen,
    number: "01",
    title: "Formación",
    text: "Aprende desde los fundamentos hasta la aplicación práctica, siguiendo un recorrido estructurado.",
  },
  {
    icon: Target,
    number: "02",
    title: "Metodología",
    text: "Convierte el análisis en un proceso: contexto, zonas, confirmación, entrada y gestión.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Gestión",
    text: "Aprende a proteger tu capital y a tomar decisiones teniendo el riesgo definido antes de entrar.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Herramientas",
    text: "Utiliza el indicador Trader Run como apoyo visual para aplicar lo aprendido sobre el gráfico.",
  },
]

export function ValueBridge() {
  return (
    <section
      id="valor"
      className="relative overflow-hidden border-y border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:py-28">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">
            Lo que realmente estás adquiriendo
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            No estás comprando vídeos.
            <span className="block text-muted-foreground">
              Estás construyendo una operativa.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-sm leading-7 text-muted-foreground sm:text-base">
            Trader Run reúne formación, metodología, gestión del riesgo y
            herramientas en un único recorrido para que puedas pasar de
            entender el mercado a saber cómo actuar ante él.
          </p>

        </div>

        {/* =====================================================
            VALOR
        ===================================================== */}

        <div className="mx-auto mt-14 grid max-w-5xl gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/50 md:grid-cols-2">

          {valueItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.number}
                className="group relative bg-card/80 p-7 transition-colors duration-300 hover:bg-card sm:p-8"
              >

                <div className="flex items-start gap-5">

                  {/* ICONO */}

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] text-primary transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-5" />
                  </div>

                  {/* CONTENIDO */}

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="text-[9px] font-semibold tracking-[0.2em] text-primary">
                        {item.number}
                      </span>

                      <span className="h-px w-5 bg-border" />

                    </div>

                    <h3 className="mt-2 font-display text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            )
          })}

        </div>

        {/* =====================================================
            FRASE DE TRANSICIÓN
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-3xl text-center">

          <div className="mx-auto flex items-center justify-center gap-3">

            <div className="h-px w-10 bg-border" />

            <ArrowRight className="size-4 text-primary" />

            <div className="h-px w-10 bg-border" />

          </div>

          <p className="mt-5 font-display text-xl font-medium tracking-tight sm:text-2xl">
            El objetivo no es darte más información.
            <span className="block text-muted-foreground">
              Es darte un proceso para utilizarla.
            </span>
          </p>

        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-center gap-3 text-center sm:flex-row">

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.04] px-4 py-2">

            <ShieldCheck className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
              Una formación pensada para aplicar
            </span>

          </div>

        </div>

      </div>
    </section>
  )
}