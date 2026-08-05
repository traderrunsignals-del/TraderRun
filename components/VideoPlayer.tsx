export default function VideoPlayer({
  provider,
  id,
}: {
  provider: string
  id: string
}) {

  if (provider === "youtube") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
    )
  }


  if (provider === "bunny") {
    return (
      <iframe
        src={`https://iframe.mediadelivery.net/embed/${id}`}
        className="w-full aspect-video rounded-xl"
        allowFullScreen
      />
    )
  }


  return null
}