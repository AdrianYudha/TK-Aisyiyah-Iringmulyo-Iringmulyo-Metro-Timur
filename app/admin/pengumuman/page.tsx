"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RegistrationStats {
  total: number
  verified: number
  accepted: number
  rejected: number
}

export default function PengumumanPage() {
  const router = useRouter()
  const [stats, setStats] = useState<RegistrationStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [announcing, setAnnouncing] = useState(false)

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      router.push("/admin/login")
      return
    }

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

  const handleAnnounce = async () => {
    if (!confirm("Apakah Anda yakin ingin mengumumkan hasil? Tindakan ini tidak dapat dibatalkan.")) {
      return
    }

    setAnnouncing(true)
    try {
      const response = await fetch("/api/admin/announce", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        alert("Hasil pengumuman berhasil dipublikasikan")
        fetchStats()
      } else {
        alert("Gagal mempublikasikan hasil")
      }
    } catch (error) {
      console.error("Error announcing:", error)
      alert("Terjadi kesalahan")
    } finally {
      setAnnouncing(false)
    }
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
          <h1 className="text-3xl font-bold">Pengumuman Hasil</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 max-w-2xl">
        {loading ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Memuat data...</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">Statistik Pendaftar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Pendaftar</p>
                    <p className="text-2xl font-bold text-primary">{stats?.total || 0}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Terverifikasi</p>
                    <p className="text-2xl font-bold text-blue-600">{stats?.verified || 0}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Diterima</p>
                    <p className="text-2xl font-bold text-green-600">{stats?.accepted || 0}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ditolak</p>
                    <p className="text-2xl font-bold text-red-600">{stats?.rejected || 0}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Publikasikan Hasil</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Klik tombol di bawah untuk mempublikasikan hasil pengumuman. Pendaftar akan dapat melihat status
                  mereka di akun mereka.
                </p>
                <Button
                  onClick={handleAnnounce}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={announcing}
                >
                  {announcing ? "Memproses..." : "Publikasikan Hasil"}
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
