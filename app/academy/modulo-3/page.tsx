import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo3Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 3 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Conociendo tu plataforma de trading
      </h1>

      <div className="mt-6 rounded-xl border border-border p-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-muted-foreground">
              ⏱ Duración
            </p>
            <p className="mt-1 font-semibold">
              20 min
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
        Aprenderás a utilizar la plataforma de trading, configurar tu espacio de trabajo y conocer las herramientas necesarias para seguir el resto del curso.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="pnbn5LlGih0" />
      </div>

      <CompleteModuleButton module={3} />

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

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          Dedica tiempo a familiarizarte con la plataforma antes de operar. Cuanto más cómodo te sientas utilizando las herramientas, más fácil será centrarte en el análisis del mercado.
        </p>

      </div>

      <CourseNavigation module={3} />

    </div>
  )
}