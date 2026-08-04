import { supabase } from "./supabase"

export async function completeModule(
  userId: string,
  module: number
) {
  const { error } = await supabase
    .from("user_progress")
    .upsert({
      user_id: userId,
      module,
      completed: true,
    })

  if (error) {
    console.error(error)
  }
}