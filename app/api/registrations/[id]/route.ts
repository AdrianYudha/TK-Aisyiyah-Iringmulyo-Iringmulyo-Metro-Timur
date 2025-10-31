import { type NextRequest, NextResponse } from "next/server";

// Mock registrations data
let mockRegistrations: any[] = [
  {
    id: 1,
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
  }
];

// GET - Mendapatkan data registrasi berdasarkan ID
export async function GET(
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
    
    const registration = mockRegistrations.find(r => r.id.toString() === id);
    
    if (!registration) {
      return NextResponse.json(
        { message: "Data pendaftaran tidak ditemukan." }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(registration, { status: 200 });
  } catch (error: any) {
    console.error("Get registration by ID error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data pendaftaran." }, 
      { status: 500 }
    );
  }
}

// PUT - Update dokumen registrasi
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
    const { documents } = body;
    
    if (!documents) {
      return NextResponse.json(
        { message: "Data dokumen diperlukan." }, 
        { status: 400 }
      );
    }
    
    // Find and update registration
    const registrationIndex = mockRegistrations.findIndex(r => r.id.toString() === id);
    
    if (registrationIndex === -1) {
      return NextResponse.json(
        { message: "Data pendaftaran tidak ditemukan." }, 
        { status: 404 }
      );
    }
    
    mockRegistrations[registrationIndex] = {
      ...mockRegistrations[registrationIndex],
      documents: documents,
      updated_at: new Date().toISOString()
    };
    
    return NextResponse.json(
      { message: "Dokumen berhasil diperbarui." }, 
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Update registration documents error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat memperbarui dokumen pendaftaran." }, 
      { status: 500 }
    );
  }
}