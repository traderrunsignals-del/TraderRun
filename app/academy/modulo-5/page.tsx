import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo5Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 5 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        La estructura del mercado
      </h1>

      <div className="mt-6 rounded-xl border border-border p-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-muted-foreground">
              ⏱ Duración
            </p>

            <p className="mt-1 font-semibold">
              5 min
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
        Comprenderás cómo se mueve realmente el precio, aprenderás a identificar tendencias, impulsos y retrocesos, y descubrirás por qué la paciencia es una de las herramientas más importantes de un trader.
      </p>

      <div className="mt-10">
      <CourseVideo videoUrl="https://player.mediadelivery.net/play/734236/c932133a-9f1b-412d-ba50-0c8aec56e068" />
      </div>

      <CompleteModuleButton module={5} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Tendencia alcista</li>
          <li>✅ Tendencia bajista</li>
          <li>✅ Lateral o rango</li>
          <li>✅ Impulso y retroceso</li>
          <li>✅ La paciencia forma parte de la estrategia</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          Antes de buscar una entrada, pregúntate siempre qué estructura está formando el mercado. Operar a favor de la tendencia suele ofrecer mejores probabilidades que intentar adivinar los giros.
        </p>

      </div>

      <CourseNavigation module={5} />

    </div>
  )
}