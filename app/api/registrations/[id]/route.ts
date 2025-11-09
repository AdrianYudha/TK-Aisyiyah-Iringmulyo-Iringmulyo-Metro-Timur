import { type NextRequest, NextResponse } from "next/server";
import { mockRegistrations, writeRegistrations, readRegistrations } from "@/lib/persistent-data";

// GET - Mendapatkan data registrasi berdasarkan ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Ambil params dari context (karena di Next.js 16 params adalah Promise)
    const params = await context.params;
    const { id } = params;
    
    console.log("Debug: API received ID parameter:", id);
    console.log("Debug: Available registration IDs:", mockRegistrations.map(r => r.id));
    
    if (!id) {
      console.log("Debug: ID is empty or null");
      return NextResponse.json(
        { message: "ID registrasi diperlukan." }, 
        { status: 400 }
      );
    }
    
    // Gunakan data terbaru dari file
    const registrations = readRegistrations();
    const registration = registrations.find(r => r.id === id);
    
    console.log("Debug: Looking for registration with ID:", id, "Found:", !!registration);
    
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
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Ambil params dari context (karena di Next.js 16 params adalah Promise)
    const params = await context.params;
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
    const registrationIndex = mockRegistrations.findIndex(r => r.id === id);
    
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
    
    // Simpan perubahan ke file
    writeRegistrations(mockRegistrations);
    
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