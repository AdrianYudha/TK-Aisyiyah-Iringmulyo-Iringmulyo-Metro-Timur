import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // Handle cookie setting errors
            }
          },
        },
      },
    )

    const { data, error } = await supabase.from("settings").select("*")

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    // Convert array to object
    const settingsObj: Record<string, string | boolean> = {}
    data.forEach((setting: { setting_key: string; setting_value: string }) => {
      if (setting.setting_value === "true") {
        settingsObj[setting.setting_key] = true
      } else if (setting.setting_value === "false") {
        settingsObj[setting.setting_key] = false
      } else if (!isNaN(Number(setting.setting_value))) {
        settingsObj[setting.setting_key] = Number(setting.setting_value)
      } else {
        settingsObj[setting.setting_key] = setting.setting_value
      }
    })

    return NextResponse.json(settingsObj, { status: 200 })
  } catch (error) {
    console.error("Settings error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()

    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
            } catch {
              // Handle cookie setting errors
            }
          },
        },
      },
    )

    // Update each setting
    for (const [key, value] of Object.entries(body)) {
      await supabase
        .from("settings")
        .update({ setting_value: String(value) })
        .eq("setting_key", key)
    }

    return NextResponse.json({ message: "Pengaturan berhasil diperbarui" }, { status: 200 })
  } catch (error) {
    console.error("Settings update error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
