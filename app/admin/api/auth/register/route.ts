import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, phone, password, parentName, childName, childBirthDate, childGender, groupLevel, parentAddress } =
      body

    if (!email || !password || !parentName || !childName || !childBirthDate || !groupLevel) {
      return NextResponse.json({ message: "Data tidak lengkap. Mohon isi semua field yang wajib." }, { status: 400 })
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

    // Create user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/callback`,
      },
    })

    if (authError) {
      console.error("[v0] Auth error:", authError)
      return NextResponse.json({ message: authError.message }, { status: 400 })
    }

    if (!authData.user?.id) {
      return NextResponse.json({ message: "Gagal membuat akun pengguna" }, { status: 400 })
    }

    const { error: userError } = await supabase.from("users").insert([
      {
        id: authData.user.id,
        email,
        phone: phone || null,
        full_name: parentName,
        role: "registrant",
      },
    ])

    if (userError) {
      console.error("[v0] User insert error:", userError)
      try {
        const adminClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
        await adminClient.auth.admin.deleteUser(authData.user.id)
      } catch (deleteError) {
        console.error("[v0] Failed to delete auth user:", deleteError)
      }
      return NextResponse.json({ message: "Gagal menyimpan data pengguna: " + userError.message }, { status: 400 })
    }

    // Insert registration data
    const { error: registrationError } = await supabase.from("registrations").insert([
      {
        user_id: authData.user.id,
        child_name: childName,
        child_birth_date: childBirthDate,
        child_gender: childGender,
        group_level: groupLevel,
        parent_name: parentName,
        parent_phone: phone || null,
        parent_email: email,
        parent_address: parentAddress || null,
        status: "pending",
      },
    ])

    if (registrationError) {
      console.error("[v0] Registration insert error:", registrationError)
      return NextResponse.json(
        { message: "Gagal menyimpan data pendaftaran: " + registrationError.message },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        message: "Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi akun.",
        userId: authData.user.id,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server. Silakan coba lagi." }, { status: 500 })
  }
}
