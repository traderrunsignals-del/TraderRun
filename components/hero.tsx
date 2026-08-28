import { Button } from "@/components/ui/button"
import {
  ArrowDown,
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
        className="pointer-events-none absolute -right-72 top-[520px] h-[600px] w-[600px] rounded-full bg-primary/[0.04] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">

        {/* =====================================================
            CONTENIDO PRINCIPAL
        ===================================================== */}

        <div className="mx-auto max-w-6xl text-center">

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

          <h1 className="mx-auto mt-8 max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[90px]">
            Deja de buscar
            <span className="block text-muted-foreground">
              la próxima entrada.
            </span>

            <span className="mt-2 block text-primary">
              Aprende a leer el mercado.
            </span>
          </h1>

          {/* SUBTÍTULO */}

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Una formación estructurada para aprender a analizar el mercado,
            gestionar el riesgo y construir una operativa basada en criterio,
            metodología y disciplina.
          </p>

          {/* CTA */}

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-13 min-w-[245px] rounded-xl px-8 text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/25"
              render={<a href="#academia" />}
            >
              Descubre la Academia
              <ArrowRight className="ml-1.5 size-4" />
            </Button>

            <a
              href="#metodologia"
              className="inline-flex h-13 min-w-[200px] items-center justify-center rounded-xl border border-border/60 bg-background/50 px-6 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-foreground"
            >
              Conoce la metodología
            </a>
          </div>

          {/* MICRO CONFIANZA */}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-3.5 text-primary" />
              10 módulos
            </span>

            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-3.5 text-primary" />
              Indicador Trader Run incluido
            </span>

            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-3.5 text-primary" />
              Acceso de por vida
            </span>
          </div>
        </div>

        {/* =====================================================
            BLOQUE DE VALOR
        ===================================================== */}

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:mt-20 sm:grid-cols-3">

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

        {/* =====================================================
            PREVIEW ACADEMIA
        ===================================================== */}

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-14">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[120px]"
          />

          <div className="relative mb-5 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Tu espacio de formación
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-[92%] sm:w-[82%] lg:w-[76%]">

            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[30px] bg-black/20 blur-3xl"
            />

            <div className="relative rounded-2xl border border-border/70 bg-secondary/30 p-1.5 shadow-2xl shadow-black/20">
              <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
                <img
                  src="/hero-dashboard.png"
                  alt="Academia Trader Run"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="relative mx-auto h-2 w-[96%] rounded-b-xl bg-secondary/80 shadow-lg" />
            <div className="mx-auto h-1 w-[30%] rounded-b-full bg-border/80" />
          </div>

          <div className="relative mt-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Formación · Metodología · Indicador Trader Run
            </p>
          </div>
        </div>

        {/* =====================================================
            SCROLL
        ===================================================== */}

        <div className="mt-14 flex justify-center sm:mt-16">
          <a
            href="#academia"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
              Descubre la Academia
            </span>

            <span className="flex size-8 items-center justify-center rounded-full border border-border/60 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
              <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}