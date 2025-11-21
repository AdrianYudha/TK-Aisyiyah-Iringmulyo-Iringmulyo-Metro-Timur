"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function DaftarPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    parentName: "",
    childName: "",
    childBirthDate: "",
    childGender: "",
    groupLevel: "",
    parentAddress: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateStep1 = () => {
    if (!formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError("Semua field harus diisi")
      return false
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Password tidak cocok")
      return false
    }
    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter")
      return false
    }
    setError("")
    return true
  }

  const validateStep2 = () => {
    if (
      !formData.parentName ||
      !formData.childName ||
      !formData.childBirthDate ||
      !formData.childGender ||
      !formData.groupLevel
    ) {
      setError("Semua field harus diisi")
      return false
    }
    setError("")
    return true
  }

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Pendaftaran gagal")
        setLoading(false)
        return
      }

      router.push("/login?registered=true")
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-secondary">
      <Navigation />

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pendaftaran Calon Peserta Didik
            </h1>
            <p className="text-muted-foreground text-lg">TK Aisyiyah Iringmulyo</p>
          </div>

          <Card className="border-2 border-primary/10 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
              <CardTitle className="text-primary text-xl">
                Langkah {step} dari 2: {step === 1 ? "Data Akun" : "Data Anak & Orang Tua"}
              </CardTitle>
              <div className="flex gap-2 mt-4">
                <div className={`h-1 flex-1 rounded-full transition-all ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
                <div className={`h-1 flex-1 rounded-full transition-all ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}

              {step === 1 ? (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nama@email.com"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Minimal 6 karakter"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Konfirmasi Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Ulangi password"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Nama Orang Tua/Wali</label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Nama Anak</label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="Nama lengkap anak"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Tanggal Lahir Anak</label>
                    <input
                      type="date"
                      name="childBirthDate"
                      value={formData.childBirthDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Jenis Kelamin</label>
                    <select
                      name="childGender"
                      value={formData.childGender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    >
                      <option value="">Pilih jenis kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Kelompok</label>
                    <select
                      name="groupLevel"
                      value={formData.groupLevel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    >
                      <option value="">Pilih kelompok</option>
                      <option value="A">Kelompok A (4 tahun)</option>
                      <option value="B">Kelompok B (5 tahun)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Alamat</label>
                    <input
                      type="text"
                      name="parentAddress"
                      value={formData.parentAddress}
                      onChange={handleInputChange}
                      placeholder="Alamat lengkap"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-8">
                {step === 2 && (
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/5"
                    disabled={loading}
                  >
                    Kembali
                  </Button>
                )}
                <Button
                  onClick={handleNextStep}
                  className="flex-1 bg-primary hover:bg-primary/90 active:bg-primary/80 text-white dark:text-foreground font-semibold py-3 rounded-lg transition-all duration-700 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
                  disabled={loading}
                >
                  {loading ? "Memproses..." : step === 1 ? "Lanjutkan" : "Daftar"}
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Sudah punya akun?{" "}
                <Link href="/login" className="text-primary font-semibold hover:text-accent transition-colors">
                  Masuk di sini
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
