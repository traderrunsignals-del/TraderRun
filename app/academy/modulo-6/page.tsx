import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"

export default function Modulo6Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 6
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Soportes, resistencias y zonas clave
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprende a identificar las zonas donde el precio tiene mayor probabilidad de reaccionar y cómo utilizarlas dentro de la estrategia Trader Run.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="uJks612ePNc" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
       <h2 className="text-2xl font-semibold">
  🎯 En este módulo aprenderás
</h2>

<ul className="mt-5 space-y-3 text-muted-foreground">
  <li>✅ ¿Qué son las zonas clave?</li>
  <li>✅ ¿Qué es un soporte?</li>
  <li>✅ ¿Qué es una resistencia?</li>
  <li>✅ Cambio de polaridad</li>
  <li>✅ Roturas de zona</li>
</ul>

<div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="font-semibold text-emerald-400">
    💡 Consejo Trader Run
  </h3>

  <p className="mt-2 text-muted-foreground">
    Un soporte o una resistencia nunca es una línea exacta. Piensa siempre en zonas donde el precio tiene mayor probabilidad de reaccionar.
  </p>
</div>

<CourseNavigation module={6} />

        <CourseNavigation module={6} />
      </div>

    </div>
  )
}