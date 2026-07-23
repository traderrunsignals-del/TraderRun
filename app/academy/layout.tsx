export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const modules = [
    { name: "📘 Fundamentos del Trading", href: "/academy/modulo-1" },
    { name: "🌍 Cómo funcionan los mercados", href: "/academy/modulo-2" },
    { name: "💻 Plataforma de trading", href: "/academy/modulo-3" },
    { name: "🕯️ Velas japonesas", href: "/academy/modulo-4" },
    { name: "📈 Estructura del mercado", href: "/academy/modulo-5" },
    { name: "🎯 Soportes y resistencias", href: "/academy/modulo-6" },
    { name: "🛡️ Gestión del riesgo", href: "/academy/modulo-7" },
    { name: "🧠 Psicología del trader", href: "/academy/modulo-8" },
    { name: "🚀 Estrategia Trader Run", href: "/academy/modulo-9" },
    { name: "📊 Casos prácticos", href: "/academy/modulo-10" },
  ]

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

        <nav className="mt-8 space-y-2">
          {modules.map((module) => (
            <a
              key={module.href}
              href={module.href}
              className="block rounded-lg px-3 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition"
            >
              {module.name}
            </a>
          ))}
        </nav>

      </aside>

      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  )
}