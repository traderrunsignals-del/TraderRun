import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo6Page() {
  return (
    <CourseModuleLayout
      module={6}
      totalModules={10}
      title="Soportes, resistencias y zonas clave"
      category="Soportes y resistencias"
      duration="6 min"
      videos={1}
      level="Intermedio"
      description="Aprenderás a identificar las zonas donde el precio tiene mayor probabilidad de reaccionar y cómo utilizarlas para encontrar operaciones con mayor probabilidad de éxito."
      videoUrl="https://player.mediadelivery.net/play/734236/adea1a31-d03e-42a6-bf8b-78eb718accce"
      lessons={[
        "¿Qué son las zonas clave?",
        "¿Qué es un soporte?",
        "¿Qué es una resistencia?",
        "Cambio de polaridad",
        "Roturas de zona",
      ]}
      tip="No dibujes soportes y resistencias como líneas exactas. Piensa siempre en zonas donde el precio puede reaccionar, no en un único nivel."
    />
  )
}