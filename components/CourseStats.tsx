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
    <div className="mt-8 grid gap-5 md:grid-cols-3">

      <div className="rounded-2xl border bg-primary/5 p-6">

        <div className="text-3xl">
          🕒
        </div>

        <p className="mt-3 text-base font-semibold">
          Duración
        </p>

        <p className="mt-2 text-xl font-bold">
          {duration}
        </p>

      </div>

      <div className="rounded-2xl border bg-primary/5 p-6">

        <div className="text-3xl">
          🎥
        </div>

        <p className="mt-3 text-base font-semibold">
          Vídeos
        </p>

        <p className="mt-2 text-xl font-bold">
          {videos}
        </p>

      </div>

      <div className="rounded-2xl border bg-primary/5 p-6">

        <div className="text-3xl">
          📈
        </div>

        <p className="mt-3 text-base font-semibold">
          Nivel
        </p>

        <p className="mt-2 text-xl font-bold">
          {level}
        </p>

      </div>

    </div>
  )
}