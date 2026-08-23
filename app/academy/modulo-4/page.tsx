import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo4Page() {
  return (
    <CourseModuleLayout
      module={4}
      totalModules={10}
      title="Aprende a leer el precio: Las velas japonesas"
      category="Velas japonesas"
      duration="5 min"
      videos={1}
      level="Principiante"
      description="Aprenderás a interpretar las velas japonesas, entender qué información transmite cada una y comenzar a leer el comportamiento del precio con una visión profesional."
      videoUrl="https://player.mediadelivery.net/play/734236/8dbfce6e-9a11-42f7-9918-2d8aae5f7878"
      lessons={[
        "¿Qué son las velas japonesas?",
        "Anatomía de una vela",
        "¿Qué nos dicen las mechas?",
        "El tamaño del cuerpo importa",
        "Mitos sobre las velas japonesas",
        "Errores comunes",
      ]}
      tip="No memorices patrones de velas. Primero comprende qué representa cada vela y qué está ocurriendo entre compradores y vendedores en ese momento."
    />
  )
}