"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PrintableRegistration from "@/components/PrintableRegistration"

interface Registration {
  id: string
  user_id: string
  child_name: string
  child_birth_date: string
  child_gender: string
  group_level: string
  parent_name: string
  parent_phone: string
  parent_email: string
  parent_address: string
  status: string
  documents?: any
  created_at: string
  updated_at: string
}

export default function AdminPrintRegistrationsPage() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      router.push("/admin/login")
      return
    }

    fetchRegistrations()
  }, [router])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch(`/api/admin/registrations?status=all`)
      const data = await response.json()
      if (response.ok) {
        setRegistrations(data)
      }
    } catch (error) {
      console.error("Error fetching registrations:", error)
    } finally {
      setLoading(false)
    }
  }

  const toggleSelectAll = () => {
    if (selectedIds.length === registrations.length) {
      setSelectedIds([])
    } else {
      setSelectedIds(registrations.map(reg => reg.id))
    }
  }

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
    }
  }

  const handlePrintAll = () => {
    // Membuka semua formulir yang dipilih di jendela baru untuk dicetak
    const selectedRegistrations = registrations.filter(reg => selectedIds.includes(reg.id));
    
    if (selectedRegistrations.length === 0) {
      alert("Pilih setidaknya satu formulir untuk dicetak.");
      return;
    }

    // Membuka satu per satu formulir dalam jendela baru untuk dicetak
    selectedRegistrations.forEach((registration, index) => {
      setTimeout(() => {
        const printWindow = window.open('', '_blank');
        if (printWindow) {
          printWindow.document.write(`
            <html>
              <head>
                <title>Data Pendaftar - ${registration.child_name}</title>
                <style>
                  body { font-family: Arial, sans-serif; margin: 20px; }
                  .header { text-align: center; margin-bottom: 20px; }
                  .title { font-size: 18px; font-weight: bold; margin-bottom: 5px; }
                  .subtitle { font-size: 14px; color: #666; margin-bottom: 15px; }
                  .section { margin-bottom: 20px; }
                  .section-title { font-size: 16px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; }
                  .info-row { display: flex; margin-bottom: 8px; }
                  .label { font-weight: bold; width: 200px; flex-shrink: 0; }
                  .value { flex-grow: 1; }
                  .status-badge {
                    display: inline-block;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: bold;
                    text-transform: uppercase;
                  }
                  .status-pending { background-color: #fff3cd; color: #856404; }
                  .status-verified { background-color: #cce5ff; color: #004085; }
                  .status-accepted { background-color: #d4edda; color: #155724; }
                  .status-rejected { background-color: #f8d7da; color: #721c24; }
                </style>
              </head>
              <body>
                <div class="header">
                  <div class="title">FORMULIR PENDAFTARAN</div>
                  <div class="subtitle">TK AISYIYAH IRINGMULYO</div>
                </div>
                
                <div class="section">
                  <div class="section-title">DATA ANAK</div>
                  <div class="info-row">
                    <div class="label">Nama Lengkap Anak:</div>
                    <div class="value">${registration.child_name}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Tanggal Lahir:</div>
                    <div class="value">${new Date(registration.child_birth_date).toLocaleDateString('id-ID')}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Jenis Kelamin:</div>
                    <div class="value">${registration.child_gender}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Kelompok:</div>
                    <div class="value">Kelompok ${registration.group_level}</div>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">DATA ORANG TUA/WALI</div>
                  <div class="info-row">
                    <div class="label">Nama Lengkap:</div>
                    <div class="value">${registration.parent_name}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Nomor Telepon:</div>
                    <div class="value">${registration.parent_phone}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Email:</div>
                    <div class="value">${registration.parent_email}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Alamat:</div>
                    <div class="value">${registration.parent_address}</div>
                  </div>
                </div>
                
                <div class="section">
                  <div class="section-title">INFORMASI PENDAFTARAN</div>
                  <div class="info-row">
                    <div class="label">ID Pendaftaran:</div>
                    <div class="value">${registration.id}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Status:</div>
                    <div class="value">
                      <span class="status-badge status-${registration.status.toLowerCase()}">
                        ${registration.status === 'pending' ? 'Menunggu Verifikasi' : 
                          registration.status === 'verified' ? 'Terverifikasi' : 
                          registration.status === 'accepted' ? 'Diterima' : 'Ditolak'}
                      </span>
                    </div>
                  </div>
                  <div class="info-row">
                    <div class="label">Tanggal Pendaftaran:</div>
                    <div class="value">${new Date(registration.created_at).toLocaleDateString('id-ID')}</div>
                  </div>
                  <div class="info-row">
                    <div class="label">Terakhir Diperbarui:</div>
                    <div class="value">${new Date(registration.updated_at).toLocaleDateString('id-ID')}</div>
                  </div>
                </div>
              </body>
            </html>
          `);
          printWindow.document.close();
          printWindow.focus();
          printWindow.print();
          
          // Jika ini adalah formulir terakhir, tutup window
          if (index === selectedRegistrations.length - 1) {
            printWindow.close();
          }
        }
      }, index * 1000); // Delay 1 detik antar pencetakan
    });
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Memuat data pendaftaran...</p>
      </div>
    )
  }

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
          <h1 className="text-3xl font-bold">Cetak Semua Formulir Pendaftar</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-primary">Daftar Pendaftar</CardTitle>
              <div className="flex gap-2">
                <Button 
                  onClick={toggleSelectAll}
                  variant="outline"
                >
                  {selectedIds.length === registrations.length ? 'Batal Pilih Semua' : 'Pilih Semua'}
                </Button>
                <Button 
                  onClick={handlePrintAll}
                  variant="default"
                  disabled={selectedIds.length === 0}
                >
                  Cetak ({selectedIds.length})
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {registrations.length === 0 ? (
              <p className="text-muted-foreground">Tidak ada data pendaftar</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">
                        <input 
                          type="checkbox" 
                          checked={selectedIds.length === registrations.length && registrations.length > 0}
                          onChange={toggleSelectAll}
                        />
                      </th>
                      <th className="text-left py-3 px-4 font-semibold">Nama Anak</th>
                      <th className="text-left py-3 px-4 font-semibold">Orang Tua</th>
                      <th className="text-left py-3 px-4 font-semibold">Kelompok</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Tanggal Daftar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr 
                        key={reg.id} 
                        className={`border-b border-border hover:bg-muted/50 ${
                          selectedIds.includes(reg.id) ? 'bg-blue-50' : ''
                        }`}
                        onClick={() => toggleSelect(reg.id)}
                      >
                        <td className="py-3 px-4">
                          <input 
                            type="checkbox" 
                            checked={selectedIds.includes(reg.id)}
                            onChange={() => toggleSelect(reg.id)}
                          />
                        </td>
                        <td className="py-3 px-4">{reg.child_name}</td>
                        <td className="py-3 px-4">{reg.parent_name}</td>
                        <td className="py-3 px-4">Kelompok {reg.group_level}</td>
                        <td className={`py-3 px-4 font-semibold ${
                          reg.status === "accepted"
                            ? "text-green-600"
                            : reg.status === "rejected"
                              ? "text-red-600"
                              : reg.status === "verified"
                                ? "text-blue-600"
                                : "text-yellow-600"
                        }`}>
                          {reg.status === "pending"
                            ? "Menunggu Verifikasi"
                            : reg.status === "verified"
                              ? "Terverifikasi"
                              : reg.status === "accepted"
                                ? "Diterima"
                                : "Ditolak"}
                        </td>
                        <td className="py-3 px-4">{new Date(reg.created_at).toLocaleDateString("id-ID")}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Pratinjau Formulir</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              {selectedIds.length > 0 
                ? `Menampilkan ${selectedIds.length} formulir yang dipilih untuk dicetak` 
                : 'Pilih formulir dari daftar di atas untuk menampilkan pratinjau'}
            </p>
            <div className="space-y-6">
              {registrations
                .filter(reg => selectedIds.includes(reg.id))
                .map(reg => (
                  <div key={reg.id} className="border rounded-lg p-4">
                    <PrintableRegistration 
                      registration={reg} 
                      showPrintButton={false} 
                    />
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}