"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface User {
  id: string
  email: string
  full_name: string
  role: string
}

interface Registration {
  id: string
  child_name: string
  status: string
  group_level: string
  created_at: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [registration, setRegistration] = useState<Registration | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
      return
    }

    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)

    // Fetch registration data
    fetchRegistration(parsedUser.id)
  }, [router])

  const fetchRegistration = async (userId: string) => {
    try {
      const response = await fetch(`/api/registrations/${userId}`)
      const data = await response.json()
      if (response.ok) {
        setRegistration(data)
      }
    } catch (error) {
      console.error("Error fetching registration:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Memuat...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Dashboard Pendaftar</h1>
            <Button onClick={handleLogout} variant="outline">
              Keluar
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Nama Pendaftar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">{user?.full_name}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground">{user?.email}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm text-muted-foreground">Status Pendaftaran</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className={`text-lg font-bold ${
                    registration?.status === "accepted"
                      ? "text-green-600"
                      : registration?.status === "rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                  }`}
                >
                  {registration?.status === "pending"
                    ? "Menunggu Verifikasi"
                    : registration?.status === "verified"
                      ? "Terverifikasi"
                      : registration?.status === "accepted"
                        ? "Diterima"
                        : "Ditolak"}
                </p>
              </CardContent>
            </Card>
          </div>

          {registration && (
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Data Pendaftaran</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Nama Anak</p>
                    <p className="text-lg font-semibold text-foreground">{registration.child_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Kelompok</p>
                    <p className="text-lg font-semibold text-foreground">Kelompok {registration.group_level}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tanggal Pendaftaran</p>
                    <p className="text-lg font-semibold text-foreground">
                      {new Date(registration.created_at).toLocaleDateString("id-ID")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <p
                      className={`text-lg font-semibold ${
                        registration.status === "accepted"
                          ? "text-green-600"
                          : registration.status === "rejected"
                            ? "text-red-600"
                            : "text-yellow-600"
                      }`}
                    >
                      {registration.status === "pending"
                        ? "Menunggu Verifikasi"
                        : registration.status === "verified"
                          ? "Terverifikasi"
                          : registration.status === "accepted"
                            ? "Diterima"
                            : "Ditolak"}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <Link href="/dashboard/edit" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary/90">Edit Data</Button>
                  </Link>
                  <Link href="/dashboard/dokumen" className="flex-1">
                    <Button variant="outline" className="w-full bg-transparent">
                      Lihat Dokumen
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
