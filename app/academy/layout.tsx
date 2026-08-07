"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [loading, setLoading] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)
  const [progress, setProgress] = useState(0)
  const [completedModules, setCompletedModules] = useState(0)

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.replace("/login")
        return
      }

      /*
       * COMPROBAR ACCESO A TRADER RUN ACADEMY
       */

     const academyProductId =
  "6fe51583-a729-41ac-89e4-e2c1e69a62db"

const { data: access } = await supabase
  .from("user_products")
  .select("expires_at, active")
  .eq("user_id", session.user.id)
  .eq("product_id", academyProductId)
  .eq("active", true)
  .maybeSingle()

if (!access) {
  setAccessDenied(true)
  setLoading(false)
  return
}

      if (!access) {
        setAccessDenied(true)
        setLoading(false)
        return
      }

      /*
       * COMPROBAR CADUCIDAD
       */

      const now = new Date()

      if (
        access.expires_at &&
        new Date(access.expires_at) <= now
      ) {
        setAccessDenied(true)
        setLoading(false)
        return
      }

      /*
       * CARGAR PROGRESO
       */

      const { data } = await supabase
        .from("user_progress")
        .select("module")
        .eq("user_id", session.user.id)
        .eq("completed", true)

      const completed = data?.length ?? 0

      setCompletedModules(completed)
      setProgress((completed / 10) * 100)

      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  const modules = [
    {
      icon: "📘",
      name: "Fundamentos del Trading",
      href: "/academy/modulo-1",
    },
    {
      icon: "🌍",
      name: "Cómo funcionan los mercados",
      href: "/academy/modulo-2",
    },
    {
      icon: "💻",
      name: "Plataforma de trading",
      href: "/academy/modulo-3",
    },
    {
      icon: "🕯️",
      name: "Velas japonesas",
      href: "/academy/modulo-4",
    },
    {
      icon: "📈",
      name: "Estructura del mercado",
      href: "/academy/modulo-5",
    },
    {
      icon: "🎯",
      name: "Soportes y resistencias",
      href: "/academy/modulo-6",
    },
    {
      icon: "🛡️",
      name: "Gestión del riesgo",
      href: "/academy/modulo-7",
    },
    {
      icon: "🧠",
      name: "Psicología del trader",
      href: "/academy/modulo-8",
    },
    {
      icon: "🚀",
      name: "Estrategia Trader Run",
      href: "/academy/modulo-9",
    },
    {
      icon: "📊",
      name: "Casos prácticos",
      href: "/academy/modulo-10",
    },
  ]

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">
          Comprobando acceso...
        </p>
      </div>
    )
  }

  /*
   * ACCESO DENEGADO / CADUCADO
   */

  if (accessDenied) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">

        <div className="w-full max-w-lg rounded-3xl border bg-card p-10 text-center shadow-sm">

          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
            🔒
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Acceso a Academy no disponible
          </h1>

          <p className="mt-4 leading-7 text-muted-foreground">
            Tu acceso a Trader Run Academy ha caducado o todavía no tienes
            acceso a este curso.
          </p>

          <div className="mt-8 space-y-3">

            <a
              href="/"
              className="block rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Volver a Trader Run
            </a>

            <button
              onClick={handleLogout}
              className="w-full rounded-xl border px-5 py-3 transition hover:bg-secondary"
            >
              Cerrar sesión
            </button>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">

      <aside className="flex w-80 flex-col border-r border-border bg-card p-6">

        {/* LOGO */}

        <div className="border-b border-border pb-8">

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
            Trader Run
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Academy
          </h1>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Área privada para alumnos.
          </p>

        </div>

        {/* VOLVER A TRADER RUN */}

        <a
          href="/"
          className="mt-6 rounded-xl border px-4 py-3 text-center transition hover:bg-secondary"
        >
          ← Volver a Trader Run
        </a>

        {/* NAVEGACIÓN */}

        <div className="mt-8 space-y-3">

          <a
            href="/academy"
            className="block rounded-xl border px-4 py-3 transition hover:bg-primary hover:text-primary-foreground"
          >
            🏠 Dashboard
          </a>

          <a
            href="/academy/perfil"
            className="block rounded-xl border px-4 py-3 transition hover:bg-primary hover:text-primary-foreground"
          >
            👤 Mi perfil
          </a>

        </div>

        {/* CURSO */}

        <div className="mt-10">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Curso
          </p>

          <nav className="space-y-3">

            {modules.map((module, index) => {

              const isCompleted =
                index + 1 <= completedModules

              const isCurrent =
                pathname === module.href

              return (
                <a
                  key={module.href}
                  href={module.href}
                  className={`block rounded-xl border p-3 transition
                  ${
                    isCompleted
                      ? "border-green-500 bg-green-500/10"
                      : isCurrent
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-border hover:bg-primary hover:text-primary-foreground"
                  }`}
                >

                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Módulo {index + 1}
                  </p>

                  <p className="mt-1 flex items-center gap-2 font-semibold">

                    {isCompleted ? (
                      <span className="text-green-500">
                        ✅
                      </span>
                    ) : isCurrent ? (
                      <span className="text-blue-500">
                        ▶
                      </span>
                    ) : (
                      <span>
                        •
                      </span>
                    )}

                    {module.icon} {module.name}

                  </p>

                </a>
              )
            })}

          </nav>

        </div>

        {/* PROGRESO */}

        <div className="mt-10 border-t pt-6">

          <div className="flex justify-between text-sm">

            <span>
              Progreso
            </span>

            <span>
              {progress}%
            </span>

          </div>

          <div className="mt-3 h-2 rounded-full bg-secondary">

            <div
              className="h-2 rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            {completedModules} de 10 módulos completados
          </p>

        </div>

        {/* LOGOUT */}

        <div className="mt-auto pt-8">

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 transition hover:bg-red-500 hover:text-white"
          >

            <LogOut size={18} />

            Cerrar sesión

          </button>

        </div>

      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )
}