import { ArrowDown, ShieldCheck, Target, TrendingUp } from "lucide-react"

export function ImpactStatement() {
  return (
    <section
      id="impacto"
      className="relative overflow-hidden border-y border-border/40"
    >
      {/* FONDO */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.045] blur-[140px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-6 sm:py-40">

        {/* PEQUEÑO LABEL */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/20 px-4 py-2">

            <span className="size-1.5 rounded-full bg-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              La filosofía Trader Run
            </span>

          </div>

        </div>

        {/* FRASE PRINCIPAL */}

        <div className="mx-auto mt-10 max-w-5xl text-center">

          <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            El mercado no te debe
            <span className="block text-muted-foreground">
              una operación.
            </span>
          </p>

          <p className="mx-auto mt-7 max-w-2xl font-display text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            Tu trabajo es estar preparado
            <span className="text-primary">
              {" "}cuando aparezca.
            </span>
          </p>

        </div>

        {/* SEPARADOR */}

        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-4">

          <div className="h-px flex-1 bg-border/60" />

          <Target className="size-4 text-primary" />

          <div className="h-px flex-1 bg-border/60" />

        </div>

        {/* TEXTO */}

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-muted-foreground sm:text-base">
          Por eso nuestra metodología no empieza buscando entradas. Empieza
          entendiendo el mercado, definiendo un escenario y sabiendo cuánto
          estamos dispuestos a arriesgar antes de tomar una decisión.
        </p>

        {/* PILARES */}

        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-4 py-4">

            <TrendingUp className="size-4 text-primary" />

            <span className="text-xs font-semibold">
              Análisis
            </span>

          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-4 py-4">

            <ShieldCheck className="size-4 text-primary" />

            <span className="text-xs font-semibold">
              Gestión del riesgo
            </span>

          </div>

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-border/60 bg-card/60 px-4 py-4">

            <Target className="size-4 text-primary" />

            <span className="text-xs font-semibold">
              Ejecución
            </span>

          </div>

        </div>

        {/* INDICADOR DE SCROLL */}

        <div className="mt-16 flex flex-col items-center gap-3">

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            Descubre el método
          </span>

          <ArrowDown className="size-4 animate-bounce text-primary/60" />

        </div>

      </div>
    </section>
  )
}