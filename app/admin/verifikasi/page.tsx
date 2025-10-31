"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Registration {
  id: string
  child_name: string
  parent_name: string
  group_level: string
  status: string
}

export default function VerifikasiPage() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      router.push("/admin/login")
      return
    }

    fetchPendingRegistrations()
  }, [router])

  const fetchPendingRegistrations = async () => {
    try {
      const response = await fetch("/api/admin/registrations?status=pending")
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

  const updateStatus = async (registrationId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/registrations/${registrationId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setRegistrations(registrations.filter((r) => r.id !== registrationId))
        alert("Status berhasil diperbarui")
      }
    } catch (error) {
      console.error("Error updating status:", error)
      alert("Gagal memperbarui status")
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
          <h1 className="text-3xl font-bold">Verifikasi Dokumen</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6">
        {loading ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Memuat data...</p>
            </CardContent>
          </Card>
        ) : registrations.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Tidak ada pendaftar yang menunggu verifikasi</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {registrations.map((reg) => (
              <Card key={reg.id}>
                <CardHeader>
                  <CardTitle className="text-primary">{reg.child_name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Orang Tua</p>
                      <p className="font-semibold">{reg.parent_name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Kelompok</p>
                      <p className="font-semibold">Kelompok {reg.group_level}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => updateStatus(reg.id, "verified")}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Terima
                    </Button>
                    <Button onClick={() => updateStatus(reg.id, "rejected")} variant="destructive" className="flex-1">
                      Tolak
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
