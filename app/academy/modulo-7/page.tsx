import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo7Page() {
  return (
    <CourseModuleLayout
      module={7}
      totalModules={10}
      title="Gestión del riesgo"
      category="Gestión del riesgo"
      duration="8 min"
      videos={1}
      level="Intermedio"
      description="Aprenderás la importancia de la gestión del riesgo y cómo utilizarla a tu favor."
      videoUrl="https://player.mediadelivery.net/play/734236/fea2b0d2-15a6-49d9-8d13-b12ea88d49b5"
      lessons={[
        "¿Qué es la gestión del riesgo?",
        "¿Qué es el stop loss?",
        "¿Qué es el take profit?",
        "Cómo calcular el riesgo por operación",
        "Proteger el capital como prioridad",
      ]}
      tip="Sé disciplinado y dale a la gestión del riesgo la importancia que merece."
    />
  )
}