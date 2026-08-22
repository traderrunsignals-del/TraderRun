import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo7Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 7 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Gestión del riesgo
      </h1>

      <div className="mt-6 rounded-xl border border-border p-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-muted-foreground">
              ⏱ Duración
            </p>

            <p className="mt-1 font-semibold">
              8 min
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
              Intermedio
            </p>
          </div>

        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">
        Aprenderás la importancia de la gestión del riesgo y cómo utilizarla a tu favor.
      </p>

      <div className="mt-10">
        <CourseVideo videoUrl="https://player.mediadelivery.net/play/734236/fea2b0d2-15a6-49d9-8d13-b12ea88d49b5" />
      </div>

      <CompleteModuleButton module={7} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ ¿Qué es la gestión del riesgo?</li>
          <li>✅ ¿Qué es el stop loss?</li>
          <li>✅ ¿Qué es el take profit?</li>
          <li>✅ Cómo calcular el riesgo por operación</li>
          <li>✅ Proteger el capital como prioridad</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          Sé disciplinado y dale a la gestión del riesgo la importancia que merece.
        </p>

      </div>

      <CourseNavigation module={7} />

    </div>
  )
}