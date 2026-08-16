import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Grid de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">

        {/* CONTENIDO PRINCIPAL */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Etiqueta superior */}

          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">

            <span className="flex size-1.5 rounded-full bg-primary" />

            Más de 7 años de experiencia en los mercados

          </div>

          {/* TÍTULO */}

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">

            Una metodología para{" "}

            <span className="text-primary">
              entender el mercado
            </span>

            {" "}y operar con criterio

          </h1>

          {/* DESCRIPCIÓN */}

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">

            Aprende a identificar oportunidades mediante una metodología
            estructurada de Oferta y Demanda, gestión del riesgo y psicología
            del trading, con acompañamiento diario y herramientas diseñadas
            para ayudarte a tomar decisiones con mayor claridad.

          </p>

          {/* CTA */}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <Button
              size="lg"
              className="h-11 w-full px-6 text-sm sm:w-auto"
              render={
                <a
                  href="#precios"
                />
              }
            >
              Conoce nuestra metodología
              <ArrowRight className="size-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full px-6 text-sm sm:w-auto"
              render={
                <a
                  href="https://t.me/tradingproNQ"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Unirme a Telegram
            </Button>

          </div>

          {/* ELEMENTOS DE CONFIANZA */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">

            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              Metodología estructurada
            </span>

            <span className="inline-flex items-center gap-2">
              <Users className="size-4 text-primary" />
              Acompañamiento diario
            </span>

            <span className="inline-flex items-center gap-2">
              <BarChart3 className="size-4 text-primary" />
              Análisis y operaciones reales
            </span>

          </div>

        </div>

        {/* DASHBOARD */}

        <div className="relative mx-auto mt-14 max-w-5xl">

          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-primary/5 ring-1 ring-white/5">

            <img
              src="/hero-dashboard.png"
              alt="Panel de trading de Trader Run mostrando análisis y gráficos de mercado"
              className="h-auto w-full"
            />

          </div>

        </div>

      </div>

    </section>
  )
}