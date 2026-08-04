"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { completeModule } from "@/lib/progress"

type Props = {
  module: number
}

export default function CompleteModuleButton({ module }: Props) {
  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleComplete = async () => {
    setLoading(true)

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setLoading(false)
      return
    }

    await completeModule(user.id, module)

    setCompleted(true)
    setLoading(false)
  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading || completed}
      className={`mt-8 w-full rounded-xl px-6 py-3 font-semibold transition ${
        completed
          ? "bg-green-600 text-white"
          : "bg-primary text-primary-foreground hover:opacity-90"
      }`}
    >
      {loading
        ? "Guardando..."
        : completed
        ? "✅ Módulo completado"
        : "Marcar módulo como completado"}
    </button>
  )
}