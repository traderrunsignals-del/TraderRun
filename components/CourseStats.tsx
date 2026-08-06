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
    <div className="mt-8 grid gap-6 md:grid-cols-3">

      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 shadow-sm transition hover:shadow-lg">

        <div className="text-4xl">
          🕒
        </div>

        <p className="mt-4 text-sm uppercase tracking-wider text-blue-500 font-semibold">
          Duración
        </p>

        <p className="mt-2 text-2xl font-bold">
          {duration}
        </p>

      </div>

      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 shadow-sm transition hover:shadow-lg">

        <div className="text-4xl">
          🎥
        </div>

        <p className="mt-4 text-sm uppercase tracking-wider text-red-500 font-semibold">
          Vídeos
        </p>

        <p className="mt-2 text-2xl font-bold">
          {videos}
        </p>

      </div>

      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 shadow-sm transition hover:shadow-lg">

        <div className="text-4xl">
          📈
        </div>

        <p className="mt-4 text-sm uppercase tracking-wider text-emerald-500 font-semibold">
          Nivel
        </p>

        <p className="mt-2 text-2xl font-bold">
          {level}
        </p>

      </div>

    </div>
  )
}