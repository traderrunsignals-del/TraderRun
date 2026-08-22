import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"
import CompleteModuleButton from "@/components/CompleteModuleButton"

export default function Modulo2Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo 2 de 10
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Cómo funcionan los mercados
      </h1>

      <div className="mt-6 rounded-xl border border-border p-4">
        <div className="grid grid-cols-3 gap-4 text-center">

          <div>
            <p className="text-xs text-muted-foreground">
              ⏱ Duración
            </p>

            <p className="mt-1 font-semibold">
              6 min
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
       Comprenderás cómo se mueven los mercados financieros, quién participa en ellos y por qué el precio cambia constantemente.
      </p>

      <div className="mt-10">
        <CourseVideo videoUrl="https://player.mediadelivery.net/play/734236/d607118d-1321-40ec-a9fc-d7ab6033d0d0" />
      </div>

      <CompleteModuleButton module={2} />

      <div className="mt-10 rounded-2xl border p-6">

        <h2 className="text-2xl font-semibold">
          🎯 En este módulo aprenderás
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Qué es un mercado financiero</li>
          <li>✅ Participantes del mercado</li>
          <li>✅ Oferta y demanda</li>
          <li>✅ Liquidez</li>
          <li>✅ Volatilidad</li>
          <li>✅ Tipos de mercados</li>
          <li>✅ Conceptos clave para operar</li>
        </ul>

      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">

        <h3 className="font-semibold text-emerald-400">
          💡 Consejo Trader Run
        </h3>

        <p className="mt-2 text-muted-foreground">
          Antes de buscar oportunidades de trading, entiende cómo funciona realmente el mercado. Un buen trader conoce el entorno en el que opera.
        </p>

      </div>

      <CourseNavigation module={2} />

    </div>
  )
}