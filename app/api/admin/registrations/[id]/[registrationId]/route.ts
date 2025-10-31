import { type NextRequest, NextResponse } from "next/server"

// Mock registrations data - in real implementation, this would be stored in your database
let mockRegistrations = [
  {
    id: "reg_1",
    user_id: "user_1",
    child_name: "Anak Test 1",
    child_birth_date: "2020-01-01",
    child_gender: "Laki-laki",
    group_level: "A",
    parent_name: "Orang Tua Test 1",
    parent_phone: "081234567890",
    parent_email: "parent1@example.com",
    parent_address: "Alamat Test 1",
    status: "pending",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: "reg_2",
    user_id: "user_2",
    child_name: "Anak Test 2",
    child_birth_date: "2019-05-15",
    child_gender: "Perempuan",
    group_level: "B",
    parent_name: "Orang Tua Test 2",
    parent_phone: "089876543210",
    parent_email: "parent2@example.com",
    parent_address: "Alamat Test 2",
    status: "verified",
    created_at: "2024-01-16T11:30:00Z",
    updated_at: "2024-01-16T11:30:00Z"
  }
]

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const { status } = body;

    // Find registration by ID
    const registration = mockRegistrations.find(r => r.id === id)

    if (!registration) {
      return NextResponse.json({ message: "Registrasi tidak ditemukan" }, { status: 404 })
    }

    // Update status and timestamp
    registration.status = status
    registration.updated_at = new Date().toISOString()

    return NextResponse.json({ message: "Status berhasil diperbarui" }, { status: 200 })
  } catch (error) {
    console.error("Update registration error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}