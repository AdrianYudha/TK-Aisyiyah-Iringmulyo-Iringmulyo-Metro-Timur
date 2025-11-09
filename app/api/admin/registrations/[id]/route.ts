import { type NextRequest, NextResponse } from "next/server";
import { mockRegistrations, validStatuses, writeRegistrations } from "@/lib/persistent-data";

// PUT - Update status registrasi (untuk admin)
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Ambil params dari context (karena di Next.js 16 params adalah Promise)
    const params = await context.params;
    const { id } = params;
    
    console.log("Debug PUT: API received ID parameter:", id);
    console.log("Debug PUT: Available registration IDs:", mockRegistrations.map(r => r.id));
    
    if (!id) {
      console.log("Debug PUT: ID is empty or null");
      return NextResponse.json(
        { message: "ID registrasi diperlukan." }, 
        { status: 400 }
      );
    }
    
    const body = await request.json();
    const { status } = body;
    
    // Validasi status
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
    
    // Simpan perubahan ke file
    writeRegistrations(mockRegistrations);
    
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