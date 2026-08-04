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
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Configuración de la plataforma</li>
          <li>✅ Herramientas principales</li>
          <li>✅ Tipos de gráficos</li>
          <li>✅ Espacio de trabajo</li>
        </ul>

        <CourseNavigation />
      </div>

    </div>
  )
}