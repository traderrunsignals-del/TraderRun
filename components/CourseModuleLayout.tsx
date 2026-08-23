"use client"

import { useEffect, useState } from "react"
import {
  BarChart3,
  BookOpen,
  Check,
  Clock3,
  Lock,
  Play,
  ShieldCheck,
} from "lucide-react"

import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"
import { supabase } from "@/lib/supabase"

type CourseModuleLayoutProps = {
  module: number
  totalModules: number
  title: string
  category: string
  duration: string
  videos: number
  level: string
  description: string
  videoUrl: string
  lessons: string[]
  tip: string
}
<div className="mb-6">
  <a
    href="/academy"
    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
  >
    ← Volver a la Academia
  </a>
</div>
const moduleNames = [
  "Fundamentos del Trading",
  "Cómo funcionan los mercados",
  "Conociendo tu plataforma",
  "Velas japonesas",
  "Estructura del mercado",
  "Soportes y resistencias",
  "Gestión del riesgo",
  "Psicología del trader",
  "Estrategia Trader Run",
  "Casos prácticos",
]
const moduleTitles = [
  "Módulo 1: Fundamentos del Trading",
  "Módulo 2: Cómo funcionan los mercados",
  "Módulo 3: Conociendo tu plataforma de trading",
  "Módulo 4: Aprende a leer el precio; las velas japonesas",
  "Módulo 5: La estructura del mercado",
  "Módulo 6: Soportes, resistencias y zonas clave",
  "Módulo 7: Gestión del riesgo: protege tu capital",
  "Módulo 8: Psicología del trader y disciplina",
  "Módulo 9: Estrategia",
  "Módulo 10: Casos prácticos estrategia",
]

export default function CourseModuleLayout({
  module,
  totalModules,
  title,
  category,
  duration,
  videos,
  level,
  description,
  videoUrl,
  lessons,
  tip,
}: CourseModuleLayoutProps) {
  const [completedModules, setCompletedModules] = useState<number[]>([])
  const [progressLoading, setProgressLoading] = useState(true)

  /*
   * CARGAR PROGRESO REAL DESDE SUPABASE
   */

  const loadProgress = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setProgressLoading(false)
      return
    }

    const { data, error } = await supabase
      .from("user_progress")
      .select("module")
      .eq("user_id", user.id)
      .eq("completed", true)

    if (error) {
      console.error("Error cargando progreso:", error)
      setProgressLoading(false)
      return
    }

    const modules = (data ?? [])
      .map((item) => Number(item.module))
      .filter((item) => !Number.isNaN(item))

    setCompletedModules(modules)
    setProgressLoading(false)
  }

  /*
   * CARGAR PROGRESO AL ENTRAR
   */

  useEffect(() => {
    loadProgress()
  }, [])

  /*
   * ACTUALIZAR PROGRESO CUANDO SE COMPLETA UN MÓDULO
   */

  useEffect(() => {
    const handleProgressUpdate = () => {
      loadProgress()
    }

    window.addEventListener(
      "academy-progress-updated",
      handleProgressUpdate
    )

    return () => {
      window.removeEventListener(
        "academy-progress-updated",
        handleProgressUpdate
      )
    }
  }, [])

  /*
   * PROGRESO REAL
   */

  const completedCount = completedModules.length

  const progress =
    totalModules > 0
      ? Math.round((completedCount / totalModules) * 100)
      : 0

  /*
   * ESTADO DEL MÓDULO ACTUAL
   */

  const isCurrentCompleted = completedModules.includes(module)

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.035] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-250px] top-[700px] size-[500px] rounded-full bg-primary/[0.025] blur-[140px]"
      />

      {/* =====================================================
          CONTENIDO PRINCIPAL
      ===================================================== */}

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-12">

        {/* ===================================================
            CABECERA
        =================================================== */}

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Módulo {String(module).padStart(2, "0")}
                </span>

                <span className="size-1 rounded-full bg-border" />

                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {category}
                </span>

              </div>

              <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                {title}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                {description}
              </p>

                       </div>

          </div>

        </div>

        {/* ===================================================
            INFORMACIÓN DEL MÓDULO
        =================================================== */}

        <div className="mx-auto mt-8 max-w-[1400px]">

          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-border/60 bg-card/60">

            <div className="border-r border-border/50 px-4 py-5 text-center sm:px-6">

              <Clock3 className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Duración
              </p>

              <p className="mt-1 text-base font-semibold">
                {duration}
              </p>

            </div>

            <div className="border-r border-border/50 px-4 py-5 text-center sm:px-6">

              <Play className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Vídeos
              </p>

              <p className="mt-1 text-base font-semibold">
                {videos}
              </p>

            </div>

            <div className="px-4 py-5 text-center sm:px-6">

              <BarChart3 className="mx-auto size-5 text-primary" />

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Nivel
              </p>

              <p className="mt-1 text-base font-semibold">
                {level}
              </p>

            </div>

          </div>

        </div>

        {/* ===================================================
            ZONA PRINCIPAL
            SIDEBAR IZQUIERDA + CONTENIDO
        =================================================== */}

        <div className="mx-auto mt-10 grid max-w-[1400px] gap-10 lg:grid-cols-[300px_minmax(0,1fr)]">

          {/* =================================================
              SIDEBAR IZQUIERDA
          ================================================= */}

        <aside className="hidden lg:block">
  <div className="sticky top-8">

    {/* PROGRESO */}

    <div className="mb-4 rounded-2xl border border-border/60 bg-card/60 px-6 py-5 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
          Progreso
        </span>

        <span className="font-display text-base font-semibold text-primary">
          {progress}%
        </span>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <p className="mt-2 text-right text-xs text-muted-foreground">
        {completedCount} de {totalModules} módulos completados
      </p>
    </div>

    {/* FORMACIÓN */}

    <div className="rounded-[26px] border border-border/60 bg-card/60 p-5 backdrop-blur-sm">

      {/* CABECERA */}

      <div className="flex items-center justify-between px-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Tu formación
          </p>

          <p className="mt-1.5 text-base font-semibold">
            Trader Run
          </p>
        </div>

        <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
          <BookOpen className="size-4 text-primary" />
        </div>
      </div>

      {/* LISTA DE MÓDULOS */}

      <div className="mt-5 space-y-2">
        {moduleNames.map((name, index) => {
          const moduleNumber = index + 1

          const isCompleted =
            completedModules.includes(moduleNumber)

          const isCurrent =
            moduleNumber === module

          const isUnlocked =
            moduleNumber === 1 ||
            completedModules.includes(moduleNumber - 1)

          const href =
            `/academy/modulo-${moduleNumber}`

          return (
            <div
              key={name}
              className={`rounded-2xl transition-all ${
                isCurrent
                  ? "bg-primary/10 ring-1 ring-primary/25"
                  : isCompleted
                    ? "bg-primary/[0.035]"
                    : ""
              }`}
            >
              {isUnlocked ? (
                <a
                  href={href}
                  className="flex items-center gap-3 px-3 py-3.5"
                >
                  {/* NÚMERO */}

                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-xl text-[11px] font-bold ${
                      isCurrent
                        ? "bg-primary text-primary-foreground"
                        : isCompleted
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {String(moduleNumber).padStart(2, "0")}
                  </span>

                  {/* NOMBRE */}

                  <span
                    className={`min-w-0 flex-1 text-sm leading-5 ${
                      isCurrent
                        ? "font-semibold text-foreground"
                        : isCompleted
                          ? "font-medium text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {name}
                  </span>

                  {/* ESTADO */}

                  {isCompleted ? (
                    <Check className="size-4 shrink-0 text-primary" />
                  ) : isCurrent ? (
                    <Play className="size-4 shrink-0 fill-current text-primary" />
                  ) : (
                    <span className="size-2 shrink-0 rounded-full bg-muted-foreground/30" />
                  )}
                </a>
              ) : (
                <div className="flex cursor-not-allowed items-center gap-3 px-3 py-3.5 opacity-45">
                  {/* NÚMERO */}

                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-[11px] font-bold text-muted-foreground">
                    {String(moduleNumber).padStart(2, "0")}
                  </span>

                  {/* NOMBRE */}

                  <span className="min-w-0 flex-1 text-sm leading-5 text-muted-foreground">
                    {name}
                  </span>

                  {/* CANDADO */}

                  <Lock className="size-4 shrink-0 text-muted-foreground/60" />
                </div>
              )}

              {/* ESTADO COMPLETADO */}

              {isCompleted && (
                <div className="pb-3 pl-[60px]">
                  <span className="text-[10px] font-semibold text-primary">
                    ✓ Módulo completado
                  </span>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  </div>
</aside>

          {/* =================================================
              CONTENIDO PRINCIPAL
          ================================================= */}

          <main className="min-w-0">

            {/* VÍDEO */}

            <div className="relative overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-2xl shadow-black/10">

              <div className="border-b border-border/50 bg-secondary/[0.12] px-5 py-4 sm:px-6">

                <div className="flex items-center justify-between">

                 <div className="flex items-center gap-3">

  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10">
    <Play className="size-4 text-primary" />
  </span>

  <span className="text-sm font-semibold tracking-wide">
    {moduleTitles[module - 1]}
  </span>

</div>

                  <span className="text-xs text-muted-foreground">
                    {duration}
                  </span>

                </div>

              </div>

              <div className="p-2 sm:p-3">

                <div className="overflow-hidden rounded-xl">

                  <CourseVideo videoUrl={videoUrl} />

                </div>

              </div>

            </div>

            {/* COMPLETAR */}

            <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/[0.035] p-5 sm:p-6">

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">

                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">

                    <Check className="size-5 text-primary" />

                  </div>

                  <div>

                    <p className="text-sm font-semibold">
                      ¿Has terminado esta lección?
                    </p>

                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Marca el módulo como completado para continuar.
                    </p>

                  </div>

                </div>

                <div className="sm:w-64">

                  <CompleteModuleButton module={module} />

                </div>

              </div>

            </div>

            {/* CONTENIDO */}

            <div className="mt-8 rounded-[26px] border border-border/60 bg-card/40 p-6 sm:p-8">

              <div className="flex items-center gap-4">

                <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">

                  <BookOpen className="size-5 text-primary" />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Contenido
                  </p>

                  <h2 className="mt-1.5 font-display text-2xl font-semibold tracking-tight">
                    En este módulo aprenderás
                  </h2>

                </div>

              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">

                {lessons.map((lesson, index) => (

                  <div
                    key={lesson}
                    className="group flex items-start gap-4 rounded-xl border border-border/50 bg-background/20 px-4 py-4 transition-colors hover:border-primary/20 hover:bg-primary/[0.025]"
                  >

                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[10px] font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="pt-1 text-sm leading-6 text-muted-foreground transition-colors group-hover:text-foreground">
                      {lesson}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* CONSEJO */}

            <div className="relative mt-5 overflow-hidden rounded-[26px] border border-primary/20 bg-primary/[0.045] p-6 sm:p-7">

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-primary/[0.08] blur-3xl"
              />

              <div className="relative flex gap-4">

                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">

                  <ShieldCheck className="size-5 text-primary" />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Consejo Trader Run
                  </p>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {tip}
                  </p>

                </div>

              </div>

            </div>

          </main>

        </div>

        {/* ===================================================
            NAVEGACIÓN ANTERIOR / SIGUIENTE
        =================================================== */}

        <div className="mx-auto mt-10 max-w-[1400px]">

          <CourseNavigation
            module={module}
            totalModules={totalModules}
          />

        </div>

        {/* ===================================================
            CIERRE
        =================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center">

          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary/10">

            <ShieldCheck className="size-5 text-primary" />

          </div>

          <p className="mt-4 text-sm font-medium text-muted-foreground">
            Aprende el proceso. Aplica la metodología. Desarrolla criterio.
          </p>

        </div>

      </div>

    </div>
  )
}