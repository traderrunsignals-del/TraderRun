import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { updateSupabaseSession } from "@/lib/supabase-proxy"

const MANTENIMIENTO = false

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ============================================
  // RENOVAR SESIÓN DE SUPABASE
  // ============================================

  const supabaseResponse =
    await updateSupabaseSession(request)

  // ============================================
  // DESARROLLO LOCAL: DEJAR PASAR TODO
  // ============================================

  if (process.env.NODE_ENV === "development") {
    return supabaseResponse
  }

  // ============================================
  // SI QUITAMOS EL MANTENIMIENTO
  // ============================================

  if (!MANTENIMIENTO) {
    return supabaseResponse
  }

  // ============================================
  // RUTAS PERMITIDAS DURANTE MANTENIMIENTO
  // ============================================

  const rutasPermitidas = [
  "/mantenimiento",
  "/activar-cuenta",
  "/reset-password",
  "/api/academy/activate-access",
  "/api/stripe/webhook",
  "/api/preview",
]

  if (rutasPermitidas.includes(pathname)) {
    return supabaseResponse
  }

  // ============================================
  // RECURSOS INTERNOS Y ARCHIVOS ESTÁTICOS
  // ============================================

  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico)$/.test(pathname)
  ) {
    return supabaseResponse
  }

  // ============================================
  // ACCESO PRIVADO PARA NOSOTROS
  // ============================================

  const previewAccess =
    request.cookies.get("trader_preview")?.value

  if (
    previewAccess &&
    previewAccess === process.env.PREVIEW_SECRET
  ) {
    return supabaseResponse
  }

  // ============================================
  // RESTO DE VISITANTES -> MANTENIMIENTO
  // ============================================

  const redirectResponse = NextResponse.redirect(
    new URL("/mantenimiento", request.url)
  )

  /*
   * Conservamos cualquier cookie que Supabase
   * haya renovado antes de realizar la redirección.
   */
  supabaseResponse.cookies.getAll().forEach(
    (cookie) => {
      redirectResponse.cookies.set(cookie)
    }
  )

  return redirectResponse
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}