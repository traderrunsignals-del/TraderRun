import CoursePage from "@/components/CoursePage"

export default function Modulo1Page() {
  return (
    <CoursePage
      module={1}
      title="Fundamentos del Trading"
      description="Aprenderás las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar a operar."

      duration="18 minutos"
      videos={1}
      level="Principiante"

      videoId="zIgTzV0kWko"

      items={[
        "Fundamentos del trading",
        "¿Qué activos podemos operar?",
        "¿Qué es un activo financiero?",
        "Mercados financieros más conocidos",
        "¿Quién participa en el mercado?",
        "¿Cómo se gana dinero haciendo trading?",
        "¿Qué necesitas para empezar?",
        "Conceptos y errores más comunes",
      ]}

      tip="No intentes aprender todo de memoria. Lo importante es comprender cómo funciona el mercado antes de empezar a operar."
    />
  )
}