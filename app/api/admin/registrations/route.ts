import { type NextRequest, NextResponse } from "next/server";
import { mockRegistrations, readRegistrations } from "@/lib/persistent-data";

// GET - Mendapatkan semua registrasi (untuk admin)
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get("status") || "all";
    
    // Gunakan data terbaru dari file
    const registrations = readRegistrations();
    let filteredRegistrations = registrations;
    
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