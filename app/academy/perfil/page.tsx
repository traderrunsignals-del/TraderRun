"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function PerfilPage() {
  const [user, setUser] = useState<any>(null)
  const [completed, setCompleted] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) return

      setUser(session.user)

      const { data } = await supabase
        .from("user_progress")
        .select("module")
        .eq("user_id", session.user.id)
        .eq("completed", true)

      setCompleted(data?.length ?? 0)
    }

    loadData()
  }, [])

  return (
    <div className="mx-auto max-w-5xl">

      <h1 className="text-4xl font-bold">
        Mi perfil
      </h1>

      <div className="mt-10 rounded-2xl border p-8">

        <h2 className="text-2xl font-semibold">
          Información personal
        </h2>

        <div className="mt-6 space-y-4">

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>ID:</strong> {user?.id}
          </p>

        </div>

      </div>

      <div className="mt-8 rounded-2xl border p-8">

        <h2 className="text-2xl font-semibold">
          Progreso
        </h2>

        <p className="mt-5">
          Has completado <strong>{completed}</strong> de 10 módulos.
        </p>

        <div className="mt-6 h-3 rounded-full bg-secondary">

          <div
            className="h-3 rounded-full bg-primary"
            style={{
              width: `${completed * 10}%`,
            }}
          />

        </div>

      </div>

    </div>
  )
}