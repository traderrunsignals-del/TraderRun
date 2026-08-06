type CourseHeaderProps = {
  module: number
  totalModules: number
  title: string
  description: string
}

export default function CourseHeader({
  module,
  totalModules,
  title,
  description,
}: CourseHeaderProps) {
  return (
    <div>

      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        Módulo {module} de {totalModules}
      </span>

      <h1 className="mt-6 text-5xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-xl leading-9 text-muted-foreground">
        {description}
      </p>

    </div>
  )
}