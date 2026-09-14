"use client"

import { useState } from "react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    setMessage("")
    setError("")

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    setLoading(false)

    if (error) {
      setError(
        "No hemos podido enviar el enlace de recuperación. Inténtalo de nuevo."
      )
      return
    }

    setMessage(
      "Si existe una cuenta asociada a ese email, recibirás un enlace para crear una nueva contraseña."
    )
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold">
          Recuperar contraseña
        </h1>

        <p className="mt-2 text-center text-muted-foreground">
          Introduce el email asociado a tu cuenta de Trader Run Academy
        </p>

        <form onSubmit={handleResetPassword} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar enlace de recuperación"}
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

        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm font-medium text-primary hover:underline"
          >
            Volver al inicio de sesión
          </Link>
        </div>
      </div>
    </main>
  )
}