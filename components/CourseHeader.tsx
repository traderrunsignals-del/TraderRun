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

      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Módulo {module} de {totalModules}
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
        {description}
      </p>

    </div>
  )
}