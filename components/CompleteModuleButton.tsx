"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import { completeModule } from "@/lib/progress"

type Props = {
  module: number
}

export default function CompleteModuleButton({ module }: Props) {

  const [loading, setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)

  /*
   * COMPROBAR SI EL MÓDULO YA ESTÁ COMPLETADO
   */

  useEffect(() => {

    const checkCompleted = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        return
      }

      const { data, error } = await supabase
        .from("user_progress")
        .select("completed")
        .eq("user_id", user.id)
        .eq("module", module)
        .eq("completed", true)
        .maybeSingle()

      if (error) {
        console.error(
          "Error comprobando módulo:",
          error
        )

        return
      }

      if (data?.completed) {
        setCompleted(true)
      }

    }

    checkCompleted()

  }, [module])

  /*
   * MARCAR COMO COMPLETADO
   */

  const handleComplete = async () => {

    if (completed || loading) {
      return
    }

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

    /*
     * AVISAR A COURSEMODULELAYOUT
     * PARA ACTUALIZAR EL PROGRESO
     */

    window.dispatchEvent(
      new Event("academy-progress-updated")
    )

  }

  return (
    <button
      onClick={handleComplete}
      disabled={loading || completed}
      className={`mt-8 w-full rounded-xl px-6 py-3 font-semibold transition ${
        completed
          ? "cursor-default bg-green-600 text-white"
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