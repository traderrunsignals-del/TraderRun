"use client"

import { useState } from "react"
import { Menu, X, TrendingUp, ArrowRight } from "lucide-react"

const navLinks = [
  { label: "Programa", href: "/#academia" },
  { label: "Metodología", href: "/#metodologia" },
  { label: "Comunidad", href: "/#comunidad" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Precios", href: "/#precios" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[72px]">
        
        {/* LOGO */}
        <a
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Trader Run"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15">
            <TrendingUp className="size-4.5 text-primary" />
          </span>

          <span className="font-display text-lg font-semibold tracking-tight">
            Trader<span className="text-primary">Run</span>
          </span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ACCIONES DESKTOP */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/login"
            className="px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Acceso alumnos
          </a>

          <a
            href="/#precios"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-[13px] font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/20"
          >
            Ver la Academia
            <ArrowRight className="size-3.5" />
          </a>
        </div>

        {/* BOTÓN MOBILE */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-foreground lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/40 py-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-5 grid gap-3">
              <a
                href="/login"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center rounded-xl border border-border/60 text-sm font-medium"
              >
                Acceso alumnos
              </a>

              <a
                href="/#precios"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground"
              >
                Ver la Academia
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}