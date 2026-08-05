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

<div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
  <h3 className="font-semibold text-emerald-400">
    💡 Consejo Trader Run
  </h3>

  <p className="mt-2 text-muted-foreground">
    No memorices patrones de velas. Aprende a interpretar qué están haciendo compradores y vendedores.
  </p>
</div>

<CourseNavigation module={4} />

      </div>

    </div>
  )
}