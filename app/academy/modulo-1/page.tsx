import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo1Page() {
  return (
    <CourseModuleLayout
      module={1}
      totalModules={10}
      title="Fundamentos del Trading"
      category="Fundamentos"
      duration="8 min"
      videos={1}
      level="Principiante"
      description="Aprenderás las bases del trading, los activos financieros, los mercados y los conceptos imprescindibles antes de comenzar a operar."
      videoUrl="https://player.mediadelivery.net/play/734236/d607118d-1321-40ec-a9fc-d7ab6033d0d0"
      lessons={[
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