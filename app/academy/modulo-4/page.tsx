import CourseVideo from "@/components/CourseVideo"
import CourseNavigation from "@/components/CourseNavigation"

export default function Modulo4Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 4
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Aprende a leer el precio: Las velas japonesas
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Descubre cómo interpretar las velas japonesas, comprender la información que aporta cada una y empezar a leer el comportamiento del precio como un trader profesional.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="kIzEkd-SkFo" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
  Contenido de esta lección
</h2>

<ul className="mt-5 space-y-3 text-muted-foreground">
  <li>✅ ¿Qué es una vela japonesa?</li>
  <li>✅ Apertura, cierre, máximo y mínimo</li>
  <li>✅ Velas alcistas y bajistas</li>
  <li>✅ Cómo interpretar la información que transmite el precio</li>
</ul>

<CourseNavigation />

      </div>

    </div>
  )
}