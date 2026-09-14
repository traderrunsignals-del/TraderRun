"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

function ActivarCuentaContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const tokenHash = searchParams.get("token_hash")
  const type = searchParams.get("type")

  const handleActivate = async () => {
    if (!tokenHash || type !== "invite") {
      setError("El enlace de activación no es válido.")
      return
    }

    try {
      setLoading(true)
      setError("")

      const {
        data,
        error: verifyError,
      } = await supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: "invite",
      })

      if (verifyError) {
        console.error(
          "Error verificando invitación:",
          verifyError
        )

        setError(
          "El enlace de activación no es válido o ha caducado."
        )

        return
      }

      if (!data.session) {
        setError(
          "No se ha podido iniciar la sesión de activación."
        )

        return
      }

      router.replace("/reset-password")
    } catch (err) {
      console.error(
        "Error activando cuenta:",
        err
      )

      setError(
        "Ha ocurrido un error al activar tu cuenta."
      )
    } finally {
      setLoading(false)
    }
  }

  if (!tokenHash || type !== "invite") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#06100a] px-6">
        <div className="w-full max-w-md rounded-2xl border border-[#1d3326] bg-[#0d1a13] p-8 text-center">
          <h1 className="text-2xl font-bold text-white">
            Enlace no válido
          </h1>

          <p className="mt-4 text-[#9fb0a5]">
            No hemos podido encontrar la información necesaria para activar tu cuenta.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#06100a] px-6">
      <div className="w-full max-w-md rounded-2xl border border-[#1d3326] bg-[#0d1a13] p-8 text-center">

        <div className="mb-4 text-xs font-bold tracking-[0.2em] text-[#35d06f]">
          TRADER RUN ACADEMY
        </div>

        <h1 className="text-3xl font-bold text-white">
          Activa tu cuenta
        </h1>

        <p className="mt-4 leading-7 text-[#a9b8ae]">
          Tu acceso a Trader Run Academy está preparado.
          Pulsa el botón para verificar tu cuenta y crear tu contraseña.
        </p>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <button
          onClick={handleActivate}
          disabled={loading}
          className="mt-8 w-full rounded-xl bg-[#22c55e] px-6 py-4 font-bold text-[#06100a] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? "Activando cuenta..."
            : "Activar mi cuenta"}
        </button>

        <p className="mt-6 text-xs leading-5 text-[#66756d]">
          Si no has solicitado acceso a Trader Run Academy,
          puedes cerrar esta página.
        </p>

      </div>
    </main>
  )
}

export default function ActivarCuentaPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center bg-[#06100a] px-6">
          <div className="text-sm text-[#9fb0a5]">
            Cargando...
          </div>
        </main>
      }
    >
      <ActivarCuentaContent />
    </Suspense>
  )
}