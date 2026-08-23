import CourseModuleLayout from "@/components/CourseModuleLayout"

export default function Modulo5Page() {
  return (
    <CourseModuleLayout
      module={5}
      totalModules={10}
      title="La estructura del mercado"
      category="Estructura del mercado"
      duration="5 min"
      videos={1}
      level="Intermedio"
      description="Comprenderás cómo se mueve realmente el precio, aprenderás a identificar tendencias, impulsos y retrocesos, y descubrirás por qué la paciencia es una de las herramientas más importantes de un trader."
      videoUrl="https://player.mediadelivery.net/play/734236/c932133a-9f1b-412d-ba50-0c8aec56e068"
      lessons={[
        "Tendencia alcista",
        "Tendencia bajista",
        "Lateral o rango",
        "Impulso y retroceso",
        "La paciencia forma parte de la estrategia",
      ]}
      tip="Antes de buscar una entrada, pregúntate siempre qué estructura está formando el mercado. Operar a favor de la tendencia suele ofrecer mejores probabilidades que intentar adivinar los giros."
    />
  )
}