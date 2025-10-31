import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ message: "Email dan password harus diisi" }, { status: 400 })
    }

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

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error?.message?.includes("email_not_confirmed")) {
      try {
        const adminClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

        // Get user by email
        const { data: users, error: getUserError } = await adminClient.auth.admin.listUsers()
        const user = users?.users?.find((u) => u.email === email)

        if (user && !user.email_confirmed_at) {
          // Update user to confirm email
          await adminClient.auth.admin.updateUserById(user.id, {
            email_confirm: true,
          })
        }

        // Retry login
        const { data: retryData, error: retryError } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (retryError) {
          return NextResponse.json({ message: retryError.message, code: retryError.code }, { status: 401 })
        }

        data = retryData
        error = null
      } catch (adminError) {
        console.error("[v0] Admin API error:", adminError)
        return NextResponse.json({ message: "Gagal mengkonfirmasi email. Silakan hubungi admin." }, { status: 500 })
      }
    }

    if (error) {
      console.error("[v0] Login error:", error)
      return NextResponse.json({ message: error.message, code: error.code }, { status: 401 })
    }

    if (!data.user?.id) {
      return NextResponse.json({ message: "User tidak ditemukan" }, { status: 401 })
    }

    // Get user data from users table
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", data.user.id)
      .single()

    if (userError) {
      console.error("[v0] User data error:", userError)
      return NextResponse.json({ message: userError.message }, { status: 400 })
    }

    return NextResponse.json(
      {
        message: "Login berhasil",
        token: data.session?.access_token,
        user: userData,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
