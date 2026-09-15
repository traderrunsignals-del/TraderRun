import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MANTENIMIENTO = true

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ============================================
  // DESARROLLO LOCAL: DEJAR PASAR TODO
  // ============================================

  if (process.env.NODE_ENV === "development") {
    return NextResponse.next()
  }

  // ============================================
  // SI QUITAMOS EL MANTENIMIENTO
  // ============================================

  if (!MANTENIMIENTO) {
    return NextResponse.next()
  }

  // ============================================
  // RUTAS QUE DEBEN FUNCIONAR EN MANTENIMIENTO
  // ============================================

  const rutasPermitidas = [
  "/mantenimiento",
  "/activar-cuenta",
  "/reset-password",
  "/api/stripe/webhook",
  "/api/preview",
]

  if (rutasPermitidas.includes(pathname)) {
    return NextResponse.next()
  }

  // ============================================
  // RECURSOS INTERNOS Y ARCHIVOS ESTÁTICOS
  // ============================================

  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico)$/.test(pathname)
  ) {
    return NextResponse.next()
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
    return NextResponse.next()
  }

  // ============================================
  // RESTO DE VISITANTES -> MANTENIMIENTO
  // ============================================

  return NextResponse.redirect(
    new URL("/mantenimiento", request.url)
  )
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}