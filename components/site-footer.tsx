import {
  GraduationCap,
  Mail,
  Send,
  TrendingUp,
} from "lucide-react"

const columns = [
  {
    title: "Trader Run",
    links: [
      { label: "Academy", href: "/#academia" },
      { label: "Metodología", href: "/#metodologia" },
      { label: "Resultados", href: "/#resultados" },
      { label: "Precios", href: "/#precios" },
    ],
  },
  {
    title: "Comunidad",
    links: [
      {
        label: "Telegram gratuito",
        href: "https://t.me/tradingproNQ",
        external: true,
      },
      { label: "Trader Run VIP", href: "/#precios" },
      { label: "Preguntas frecuentes", href: "/#faq" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos", href: "/terminos" },
      { label: "Privacidad", href: "/privacidad" },
      { label: "Aviso de riesgo", href: "/aviso-riesgo" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-secondary/[0.12]">

      {/* =====================================================
          FONDO
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 size-[420px] rounded-full bg-primary/[0.035] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16">

        {/* =====================================================
            CONTENIDO PRINCIPAL
        ===================================================== */}

        <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr] lg:gap-16">

          {/* ===================================================
              MARCA
          =================================================== */}

          <div>
            <a
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Trader Run"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <TrendingUp className="size-5" />
              </span>

              <span className="font-display text-xl font-bold tracking-tight">
                Trader<span className="text-primary">Run</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Formación, análisis y comunidad para quienes quieren acercarse al
              mercado con una metodología, un proceso y una gestión del riesgo
              definidos.
            </p>

            {/* ECOSISTEMA */}

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                <Send className="size-3 text-primary" />
                Comunidad
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                <TrendingUp className="size-3 text-primary" />
                Trader Run VIP
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/30 px-3 py-1.5 text-[10px] font-medium text-muted-foreground">
                <GraduationCap className="size-3 text-primary" />
                Academy
              </span>
            </div>

            {/* CONTACTO */}

            <div className="mt-7 space-y-3">
              <a
                href="mailto:traderrunsignals@gmail.com"
                className="group flex w-fit items-center gap-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-3.5 text-primary" />

                <span>
                  traderrunsignals@gmail.com
                </span>
              </a>

              <a
                href="https://t.me/tradingproNQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <Send className="size-3.5 text-primary" />

                <span>
                  Comunidad gratuita en Telegram
                </span>
              </a>
            </div>
          </div>

          {/* ===================================================
              NAVEGACIÓN
          =================================================== */}

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={
                          link.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-xs leading-5 text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            LEGAL / RIESGO
        ===================================================== */}

        <div className="mt-14 border-t border-border/60 pt-7">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-full min-h-10 w-px shrink-0 bg-primary/40" />

            <p className="max-w-5xl text-[10px] leading-5 text-muted-foreground">
              <span className="font-semibold text-foreground/70">
                Aviso de riesgo:
              </span>{" "}
              El trading y la inversión en instrumentos financieros conllevan
              riesgo de pérdida de capital y pueden no ser adecuados para todas
              las personas. Los resultados pasados no garantizan resultados
              futuros. El contenido, análisis, formación, herramientas y
              señales proporcionados por Trader Run tienen carácter informativo
              y educativo y no constituyen asesoramiento financiero
              personalizado ni una recomendación de inversión.
            </p>
          </div>
        </div>

        {/* =====================================================
            COPYRIGHT
        ===================================================== */}

        <div className="mt-7 flex flex-col gap-3 border-t border-border/40 pt-6 text-[10px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Trader Run. Todos los derechos
            reservados.
          </p>

          <p>
            Formación · Análisis · Comunidad
          </p>
        </div>
      </div>
    </footer>
  )
}