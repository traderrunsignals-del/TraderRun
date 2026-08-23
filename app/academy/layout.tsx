"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LogOut } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)

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

      const { data: courseAccess } = await supabase
        .from("user_products")
        .select("expires_at, active")
        .eq("user_id", session.user.id)
        .eq("product_id", academyProductId)
        .eq("active", true)
        .maybeSingle()

      /*
       * COMPROBAR SI TIENE ACCESO Y SI NO HA CADUCADO
       */

      const hasAccess =
        courseAccess &&
        courseAccess.expires_at &&
        new Date(courseAccess.expires_at) > new Date()

      if (!hasAccess) {
        setAccessDenied(true)
        setLoading(false)
        return
      }

      setLoading(false)
    }

    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  /*
   * CARGANDO
   */

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

  /*
   * ACADEMIA
   *
   * La navegación de módulos se muestra ahora
   * dentro de CourseModuleLayout.
   */

  return (
    <div className="min-h-screen bg-background">

      {children}

    </div>
  )
}