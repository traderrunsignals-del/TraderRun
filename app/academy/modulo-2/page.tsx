import CoursePage from "@/components/CoursePage"

export default function Modulo2Page() {
  return (
    <CoursePage
      module={2}
      title="Cómo funcionan los mercados"
      description="Comprenderás cómo se mueven los mercados financieros, quién participa en ellos y por qué el precio cambia constantemente."

      duration="20 minutos"
      videos={1}
      level="Principiante"

      videoUrl="https://player.mediadelivery.net/play/734236/fdc1dc2f-3e71-4e4a-ba65-ff4df1ab27cb"

      items={[
        "Qué es un mercado financiero",
        "Participantes del mercado",
        "Oferta y demanda",
        "Liquidez",
        "Volatilidad",
        "Tipos de mercados",
        "Horarios de negociación",
        "Conceptos clave para operar",
      ]}

      tip="Antes de buscar oportunidades de trading, entiende cómo funciona realmente el mercado. Un buen trader conoce el entorno en el que opera."
    />
  )
}