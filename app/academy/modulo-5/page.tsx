import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"

export default function Modulo5Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 5
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Estructura del mercado
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprende a identificar tendencias, impulsos, retrocesos y cambios de estructura para entender cómo se organiza el movimiento del precio.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="L96vOqe8-4g" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
      <h2 className="text-2xl font-semibold">
  🎯 En este módulo aprenderás
</h2>

<ul className="mt-5 space-y-3 text-muted-foreground">
  <li>✅ Tendencia alcista</li>
  <li>✅ Tendencia bajista</li>
  <li>✅ Mercado lateral o rango</li>
  <li>✅ Impulso y retroceso</li>
  <li>✅ La paciencia forma parte de la estrategia</li>
</ul>

<div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="font-semibold text-emerald-400">
    💡 Consejo Trader Run
  </h3>

  <p className="mt-2 text-muted-foreground">
    La estructura del mercado solo se domina viendo cientos de gráficos. La práctica es tan importante como la teoría.
  </p>
</div>

<CourseNavigation module={5} />
      </div>

    </div>
  )
}