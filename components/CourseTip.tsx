type CourseTipProps = {
  children: React.ReactNode
}

export default function CourseTip({
  children,
}: CourseTipProps) {
  return (
    <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">

      <h3 className="flex items-center gap-2 text-lg font-semibold text-primary">
        💡 Consejo Trader Run
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {children}
      </p>

    </div>
  )
}