import CourseVideo from "@/components/CourseVideo"

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
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Qué es la estructura del mercado</li>
          <li>✅ Máximos y mínimos crecientes</li>
          <li>✅ Tendencia alcista y bajista</li>
          <li>✅ Cambios de estructura y zonas clave</li>
        </ul>
      </div>

    </div>
  )
}