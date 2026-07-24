type CourseVideoProps = {
  videoId: string
}

export default function CourseVideo({ videoId }: CourseVideoProps) {
  return (
    <div className="overflow-hidden rounded-2xl border shadow-lg">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Curso Trader Run"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}