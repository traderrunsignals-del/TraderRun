import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ============================================
  // DEJAR PASAR RECURSOS INTERNOS Y API
  // ============================================

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    /\.(png|jpg|jpeg|gif|svg|webp|ico)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // ============================================
  // COMPROBAR ACCESO PRIVADO
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
  // PORTADA = MANTENIMIENTO
  // ============================================

  if (pathname === "/") {
    return NextResponse.next()
  }

  // ============================================
  // RESTO DE VISITANTES -> PORTADA
  // ============================================

  const url = request.nextUrl.clone()
  url.pathname = "/"

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}