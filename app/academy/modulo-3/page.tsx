import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo3Page() {
  return (
    <CourseModuleLayout
      module={3}
      totalModules={10}
      title="Conociendo tu plataforma de trading"
      category="Plataforma"
      duration="8 min"
      videos={1}
      level="Principiante"
      description="Aprenderás a utilizar la plataforma de trading, configurar tu espacio de trabajo y conocer las herramientas necesarias para seguir el resto del curso."
      videoUrl="https://player.mediadelivery.net/play/734236/29443fa9-8219-4998-ba5e-db8306fe293e"
      lessons={[
        "¿Qué es una plataforma de trading?",
        "¿Qué utilizaremos durante el curso?",
        "Conociendo la pantalla principal",
        "¿Qué es un gráfico?",
        "Activo y temporalidad",
        "Herramientas que utilizaremos",
        "Organiza tu espacio de trabajo",
        "Errores comunes",
      ]}
      tip="Dedica tiempo a familiarizarte con la plataforma antes de operar. Cuanto más cómodo te sientas utilizando las herramientas, más fácil será centrarte en el análisis del mercado."
    />
  )
}