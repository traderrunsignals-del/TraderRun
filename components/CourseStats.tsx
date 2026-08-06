type CourseStatsProps = {
  duration: string
  videos: number
  level: string
}

export default function CourseStats({
  duration,
  videos,
  level,
}: CourseStatsProps) {
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-8">

      <div className="grid grid-cols-3 divide-x divide-border">

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight">
  {duration}
</p>

          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Duración
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight">
  {videos}
</p>

          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Vídeos
          </p>
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight">
  {level}
</p>

          <p className="mt-3 text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Nivel
          </p>
        </div>

      </div>

    </div>
  )
}