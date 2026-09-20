import { notFound } from "next/navigation"
import { supabaseAdmin } from "@/lib/supabase-admin"
import LicenseForm from "./LicenseForm"

type LicensePageProps = {
  params: Promise<{
    token: string
  }>
}

export default async function LicensePage({
  params,
}: LicensePageProps) {
  const { token } = await params

  const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

if (!UUID_PATTERN.test(token)) {
  notFound()
}

  /*
   * BUSCAR LICENCIA
   */

  const {
    data: license,
    error: licenseError,
  } =
    await supabaseAdmin
      .from("indicator_licenses")
      .select(
        `
          id,
          purchase_id,
          status,
          contract_version,
          signed_at
        `
      )
      .eq(
        "signing_token",
        token
      )
      .maybeSingle()

  if (licenseError) {
    console.error(
      "❌ Error buscando licencia:",
      licenseError
    )

    throw new Error(
      "No se pudo comprobar la licencia"
    )
  }

  if (!license) {
    notFound()
  }

  /*
   * BUSCAR COMPRA ASOCIADA
   */

  const {
    data: purchase,
    error: purchaseError,
  } =
    await supabaseAdmin
      .from("academy_purchases")
      .select(
        `
          name,
          email,
          tradingview_user,
          payment_status,
          refund_status
        `
      )
      .eq(
        "id",
        license.purchase_id
      )
      .maybeSingle()

  if (purchaseError) {
    console.error(
      "❌ Error buscando compra de la licencia:",
      purchaseError
    )

    throw new Error(
      "No se pudo comprobar la compra"
    )
  }

  if (!purchase) {
    notFound()
  }

  const purchaseIsActive =
    purchase.payment_status === "paid" &&
    purchase.refund_status !== "full"

  /*
   * COMPRA NO ACTIVA
   */

  if (!purchaseIsActive) {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Trader Run Academy
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Licencia no disponible
          </h1>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-300">
              La compra asociada a esta licencia no se encuentra activa.
            </p>

            <p className="mt-3 text-sm text-zinc-500">
              Si consideras que se trata de un error, contacta con
              soporte@traderrun.com.
            </p>
          </div>
        </div>
      </main>
    )
  }

  /*
   * LICENCIA YA FIRMADA
   */

  if (license.status === "signed") {
    return (
      <main className="min-h-screen bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Trader Run Academy
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Licencia firmada
          </h1>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
            <p className="text-zinc-300">
              Esta licencia ya ha sido firmada correctamente.
            </p>

            {license.signed_at && (
              <p className="mt-3 text-sm text-zinc-500">
                Firma registrada:{" "}
                {new Date(
                  license.signed_at
                ).toLocaleDateString(
                  "es-ES"
                )}
              </p>
            )}
          </div>
        </div>
      </main>
    )
  }

  /*
   * LICENCIA PENDIENTE
   */

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Trader Run Academy
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Licencia de uso del indicador
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Revisa tus datos antes de continuar con la aceptación y
            firma de la licencia personal de uso del indicador Trader Run.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h2 className="text-lg font-medium">
            Datos del titular
          </h2>

          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm text-zinc-500">
                Nombre
              </dt>

              <dd className="mt-1 text-zinc-200">
                {purchase.name}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-zinc-500">
                Email
              </dt>

              <dd className="mt-1 text-zinc-200">
                {purchase.email}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-zinc-500">
                Usuario de TradingView
              </dt>

              <dd className="mt-1 text-zinc-200">
                {purchase.tradingview_user}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6">
  <LicenseForm
    token={token}
    name={purchase.name}
    email={purchase.email}
    tradingViewUser={purchase.tradingview_user}
  />
</div>
      </div>
    </main>
  )
}