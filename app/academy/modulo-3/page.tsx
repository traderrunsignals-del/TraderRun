import CourseVideo from "@/components/CourseVideo"

export default function Modulo3Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 3
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Plataforma de trading
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprende a utilizar la plataforma de trading, configurar los gráficos y conocer las herramientas esenciales para operar con seguridad.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="pnbn5LlGih0" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Introducción a la plataforma</li>
          <li>✅ Configuración de gráficos</li>
          <li>✅ Herramientas principales</li>
          <li>✅ Consejos para empezar a operar</li>
        </ul>
      </div>

    </div>
  )
}