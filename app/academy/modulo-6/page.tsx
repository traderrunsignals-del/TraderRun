import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"

export default function Modulo6Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 6
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Soportes, resistencias y zonas clave
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprende a identificar las zonas donde el precio tiene mayor probabilidad de reaccionar y cómo utilizarlas dentro de la estrategia Trader Run.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="uJks612ePNc" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Qué son los soportes y las resistencias</li>
          <li>✅ Cómo dibujarlos correctamente</li>
          <li>✅ Zonas de reacción del precio</li>
          <li>✅ Errores más comunes al utilizarlos</li>
        </ul>

        <CourseNavigation module={6} />
      </div>

    </div>
  )
}