import { createClient } from "@supabase/supabase-js"

const email = process.argv[2]?.trim().toLowerCase()
const name = process.argv[3]?.trim()

if (!email || !name) {
  console.error(`
❌ Faltan datos.

Uso:
node --env-file=.env.local scripts/invite-academy-user.mjs "cliente@email.com" "Nombre Cliente"
`)
  process.exit(1)
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

if (!supabaseUrl) {
  console.error("❌ Falta NEXT_PUBLIC_SUPABASE_URL en .env.local")
  process.exit(1)
}

if (!serviceRoleKey) {
  console.error("❌ Falta SUPABASE_SERVICE_ROLE_KEY en .env.local")
  process.exit(1)
}

if (!siteUrl) {
  console.error("❌ Falta NEXT_PUBLIC_SITE_URL en .env.local")
  process.exit(1)
}

const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

async function main() {
  console.log("")
  console.log("============================================")
  console.log("TRADER RUN ACADEMY - INVITACIÓN MANUAL")
  console.log("============================================")
  console.log("Email:", email)
  console.log("Nombre:", name)
  console.log(
  "Redirección:",
  `${siteUrl}/activar-cuenta`
)
  console.log("")

  // Comprobar si el usuario ya existe
  const {
    data: usersData,
    error: usersError,
  } = await supabaseAdmin.auth.admin.listUsers({
    page: 1,
    perPage: 1000,
  })

  if (usersError) {
    console.error(
      "❌ Error consultando usuarios:",
      usersError
    )
    process.exit(1)
  }

  const existingUser =
    usersData.users.find(
      (user) =>
        user.email?.toLowerCase() === email
    )

  if (existingUser) {
    console.error(
      "⚠️ Este email ya existe en Supabase Auth:"
    )
    console.error(existingUser.email)
    console.error("")
    console.error(
      "No se ha enviado una nueva invitación."
    )
    console.error(
      "Para un usuario existente utilizaremos recuperación de contraseña."
    )
    process.exit(1)
  }

  const {
    data,
    error,
  } =
    await supabaseAdmin.auth.admin.inviteUserByEmail(
      email,
      {
       redirectTo:
  `${siteUrl}/activar-cuenta`,
        data: {
          name,
        },
      }
    )

  if (error) {
    console.error(
      "❌ Error enviando invitación:",
      error
    )
    process.exit(1)
  }

  if (!data.user) {
    console.error(
      "❌ Supabase no devolvió el usuario creado."
    )
    process.exit(1)
  }

  console.log("✅ Invitación enviada correctamente.")
  console.log("Usuario:", data.user.email)
  console.log("UID:", data.user.id)
  console.log("")
  console.log(
    "El alumno recibirá el correo de Trader Run Academy."
  )
  console.log(
  `Después será redirigido a ${siteUrl}/activar-cuenta`
)
}

main().catch((error) => {
  console.error(
    "❌ Error inesperado:",
    error
  )

  process.exit(1)
})