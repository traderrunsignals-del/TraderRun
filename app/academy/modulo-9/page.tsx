import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo9Page() {
  return (
    <CourseModuleLayout
      module={9}
      totalModules={10}
      title="Estrategia"
      category="Estrategia Trader Run"
      duration="20 min"
      videos={1}
      level="Avanzado"
      description="Estrategia"
      videoUrl="https://player.mediadelivery.net/play/734236/3e2ea544-7f05-4732-baf8-ec04b78cc885"
      lessons={[
        "Horarios",
        "Configuración indicador",
        "Estrategia completa",
        "Sesgo",
        "Gestionar operación",
      ]}
      tip="Practica la estrategia una y otra vez. Con una buena gestión del riesgo se verán los resultados pronto."
    />
  )
}