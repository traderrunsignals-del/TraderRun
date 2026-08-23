import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Clock3,
  Lock,
  Play,
  ShieldCheck,
  Target,
} from "lucide-react"

const stages = [
  {
    number: "01—03",
    title: "Construye las bases",
    description:
      "Entiende el trading, los mercados y prepara tu entorno de trabajo.",
  },
  {
    number: "04—06",
    title: "Aprende a leer el precio",
    description:
      "Velas, estructura, soportes, resistencias y zonas relevantes.",
  },
  {
    number: "07—08",
    title: "Aprende a gestionar",
    description:
      "Riesgo, disciplina y psicología para tomar decisiones con control.",
  },
  {
    number: "09—10",
    title: "Llévalo al gráfico",
    description:
      "Aplica la estrategia Trader Run y estudia casos prácticos.",
  },
]

const modules = [
  "Fundamentos del Trading",
  "Cómo funcionan los mercados",
  "Conociendo tu plataforma",
  "Aprende a leer el precio",
  "La estructura del mercado",
  "Soportes, resistencias y zonas clave",
  "Gestión del riesgo",
  "Psicología y disciplina",
  "Estrategia Trader Run",
  "Casos prácticos",
]

export function AcademyPreview() {
  return (
    <section
      id="academia"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[45%] size-[400px] rounded-full bg-primary/[0.025] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-3.5 py-2">

              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Academia Trader Run
              </span>

            </div>

            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">

              Aprende.

              <span className="text-muted-foreground">
                {" "}Practica.
              </span>

              <span className="block text-primary">
                Desarrolla criterio.
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Un recorrido de 10 módulos para pasar de entender el mercado
              a construir una operativa propia basada en análisis, riesgo y
              disciplina.
            </p>

          </div>

          {/* =================================================
              RESUMEN
          ================================================= */}

          <div className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">

            <div className="flex items-center justify-between">

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                La Academia
              </span>

              <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[9px] font-semibold text-primary">
                Septiembre
              </span>

            </div>

            <div className="mt-6 flex items-end gap-3">

              <span className="font-display text-4xl font-semibold tracking-tight">
                10
              </span>

              <span className="pb-1 text-sm text-muted-foreground">
                módulos
              </span>

            </div>

            <div className="mt-4 h-px bg-border/60" />

            <div className="mt-4 flex items-center justify-between text-xs">

              <span className="text-muted-foreground">
                Formación completa
              </span>

              <span className="font-medium">
                +200 min
              </span>

            </div>

            <div className="mt-3 flex items-center justify-between text-xs">

              <span className="text-muted-foreground">
                Indicador Trader Run
              </span>

              <span className="font-medium text-primary">
                Incluido
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            IDEA CENTRAL
        ===================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] border border-primary/20 bg-primary/[0.045] p-7 sm:mt-20 sm:p-10">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-[300px] rounded-full bg-primary/[0.08] blur-[100px]"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="max-w-3xl">

              <div className="flex items-center gap-3">

                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15">

                  <Target className="size-5 text-primary" />

                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                  El objetivo
                </span>

              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">

                Que puedas mirar un gráfico

                <span className="text-muted-foreground">
                  {" "}y saber qué estás viendo.
                </span>

              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                La formación no está pensada para memorizar señales. Está
                diseñada para que entiendas el contexto, identifiques
                oportunidades y sepas cuándo no hacer nada.
              </p>

            </div>

            <div className="hidden shrink-0 lg:block">

              <div className="flex size-24 items-center justify-center rounded-full border border-primary/20 bg-background/40">

                <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">

                  <BarChart3 className="size-7 text-primary" />

                </div>

              </div>

            </div>

          </div>

        </div>
               {/* =====================================================
    VISTA PREVIA DE LA ACADEMIA
===================================================== */}

<div className="relative mx-auto mt-16 max-w-6xl sm:mt-20">

  {/* Glow */}

  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[130px]"
  />

  {/* Etiqueta */}

  <div className="relative mb-5 flex justify-center">

    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3.5 py-2 backdrop-blur-md">

      <span className="size-1.5 rounded-full bg-primary" />

      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Así se verá tu Academia
      </span>

    </div>

  </div>

  {/* ORDENADOR */}

  <div className="relative mx-auto w-[94%] sm:w-[88%]">

    {/* Sombra */}

    <div
      aria-hidden="true"
      className="absolute -inset-6 rounded-[35px] bg-black/20 blur-3xl"
    />

    {/* Pantalla */}

    <div className="relative overflow-hidden rounded-[20px] border border-border/70 bg-card p-1.5 shadow-2xl shadow-black/20">

      <div className="overflow-hidden rounded-[14px] border border-border/50 bg-background">

        {/* =================================================
            BARRA SUPERIOR
        ================================================= */}

        <div className="flex h-10 items-center justify-between border-b border-border/50 bg-secondary/20 px-4 sm:px-5">

          <div className="flex items-center gap-2">

            <span className="size-2 rounded-full bg-primary" />

            <span className="text-[9px] font-semibold text-muted-foreground">
              Academia Trader Run
            </span>

          </div>

          <div className="flex items-center gap-3">

            <span className="hidden text-[8px] text-muted-foreground sm:block">
              Mi progreso
            </span>

            <div className="h-1 w-16 overflow-hidden rounded-full bg-secondary sm:w-24">

              <div className="h-full w-[18%] rounded-full bg-primary" />

            </div>

            <span className="text-[8px] font-semibold text-primary">
              18%
            </span>

          </div>

        </div>

        {/* =================================================
            CONTENIDO
        ================================================= */}

        <div className="grid min-h-[330px] md:grid-cols-[205px_1fr]">

          {/* =================================================
              SIDEBAR — MÓDULOS
          ================================================= */}

          <div className="hidden border-r border-border/50 bg-secondary/[0.08] p-4 md:block">

            <div className="flex items-center justify-between">

              <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Tu formación
              </p>

              <span className="text-[8px] font-semibold text-primary">
                10 módulos
              </span>

            </div>

            <div className="mt-4 space-y-1">

              {modules.map((module, index) => {

                const active = index === 0

                return (

                  <div
                    key={module}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground/55"
                    }`}
                  >

                    <span
                      className={`flex size-6 shrink-0 items-center justify-center rounded-md text-[7px] font-semibold ${
                        active
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="truncate text-[8px] leading-3">
                      {module}
                    </span>

                    {active ? (
                      <Check className="ml-auto size-2.5 shrink-0 text-primary" />
                    ) : (
                      <Lock className="ml-auto size-2.5 shrink-0 opacity-40" />
                    )}

                  </div>

                )
              })}

            </div>

          </div>

          {/* =================================================
              CONTENIDO PRINCIPAL
          ================================================= */}

          <div className="p-5 sm:p-7">

            {/* CABECERA */}

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Módulo 01 · Fundamentos
                </p>

                <h4 className="mt-2 font-display text-lg font-semibold sm:text-2xl">
                  Fundamentos del Trading
                </h4>

                <p className="mt-1 max-w-lg text-[9px] leading-4 text-muted-foreground sm:text-xs">
                  Empieza por las bases antes de construir tu propia operativa.
                </p>

              </div>

              <span className="hidden rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[8px] font-medium text-primary sm:block">
                En progreso
              </span>

            </div>

            {/* =================================================
                VIDEO
            ================================================= */}

            <div className="group relative mt-5 aspect-video overflow-hidden rounded-xl border border-border/50 bg-secondary/20">

              {/* Fondo */}

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_60%)]"
              />

              {/* Grid */}

              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              {/* Gráfico */}

              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-30"
                viewBox="0 0 800 400"
                preserveAspectRatio="none"
              >

                <polyline
                  points="0,300 70,270 120,285 180,220 240,245 300,180 350,200 420,130 470,160 530,110 590,145 650,80 710,105 800,55"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary"
                />

              </svg>

              {/* Play */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative">

                  <div className="absolute -inset-6 rounded-full bg-primary/15 blur-2xl transition duration-500 group-hover:bg-primary/25" />

                  <div className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 transition duration-300 group-hover:scale-110 sm:size-20">

                    <Play className="ml-1 size-6 fill-current sm:size-7" />

                  </div>

                </div>

              </div>

              {/* Información */}

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between bg-gradient-to-t from-background/90 to-transparent p-4">

                <div>

                  <p className="text-[10px] font-medium sm:text-xs">
                    Introducción a los fundamentos
                  </p>

                  <p className="mt-1 text-[8px] text-muted-foreground sm:text-[10px]">
                    Lección 01 · Academia Trader Run
                  </p>

                </div>

                <span className="rounded-md border border-border/50 bg-background/60 px-2 py-1 text-[8px] text-muted-foreground backdrop-blur-sm">
                  20 min
                </span>

              </div>

            </div>

            {/* PROGRESO */}

            <div className="mt-5">

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-medium text-muted-foreground">
                  Progreso del módulo
                </span>

                <span className="text-[9px] font-semibold text-primary">
                  18%
                </span>

              </div>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-secondary">

                <div className="h-full w-[18%] rounded-full bg-primary" />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Base del ordenador */}

    <div className="relative mx-auto h-2 w-[96%] rounded-b-xl bg-secondary/80 shadow-lg" />

    <div className="mx-auto h-1 w-[28%] rounded-b-full bg-border/80" />

  </div>

  {/* Texto */}

  <div className="relative mt-5 text-center">

    <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
      Aprende · Practica · Aplica
    </p>

  </div>

</div>

        {/* =====================================================
            RECORRIDO
        ===================================================== */}

        <div className="mt-20">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                El recorrido
              </p>

              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                De los fundamentos a la estrategia.
              </h3>

            </div>

            <p className="max-w-md text-sm leading-6 text-muted-foreground sm:text-right">
              Cada bloque prepara el siguiente. Sin saltos y sin llenar la
              formación de contenido innecesario.
            </p>

          </div>

          {/* ETAPAS */}

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {stages.map((stage, index) => (

              <div
                key={stage.number}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 ${
                  index === 3
                    ? "border-primary/25 bg-primary/[0.055]"
                    : "border-border/60 bg-card/50 hover:border-primary/20"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="font-display text-xs font-semibold tracking-[0.12em] text-primary">
                    {stage.number}
                  </span>

                  {index === 3 ? (
                    <BarChart3 className="size-4 text-primary" />
                  ) : (
                    <span className="size-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />
                  )}

                </div>

                <h4 className="mt-7 font-display text-lg font-semibold">
                  {stage.title}
                </h4>

                <p className="mt-2 text-xs leading-5 text-muted-foreground">
                  {stage.description}
                </p>

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            INDICADOR
        ===================================================== */}

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_340px]">

          <div className="relative overflow-hidden rounded-[28px] border border-primary/20 bg-primary/[0.045] p-7 sm:p-8">

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-primary/[0.08] blur-[90px]"
            />

            <div className="relative flex size-11 items-center justify-center rounded-2xl bg-primary/10">

              <BarChart3 className="size-5 text-primary" />

            </div>

            <h3 className="relative mt-5 font-display text-2xl font-semibold tracking-tight">
              Indicador Trader Run
            </h3>

            <p className="relative mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              Una herramienta de apoyo para llevar la metodología del curso
              directamente al gráfico y ayudarte a identificar visualmente
              las condiciones que estamos estudiando.
            </p>

            <div className="relative mt-5 flex flex-wrap gap-2">

              <span className="rounded-full border border-primary/15 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-primary">
                TradingView
              </span>

              <span className="rounded-full border border-primary/15 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-primary">
                Incluido
              </span>

              <span className="rounded-full border border-primary/15 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-primary">
                Acceso de por vida
              </span>

            </div>

          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-border/60 bg-card/50 p-7">

            <div>

              <div className="flex size-10 items-center justify-center rounded-xl bg-secondary">

                <Brain className="size-4 text-primary" />

              </div>

              <h4 className="mt-5 font-display text-lg font-semibold">
                No solo aprenderás qué hacer.
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Entenderás por qué hacerlo, cuándo hacerlo y cuándo no hacerlo.
              </p>

            </div>

            <div className="mt-7 flex items-center gap-2 text-xs font-medium">

              <ShieldCheck className="size-4 text-primary" />

              <span>
                Criterio antes que señales
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl border border-border/60 bg-secondary/[0.12] px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">

          <div>

            <p className="font-display text-lg font-semibold">
              Tu recorrido empieza aquí.
            </p>

            <p className="mt-1 text-xs text-muted-foreground">
              Academia Trader Run · Disponible en septiembre
            </p>

          </div>

          <a
            href="#precios"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
          >
            Ver acceso a la Academia
            <ArrowRight className="ml-2 size-4" />
          </a>

        </div>

      </div>

    </section>
  )
}