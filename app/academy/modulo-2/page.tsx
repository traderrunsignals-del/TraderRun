import CourseVideo from "@/components/CourseVideo"

export default function Modulo2Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 2
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Cómo funcionan los mercados
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Descubrirás cómo se mueve el precio, qué es la oferta y la demanda y cómo piensan los traders profesionales.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="n2IVmsdNIwU" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ Oferta y demanda</li>
          <li>✅ Participantes del mercado</li>
          <li>✅ Cómo se mueve el precio</li>
          <li>✅ Conceptos básicos del mercado</li>
        </ul>
      </div>

    </div>
  )
}