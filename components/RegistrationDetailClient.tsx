'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PrintableRegistration from '@/components/PrintableRegistration';

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

interface RegistrationDetailClientProps {
  initialRegistration: Registration;
}

interface Notification {
  message: string;
  type: 'success' | 'error';
}

export default function RegistrationDetailClient({ initialRegistration }: RegistrationDetailClientProps) {
  const router = useRouter();
  const [registration, setRegistration] = useState<Registration>(initialRegistration);
  const [updating, setUpdating] = useState(false);
  const [newStatus, setNewStatus] = useState(initialRegistration.status);
  const [notification, setNotification] = useState<Notification | null>(null);

  // Cek apakah pengguna adalah admin
  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser");
    if (!adminUser) {
      router.push("/admin/login");
      return;
    }

    const parsedUser = JSON.parse(adminUser);
    if (parsedUser.role !== "admin") {
      router.push("/");
      return;
    }
  }, [router]);

  // Hapus notifikasi setelah beberapa detik
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleStatusChange = async () => {
    if (!registration?.id || !newStatus || newStatus === registration?.status) return;
    
    console.log('Debug: Attempting to update status for ID:', registration.id);
    console.log('Debug: New status:', newStatus);
    
    setUpdating(true);
    
    try {
      const response = await fetch(`/api/admin/registrations/${registration.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });
      
      console.log('Debug: PUT response status:', response.status);
      
      const data = await response.json();
      console.log('Debug: PUT response data:', data);
      
      if (response.ok) {
        // Update state dengan status baru
        setRegistration(prev => ({ ...prev, status: newStatus, updated_at: new Date().toISOString() }));
        // Tampilkan notifikasi sukses
        setNotification({
          message: `Status berhasil diubah menjadi: ${
            newStatus === 'pending' ? 'Menunggu Verifikasi' :
            newStatus === 'verified' ? 'Terverifikasi' :
            newStatus === 'accepted' ? 'Diterima' : 'Ditolak'
          }`,
          type: 'success'
        });
      } else {
        console.error('Error updating status:', data.message);
        // Tampilkan notifikasi error
        setNotification({
          message: data.message || 'Gagal mengubah status',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      // Tampilkan notifikasi error
      setNotification({
        message: 'Terjadi kesalahan saat mengubah status',
        type: 'error'
      });
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6 mb-6">
        <div className="container mx-auto">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Kembali
          </Button>
          <h1 className="text-3xl font-bold">Detail Pendaftaran</h1>
          <p className="text-primary-foreground/80 mt-2">ID: {registration.id}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Data Anak */}
          <div className="md:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">Data Anak</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                  <p className="font-semibold text-foreground">{registration.child_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tanggal Lahir</p>
                  <p className="font-semibold text-foreground">
                    {new Date(registration.child_birth_date).toLocaleDateString("id-ID")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Jenis Kelamin</p>
                  <p className="font-semibold text-foreground">{registration.child_gender}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kelompok</p>
                  <p className="font-semibold text-foreground">Kelompok {registration.group_level}</p>
                </div>
              </CardContent>
            </Card>

            {/* Data Orang Tua */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">Data Orang Tua/Wali</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                  <p className="font-semibold text-foreground">{registration.parent_name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Nomor Telepon</p>
                  <p className="font-semibold text-foreground">{registration.parent_phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">{registration.parent_email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Alamat</p>
                  <p className="font-semibold text-foreground">{registration.parent_address}</p>
                </div>
              </CardContent>
            </Card>

            {/* Dokumen Persyaratan */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Dokumen Persyaratan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      registration.documents?.birthCertificate 
                        ? "bg-green-100 text-green-600" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {registration.documents?.birthCertificate ? "✓" : "✕"}
                    </div>
                    <p className="text-xs font-medium">Akta Kelahiran</p>
                  </div>
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      registration.documents?.familyCard 
                        ? "bg-green-100 text-green-600" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {registration.documents?.familyCard ? "✓" : "✕"}
                    </div>
                    <p className="text-xs font-medium">Kartu Keluarga</p>
                  </div>
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      registration.documents?.parentPhoto 
                        ? "bg-green-100 text-green-600" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {registration.documents?.parentPhoto ? "✓" : "✕"}
                    </div>
                    <p className="text-xs font-medium">Foto Orang Tua</p>
                  </div>
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center ${
                      registration.documents?.childPhoto 
                        ? "bg-green-100 text-green-600" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {registration.documents?.childPhoto ? "✓" : "✕"}
                    </div>
                    <p className="text-xs font-medium">Foto Anak</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cetak Data Pendaftar */}
            <Card>
              <CardContent className="pt-6">
                <PrintableRegistration 
                  registration={registration} 
                  showPrintButton={true} 
                  printButtonText="Cetak Data Pendaftar" 
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Status dan Aksi */}
          <div>
            {/* Notifikasi */}
            {notification && (
              <div className={`mb-4 p-4 rounded-lg text-white dark:text-foreground ${
                notification.type === 'success' ? 'bg-green-500 dark:bg-green-600' : 'bg-red-500 dark:bg-red-600'
              }`}>
                {notification.message}
              </div>
            )}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">Status Pendaftaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Status Saat Ini</p>
                  <p className={`text-lg font-bold ${
                    registration.status === "accepted"
                      ? "text-green-600"
                      : registration.status === "rejected"
                        ? "text-red-600"
                        : registration.status === "verified"
                          ? "text-blue-600"
                          : "text-yellow-600"
                  }`}>
                    {registration.status === "pending"
                      ? "Menunggu Verifikasi"
                      : registration.status === "verified"
                        ? "Terverifikasi"
                        : registration.status === "accepted"
                          ? "Diterima"
                          : "Ditolak"}
                  </p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Ubah Status</p>
                  <Select value={newStatus} onValueChange={setNewStatus}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Menunggu Verifikasi</SelectItem>
                      <SelectItem value="verified">Terverifikasi</SelectItem>
                      <SelectItem value="accepted">Diterima</SelectItem>
                      <SelectItem value="rejected">Ditolak</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button 
                  onClick={handleStatusChange}
                  className="w-full"
                  disabled={updating || newStatus === registration.status}
                >
                  {updating ? "Memperbarui..." : "Simpan Perubahan"}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Informasi Waktu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Tanggal Pendaftaran</p>
                    <p className="font-semibold text-foreground">
                      {new Date(registration.created_at).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Terakhir Diperbarui</p>
                    <p className="font-semibold text-foreground">
                      {new Date(registration.updated_at).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}