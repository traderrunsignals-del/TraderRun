import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo9Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 9 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Estrategia
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
              Avanzado
            </p>
          </div>

        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">
        Estrategia
      </p>

      <div className="mt-10">
        <CourseVideo videoUrl="https://player.mediadelivery.net/play/734236/3e2ea544-7f05-4732-baf8-ec04b78cc885" />
      </div>

      <CompleteModuleButton module={9} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Horarios</li>
          <li>✅ Configuración indicador</li>
          <li>✅ Estrategia completa</li>
          <li>✅ Sesgo</li>
          <li>✅ Gestionar operación</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          Practica la estrategia una y otra vez. Con una buena gestión del riesgo se verán los resultados pronto.
        </p>

      </div>

      <CourseNavigation module={9} />

    </div>
  )
}