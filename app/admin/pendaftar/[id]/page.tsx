import { redirect } from 'next/navigation';
import RegistrationDetailClient from '@/components/RegistrationDetailClient';
import { readRegistrations } from '@/lib/persistent-data';

interface Registration {
  id: string;
  user_id: string;
  child_name: string;
  child_birth_date: string;
  child_gender: string;
  group_level: string;
  parent_name: string;
  parent_phone: string;
  parent_email: string;
  parent_address: string;
  status: string;
  documents?: any;
  created_at: string;
  updated_at: string;
}

async function getRegistration(id: string): Promise<Registration | null> {
  try {
    // Gunakan data persisten
    const registrations = readRegistrations();
    const registration = registrations.find(r => r.id === id);
    return registration || null;
  } catch (error) {
    console.error('Error fetching registration:', error);
    return null;
  }
}

export default async function AdminRegistrationDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  // Cek apakah pengguna adalah admin (dalam implementasi nyata, periksa session server)
  // Kita tidak bisa mengakses localStorage di server, jadi untuk saat ini abaikan
  
  // Ambil data registrasi
  const registration = await getRegistration(id);
  
  if (!registration) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-destructive mb-4">Data Tidak Ditemukan</h2>
          <p className="text-muted-foreground mb-6">Data pendaftaran tidak ditemukan.</p>
        </div>
      </div>
    );
  }

  // Pass data ke client component
  return <RegistrationDetailClient initialRegistration={registration} />;
}