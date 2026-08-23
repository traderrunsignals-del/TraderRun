import {
  BarChart3,
  Brain,
  MessageSquare,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    number: "01",
    title: "Lectura del mercado",
    desc: "Aprende a interpretar el contexto, la estructura y el comportamiento del precio para entender qué está ocurriendo antes de tomar una decisión.",
  },
  {
    icon: Target,
    number: "02",
    title: "Metodología Trader Run",
    desc: "Una estructura de análisis definida para identificar escenarios, validar oportunidades y construir una operativa coherente.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Gestión del riesgo",
    desc: "Aprende a definir el riesgo antes de entrar, gestionar el tamaño de la posición y proteger tu capital de forma sistemática.",
  },
  {
    icon: Brain,
    number: "04",
    title: "Psicología y disciplina",
    desc: "Trabaja la parte más difícil del trading: ejecutar tu plan con disciplina y evitar decisiones impulsivas.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Análisis de operaciones",
    desc: "Estudia escenarios reales y comprende el razonamiento detrás de las entradas, los stops, los objetivos y la gestión.",
  },
  {
    icon: MessageSquare,
    number: "06",
    title: "Acompañamiento",
    desc: "Resuelve dudas, comparte análisis y avanza acompañado dentro de una comunidad de traders.",
  },
]

export function Features() {
  return (
    <section
      id="programa"
      className="relative overflow-hidden border-t border-border/40"
    >

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-200px] top-[200px] h-[500px] w-[500px] rounded-full bg-primary/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            La metodología
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Una formación diseñada para
            <span className="text-muted-foreground">
              {" "}construir criterio.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            No se trata de memorizar entradas. Se trata de entender el mercado,
            seguir un proceso y aprender a tomar decisiones con una estructura
            que puedas aplicar por ti mismo.
          </p>

        </div>

        {/* =====================================================
            BLOQUE PRINCIPAL
        ===================================================== */}

        <div className="relative mx-auto mt-16 max-w-5xl">

          <div className="grid overflow-hidden rounded-3xl border border-border/60 bg-card/60 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LADO IZQUIERDO */}

            <div className="relative overflow-hidden border-b border-border/50 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">

              {/* Decoración */}

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/[0.06] blur-3xl"
              />

              <div className="relative">

                <div className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-primary">
                  <BarChart3 className="size-5" />
                </div>

                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  El objetivo
                </p>

                <h3 className="mt-3 max-w-lg font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Dejar de buscar entradas.
                  <span className="block text-muted-foreground">
                    Empezar a entender decisiones.
                  </span>
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
                  Nuestra metodología busca que puedas analizar un escenario
                  completo antes de pensar en abrir una operación: contexto,
                  estructura, confirmación, riesgo e invalidación.
                </p>

                {/* Mini proceso */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {[
                    "Contexto",
                    "Análisis",
                    "Confirmación",
                    "Riesgo",
                    "Ejecución",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* LADO DERECHO */}

            <div className="bg-secondary/[0.15] p-8 sm:p-10 lg:p-12">

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Un proceso definido
              </p>

              <div className="mt-6 space-y-6">

                {[
                  {
                    title: "Analizar",
                    text: "Entender el contexto antes de buscar una oportunidad.",
                  },
                  {
                    title: "Validar",
                    text: "Esperar las condiciones que exige la metodología.",
                  },
                  {
                    title: "Gestionar",
                    text: "Definir riesgo, stop y objetivo antes de ejecutar.",
                  },
                  {
                    title: "Revisar",
                    text: "Aprender de cada operación para mejorar el proceso.",
                  },
                ].map((step, index) => (

                  <div
                    key={step.title}
                    className="flex gap-4"
                  >

                    <div className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-[10px] font-semibold text-muted-foreground">
                      0{index + 1}
                    </div>

                    <div>

                      <h4 className="text-sm font-semibold">
                        {step.title}
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {step.text}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            PILARES
        ===================================================== */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.number}
                className="group relative rounded-2xl border border-border/50 bg-background/40 p-6 transition duration-300 hover:border-primary/25 hover:bg-card/60"
              >

                <div className="flex items-start justify-between">

                  <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-secondary/30 text-primary">
                    <Icon className="size-4" />
                  </div>

                  <span className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground/30">
                    {feature.number}
                  </span>

                </div>

                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.desc}
                </p>

              </article>
            )
          })}

        </div>

        {/* =====================================================
            CIERRE
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-3xl text-center">

          <div className="mx-auto mb-5 flex items-center justify-center gap-3">

            <div className="h-px w-8 bg-border" />

            <span className="size-1 rounded-full bg-primary" />

            <div className="h-px w-8 bg-border" />

          </div>

          <p className="text-balance text-lg font-medium leading-relaxed sm:text-xl">
            El objetivo no es que dependas eternamente de una señal.
          </p>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            El objetivo es que puedas entender el porqué de una operación y
            desarrollar la capacidad de tomar tus propias decisiones.
          </p>

        </div>

      </div>

    </section>
  )
}