"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "¿Necesito experiencia previa para empezar?",
    a: "No. El programa arranca desde los fundamentos, así que puedes empezar desde cero. Si ya tienes experiencia, puedes saltar directamente a los niveles avanzados.",
  },
  {
    q: "¿TraderRun garantiza que voy a ganar dinero?",
    a: "No. El trading conlleva riesgo y nadie puede garantizar beneficios. Lo que ofrecemos es formación seria, un método probado y acompañamiento para que operes con criterio y gestión de riesgo.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle?",
    a: "Con 3 a 5 horas semanales puedes avanzar de forma constante. Todo el contenido esta disponible, así que puede organizarte yaprendes a tu ritmo.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Los planes son mensuales y puedes cancelar en cualquier momento.",
  },
  {
    q: "¿En qué mercados se enfoca la formación?",
    a: "Cubrimos índices como el Nasdaq y Sp principalemente, forex y nuestra propia cartera de acciones. Los principios de análisis y gestión de riesgo se aplican a todos ellos.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Preguntas frecuentes
        </p>
        <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Resolvemos tus dudas
        </h2>
      </div>

      <div className="mt-12 divide-y divide-border/60 rounded-xl border border-border/60 bg-card">
        {faqs.map((item, i) => {
          const isOpen = open === i
          return (
            <div key={item.q}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  className={`size-5 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
