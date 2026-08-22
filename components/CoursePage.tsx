import CourseHeader from "@/components/CourseHeader"
import CourseStats from "@/components/CourseStats"
import CourseVideo from "@/components/CourseVideo"
import CourseContent from "@/components/CourseContent"
import CourseTip from "@/components/CourseTip"
import CompleteModuleButton from "@/components/CompleteModuleButton"
import CourseNavigation from "@/components/CourseNavigation"

type CoursePageProps = {
  module: number
  totalModules?: number
  title: string
  description: string
  duration: string
  videos: number
  level: string
  videoUrl: string
  items: string[]
  tip: string
}

export default function CoursePage({
  module,
  totalModules = 10,
  title,
  description,
  duration,
  videos,
  level,
  videoUrl,
  items,
  tip,
}: CoursePageProps) {
  return (
    <div className="mx-auto max-w-5xl">

      <CourseHeader
        module={module}
        totalModules={totalModules}
        title={title}
        description={description}
      />

      <CourseStats
        duration={duration}
        videos={videos}
        level={level}
      />

      <div className="mt-10 rounded-2xl border p-6">

  <h2 className="text-2xl font-semibold">
    ▶ Vídeo de la lección
  </h2>

  <p className="mt-2 text-muted-foreground">
    Visualiza esta clase antes de continuar con el contenido del módulo.
  </p>

  <div className="mt-6">
    <CourseVideo videoUrl={videoUrl} />
  </div>
  <div className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6">

  <h2 className="text-xl font-semibold">
    📄 Recursos del módulo
  </h2>

  <p className="mt-2 text-muted-foreground">
    Actualmente este módulo no dispone de archivos descargables.
    En futuros módulos podrás encontrar PDFs, checklists y material de apoyo.
  </p>

</div>

</div>

      <CompleteModuleButton module={module} />

      <CourseContent
        items={items}
      />

      <CourseTip>
        {tip}
      </CourseTip>

      <CourseNavigation module={module} />

    </div>
  )
}