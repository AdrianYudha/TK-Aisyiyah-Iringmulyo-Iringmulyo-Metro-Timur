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

    // Get total registrations
    const { count: total } = await supabase.from("registrations").select("*", { count: "exact", head: true })

    // Get registrations by status
    const { count: pending } = await supabase
      .from("registrations")
      .select("*", { count: "exact", head: true })
      .eq("status", "pending")

    const { count: verified } = await supabase
      .from("registrations")
      .select("*", { count: "exact", head: true })
      .eq("status", "verified")

    const { count: accepted } = await supabase
      .from("registrations")
      .select("*", { count: "exact", head: true })
      .eq("status", "accepted")

    const { count: rejected } = await supabase
      .from("registrations")
      .select("*", { count: "exact", head: true })
      .eq("status", "rejected")

    return NextResponse.json(
      {
        total: total || 0,
        pending: pending || 0,
        verified: verified || 0,
        accepted: accepted || 0,
        rejected: rejected || 0,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Stats error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
