"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CourseNavigation() {
  const pathname = usePathname()

  const match = pathname.match(/modulo-(\d+)/)
  const module = match ? Number(match[1]) : 1
  const totalModules = 10

  return (
    <div className="mt-10 flex items-center justify-between border-t pt-6">

      {module > 1 ? (
        <Link
          href={`/academy/modulo-${module - 1}`}
          className="rounded-lg border px-4 py-2 transition hover:bg-muted"
        >
          ← Módulo anterior
        </Link>
      ) : (
        <div />
      )}

      <Link
        href="/academy"
        className="rounded-lg border px-4 py-2 transition hover:bg-muted"
      >
        📚 Academia
      </Link>

      {module < totalModules ? (
        <Link
          href={`/academy/modulo-${module + 1}`}
          className="rounded-lg border px-4 py-2 transition hover:bg-muted"
        >
          Módulo siguiente →
        </Link>
      ) : (
        <div />
      )}

    </div>
  )
}