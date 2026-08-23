"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AcademyPage() {
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) return

      const { data } = await supabase
        .from("user_progress")
        .select("module")
        .eq("user_id", session.user.id)
        .eq("completed", true)

      setCompleted(data?.length ?? 0)
    }

    loadData()
  }, [])

  const modules = [
    {
      number: 1,
      title: "Fundamentos del Trading",
      href: "/academy/modulo-1",
    },
    {
      number: 2,
      title: "Cómo funcionan los mercados",
      href: "/academy/modulo-2",
    },
    {
      number: 3,
      title: "Conociendo tu plataforma de trading",
      href: "/academy/modulo-3",
    },
    {
      number: 4,
      title: "Aprende a leer el precio: las velas japonesas",
      href: "/academy/modulo-4",
    },
    {
      number: 5,
      title: "La estructura del mercado",
      href: "/academy/modulo-5",
    },
    {
      number: 6,
      title: "Soportes, resistencias y zonas clave",
      href: "/academy/modulo-6",
    },
    {
      number: 7,
      title: "Gestión del riesgo: protege tu capital",
      href: "/academy/modulo-7",
    },
    {
      number: 8,
      title: "Psicología del trader y disciplina",
      href: "/academy/modulo-8",
    },
    {
      number: 9,
      title: "Estrategia",
      href: "/academy/modulo-9",
    },
    {
      number: 10,
      title: "Casos prácticos estrategia",
      href: "/academy/modulo-10",
    },
  ]

  const progress = Math.min(completed * 10, 100)

  const nextModule =
    completed < 10 ? modules[completed] : null

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* VOLVER AL INICIO */}

        <div className="mb-8 flex items-center justify-between">
  <a
    href="/"
    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
  >
    ← Volver al inicio
  </a>

  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
    Trader Run Academy
  </span>
</div>

        {/* CABECERA */}
        <header>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trader Run Academy
          </h1>

          <p className="mt-2 text-muted-foreground">
            Continúa tu formación y sigue avanzando hacia una operativa profesional.
          </p>
        </header>

        {/* PROGRESO */}
        <section className="mt-8">

          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold">
                Progreso del curso
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                {completed} de 10 módulos completados
              </p>
            </div>

            <span className="text-2xl font-bold text-primary">
              {progress}%
            </span>
          </div>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

        </section>

        {/* CONTINUAR FORMACIÓN */}
        <section className="mt-8">

          {nextModule ? (
            <a
              href={nextModule.href}
              className="group block rounded-2xl border border-primary/30 bg-primary/5 p-6 transition hover:border-primary hover:bg-primary/10 hover:shadow-lg sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-start gap-4">

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-lg font-bold text-primary">
                    {nextModule.number}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      Continuar formación
                    </p>

                    <h2 className="mt-2 text-2xl font-bold">
                      Módulo {nextModule.number}: {nextModule.title}
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                      Continúa exactamente donde lo dejaste.
                    </p>
                  </div>

                </div>

                <div className="shrink-0">

                  <span className="inline-flex items-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition group-hover:translate-x-1">
                    Continuar →
                  </span>

                </div>

              </div>
            </a>
          ) : (
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Academia completada
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                🎉 Has completado Trader Run Academy
              </h2>

              <p className="mt-2 text-muted-foreground">
                Has completado los 10 módulos de la formación.
              </p>

            </div>
          )}

        </section>

        {/* FORMACIÓN */}
        <section className="mt-12">

          <div className="mb-5">
            <h2 className="text-2xl font-bold">
              Tu formación
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Completa los módulos en orden para avanzar por la academia.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {modules.map((module) => {

              const isCompleted = module.number <= completed
              const isCurrent = module.number === completed + 1
              const isLocked = module.number > completed + 1

              if (isLocked) {
                return (
                  <div
                    key={module.href}
                    className="rounded-2xl border border-border/60 bg-secondary/10 p-5 opacity-60"
                  >
                    <div className="flex items-start gap-4">

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-sm font-bold text-muted-foreground">
                        {module.number}
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          🔒 Módulo {module.number}
                        </p>

                        <h3 className="mt-2 font-semibold leading-snug">
                          {module.title}
                        </h3>

                        <p className="mt-3 text-xs text-muted-foreground">
                          Completa el módulo anterior para desbloquearlo.
                        </p>
                      </div>

                    </div>
                  </div>
                )
              }

              return (
                <a
                  key={module.href}
                  href={module.href}
                  className={`group rounded-2xl border p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${
                    isCompleted
                      ? "border-primary/20 bg-primary/[0.04] hover:border-primary/40"
                      : "border-primary/40 bg-primary/5 hover:border-primary"
                  }`}
                >
                  <div className="flex items-start gap-4">

                    <div
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        isCompleted
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/15 text-primary"
                      }`}
                    >
                      {isCompleted ? "✓" : module.number}
                    </div>

                   <div className="min-w-0">

  <div className="flex items-center justify-between gap-2">

    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
      {isCompleted
        ? `✓ Completado · Módulo ${module.number}`
        : `Módulo ${module.number}`}
    </p>

    {isCurrent && (
      <span className="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase text-primary">
        Siguiente
      </span>
    )}

  </div>

                      <h3 className="mt-2 font-semibold leading-snug">
                        {module.title}
                      </h3>

                      <p className="mt-3 text-xs text-muted-foreground transition group-hover:text-foreground">
                        {isCompleted
                          ? "Volver a ver módulo →"
                          : "Comenzar módulo →"}
                      </p>

                    </div>

                  </div>
                </a>
              )
            })}

          </div>

        </section>

        {/* ACCESOS SECUNDARIOS */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">

          <a
            href="/academy/perfil"
            className="rounded-2xl border p-5 transition hover:border-primary hover:shadow-md"
          >
            <p className="text-sm font-semibold">
              👤 Mi perfil
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Consulta tu información y tu progreso.
            </p>
          </a>

          <a
            href="https://t.me/tradingproNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border p-5 transition hover:border-primary hover:shadow-md"
          >
            <p className="text-sm font-semibold">
              📲 Telegram VIP
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Accede al grupo privado de Telegram.
            </p>
          </a>

        </section>

      </div>
    </main>
  )
}