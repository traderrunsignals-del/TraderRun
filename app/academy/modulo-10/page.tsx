import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo10Page() {
  return (
    <CourseModuleLayout
      module={10}
      totalModules={10}
      title="Casos prácticos"
      category="Casos prácticos"
      duration="5 min"
      videos={1}
      level="Avanzado"
      description="Ejemplos prácticos para aplicar todo lo aprendido durante el curso."
      videoUrl="https://player.mediadelivery.net/play/734236/f3497494-fe65-40a6-9ba4-cd4863c0fcd7"
      lessons={[
        "Varios ejemplos de cómo aplicar la estrategia",
      ]}
      tip="Revisa cada módulo las veces que lo necesites, abre el gráfico y práctica."
    />
  )
}