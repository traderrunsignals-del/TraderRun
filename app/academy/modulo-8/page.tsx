import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo8Page() {
  return (
    <CourseModuleLayout
      module={8}
      totalModules={10}
      title="Psicologia del trader y disciplina"
      category="Psicología"
      duration="5 min"
      videos={1}
      level="Intermedio"
      description="La importancia del psicotrading."
      videoUrl="https://player.mediadelivery.net/play/734236/1bb9213a-55ab-45f7-a738-206a44dbd207"
      lessons={[
        "La mente: Tu mayor ventaja o tu peor enemigo",
        "Las emociones más comunes",
        "Disciplina",
        "Crea una rutina",
      ]}
      tip="Céntrate en el proceso. Con una buena rutina y disciplina, los resultados llegan solos."
    />
  )
}