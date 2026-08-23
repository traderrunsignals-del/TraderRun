"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  Check,
  Crown,
  GraduationCap,
  MessageCircle,
  Send,
  ShieldCheck,
  X,
} from "lucide-react"

const plans = [
  {
    name: "Telegram Gratuito",
    icon: Send,
    price: "Gratis",
    period: "para siempre",
    desc: "Una primera toma de contacto con Trader Run y nuestra forma de analizar el mercado.",
    features: [
      "Acceso al grupo público",
      "Análisis y noticias de mercado",
      "Ideas de trading ocasionales",
      "Comunidad de traders",
    ],
    cta: "Entrar al grupo",
    href: "https://t.me/tradingproNQ",
  },
  {
    name: "Telegram VIP",
    icon: Crown,
    price: "36,95 €",
    period: "/mes",
    desc: "Acceso a análisis, operaciones y acompañamiento diario para quienes quieren seguir nuestra operativa.",
    features: [
  "Análisis diarios del mercado",
  "Señales de trading diarias",
  "Entradas, Stop Loss y Take Profit",
  "Premarket semanal cada domingo",
  "Planificación de la semana de trading",
  "Cartera de acciones en seguimiento",
  "Acompañamiento y psicotrading",
  "Comunidad privada de traders",
],
    cta: "Acceder a Telegram VIP",
    href: "https://buy.stripe.com/3cIaEQ7hMdL00Kr3Qg8so05",
  },
]

const modules = [
  {
    number: "01",
    title: "Fundamentos del Trading",
    desc: "Las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar a operar.",
  },
  {
    number: "02",
    title: "Cómo funcionan los mercados",
    desc: "Comprende cómo se mueven los mercados, quién participa en ellos y por qué el precio cambia constantemente.",
  },
  {
    number: "03",
    title: "Conociendo tu plataforma de trading",
    desc: "Configura tu espacio de trabajo y aprende a utilizar las herramientas necesarias para desarrollar el resto de la formación.",
  },
  {
    number: "04",
    title: "Aprende a leer el precio; las velas japonesas",
    desc: "Aprende a interpretar las velas japonesas y comienza a leer el comportamiento del precio con una visión estructurada.",
  },
  {
    number: "05",
    title: "La estructura del mercado",
    desc: "Identifica tendencias, impulsos y retrocesos y comprende cómo se estructura el movimiento del precio.",
  },
  {
    number: "06",
    title: "Soportes, resistencias y zonas clave",
    desc: "Identifica las zonas donde el precio puede reaccionar y aprende a incorporarlas a tu análisis.",
  },
  {
    number: "07",
    title: "Gestión del riesgo: protege tu capital",
    desc: "Aprende a definir el riesgo, proteger tu capital y establecer una gestión coherente antes de ejecutar una operación.",
  },
  {
    number: "08",
    title: "Psicología del trader y disciplina",
    desc: "Trabaja la parte psicológica del trading y aprende a ejecutar tu plan sin dejarte llevar por impulsos.",
  },
  {
    number: "09",
    title: "Estrategia",
    desc: "Aprende a aplicar la metodología Trader Run y a estructurar una operación siguiendo un proceso definido.",
  },
  {
    number: "10",
    title: "Casos prácticos estrategia",
    desc: "Lleva todo lo aprendido al gráfico mediante ejemplos prácticos de aplicación de la estrategia.",
  },
]

const includedItems = [
  "10 módulos de formación",
  "Metodología Trader Run",
  "Estrategia completa paso a paso",
  "Gestión del riesgo y psicología",
  "Casos prácticos sobre el gráfico",
  "Acceso al indicador Trader Run en TradingView",
  "Acceso ilimitado al indicador",
  "2 meses de soporte para resolver dudas",
]

export function Pricing() {
  const [showCourseInfo, setShowCourseInfo] = useState(false)

  return (
    <section
      id="precios"
      className="relative overflow-hidden border-t border-border/40"
    >
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32">

        {/* =====================================================
            CABECERA
        ===================================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            Acceso Trader Run
          </p>

          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Elige cómo quieres
            <span className="text-muted-foreground">
              {" "}formarte.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
            Puedes comenzar con nuestra comunidad o dar el siguiente paso y
            aprender la metodología completa de Trader Run.
          </p>

        </div>

        {/* =====================================================
            TELEGRAM
        ===================================================== */}

        <div className="mx-auto mt-16 grid max-w-5xl gap-5 lg:grid-cols-2">

          {plans.map((plan) => {
            const Icon = plan.icon

            return (
              <article
                key={plan.name}
                className="group relative rounded-3xl border border-border/60 bg-card/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-xl hover:shadow-primary/5 sm:p-8"
              >

                {/* CABECERA PLAN */}

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <span className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-secondary/30 text-primary">
                      <Icon className="size-5" />
                    </span>

                    <div>

                      <h3 className="font-display text-lg font-semibold">
                        {plan.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {plan.period}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="font-display text-2xl font-semibold tracking-tight">
                      {plan.price}
                    </p>

                  </div>

                </div>

                {/* DESCRIPCIÓN */}

                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {plan.desc}
                </p>

                {/* AVISO PRECIO VIP */}

                {plan.name === "Telegram VIP" && (
                  <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/[0.045] p-4">

                    <div className="flex items-center gap-2">

                      <ShieldCheck className="size-4 text-primary" />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Precio actual
                      </p>

                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Actualmente puedes acceder por{" "}
                      <span className="font-semibold text-foreground">
                        36,95 €/mes
                      </span>
                      .
                    </p>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      Próximamente pasará a{" "}
                      <span className="font-semibold text-foreground">
                        49,95 €/mes
                      </span>
                      .
                    </p>

                    <p className="mt-2 text-xs font-medium text-primary">
                      Accede ahora y mantén la tarifa actual mientras esté
                      disponible.
                    </p>

                  </div>
                )}

                {/* CARACTERÍSTICAS */}

                <div className="mt-6 grid gap-3 sm:grid-cols-2">

                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />

                      <span>
                        {feature}
                      </span>
                    </div>
                  ))}

                </div>

                {/* CTA */}

                <Button
                  variant="outline"
                  className="mt-7 h-11 w-full font-semibold"
                  render={
                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  {plan.cta}

                  <ArrowRight className="ml-2 size-4" />
                </Button>

              </article>
            )
          })}

        </div>

        {/* =====================================================
            ACADEMIA TRADER RUN
        ===================================================== */}

        <div
          id="curso"
          className="relative mt-12 overflow-hidden rounded-[32px] border border-primary/20 bg-card shadow-2xl shadow-primary/5"
        >

          {/* GLOWS */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-primary/[0.07] blur-[120px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 size-[360px] rounded-full bg-primary/[0.04] blur-[100px]"
          />

          {/* =====================================================
              CABECERA ACADEMIA
          ===================================================== */}

          <div className="relative border-b border-border/60 bg-secondary/[0.08] p-7 sm:p-10">

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">

                  <span className="size-1.5 rounded-full bg-primary" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Academia Trader Run
                  </span>

                </div>

                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Formación + metodología
                  <span className="block text-muted-foreground">
                    + indicador Trader Run
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Una formación completa para aprender a entender el mercado,
                  desarrollar criterio propio y construir una operativa basada
                  en metodología, gestión del riesgo y disciplina.
                </p>

                {/* MINI BENEFICIOS */}

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    10 módulos
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    +200 min de formación
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    Indicador incluido
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    Acceso de por vida
                  </span>

                </div>

              </div>

              {/* PRECIO */}

              <div className="shrink-0 rounded-3xl border border-primary/20 bg-primary/[0.05] p-6 lg:min-w-[220px] lg:text-center">

  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
    Promoción de lanzamiento
  </p>

  <div className="mt-2 flex flex-col items-center">

    <span className="text-sm text-muted-foreground line-through">
      1.150 €
    </span>

    <span className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
      825 €
    </span>

  </div>

  <p className="mt-2 text-xs text-muted-foreground">
    Precio de lanzamiento · Pago único
  </p>

  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">

    <span className="size-1.5 rounded-full bg-primary" />

    <span className="text-[10px] font-semibold text-primary">
      Después: 1.150 €
    </span>

  </div>

</div>

            </div>

          </div>

          {/* =====================================================
              CONTENIDO ACADEMIA
          ===================================================== */}

          <div className="relative p-7 sm:p-10">

            <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

              {/* IZQUIERDA */}

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  El recorrido
                </p>

                <h4 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  10 módulos para construir tu operativa
                </h4>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Desde los fundamentos del trading hasta la aplicación
                  práctica de la estrategia Trader Run.
                </p>

                {/* MÓDULOS */}

                <div className="mt-7 grid gap-2.5 sm:grid-cols-2">

                  {modules.map((module, index) => (
                    <div
                      key={module.number}
                      className={`group flex items-start gap-3 rounded-2xl border p-3.5 transition-all duration-300 ${
                        index === 0
                          ? "border-primary/20 bg-primary/[0.05]"
                          : "border-border/60 bg-secondary/[0.12] hover:border-primary/20 hover:bg-primary/[0.03]"
                      }`}
                    >

                      <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-xl text-[9px] font-semibold ${
                          index === 0
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {module.number}
                      </span>

                      <div className="min-w-0">

                        <p className="text-xs font-semibold leading-5">
                          {module.title}
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-muted-foreground">
                          {module.desc}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </div>

              {/* DERECHA */}

              <div className="space-y-4">

                {/* INDICADOR */}

                <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6">

                  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10">
                    <BarChart3 className="size-5 text-primary" />
                  </div>

                 <h4 className="mt-5 font-display text-xl font-semibold">
  Indicador Trader Run para TradingView
</h4>

<p className="mt-3 text-sm leading-6 text-muted-foreground">
  Recibirás acceso directamente al indicador Trader Run dentro de
  TradingView. No necesitas descargar ni instalar ningún archivo.
  Podrás utilizarlo como herramienta de apoyo para aplicar visualmente
  la metodología explicada durante la formación.
</p>

<div className="mt-5 space-y-3">

  <div className="flex items-center gap-2">
    <Check className="size-4 text-primary" />
    <span className="text-xs font-medium">
      Acceso directo desde TradingView
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="size-4 text-primary" />
    <span className="text-xs font-medium">
      Sin descargas ni instalaciones
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="size-4 text-primary" />
    <span className="text-xs font-medium">
      Acceso ilimitado
    </span>
  </div>

</div>

                  <div className="mt-4 flex items-center gap-2">

                    <ShieldCheck className="size-3.5 text-primary" />

                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Acceso de por vida
                    </span>

                  </div>

                </div>

                {/* QUÉ INCLUYE */}

                <div className="rounded-3xl border border-border/60 bg-secondary/[0.12] p-6">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Incluye
                  </p>

                  <div className="mt-5 space-y-3">

                    {includedItems.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >

                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="size-3 text-primary" />
                        </span>

                        <span className="text-xs font-medium">
                          {item}
                        </span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>
<div className="rounded-3xl border border-border/60 bg-secondary/[0.12] p-6">

  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10">
    <MessageCircle className="size-5 text-primary" />
  </div>

  <h4 className="mt-5 font-display text-xl font-semibold">
    2 meses de soporte
  </h4>

  <p className="mt-3 text-sm leading-6 text-muted-foreground">
    Durante los primeros 2 meses tendrás soporte para resolver tus
    dudas relacionadas con la formación, la metodología y el uso del
    indicador.
  </p>

  <div className="mt-5 space-y-3">

    <div className="flex items-center gap-2">
      <Check className="size-4 text-primary" />
      <span className="text-xs font-medium">
        Resolución de dudas
      </span>
    </div>

    <div className="flex items-center gap-2">
      <Check className="size-4 text-primary" />
      <span className="text-xs font-medium">
        Acompañamiento durante el aprendizaje
      </span>
    </div>

    <div className="flex items-center gap-2">
      <Check className="size-4 text-primary" />
      <span className="text-xs font-medium">
        Ayuda para aplicar la metodología
      </span>
    </div>

  </div>

</div>
            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-semibold">
                  Academia Trader Run
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Acceso disponible en septiembre · 825 € · Pago único
                </p>

              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <Button
                  variant="outline"
                  className="h-12 px-7 font-semibold"
                  onClick={() => setShowCourseInfo(true)}
                >
                  Ver el programa completo
                </Button>

                <Button
                  className="h-12 px-7 font-semibold"
                  onClick={() =>
                    alert(
                      "La Academia Trader Run estará disponible en septiembre."
                    )
                  }
                >
                  Unirme al curso
                  <ArrowRight className="ml-2 size-4" />
                </Button>

              </div>

            </div>

          </div>

        </div>
      {/* =====================================================
          MODAL — PROGRAMA COMPLETO
      ===================================================== */}

      {showCourseInfo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={() => setShowCourseInfo(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[32px] border border-border/60 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CERRAR */}

            <button
              type="button"
              onClick={() => setShowCourseInfo(false)}
              className="absolute right-5 top-5 z-20 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground backdrop-blur transition hover:border-primary/30 hover:text-foreground"
              aria-label="Cerrar programa"
            >
              <X className="size-5" />
            </button>

            {/* =================================================
                CABECERA
            ================================================= */}

            <div className="relative overflow-hidden border-b border-border/60 bg-secondary/[0.08] p-7 sm:p-10">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-primary/[0.08] blur-[120px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-32 size-[320px] rounded-full bg-primary/[0.04] blur-[100px]"
              />

              <div className="relative max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">

                  <GraduationCap className="size-3.5 text-primary" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Academia Trader Run
                  </span>

                </div>

                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Aprende a entender el mercado
                  <span className="block text-muted-foreground">
                    y desarrolla tu propia operativa.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Una formación estructurada desde los fundamentos hasta la
                  aplicación de nuestra estrategia, diseñada para que no
                  dependas eternamente de una señal, sino que aprendas a
                  entender el proceso que existe detrás de cada operación.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    10 módulos
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    Formación completa
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    Indicador incluido
                  </span>

                  <span className="rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                    Acceso de por vida
                  </span>

                </div>

              </div>

            </div>

            {/* =================================================
                CONTENIDO
            ================================================= */}

            <div className="p-7 sm:p-10">

              {/* INTRO */}

              <div className="max-w-3xl">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  El recorrido
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  De los fundamentos a la estrategia
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Cada módulo está pensado para construir sobre el anterior.
                  El objetivo es que comprendas el mercado, aprendas a
                  interpretar el precio y puedas aplicar una metodología con
                  criterio y disciplina.
                </p>

              </div>

              {/* =================================================
                  10 MÓDULOS
              ================================================= */}

              <div className="mt-8 grid gap-3 md:grid-cols-2">

                {modules.map((module) => (

                  <div
                    key={module.number}
                    className="group rounded-2xl border border-border/60 bg-secondary/[0.12] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.03]"
                  >

                    <div className="flex items-start gap-4">

                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-[10px] font-bold text-primary ring-1 ring-primary/10">
                        {module.number}
                      </span>

                      <div className="min-w-0">

                        <h4 className="font-display text-sm font-semibold leading-5">
                          {module.title}
                        </h4>

                        <p className="mt-2 text-xs leading-6 text-muted-foreground">
                          {module.desc}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

              {/* =================================================
                  INDICADOR
              ================================================= */}

              <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.045]">

                <div className="p-7 sm:p-8">

                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">

                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                      <BarChart3 className="size-5" />
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        Herramienta incluida
                      </p>

                      <h3 className="mt-2 font-display text-xl font-bold">
                        Indicador Trader Run para TradingView
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
  Recibirás acceso directamente en TradingView al indicador Trader Run,
  diseñado como herramienta de apoyo para aplicar visualmente los conceptos
  y la metodología explicados durante la formación.
</p>

<div className="mt-4 space-y-2">

  <div className="flex items-center gap-2">
    <Check className="size-3.5 text-primary" />
    <span className="text-xs font-medium">
      Acceso directo desde TradingView
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="size-3.5 text-primary" />
    <span className="text-xs font-medium">
      Acceso ilimitado
    </span>
  </div>

  <div className="flex items-center gap-2">
    <Check className="size-3.5 text-primary" />
    <span className="text-xs font-medium">
      Sin descarga ni instalación
    </span>
  </div>

</div>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  QUÉ VAS A APRENDER
              ================================================= */}

              <div className="mt-10">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                  El objetivo
                </p>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  No se trata solo de entrar en operaciones.
                </h3>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                  Queremos que termines la formación con una visión más
                  completa del mercado y con las herramientas necesarias para
                  analizar una situación, plantear un escenario y gestionar el
                  riesgo antes de tomar una decisión.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    "Entender cómo funciona el mercado",
                    "Aprender a leer el comportamiento del precio",
                    "Identificar zonas importantes",
                    "Gestionar correctamente el riesgo",
                    "Trabajar la disciplina y la psicología",
                    "Aplicar la estrategia Trader Run",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4"
                    >

                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Check className="size-3 text-primary" />
                      </span>

                      <span className="text-xs font-medium leading-5">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              {/* =================================================
                  PRECIO + CTA
              ================================================= */}

              <div className="mt-10 rounded-3xl border border-primary/20 bg-primary/[0.045] p-7 sm:p-8">

                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Academia Trader Run
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-bold">
                      Formación completa + indicador
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">

                      <span>10 módulos</span>

                      <span>•</span>

                      <span>Pago único</span>

                      <span>•</span>

                      <span>Acceso de por vida</span>

                    </div>

                  </div>

                  <div className="shrink-0 lg:text-right">

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Precio
                    </p>

                    <p className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                      825€
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      Disponible en septiembre
                    </p>

                  </div>

                </div>

                <div className="mt-7 flex flex-col gap-3 border-t border-border/60 pt-7 sm:flex-row sm:justify-end">

                  <Button
                    variant="outline"
                    className="h-12 px-7 font-semibold"
                    onClick={() => setShowCourseInfo(false)}
                  >
                    Cerrar
                  </Button>

                  <Button
                    className="h-12 px-8 font-semibold"
                    onClick={() =>
                      alert(
                        "La Academia Trader Run estará disponible en septiembre."
                      )
                    }
                  >
                    Unirme al curso
                    <ArrowRight className="ml-2 size-4" />
                  </Button>

                </div>

              </div>

            </div>

          </div>
        </div>
      )}
        {/* =====================================================
            CONTACTO
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-border/50 bg-secondary/15 p-7 text-center">

          <div className="mx-auto flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <MessageCircle className="size-5 text-primary" />
          </div>

          <h3 className="mt-4 font-display text-lg font-semibold">
            ¿Tienes alguna pregunta?
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Si quieres conocer más detalles sobre la formación, el acceso o
            cualquier otro aspecto de Trader Run, estamos aquí para ayudarte.
          </p>

          <Button
            className="mt-5"
            variant="outline"
            render={
              <a href="mailto:traderrunsignals@gmail.com" />
            }
          >
            Contactar con Trader Run
          </Button>

        </div>

      </div>

      {/* =====================================================
          MODAL — PROGRAMA COMPLETO
      ===================================================== */}

      {showCourseInfo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
          onClick={() => setShowCourseInfo(false)}
        >

          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-border/60 bg-card shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CERRAR */}

            <button
              type="button"
              onClick={() => setShowCourseInfo(false)}
              className="absolute right-5 top-5 z-20 flex size-10 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
              aria-label="Cerrar programa"
            >
              <X className="size-5" />
            </button>

            {/* CABECERA MODAL */}

            <div className="relative overflow-hidden border-b border-border/60 bg-primary/[0.045] p-8 sm:p-10">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 size-[360px] rounded-full bg-primary/[0.08] blur-[100px]"
              />

              <div className="relative max-w-3xl">

                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5">

                  <GraduationCap className="size-3.5 text-primary" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Academia Trader Run
                  </span>

                </div>

                <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  El programa completo
                </h2>

                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  Diez módulos diseñados para llevarte desde los fundamentos
                  del trading hasta la aplicación práctica de nuestra
                  estrategia.
                </p>

              </div>

            </div>

            {/* CONTENIDO MODAL */}

            <div className="p-7 sm:p-10">

              <div className="grid gap-4">

                {modules.map((module) => (
                  <article
                    key={module.number}
                    className="group rounded-2xl border border-border/60 bg-secondary/[0.12] p-5 transition duration-300 hover:border-primary/20 hover:bg-primary/[0.025]"
                  >

                    <div className="flex items-start gap-4">

                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary">
                        {module.number}
                      </span>

                      <div>

                        <h3 className="font-display text-base font-semibold">
                          {module.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {module.desc}
                        </p>

                      </div>

                    </div>

                  </article>
                ))}

              </div>

              {/* INDICADOR */}

              <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-7">

                <div className="flex items-start gap-4">

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <BarChart3 className="size-5 text-primary" />
                  </div>

                  <div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      Herramienta incluida
                    </p>

                    <h3 className="mt-1 font-display text-xl font-semibold">
                      Indicador Trader Run
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      Acceso al indicador para TradingView como herramienta de
                      apoyo para aplicar la metodología explicada durante la
                      formación.
                    </p>

                  </div>

                </div>

              </div>
              <div className="rounded-3xl border border-primary/20 bg-primary/[0.04] p-6">

  <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10">
    <MessageCircle className="size-5 text-primary" />
  </div>

  <h4 className="mt-5 font-display text-xl font-semibold">
    2 meses de soporte
  </h4>

  <p className="mt-3 text-sm leading-6 text-muted-foreground">
    Durante los 2 meses posteriores a tu acceso tendrás soporte para
    resolver dudas relacionadas con la formación, la metodología y la
    aplicación de la estrategia.
  </p>

  <div className="mt-4 flex items-center gap-2">
    <ShieldCheck className="size-3.5 text-primary" />

    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
      Acompañamiento incluido
    </span>
  </div>

</div>

              {/* PRECIO MODAL */}

              <div className="mt-8 flex flex-col gap-5 rounded-3xl border border-border/60 bg-secondary/[0.12] p-6 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                    Academia Trader Run
                  </p>

                  <p className="mt-2 font-display text-3xl font-bold">
                    825€
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Pago único · Disponible en septiembre
                  </p>

                </div>

                <Button
                  className="h-12 px-7 font-semibold"
                  onClick={() =>
                    alert(
                      "La Academia Trader Run estará disponible en septiembre."
                    )
                  }
                >
                  Unirme al curso
                  <ArrowRight className="ml-2 size-4" />
                </Button>

              </div>

            </div>

          </div>

        </div>
      )}

    </section>
  )
}