import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo2Page() {
  return (
    <CourseModuleLayout
      module={2}
      totalModules={10}
      title="Cómo funcionan los mercados"
      category="Mercados"
      duration="6 min"
      videos={1}
      level="Principiante"
      description="Comprenderás cómo se mueven los mercados financieros, quién participa en ellos y por qué el precio cambia constantemente."
      videoUrl="https://player.mediadelivery.net/play/734236/fdc1dc2f-3e71-4e4a-ba65-ff4df1ab27cb"
      lessons={[
        "Qué es un mercado financiero",
        "Participantes del mercado",
        "Oferta y demanda",
        "Liquidez",
        "Volatilidad",
        "Tipos de mercados",
        "Conceptos clave para operar",
      ]}
      tip="Antes de buscar oportunidades de trading, entiende cómo funciona realmente el mercado. Un buen trader conoce el entorno en el que opera."
    />
  )
}