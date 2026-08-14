"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { ChartCandlestick } from "lucide-react"

export default function AreaPrivadaPage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState("")

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.replace("/login")
        return
      }

      setUserEmail(session.user.email ?? "")
      setLoading(false)
    }

    checkUser()
  }, [router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">
          Cargando área privada...
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* CABECERA */}

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Trader Run
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              Área Privada
            </h1>

            <p className="mt-3 text-muted-foreground">
              Bienvenido de nuevo. Aquí encontrarás tus productos y cursos.
            </p>
          </div>

          <div className="rounded-2xl border bg-card px-5 py-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Cuenta
            </p>

            <p className="mt-1 text-sm font-medium">
              {userEmail}
            </p>
          </div>

        </div>

        {/* PRODUCTOS */}

        <section className="mt-12">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Mis productos
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Tu formación Trader Run
            </h2>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            {/* OFERTA Y DEMANDA PRO */}

            <div className="rounded-3xl border bg-card p-7 shadow-sm">

              <div className="flex items-start justify-between">

                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                  <ChartCandlestick
                    size={25}
                    strokeWidth={1.8}
                    className="text-primary"
                  />
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                  Activo
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                Curso de Oferta y Demanda
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Curso de Oferta y Demanda con estrategia de indicador.
              </p>

              <a
                href="/academy"
                className="mt-6 block rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Continuar curso →
              </a>

            </div>

            {/* PRÓXIMAMENTE */}

            <div className="rounded-3xl border border-dashed bg-card/50 p-7">

              <div className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-2xl">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Próximamente
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Nuevos cursos, herramientas y productos Trader Run.
              </p>

              <div className="mt-6 rounded-xl bg-secondary px-4 py-3 text-center text-sm font-medium text-muted-foreground">
                Próximamente
              </div>

            </div>

          </div>

        </section>

        {/* PERFIL */}

        <section className="mt-10">

          <a
            href="/academy/perfil"
            className="block rounded-3xl border bg-card p-7 transition hover:border-primary hover:shadow-lg"
          >

            <div className="flex items-center gap-5">

              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                👤
              </div>

              <div>

                <h3 className="text-lg font-semibold">
                  Mi perfil
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Consulta tu información y tu progreso.
                </p>

              </div>

            </div>

          </a>

        </section>

      </div>
    </main>
  )
}