import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const MANTENIMIENTO = true

export function proxy(request: NextRequest) {
  if (!MANTENIMIENTO) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  // La página de mantenimiento debe poder abrirse
  if (pathname === "/mantenimiento") {
    return NextResponse.next()
  }

  // Todo lo demás se redirige a mantenimiento
  return NextResponse.redirect(
    new URL("/mantenimiento", request.url)
  )
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}