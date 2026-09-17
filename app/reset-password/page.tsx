"use client"

import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { supabase } from "@/lib/supabase"

function ResetPasswordContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const isActivation =
    searchParams.get("activation") === "1"

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleUpdatePassword = async (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    setError("")
    setMessage("")

    if (password.length < 8) {
      setError(
        "La contraseña debe tener al menos 8 caracteres."
      )
      return
    }

    if (password !== confirmPassword) {
      setError(
        "Las contraseñas no coinciden."
      )
      return
    }

    setLoading(true)

    const { error: updateError } =
      await supabase.auth.updateUser({
        password,
      })

    if (updateError) {
      setLoading(false)

      setError(
        "No hemos podido actualizar la contraseña. Solicita un nuevo enlace de recuperación."
      )

      return
    }

    /*
     * PRIMERA ACTIVACIÓN DE ACADEMY
     *
     * Solo el flujo procedente de la invitación
     * solicita al servidor que inicie los
     * 3 meses de acceso.
     */

    if (isActivation) {
      const activationResponse =
        await fetch(
          "/api/academy/activate-access",
          {
            method: "POST",
          }
        )

      if (!activationResponse.ok) {
        setLoading(false)

        setError(
          "La contraseña se ha guardado, pero no hemos podido activar el periodo de acceso. Contacta con soporte."
        )

        return
      }
    }

    setLoading(false)

    setMessage(
      isActivation
        ? "Cuenta activada correctamente. Ya puedes acceder a Trader Run Academy."
        : "Contraseña actualizada correctamente."
    )

    setTimeout(() => {
      router.push("/login")
    }, 1500)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold">
          Nueva contraseña
        </h1>

        <p className="mt-2 text-center text-muted-foreground">
          Crea una nueva contraseña para acceder a Trader Run Academy
        </p>

        <form
          onSubmit={handleUpdatePassword}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-medium">
              Nueva contraseña
            </label>

            <input
              type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Repetir contraseña
            </label>

            <input
              type="password"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {loading
              ? "Guardando..."
              : "Guardar nueva contraseña"}
          </button>

          {message && (
            <p className="text-center text-sm text-green-600">
              {message}
            </p>
          )}

          {error && (
            <p className="text-center text-sm text-red-500">
              {error}
            </p>
          )}
        </form>
      </div>
    </main>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-background px-6">
          <div className="text-sm text-muted-foreground">
            Cargando...
          </div>
        </main>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  )
}