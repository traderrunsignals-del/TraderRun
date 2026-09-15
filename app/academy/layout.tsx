import { redirect } from "next/navigation"
import { createSupabaseServerClient } from "@/lib/supabase-server"
import AcademyLogoutButton from "@/components/academy/academy-logout-button"

const ACADEMY_PRODUCT_ID =
  "6fe51583-a729-41ac-89e4-e2c1e69a62db"

export default async function AcademyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase =
    await createSupabaseServerClient()

  /*
   * COMPROBAR USUARIO AUTENTICADO
   */

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()

  if (userError || !user) {
    redirect("/login")
  }

  /*
   * COMPROBAR ACCESO A TRADER RUN ACADEMY
   */

  const {
    data: courseAccess,
    error: accessError,
  } = await supabase
    .from("user_products")
    .select("active, expires_at")
    .eq("user_id", user.id)
    .eq("product_id", ACADEMY_PRODUCT_ID)
    .eq("active", true)
    .maybeSingle()

  const hasAccess =
    !accessError &&
    courseAccess &&
    courseAccess.active &&
    (
      courseAccess.expires_at === null ||
      new Date(courseAccess.expires_at) >
        new Date()
    )

  /*
   * ACCESO DENEGADO
   */

  if (!hasAccess) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="w-full max-w-lg rounded-3xl border bg-card p-10 text-center shadow-sm">

          <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
            🔒
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Acceso a Academy no disponible
          </h1>

          <p className="mt-4 leading-7 text-muted-foreground">
            Tu acceso a Trader Run Academy ha caducado o todavía no tienes
            acceso a este curso.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="/"
              className="block rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Volver a Trader Run
            </a>

            <AcademyLogoutButton />
          </div>

        </div>
      </div>
    )
  }

  /*
   * ACCESO AUTORIZADO
   */

  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}