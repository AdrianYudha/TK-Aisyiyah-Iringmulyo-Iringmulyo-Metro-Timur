"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccess("Pendaftaran berhasil! Silakan login dengan akun Anda.")
    }
  }, [searchParams])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        if (data.code === "email_not_confirmed") {
          setError(
            "Email Anda belum dikonfirmasi. Silakan cek email Anda untuk link konfirmasi, atau hubungi admin jika tidak menerima email.",
          )
        } else {
          setError(data.message || "Login gagal")
        }
        setLoading(false)
        return
      }

      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      if (data.user.role === "admin") {
        router.push("/admin/dashboard")
      } else {
        router.push("/dashboard")
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Masuk ke Akun Anda</h1>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Login</CardTitle>
            </CardHeader>
            <CardContent>
              {error && <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>}
              {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Masukkan password"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                  {loading ? "Memproses..." : "Masuk"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Belum punya akun?{" "}
                <Link href="/daftar" className="text-primary font-semibold hover:underline">
                  Daftar di sini
                </Link>
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">
                <Link href="/auth/forgot-password" className="text-primary font-semibold hover:underline">
                  Lupa password?
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
