import { TrendingUp } from "lucide-react"

const columns = [
  {
    title: "Producto",
    links: ["Programa", "Sesiones en vivo", "Señales", "Precios"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Blog", "Contacto", "Afiliados"],
  },
  {
    title: "Legal",
    links: ["Términos", "Privacidad", "Aviso de riesgo", "Cookies"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <TrendingUp className="size-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Trader<span className="text-primary">Run</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Formación de trading y comunidad para operar los mercados con
              método y disciplina.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/60 pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            El trading de instrumentos financieros conlleva un alto nivel de
            riesgo y puede no ser adecuado para todos los inversores. Los
            resultados pasados no garantizan resultados futuros. TraderRun
            ofrece contenido educativo y no constituye asesoramiento financiero.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TraderRun. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
