import CourseVideo from "@/components/CourseVideo"

export default function Modulo1Page() {
  return (
    <div className="mx-auto max-w-5xl">

      <p className="text-sm font-semibold text-primary">
        Módulo 1
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Fundamentos del Trading
      </h1>

      <p className="mt-4 text-lg text-muted-foreground">
        Aprenderás las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar a operar.
      </p>

      <div className="mt-10">
        <CourseVideo videoId="zIgTzV0kWko" />
      </div>

      <div className="mt-10 rounded-2xl border p-6">
        <h2 className="text-2xl font-semibold">
          Contenido de esta lección
        </h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>✅ ¿Qué es el trading?</li>
          <li>✅ ¿Qué activos podemos operar?</li>
          <li>✅ Mercados financieros</li>
          <li>✅ Cómo se gana dinero haciendo trading</li>
        </ul>
      </div>

    </div>
  )
}