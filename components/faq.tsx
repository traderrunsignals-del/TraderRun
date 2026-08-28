"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "¿Qué diferencia hay entre el Telegram gratuito, Trader Run VIP y la Academy?",
    a: "Son tres formas diferentes de formar parte de Trader Run. El Telegram gratuito es la puerta de entrada a la comunidad, donde compartimos noticias, contenido y resultados. Trader Run VIP está pensado para quienes quieren seguir nuestro trabajo diario, con análisis de Nasdaq y S&P, señales, cartera de acciones y acompañamiento. La Academy es nuestra formación completa para aprender la metodología Trader Run, basada en oferta y demanda, y utilizar el indicador incluido como apoyo sobre el gráfico.",
  },
  {
    q: "¿Necesito experiencia previa para entrar en la Academy?",
    a: "No. La formación comienza desde los fundamentos y avanza progresivamente hasta la estrategia y los casos prácticos. Si ya tienes experiencia, los primeros módulos te servirán para entender las bases sobre las que construimos la metodología Trader Run antes de avanzar hacia su aplicación.",
  },
  {
    q: "¿Qué voy a aprender exactamente en Trader Run Academy?",
    a: "La Academy está estructurada en 10 módulos. Trabajaremos fundamentos, funcionamiento de los mercados, plataforma de trading, lectura del precio, estructura de mercado, zonas clave, gestión del riesgo, psicología y disciplina, hasta llegar a la estrategia Trader Run basada en oferta y demanda y su aplicación mediante casos prácticos.",
  },
  {
    q: "¿El indicador Trader Run está incluido en la Academy?",
    a: "Sí. La Academy incluye acceso al indicador Trader Run para TradingView. Está diseñado como una herramienta de apoyo visual para trasladar al gráfico los conceptos y la metodología trabajados durante la formación. No necesitas descargar ni instalar ningún archivo.",
  },
  {
    q: "¿Durante cuánto tiempo tendré acceso a la Academy y al indicador?",
    a: "El acceso a la formación y al indicador Trader Run es ilimitado. Podrás volver al contenido de la Academy y continuar utilizando el indicador después de completar la formación.",
  },
  {
    q: "¿Qué incluyen los 2 meses de soporte de la Academy?",
    a: "Durante los primeros 2 meses tendrás acompañamiento para resolver dudas relacionadas con el contenido de la formación, la metodología Trader Run y el uso del indicador. El objetivo es ayudarte durante el proceso de aprendizaje y aplicación de lo aprendido.",
  },
  {
    q: "¿Cuándo estará disponible Trader Run Academy?",
    a: "La Academy estará disponible en septiembre. El precio de lanzamiento será de 825 € en un único pago. Después del periodo de lanzamiento, el precio previsto será de 1.150 €.",
  },
  {
    q: "¿Cómo funciona Trader Run VIP?",
    a: "Trader Run VIP es una suscripción mensual para quienes quieren acompañarnos en el día a día del mercado. Incluye análisis diarios de Nasdaq y S&P, señales con entrada, Stop Loss y objetivos, cartera de acciones en seguimiento, planificación de mercado, comunidad privada y acompañamiento en psicotrading.",
  },
  {
    q: "¿Cuánto cuesta Trader Run VIP y puedo cancelarlo?",
    a: "Trader Run VIP cuesta 49,95 € al mes. Es una suscripción mensual y puedes cancelarla cuando quieras. La Academy es un producto diferente y se adquiere mediante un único pago.",
  },
  {
    q: "¿Las señales y análisis de Trader Run son asesoramiento financiero?",
    a: "No. El contenido, los análisis y las señales compartidas por Trader Run tienen carácter informativo y educativo y no constituyen asesoramiento financiero personalizado. Cada persona es responsable de sus propias decisiones y de la gestión del riesgo de sus operaciones.",
  },
  {
    q: "¿Trader Run garantiza resultados o beneficios?",
    a: "No. El trading implica riesgo y no podemos garantizar beneficios ni resultados concretos. La formación, el indicador, los análisis y las señales son herramientas para ayudarte a trabajar con un proceso más estructurado, pero ninguna metodología elimina el riesgo ni asegura operaciones rentables.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-b border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:py-36">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2">
            <HelpCircle className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Preguntas frecuentes
            </span>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-5xl">
            Antes de empezar,
            <span className="block text-muted-foreground">
              queremos que lo tengas claro.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            Aquí encontrarás respuesta a las dudas más habituales sobre la
            comunidad, Trader Run VIP y la Academy.
          </p>
        </div>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[28px] border border-border/60 bg-card/50">
          {faqs.map((item, i) => {
            const isOpen = open === i

            return (
              <div
                key={item.q}
                className={`border-b border-border/50 last:border-b-0 ${
                  isOpen ? "bg-primary/[0.025]" : ""
                }`}
              >
                <button
                  type="button"
                  className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`mt-0.5 hidden text-[9px] font-semibold tracking-[0.12em] sm:block ${
                        isOpen
                          ? "text-primary"
                          : "text-muted-foreground/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-display text-sm font-semibold leading-6 transition-colors sm:text-base ${
                        isOpen
                          ? "text-foreground"
                          : "text-foreground/85 group-hover:text-primary"
                      }`}
                    >
                      {item.q}
                    </span>
                  </div>

                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-primary/20 bg-primary/10 text-primary"
                        : "border-border/60 bg-secondary/20 text-muted-foreground"
                    }`}
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl px-6 pb-6 text-sm leading-7 text-muted-foreground sm:pl-[68px] sm:pr-16">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* =====================================================
            CONTACTO
        ===================================================== */}

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-border/50 bg-secondary/[0.10] px-6 py-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 sm:flex">
              <MessageCircle className="size-4 text-primary" />
            </div>

            <div>
              <p className="text-sm font-semibold">
                ¿Te queda alguna duda?
              </p>

              <p className="mt-1 text-xs leading-5 text-muted-foreground">
                Escríbenos y te ayudaremos antes de tomar una decisión.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="h-10 shrink-0 px-5 text-xs font-semibold"
            render={
              <a href="mailto:traderrunsignals@gmail.com" />
            }
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}