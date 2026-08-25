export default function MantenimientoPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[85vh] max-w-3xl items-center justify-center">
        <div className="w-full rounded-3xl border border-border/60 bg-card p-8 text-center shadow-sm sm:p-12">

          <div className="mx-auto flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
            🛠️
          </div>

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Trader Run
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Estamos realizando mejoras
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nuestra web se encuentra temporalmente en mantenimiento
            mientras realizamos algunas mejoras.
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            Volveremos a estar disponibles muy pronto.
          </p>

        </div>
      </div>
    </main>
  )
}