"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Registration {
  id: string
  child_name: string
  parent_name: string
  group_level: string
  status: string
  created_at: string
}

export default function PendaftarPage() {
  const router = useRouter()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState("all")

  useEffect(() => {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      router.push("/admin/login")
      return
    }

    fetchRegistrations()
  }, [router, filter])

  const fetchRegistrations = async () => {
    try {
      const response = await fetch(`/api/admin/registrations?status=${filter}`)
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600"
      case "verified":
        return "text-blue-600"
      case "accepted":
        return "text-green-600"
      case "rejected":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Menunggu Verifikasi"
      case "verified":
        return "Terverifikasi"
      case "accepted":
        return "Diterima"
      case "rejected":
        return "Ditolak"
      default:
        return status
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
          <h1 className="text-3xl font-bold">Daftar Pendaftar</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto p-6">
        {/* Filter */}
        <div className="flex gap-2 mb-6 flex-wrap">
          <Button
            onClick={() => setFilter("all")}
            variant={filter === "all" ? "default" : "outline"}
            className={filter === "all" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Semua
          </Button>
          <Button
            onClick={() => setFilter("pending")}
            variant={filter === "pending" ? "default" : "outline"}
            className={filter === "pending" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Menunggu Verifikasi
          </Button>
          <Button
            onClick={() => setFilter("verified")}
            variant={filter === "verified" ? "default" : "outline"}
            className={filter === "verified" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Terverifikasi
          </Button>
          <Button
            onClick={() => setFilter("accepted")}
            variant={filter === "accepted" ? "default" : "outline"}
            className={filter === "accepted" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Diterima
          </Button>
          <Button
            onClick={() => setFilter("rejected")}
            variant={filter === "rejected" ? "default" : "outline"}
            className={filter === "rejected" ? "bg-primary hover:bg-primary/90" : ""}
          >
            Ditolak
          </Button>
        </div>

        {/* Table */}
        {loading ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Memuat data...</p>
            </CardContent>
          </Card>
        ) : registrations.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Tidak ada data pendaftar</p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Nama Anak</th>
                      <th className="text-left py-3 px-4 font-semibold">Orang Tua</th>
                      <th className="text-left py-3 px-4 font-semibold">Kelompok</th>
                      <th className="text-left py-3 px-4 font-semibold">Status</th>
                      <th className="text-left py-3 px-4 font-semibold">Tanggal Daftar</th>
                      <th className="text-left py-3 px-4 font-semibold">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b border-border hover:bg-muted/50">
                        <td className="py-3 px-4">{reg.child_name}</td>
                        <td className="py-3 px-4">{reg.parent_name}</td>
                        <td className="py-3 px-4">Kelompok {reg.group_level}</td>
                        <td className={`py-3 px-4 font-semibold ${getStatusColor(reg.status)}`}>
                          {getStatusLabel(reg.status)}
                        </td>
                        <td className="py-3 px-4">{new Date(reg.created_at).toLocaleDateString("id-ID")}</td>
                        <td className="py-3 px-4">
                          <Button size="sm" variant="outline" onClick={() => router.push(`/admin/pendaftar/${reg.id}`)}>
                            Detail
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
