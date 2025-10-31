import { type NextRequest, NextResponse } from "next/server"

// Mock settings data - in real implementation, this would be stored in a database or config
let mockSettings = {
  registration_open: "true",
  registration_start_date: "2025-01-01",
  registration_end_date: "2025-02-28",
  verification_deadline: "2025-03-15",
  announcement_date: "2025-03-20",
  group_a_quota: "30",
  group_b_quota: "50",
  school_name: "TK AISYIYAH IRINGMULYO",
  school_address: "Jl. Abri No. 26, Iringmulyo, Metro Timur, Metro, Lampung",
  school_phone: "0721-123456",
  school_email: "info@tkaisyiyah.ac.id"
}

export async function GET(request: NextRequest) {
  try {
    // Convert string values to appropriate types
    const settingsObj: Record<string, string | boolean | number> = {}
    
    for (const [key, value] of Object.entries(mockSettings)) {
      if (value === "true") {
        settingsObj[key] = true
      } else if (value === "false") {
        settingsObj[key] = false
      } else if (!isNaN(Number(value))) {
        settingsObj[key] = Number(value)
      } else {
        settingsObj[key] = value
      }
    }

    return NextResponse.json(settingsObj, { status: 200 })
  } catch (error) {
    console.error("Settings error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()

    // Update each setting
    for (const [key, value] of Object.entries(body)) {
      if (key in mockSettings) {
        mockSettings[key as keyof typeof mockSettings] = String(value)
      }
    }

    return NextResponse.json({ message: "Pengaturan berhasil diperbarui" }, { status: 200 })
  } catch (error) {
    console.error("Settings update error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}