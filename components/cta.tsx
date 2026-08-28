import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  GraduationCap,
  Send,
  Sparkles,
} from "lucide-react"

export function Cta() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="relative overflow-hidden rounded-[34px] border border-primary/25 bg-card px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

          {/* =====================================================
              FONDO
          ===================================================== */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 90% at 50% 0%, var(--primary), transparent 72%)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 size-[340px] rounded-full bg-primary/[0.06] blur-[110px]"
          />

          {/* =====================================================
              CONTENIDO
          ===================================================== */}

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2">
              <Sparkles className="size-3.5 text-primary" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                Tu siguiente paso
              </span>
            </div>

            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              No necesitas empezar
              <span className="block text-muted-foreground">
                de la misma forma que todos.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              Puedes conocer nuestro trabajo desde la comunidad, seguir el
              mercado con nosotros en Trader Run VIP o aprender nuestra
              metodología dentro de la Academy.
            </p>

            {/* =====================================================
                CTAS
            ===================================================== */}

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 w-full px-7 text-sm font-semibold sm:w-auto"
                render={<a href="#precios" />}
              >
                Ver todas las opciones
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 w-full px-7 text-sm font-semibold sm:w-auto"
                render={<a href="#academia" />}
              >
                <GraduationCap className="mr-2 size-4" />
                Descubrir la Academy
              </Button>
            </div>

            {/* =====================================================
                MICRO MENSAJE
            ===================================================== */}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[11px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <Send className="size-3.5 text-primary" />
                Comunidad gratuita
              </div>

              <span className="hidden text-border sm:block">
                •
              </span>

              <div>
                VIP · 49,95 €/mes
              </div>

              <span className="hidden text-border sm:block">
                •
              </span>

              <div>
                Academy · lanzamiento en septiembre
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}