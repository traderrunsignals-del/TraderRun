import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  Check,
  ShieldCheck,
  Target,
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-80 left-1/2 h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[170px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-72 top-[420px] h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-6 sm:pb-18 sm:pt-16 lg:pb-20 lg:pt-20">

        {/* =====================================================
            HERO PRINCIPAL
        ===================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">

          {/* ===================================================
              COLUMNA IZQUIERDA
          =================================================== */}

          <div className="text-center lg:text-left">

            {/* ETIQUETA */}

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2 backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-30" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Academia Trader Run · Metodología de trading
              </span>
            </div>

            {/* TITULAR */}

            <h1 className="mt-7 text-balance font-display text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[64px] xl:text-[70px]">
              Deja de buscar

              <span className="block text-muted-foreground">
                la próxima entrada.
              </span>

              <span className="mt-2 block text-primary">
                Aprende a leer
                <span className="block">
                  el mercado.
                </span>
              </span>
            </h1>

            {/* SUBTÍTULO */}

            <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
              Una formación estructurada para aprender a analizar el mercado,
              gestionar el riesgo y construir una operativa basada en criterio,
              metodología y disciplina.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
             <Button
  nativeButton={false}
  size="lg"
  className="h-13 min-w-[220px] rounded-xl px-7 text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/25"
  render={<a href="#academia" />}
>
  Descubre la Academia
  <ArrowRight className="ml-1.5 size-4" />
</Button>
              <a
                href="#metodologia"
                className="inline-flex h-13 min-w-[190px] items-center justify-center rounded-xl border border-border/60 bg-background/50 px-6 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-foreground"
              >
                Conoce la metodología
              </a>
            </div>

            {/* MICRO CONFIANZA */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-primary" />
                10 módulos
              </span>

              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-primary" />
                Indicador incluido
              </span>

              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Check className="size-3.5 text-primary" />
                2 meses de soporte
              </span>
            </div>
          </div>

       {/* ===================================================
    COLUMNA DERECHA — IMAGEN TRADER RUN INTEGRADA
=================================================== */}

<div className="relative -mx-6 lg:-ml-16 lg:-mr-24">

  {/* LUZ AMBIENTAL */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-[130px]"
  />

  {/* IMAGEN FUNDIDA CON EL HERO */}
  <div
    className="relative"
    style={{
      WebkitMaskImage: `
        linear-gradient(to right,
          transparent 0%,
          black 16%,
          black 84%,
          transparent 100%
        ),
        linear-gradient(to bottom,
          transparent 0%,
          black 12%,
          black 78%,
          transparent 100%
        )
      `,
      WebkitMaskComposite: "source-in",
      maskImage: `
        linear-gradient(to right,
          transparent 0%,
          black 16%,
          black 84%,
          transparent 100%
        ),
        linear-gradient(to bottom,
          transparent 0%,
          black 12%,
          black 78%,
          transparent 100%
        )
      `,
      maskComposite: "intersect",
    }}
  >
    <img
      src="/trader-run-hero.png"
      alt="Trader Run"
      className="h-auto w-full scale-[1.10] object-cover"
    />
  </div>

  {/* FUNDIDO EXTRA HACIA EL FONDO EN LA PARTE INFERIOR */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-b from-transparent to-background"
  />

</div>

</div>

        {/* =====================================================
            BLOQUE DE VALOR
        ===================================================== */}

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:mt-16 sm:grid-cols-3">

          <div className="rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                <BarChart3 className="size-4 text-primary" />
              </span>

              <div>
                <p className="text-xs font-semibold">
                  Análisis
                </p>

                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  Aprende a leer el mercado
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                <Target className="size-4 text-primary" />
              </span>

              <div>
                <p className="text-xs font-semibold">
                  Metodología
                </p>

                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  Sigue un proceso definido
                </p>
              </div>
            </div>
          </div>

                    <div className="rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="size-4 text-primary" />
              </span>

              <div>
                <p className="text-xs font-semibold">
                  Gestión
                </p>

                <p className="mt-0.5 text-[10px] text-muted-foreground">
                  Protege tu capital
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}