import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"

export default function Modulo3Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 3
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Conociendo tu plataforma de trading
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprende a configurar tu plataforma, interpretar los gráficos y preparar tu espacio de trabajo para operar correctamente.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="pnbn5LlGih0" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
      <h2 className="text-2xl font-semibold">
  🎯 En este módulo aprenderás
</h2>

<ul className="mt-5 space-y-3 text-muted-foreground">
  <li>✅ ¿Qué es una plataforma de trading?</li>
  <li>✅ ¿Qué utilizaremos durante el curso?</li>
  <li>✅ Conociendo la pantalla principal</li>
  <li>✅ ¿Qué es un gráfico?</li>
  <li>✅ Activo y temporalidad</li>
  <li>✅ Herramientas que utilizaremos</li>
  <li>✅ Organiza tu espacio de trabajo</li>
  <li>✅ Errores comunes</li>
</ul>

<div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="font-semibold text-emerald-400">
    💡 Consejo Trader Run
  </h3>

  <p className="mt-2 text-muted-foreground">
    Dedica tiempo a configurar correctamente tu plataforma. Un buen entorno de trabajo evita muchos errores.
  </p>
</div>

<CourseNavigation module={3} />

        <CourseNavigation />
      </div>

    </div>
  )
}