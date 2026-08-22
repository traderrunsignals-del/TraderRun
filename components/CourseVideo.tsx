type CourseVideoProps = {
  videoUrl: string
}

export default function CourseVideo({ videoUrl }: CourseVideoProps) {
  return (
    <div className="overflow-hidden rounded-2xl border shadow-lg">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={videoUrl}
          title="Curso Trader Run"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}