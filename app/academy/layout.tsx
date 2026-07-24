"use client"

import { LogOut } from "lucide-react"
import { useEffect, useState } from "react"
const handleLogout = async () => {
  await supabase.auth.signOut()
  router.push("/login")
}
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
const [loading, setLoading] = useState(true)

useEffect(() => {
  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    if (!session) {
      router.replace("/login")
      return
    }

    setLoading(false)
  }

  checkUser()
}, [router])
 const modules = [
  { icon: "📘", name: "Fundamentos del Trading", href: "/academy/modulo-1" },
  { icon: "🌍", name: "Cómo funcionan los mercados", href: "/academy/modulo-2" },
  { icon: "💻", name: "Plataforma de trading", href: "/academy/modulo-3" },
  { icon: "🕯️", name: "Velas japonesas", href: "/academy/modulo-4" },
  { icon: "📈", name: "Estructura del mercado", href: "/academy/modulo-5" },
  { icon: "🎯", name: "Soportes y resistencias", href: "/academy/modulo-6" },
  { icon: "🛡️", name: "Gestión del riesgo", href: "/academy/modulo-7" },
  { icon: "🧠", name: "Psicología del trader", href: "/academy/modulo-8" },
  { icon: "🚀", name: "Estrategia Trader Run", href: "/academy/modulo-9" },
  { icon: "📊", name: "Casos prácticos", href: "/academy/modulo-10" },
]

if (loading) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Cargando...
    </div>
  )
}
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-80 border-r border-border bg-card p-6">

        <h1 className="text-2xl font-bold">
          Trader Run Academy
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Área Privada
        </p>

        <div className="mt-8">
          <div className="flex justify-between text-sm">
            <span>Progreso</span>
            <span>10%</span>
          </div>

          <div className="mt-2 h-2 rounded-full bg-secondary">
            <div className="h-2 w-[10%] rounded-full bg-primary"></div>
          </div>
        </div>

        <nav className="mt-8 space-y-3">
  {modules.map((module, index) => (
    <a
      key={module.href}
      href={module.href}
      className="block rounded-xl border border-border p-3 hover:bg-primary hover:text-primary-foreground transition"
    >
      <p className="text-xs uppercase tracking-wider text-muted-foreground">
        Módulo {index + 1}
      </p>

      <p className="mt-1 font-semibold">
        {module.icon} {module.name}
      </p>
    </a>
  ))}
</nav>

<div className="mt-10 border-t pt-6">

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