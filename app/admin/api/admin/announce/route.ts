import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
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

    // Get all verified registrations
    const { data: verifiedRegistrations, error: fetchError } = await supabase
      .from("registrations")
      .select("*")
      .eq("status", "verified")

    if (fetchError) {
      return NextResponse.json({ message: fetchError.message }, { status: 400 })
    }

    // Update status to accepted (you can implement selection logic here)
    // For now, we'll accept all verified registrations
    const { error: updateError } = await supabase
      .from("registrations")
      .update({ status: "accepted" })
      .eq("status", "verified")

    if (updateError) {
      return NextResponse.json({ message: updateError.message }, { status: 400 })
    }

    return NextResponse.json({ message: "Hasil pengumuman berhasil dipublikasikan" }, { status: 200 })
  } catch (error) {
    console.error("Announce error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
