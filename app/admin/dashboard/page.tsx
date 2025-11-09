"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AdminUser {
  id: string
  email: string
  full_name: string
  role: string
}

interface RegistrationStats {
  total: number
  pending: number
  verified: number
  accepted: number
  rejected: number
}

export default function AdminDashboardPage() {
  const router = useRouter()
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [stats, setStats] = useState<RegistrationStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("adminUser")
    if (!userData) {
      router.push("/admin/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== "admin") {
      router.push("/")
      return
    }

    setAdminUser(parsedUser)
    fetchStats()
  }, [router])

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats")
      const data = await response.json()
      if (response.ok) {
        setStats(data)
      }
    } catch (error) {
      console.error("Error fetching stats:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Memuat...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-primary-foreground/80">Selamat datang, {adminUser?.full_name}</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            Keluar
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        {/* Statistics */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Total Pendaftar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{stats?.total || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Menunggu Verifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600">{stats?.pending || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Terverifikasi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600">{stats?.verified || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Diterima</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600">{stats?.accepted || 0}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-muted-foreground">Ditolak</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600">{stats?.rejected || 0}</p>
            </CardContent>
          </Card>
        </div>

        {/* Menu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="hover:shadow-lg transition cursor-pointer" onClick={() => router.push("/admin/pendaftar")}>
            <CardHeader>
              <CardTitle className="text-primary">Daftar Pendaftar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Lihat dan kelola data semua pendaftar</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition cursor-pointer" onClick={() => router.push("/admin/verifikasi")}>
            <CardHeader>
              <CardTitle className="text-primary">Verifikasi Dokumen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Verifikasi dokumen pendaftar</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition cursor-pointer" onClick={() => router.push("/admin/pengumuman")}>
            <CardHeader>
              <CardTitle className="text-primary">Pengumuman Hasil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Umumkan hasil seleksi kepada pendaftar</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition cursor-pointer" onClick={() => router.push("/admin/dashboard/print-all")}>
            <CardHeader>
              <CardTitle className="text-primary">Cetak Formulir</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cetak formulir pendaftaran</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition cursor-pointer" onClick={() => router.push("/admin/pengaturan")}>
            <CardHeader>
              <CardTitle className="text-primary">Pengaturan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Atur jadwal, kuota, dan pengaturan lainnya</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
