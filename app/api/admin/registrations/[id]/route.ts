import { type NextRequest, NextResponse } from "next/server";

// Mock registrations data
let mockRegistrations: any[] = [
  {
    id: "1",
    user_id: "user_1",
    child_name: "Anak Test",
    child_birth_date: "2020-01-01",
    child_gender: "Laki-laki",
    group_level: "A",
    parent_name: "Orang Tua Test",
    parent_phone: "081234567890",
    parent_email: "parent@example.com",
    parent_address: "Alamat Test",
    status: "pending",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
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
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// PUT - Update status registrasi (untuk admin)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    
    if (!id) {
      return NextResponse.json(
        { message: "ID registrasi diperlukan." }, 
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { status } = body;
    
    // Validasi status
    const validStatuses = ['pending', 'verified', 'accepted', 'rejected'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { message: "Status tidak valid." }, 
        { status: 400 }
      );
    }
    
    // Find and update registration
    const registrationIndex = mockRegistrations.findIndex(r => r.id === id);
    
    if (registrationIndex === -1) {
      return NextResponse.json(
        { message: "Data pendaftaran tidak ditemukan." }, 
        { status: 404 }
      );
    }
    
    mockRegistrations[registrationIndex] = {
      ...mockRegistrations[registrationIndex],
      status,
      updated_at: new Date().toISOString()
    };
    
    return NextResponse.json(
      { message: "Status berhasil diperbarui." }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Update registration status error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat memperbarui status pendaftaran." }, 
      { status: 500 }
    );
  }
}