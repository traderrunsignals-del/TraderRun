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
  <li>✅ ¿Qué es un mercado financiero?</li>
  <li>✅ ¿Qué hace que el precio suba o baje?</li>
  <li>✅ Oferta y demanda</li>
  <li>✅ ¿Quién decide el precio?</li>
  <li>✅ ¿Qué hace realmente un trader?</li>
  <li>✅ ¿Se puede predecir el mercado?</li>
  <li>✅ ¿Por qué los principiantes suelen perder?</li>
  <li>✅ Pensar como un trader profesional</li>
</ul>

<div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="font-semibold text-emerald-400">
    💡 Consejo Trader Run
  </h3>

  <p className="mt-2 text-muted-foreground">
    El mercado no se mueve por casualidad. Aprende a entender quién está comprando y quién está vendiendo.
  </p>
</div>

<CourseNavigation module={2} />
        <CourseNavigation />
      </div>

    </div>
  )
}