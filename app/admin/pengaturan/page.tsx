"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Settings {
  registration_open: boolean
  registration_start_date: string
  registration_end_date: string
  verification_deadline: string
  announcement_date: string
  group_a_quota: number
  group_b_quota: number
}

export default function PengaturanPage() {
  const router = useRouter()
  const [settings, setSettings] = useState<Settings | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      router.push("/admin/login")
      return
    }

    fetchSettings()
  }, [router])

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/admin/settings")
      const data = await response.json()
      if (response.ok) {
        setSettings(data)
      }
    } catch (error) {
      console.error("Error fetching settings:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!settings) return

    setSaving(true)
    try {
      const response = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      })

      if (response.ok) {
        alert("Pengaturan berhasil disimpan")
      } else {
        alert("Gagal menyimpan pengaturan")
      }
    } catch (error) {
      console.error("Error saving settings:", error)
      alert("Terjadi kesalahan")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-muted">
        <div className="flex items-center justify-center h-screen">
          <p className="text-muted-foreground">Memuat...</p>
        </div>
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
          <h1 className="text-3xl font-bold">Pengaturan PPDB</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Pengaturan Jadwal & Kuota</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {settings && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-2">Pendaftaran Dibuka</label>
                  <input
                    type="checkbox"
                    checked={settings.registration_open}
                    onChange={(e) => setSettings({ ...settings, registration_open: e.target.checked })}
                    className="w-4 h-4"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Mulai Pendaftaran</label>
                  <input
                    type="date"
                    value={settings.registration_start_date}
                    onChange={(e) => setSettings({ ...settings, registration_start_date: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Akhir Pendaftaran</label>
                  <input
                    type="date"
                    value={settings.registration_end_date}
                    onChange={(e) => setSettings({ ...settings, registration_end_date: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Batas Verifikasi</label>
                  <input
                    type="date"
                    value={settings.verification_deadline}
                    onChange={(e) => setSettings({ ...settings, verification_deadline: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal Pengumuman</label>
                  <input
                    type="date"
                    value={settings.announcement_date}
                    onChange={(e) => setSettings({ ...settings, announcement_date: e.target.value })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Kuota Kelompok A</label>
                  <input
                    type="number"
                    value={settings.group_a_quota}
                    onChange={(e) => setSettings({ ...settings, group_a_quota: Number.parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Kuota Kelompok B</label>
                  <input
                    type="number"
                    value={settings.group_b_quota}
                    onChange={(e) => setSettings({ ...settings, group_b_quota: Number.parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/90" disabled={saving}>
                  {saving ? "Menyimpan..." : "Simpan Pengaturan"}
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
