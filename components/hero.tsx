import { Button } from "@/components/ui/button"
import {
  ArrowDown,
  ArrowRight,
  Check,
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* =========================================================
          FONDO
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 20%, transparent 100%)",
        }}
      />

      {/* Glow superior */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-72 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[160px]"
      />

      {/* Glow lateral */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-72 top-[500px] h-[600px] w-[600px] rounded-full bg-primary/[0.045] blur-[150px]"
      />

      {/* =========================================================
          CONTENIDO
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36">

        {/* =======================================================
            HERO PRINCIPAL
        ======================================================= */}

        <div className="mx-auto max-w-6xl text-center">

          {/* Eyebrow */}

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2 backdrop-blur-sm">

            <span className="relative flex size-2">

              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-40" />

              <span className="relative inline-flex size-2 rounded-full bg-primary" />

            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Trader Run · Metodología de trading
            </span>

          </div>

          {/* =====================================================
              TITULAR
          ===================================================== */}

          <h1 className="mx-auto max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[82px] xl:text-[92px]">

            Deja de buscar

            <span className="block text-muted-foreground">
              la próxima entrada.
            </span>

            <span className="mt-2 block text-primary">
              Aprende a entender el mercado.
            </span>

          </h1>

          {/* =====================================================
              SUBTÍTULO
          ===================================================== */}

          <p className="mx-auto mt-8 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">

            Formación, metodología y herramientas para desarrollar una
            operativa basada en criterio, gestión del riesgo y disciplina.

          </p>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="h-13 min-w-[245px] rounded-xl px-8 text-sm font-semibold shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/25"
              render={
                <a href="#academia" />
              }
            >
              Descubre Trader Run
              <ArrowRight className="ml-1.5 size-4" />
            </Button>

            <a
              href="https://t.me/tradingproNQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-border/60 bg-background/50 px-6 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:text-foreground"
            >
              Comunidad gratuita
            </a>

          </div>

          {/* =====================================================
              CONFIANZA
          ===================================================== */}

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">

            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">

              <Check className="size-3.5 text-primary" />

              Metodología propia

            </span>

            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">

              <Check className="size-3.5 text-primary" />

              Gestión del riesgo

            </span>

            <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">

              <Check className="size-3.5 text-primary" />

              Formación estructurada

            </span>

          </div>

        </div>

        {/* =======================================================
            VISTA PREVIA TRADER RUN
        ======================================================= */}

        <div className="relative mx-auto mt-16 max-w-5xl sm:mt-20">

          {/* Glow detrás de la pantalla */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[120px]"
          />

          {/* Etiqueta */}

          <div className="relative mb-5 flex justify-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 backdrop-blur-sm">

              <span className="size-1.5 rounded-full bg-primary" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                El ecosistema Trader Run
              </span>

            </div>

          </div>

          {/* =====================================================
              ORDENADOR
          ===================================================== */}

          <div className="relative mx-auto w-[78%] sm:w-[72%] lg:w-[68%]">

            {/* Sombra */}

            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[30px] bg-black/20 blur-3xl"
            />

            {/* Marco */}

            <div className="relative rounded-2xl border border-border/70 bg-secondary/30 p-1.5 shadow-2xl shadow-black/20">

              <div className="overflow-hidden rounded-xl border border-border/50 bg-card">

                <img
                  src="/hero-dashboard.png"
                  alt="Plataforma de análisis Trader Run"
                  className="h-auto w-full"
                />

              </div>

            </div>

            {/* Base del ordenador */}

            <div className="relative mx-auto h-2 w-[96%] rounded-b-xl bg-secondary/80 shadow-lg" />

            <div className="mx-auto h-1 w-[30%] rounded-b-full bg-border/80" />

          </div>

          {/* Texto inferior */}

          <div className="relative mt-6 text-center">

            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Análisis · Metodología · Gestión del riesgo
            </p>

          </div>

        </div>

        {/* =======================================================
            SCROLL INDICATOR
        ======================================================= */}

        <div className="mt-16 flex justify-center sm:mt-20">

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