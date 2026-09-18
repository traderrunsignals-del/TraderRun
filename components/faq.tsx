"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
  q: "¿Qué diferencia hay entre el Telegram gratuito, Trader Run VIP y Trader Run Academy?",
 a: "Son tres formas diferentes de formar parte de Trader Run. En el Telegram gratuito compartimos noticias, contenido y resultados de nuestra operativa. Trader Run VIP está pensado para quienes quieren seguir nuestro trabajo diario, con análisis diarios de Nasdaq y S&P, señales diarias en diferentes activos, cartera de acciones, planificación y acompañamiento. Trader Run Academy es nuestro espacio de formación. Dentro de la Academy, el curso de oferta y demanda está diseñado para aprender a utilizar el Indicador + Estrategia Trader Run como un sistema basado en oferta y demanda, estructura y gestión del riesgo.",
  },
 {
  q: "¿Necesito experiencia previa para hacer el curso de oferta y demanda?",
  a: "No. La formación está diseñada para que puedas empezar desde los fundamentos e ir avanzando progresivamente hasta comprender y aplicar la metodología Trader Run. Los primeros módulos trabajan las bases necesarias antes de avanzar hacia la lectura del precio, la estructura del mercado, la oferta y la demanda, la gestión del riesgo, la psicología y la estrategia.",
},
{
  q: "¿Qué voy a aprender en el curso de oferta y demanda?",
  a: "La formación está estructurada en 10 módulos para aprender a utilizar el Indicador + Estrategia Trader Run. Empezarás por los fundamentos del trading, el funcionamiento de los mercados y el uso de la plataforma. Después aprenderás a leer el precio, comprender la estructura del mercado e identificar soportes, resistencias y zonas clave. También trabajaremos la gestión del riesgo, la psicología y la disciplina, hasta llegar a la estrategia Trader Run basada en oferta y demanda y su aplicación mediante casos prácticos.",
},
  {
  q: "¿El indicador Trader Run está incluido en el curso de oferta y demanda?",
a: "Sí. Al adquirir el curso de oferta y demanda tendrás acceso ilimitado al indicador Trader Run para TradingView. El indicador forma parte del sistema Trader Run junto con la estrategia que aprenderás durante la formación y permite llevar la metodología directamente al gráfico. Para darte acceso utilizaremos el nombre de usuario de TradingView que indiques durante la compra, por lo que no tendrás que descargar ni instalar ningún archivo.",
},
{
  q: "¿Necesito una cuenta de TradingView o puedo utilizar otra plataforma?",
  a: "Sí, necesitas una cuenta de TradingView, ya que el indicador Trader Run funciona exclusivamente en esta plataforma. Puedes utilizar una cuenta gratuita de TradingView; no es necesario contratar ningún plan de pago.",
},
{
  q: "¿Durante cuánto tiempo tendré acceso al curso y al indicador Trader Run?",
 a: "Tendrás acceso al curso de oferta y demanda durante 3 meses desde la primera activación de tu cuenta en Trader Run Academy. Deberás realizar esa primera activación dentro de los 30 días naturales siguientes a la fecha de compra. El acompañamiento y soporte incluidos tienen una duración de 2 meses desde la fecha de compra. El indicador Trader Run no tiene una fecha de caducidad predeterminada una vez concedido, por lo que podrás continuar utilizándolo después de finalizar tu periodo de acceso al curso.",
},
 {
  q: "¿Qué incluyen los 2 meses de soporte?",
 a: "Durante los 2 meses de soporte tendrás acceso a un grupo donde podrás ver entradas diarias relacionadas con la estrategia del curso y dispondrás de un correo exclusivo para resolver dudas sobre el contenido de la formación, la metodología Trader Run y la aplicación de los conceptos aprendidos. El objetivo es acompañarte durante el proceso de aprendizaje y ayudarte a comprender y aplicar la metodología de forma estructurada.",
},
 {
  q: "¿Cuándo podré acceder al curso después de realizar la compra?",
  a: "Una vez confirmado el pago, recibirás un correo electrónico para activar tu cuenta y crear tu contraseña. Deberás realizar la primera activación dentro de los 30 días naturales siguientes a la fecha de compra. A partir de esa primera activación comenzará tu periodo de 3 meses de acceso al curso. Utilizaremos también el nombre de usuario de TradingView indicado durante la compra para gestionar tu acceso al indicador Trader Run.",
},
 {
  q: "¿Cómo funciona Trader Run VIP?",
  a: "Trader Run VIP es una suscripción mensual a un grupo de Telegram enfocada en el seguimiento diario del mercado. Incluye análisis de Nasdaq y S&P, señales con entrada, Stop Loss y objetivos, cartera de acciones en seguimiento, planificación de mercado, contenido de psicotrading y acceso a la comunidad privada. Trader Run VIP no es un curso de formación y funciona de manera independiente a Trader Run Academy.",
},
 {
  q: "¿Cuánto cuesta Trader Run VIP y puedo cancelarlo?",
 a: "Trader Run VIP cuesta 49,95 € al mes y se renueva automáticamente cada mes. Puedes solicitar la cancelación en cualquier momento escribiendo a traderrunsignals@gmail.com. La cancelación evita las renovaciones posteriores y mantendrás el acceso durante el periodo mensual que ya tengas pagado. El curso de oferta y demanda de Trader Run Academy es un producto independiente y se adquiere mediante un único pago.",
},
  {
  q: "¿Las señales y análisis de Trader Run son asesoramiento financiero?",
  a: "No. Los contenidos, análisis, señales y materiales formativos de Trader Run tienen una finalidad informativa y educativa y no constituyen asesoramiento financiero personalizado ni una recomendación individual de inversión. Cada usuario es responsable de sus propias decisiones, operaciones y gestión del riesgo.",
},
 {
  q: "¿Trader Run garantiza resultados o beneficios?",
  a: "No. El trading implica riesgo de pérdida y Trader Run no garantiza beneficios, rentabilidades ni resultados concretos. El curso, el indicador, los análisis y las señales son herramientas formativas e informativas destinadas a ayudarte a desarrollar un proceso de trabajo más estructurado, pero ninguna metodología, herramienta o señal elimina el riesgo ni garantiza operaciones rentables.",
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
              <a href="mailto:soporte@traderrun.com" />
            }
          >
            Contactar
          </Button>
        </div>
      </div>
    </section>
  )
}