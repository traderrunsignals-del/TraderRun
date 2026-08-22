import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo4Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 4 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Aprende a leer el precio: Las velas japonesas
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
              Principiante
            </p>
          </div>

        </div>
      </div>

      <p className="mt-6 text-lg text-muted-foreground">
        Aprenderás a interpretar las velas japonesas, entender qué información transmite cada una y comenzar a leer el comportamiento del precio con una visión profesional.
      </p>

      <div className="mt-10">
        <CourseVideo videoUrl="https://player.mediadelivery.net/play/734236/8dbfce6e-9a11-42f7-9918-2d8aae5f7878" />
      </div>

      <CompleteModuleButton module={4} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ ¿Qué son las velas japonesas?</li>
          <li>✅ Anatomía de una vela</li>
          <li>✅ ¿Qué nos dicen las mechas?</li>
          <li>✅ El tamaño del cuerpo importa</li>
          <li>✅ Mitos sobre las velas japonesas</li>
          <li>✅ Errores comunes</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          No memorices patrones de velas. Primero comprende qué representa cada vela y qué está ocurriendo entre compradores y vendedores en ese momento.
        </p>

      </div>

      <CourseNavigation module={4} />

    </div>
  )
}