"use client"

import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AcademyLogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="w-full rounded-xl border px-5 py-3 transition hover:bg-secondary"
    >
      Cerrar sesión
    </button>
  )
}