import { type NextRequest, NextResponse } from "next/server";
import { NewRegistration } from "@/lib/types/registration";

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

// POST - Membuat registrasi baru
export async function POST(request: NextRequest) {
  try {
    const body: NewRegistration = await request.json();
    
    // Validasi data
    if (!body.user_id || !body.child_name || !body.child_birth_date || 
        !body.child_gender || !body.group_level || !body.parent_name || 
        !body.parent_phone || !body.parent_email || !body.parent_address) {
      return NextResponse.json(
        { message: "Data tidak lengkap. Mohon isi semua field yang wajib." }, 
        { status: 400 }
      );
    }
    
    // Cek apakah user sudah pernah mendaftar
    const existingRegistration = mockRegistrations.find(r => r.user_id === body.user_id);
    if (existingRegistration) {
      return NextResponse.json(
        { message: "Anda sudah pernah mendaftar. Silakan cek status pendaftaran Anda." }, 
        { status: 400 }
      );
    }
    
    // Buat ID registrasi baru
    const newId = mockRegistrations.length + 1;
    
    const newRegistration = {
      id: newId,
      ...body,
      status: 'pending',
      documents: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    mockRegistrations.push(newRegistration);
    
    return NextResponse.json(
      { 
        message: "Pendaftaran berhasil disimpan!", 
        registrationId: newId
      }, 
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Registration error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat menyimpan pendaftaran." }, 
      { status: 500 }
    );
  }
}

// GET - Mendapatkan data registrasi berdasarkan user ID
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get("userId");
    
    if (!userId) {
      return NextResponse.json(
        { message: "User ID diperlukan." }, 
        { status: 400 }
      );
    }
    
    const registration = mockRegistrations.find(r => r.user_id === userId);
    
    if (!registration) {
      return NextResponse.json(
        { message: "Data pendaftaran tidak ditemukan." }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(registration, { status: 200 });
  } catch (error: any) {
    console.error("Get registration error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data pendaftaran." }, 
      { status: 500 }
    );
  }
}