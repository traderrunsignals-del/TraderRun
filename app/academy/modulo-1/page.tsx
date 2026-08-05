import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo1Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 1 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Fundamentos del Trading
      </h1>

      <div className="mt-6 rounded-xl border border-border p-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-muted-foreground">
              ⏱ Duración
            </p>

            <p className="mt-1 font-semibold">
              18 min
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              🎥 Vídeos
            </p>

            <p className="mt-1 font-semibold">
              1
            </p>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              📊 Nivel
            </p>

            <p className="mt-1 font-semibold">
              Principiante
            </p>
          </div>

        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">
        Aprenderás las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar a operar.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="zIgTzV0kWko" />
      </div>

      <CompleteModuleButton module={1} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Fundamentos del trading</li>
          <li>✅ ¿Qué activos podemos operar?</li>
          <li>✅ ¿Qué es un activo financiero?</li>
          <li>✅ Mercados financieros más conocidos</li>
          <li>✅ ¿Quién participa en el mercado?</li>
          <li>✅ ¿Cómo se gana dinero haciendo trading?</li>
          <li>✅ ¿Qué necesitas para empezar?</li>
          <li>✅ Conceptos y errores más comunes</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          No intentes aprender todo de memoria. Lo importante es comprender cómo funciona el mercado antes de empezar a operar.
        </p>

      </div>

      <CourseNavigation module={1} />

    </div>
  )
}