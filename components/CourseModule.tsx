"use client"
import { useState } from "react"
import { modules } from "@/data/modules"

type CourseModuleProps = {
  module: number
  title: string
  description: string
}

export default function CourseModule({
  module,
  title,
  description,
}: CourseModuleProps) {
  const currentModule = modules.find((m) => m.id === module)
  const [selectedLesson, setSelectedLesson] = useState(0)
  const lesson = currentModule?.lessons[selectedLesson]

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-7xl">

        <p className="text-primary font-semibold">
          Módulo {module}
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-muted-foreground">
          {description}
        </p>

        {/* Vídeo */}

        <div className="mt-10 grid grid-cols-12 gap-8">

  {/* Menú lateral */}

  <div className="col-span-4 rounded-2xl border p-6">

    <h2 className="text-2xl font-semibold">
      Lecciones
    </h2>

    <div className="mt-6 space-y-2">
      {currentModule?.lessons.map((lesson, index) => (
       <button
  key={index}
  onClick={() => setSelectedLesson(index)}
  className={`w-full rounded-lg border px-4 py-3 text-left transition ${
    selectedLesson === index
      ? "bg-primary text-primary-foreground border-primary"
      : "hover:bg-secondary"
  }`}
>
  {index + 1}. {lesson.title}
</button>
      ))}
    </div>

  </div>

  {/* Contenido */}

  <div className="col-span-8">

    <div className="aspect-video rounded-2xl border flex items-center justify-center">
      <div className="text-center">
  <p className="text-lg font-semibold">
    Lección {selectedLesson + 1}
  </p>

  <p className="mt-2 text-2xl">
    {lesson?.title}
  </p>

  <p className="mt-8 text-muted-foreground">
    Duración: {lesson?.duration}
  </p>
</div>
    </div>

    <div className="mt-6 rounded-2xl border p-6">

      <h2 className="text-2xl font-semibold">
        Material del módulo
      </h2>

      <div className="mt-4 space-y-3">

  <p>
    📄 PDF:
    {lesson?.pdf ? (
      <a
        href={lesson.pdf}
        className="ml-2 text-blue-600 underline"
      >
        Descargar
      </a>
    ) : (
      <span className="ml-2 text-gray-500">Próximamente</span>
    )}
  </p>

  <p>
    📝 Ejercicio:
    {lesson?.exercise ? (
      <a
        href={lesson.exercise}
        className="ml-2 text-blue-600 underline"
      >
        Abrir
      </a>
    ) : (
      <span className="ml-2 text-gray-500">Próximamente</span>
    )}
  </p>

</div>

    </div>

  </div>

</div>
      </div>
    </main>
  )
}