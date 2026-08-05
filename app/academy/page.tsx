"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
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
    title: "Módulo 1",
    subtitle: "Fundamentos del Trading",
    href: "/academy/modulo-1",
  },
  {
    title: "Módulo 2",
    subtitle: "Cómo funcionan los mercados",
    href: "/academy/modulo-2",
  },
  {
    title: "Módulo 3",
    subtitle: "Conociendo tu plataforma de trading",
    href: "/academy/modulo-3",
  },
  {
    title: "Módulo 4",
    subtitle: "Aprende a leer el precio: las velas japonesas",
    href: "/academy/modulo-4",
  },
  {
    title: "Módulo 5",
    subtitle: "La estructura del mercado",
    href: "/academy/modulo-5",
  },
  {
    title: "Módulo 6",
    subtitle: "Soportes, resistencias y zonas clave",
    href: "/academy/modulo-6",
  },
  {
    title: "Módulo 7",
    subtitle: "Gestión del riesgo: protege tu capital",
    href: "/academy/modulo-7",
  },
  {
    title: "Módulo 8",
    subtitle: "Psicología del trader y disciplina",
    href: "/academy/modulo-8",
  },
  {
    title: "Módulo 9",
    subtitle: "Estrategia Trader Run",
    href: "/academy/modulo-9",
  },
  {
    title: "Módulo 10",
    subtitle: "Casos prácticos de la estrategia",
    href: "/academy/modulo-10",
  },
]

  return (
    <main className="min-h-screen bg-background px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">
          Trader Run Academy
        </h1>

        <p className="mt-3 text-muted-foreground">
          Bienvenido al área privada. Aquí encontrarás todo el contenido del curso.
        </p>
        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-8">

  <h2 className="text-3xl font-bold">
    👋 Bienvenido a Trader Run Academy
  </h2>

  <p className="mt-3 text-muted-foreground">
    Continúa tu formación y sigue avanzando hacia una operativa profesional.
  </p>

  <div className="mt-8 grid gap-6 md:grid-cols-3">

    <div className="rounded-xl border p-5">
      <p className="text-sm text-muted-foreground">
        📚 Módulos
      </p>

      <p className="mt-2 text-3xl font-bold">
        10
      </p>
    </div>

    <div className="rounded-xl border p-5">
      <p className="text-sm text-muted-foreground">
        ✅ Completados
      </p>

      <p className="mt-2 text-3xl font-bold">
       {completed}
      </p>
    </div>

    <div className="rounded-xl border p-5">
      <p className="text-sm text-muted-foreground">
        🎯 Objetivo
      </p>

      <p className="mt-2 text-xl font-semibold">
        Completar la academia
      </p>
    </div>

  </div>

</div>
</div>

<div className="mt-8">

  <div className="flex justify-between text-sm">

    <span>Progreso del curso</span>

    <span>{completed * 10}%</span>

  </div>

  <div className="mt-3 h-3 rounded-full bg-secondary">

    <div
      className="h-3 rounded-full bg-primary transition-all"
      style={{
        width: `${completed * 10}%`,
      }}
    />

  </div>

</div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <a
              key={module.href}
              href={module.href}
              className="rounded-2xl border p-6 transition hover:border-primary hover:shadow-xl"
            >
              <h2 className="text-xl font-semibold">
                {module.title}
              </h2>

              <p className="mt-2 text-muted-foreground">
                {module.subtitle}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}