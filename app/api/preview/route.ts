import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key")
  const secret = process.env.PREVIEW_SECRET

  if (!key || !secret || key !== secret) {
    return new NextResponse("Acceso no autorizado", {
      status: 401,
    })
  }

  const response = NextResponse.redirect(
    new URL("/", request.url)
  )

  response.cookies.set("trader_preview", secret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  })

  return response
}