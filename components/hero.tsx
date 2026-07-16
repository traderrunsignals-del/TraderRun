import { Button } from "@/components/ui/button"
import { ArrowRight, Play, ShieldCheck, Users, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle grid + glow */}
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="flex size-1.5 rounded-full bg-primary" />
            +12.000 traders formándose con nosotros
          </div>

          <h1 className="text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Aprende a operar los mercados con una{" "}
            <span className="text-primary">comunidad real</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Formación estructurada, sesiones en vivo y acompañamiento diario.
            Domina el análisis técnico, la gestión de riesgo y la psicología del
            trading, paso a paso, sin promesas mágicas.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 w-full px-6 text-sm sm:w-auto"
              render={<a href="#precios" />}
            >
              Empezar ahora
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full px-6 text-sm sm:w-auto"
              render={<a href="#programa" />}
            >
              <Play className="size-4" />
              Ver el programa
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" />7 días de garantía
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-4 text-primary" />
              Comunidad activa 24/7
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="size-4 text-primary" />
              Sesiones en vivo semanales
            </span>
          </div>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-2xl shadow-primary/5 ring-1 ring-white/5">
            <img
              src="/hero-dashboard.png"
              alt="Panel de trading de TraderRun mostrando gráficos de velas, cartera y lista de seguimiento"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
