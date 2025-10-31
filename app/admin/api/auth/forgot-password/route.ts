import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ message: "Email diperlukan" }, { status: 400 })
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

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || window?.location?.origin}/auth/reset-password`,
    })

    if (error) {
      console.error("[v0] Password reset error:", error)
      return NextResponse.json({ message: error.message }, { status: 400 })
    }

    return NextResponse.json(
      {
        message: "Link reset password telah dikirim ke email Anda. Silakan cek email Anda.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Forgot password error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server. Silakan coba lagi." }, { status: 500 })
  }
}
