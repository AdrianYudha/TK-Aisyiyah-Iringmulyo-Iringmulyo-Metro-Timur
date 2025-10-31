import { createServerClient } from "@supabase/ssr"
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

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error("[v0] Admin auth error:", error)
      return NextResponse.json({ message: error.message || "Login gagal" }, { status: 401 })
    }

    if (!data.user?.id) {
      return NextResponse.json({ message: "User tidak ditemukan" }, { status: 401 })
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", data.user.id)
      .eq("role", "admin")
      .single()

    if (userError || !userData) {
      console.error("[v0] Admin user error:", userError)
      return NextResponse.json({ message: "Akses ditolak. Anda bukan admin." }, { status: 403 })
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
    console.error("[v0] Admin login error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
