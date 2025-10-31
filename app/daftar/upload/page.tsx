"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function DocumentUploadPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const [documents, setDocuments] = useState({
    birthCertificate: null as File | null,
    familyCard: null as File | null,
    parentPhoto: null as File | null,
    childPhoto: null as File | null,
  })

  // Cek apakah user sudah login
  useEffect(() => {
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")
    
    if (!token || !user) {
      router.push("/login")
      return
    }
  }, [router])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: string) => {
    const file = e.target.files?.[0] || null
    if (file) {
      setDocuments(prev => ({
        ...prev,
        [docType]: file
      }))
    }
  }

  const validateDocuments = () => {
    if (!documents.birthCertificate || !documents.familyCard || 
        !documents.parentPhoto || !documents.childPhoto) {
      setError("Mohon upload semua dokumen yang diperlukan.")
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    if (!validateDocuments()) return
    
    setLoading(true)
    setError("")
    setSuccess("")
    
    try {
      // Dapatkan user ID dari local storage
      const userStr = localStorage.getItem("user")
      if (!userStr) {
        throw new Error("User tidak ditemukan. Silakan login kembali.")
      }
      
      const user = JSON.parse(userStr)
      
      // Dalam implementasi sebenarnya, Anda akan mengupload file ke server
      // Untuk saat ini, kita akan mensimulasikan proses upload
      
      // Simulasi upload file
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simpan informasi dokumen ke database (dalam implementasi sebenarnya)
      const response = await fetch(`/api/registrations/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          documents: {
            birthCertificate: documents.birthCertificate?.name,
            familyCard: documents.familyCard?.name,
            parentPhoto: documents.parentPhoto?.name,
            childPhoto: documents.childPhoto?.name,
          }
        }),
      })
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Gagal menyimpan dokumen.")
      }
      
      setSuccess("Dokumen berhasil diupload! Anda akan dialihkan ke dashboard.")
      
      // Redirect ke dashboard setelah 2 detik
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
      
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan saat mengupload dokumen. Silakan coba lagi.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Upload Dokumen Persyaratan
            </h1>
            <p className="text-xl text-muted-foreground">
              TK Aisyiyah Iringmulyo
            </p>
          </div>
          
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
              <CardTitle className="text-primary text-xl">
                Dokumen Pendaftaran
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6">
              {error && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg text-sm font-medium">
                  ⚠️ {error}
                </div>
              )}
              
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm font-medium">
                  ✅ {success}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold mb-2 text-foreground">
                    Akta Kelahiran Anak *
                  </Label>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleFileChange(e, "birthCertificate")}
                    className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: JPG, PNG, atau PDF. Maksimal 5MB.
                  </p>
                </div>
                
                <div>
                  <Label className="text-sm font-semibold mb-2 text-foreground">
                    Kartu Keluarga (KK) *
                  </Label>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={(e) => handleFileChange(e, "familyCard")}
                    className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: JPG, PNG, atau PDF. Maksimal 5MB.
                  </p>
                </div>
                
                <div>
                  <Label className="text-sm font-semibold mb-2 text-foreground">
                    Pas Foto Orang Tua/Wali *
                  </Label>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, "parentPhoto")}
                    className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: JPG atau PNG. Maksimal 2MB. Latar putih.
                  </p>
                </div>
                
                <div>
                  <Label className="text-sm font-semibold mb-2 text-foreground">
                    Pas Foto Anak *
                  </Label>
                  <Input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={(e) => handleFileChange(e, "childPhoto")}
                    className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: JPG atau PNG. Maksimal 2MB. Latar putih.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                  disabled={loading || !!success}
                >
                  {loading ? "Memproses..." : success ? "Berhasil!" : "Upload Dokumen"}
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                Setelah semua dokumen diupload, tim admin akan melakukan verifikasi dalam 2-3 hari kerja.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}