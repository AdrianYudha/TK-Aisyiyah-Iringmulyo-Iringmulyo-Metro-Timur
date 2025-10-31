import { type NextRequest, NextResponse } from "next/server";

// Mock registrations data
const mockRegistrations = [
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    user_id: "user_3",
    child_name: "Anak Test 3",
    child_birth_date: "2020-03-20",
    child_gender: "Laki-laki",
    group_level: "A",
    parent_name: "Orang Tua Test 3",
    parent_phone: "081234567891",
    parent_email: "parent3@example.com",
    parent_address: "Alamat Test 3",
    status: "accepted",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 4,
    user_id: "user_4",
    child_name: "Anak Test 4",
    child_birth_date: "2019-11-10",
    child_gender: "Perempuan",
    group_level: "B",
    parent_name: "Orang Tua Test 4",
    parent_phone: "081234567892",
    parent_email: "parent4@example.com",
    parent_address: "Alamat Test 4",
    status: "rejected",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// GET - Mendapatkan semua registrasi (untuk admin)
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status") || "all";
    
    let filteredRegistrations = mockRegistrations;
    
    if (status && status !== "all") {
      filteredRegistrations = mockRegistrations.filter(r => r.status === status);
    }
    
    return NextResponse.json(filteredRegistrations, { status: 200 });
  } catch (error: any) {
    console.error("Get all registrations error:", error);
    
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data pendaftaran." }, 
      { status: 500 }
    );
  }
}