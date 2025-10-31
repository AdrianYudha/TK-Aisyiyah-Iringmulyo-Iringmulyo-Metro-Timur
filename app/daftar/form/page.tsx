"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function RegistrationFormPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const [formData, setFormData] = useState({
    // Data anak
    childName: "",
    childBirthDate: "",
    childGender: "",
    groupLevel: "",
    
    // Data orang tua
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    parentAddress: "",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateStep1 = () => {
    if (!formData.childName || !formData.childBirthDate || 
        !formData.childGender || !formData.groupLevel) {
      setError("Mohon isi semua data anak yang wajib.")
      return false
    }
    return true
  }

  const validateStep2 = () => {
    if (!formData.parentName || !formData.parentPhone || 
        !formData.parentEmail || !formData.parentAddress) {
      setError("Mohon isi semua data orang tua yang wajib.")
      return false
    }
    return true
  }

  const handleNextStep = () => {
    setError("")
    setSuccess("")
    
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      handleSubmit()
    }
  }

  const handlePrevStep = () => {
    setError("")
    setSuccess("")
    setStep(step - 1)
  }

  const handleSubmit = async () => {
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
      
      // Siapkan data untuk dikirim
      const submissionData = {
        user_id: user.id,
        child_name: formData.childName,
        child_birth_date: formData.childBirthDate,
        child_gender: formData.childGender,
        group_level: formData.groupLevel,
        parent_name: formData.parentName,
        parent_phone: formData.parentPhone,
        parent_email: formData.parentEmail,
        parent_address: formData.parentAddress
      }
      
      // Kirim data ke API
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message || "Gagal menyimpan pendaftaran.")
      }
      
      setSuccess(data.message || "Pendaftaran berhasil disimpan!")
      
      // Redirect ke dashboard setelah 2 detik
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
      
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan. Silakan coba lagi.")
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
              Formulir Pendaftaran
            </h1>
            <p className="text-xl text-muted-foreground">
              TK Aisyiyah Iringmulyo
            </p>
          </div>
          
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-primary/10">
              <CardTitle className="text-primary text-xl">
                Langkah {step} dari 2: {step === 1 ? "Data Anak" : "Data Orang Tua"}
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
              
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg text-sm font-medium">
                  ✅ {success}
                </div>
              )}
              
              {step === 1 ? (
                // Step 1: Data Anak
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="childName" className="text-sm font-semibold mb-2 text-foreground">
                      Nama Lengkap Anak *
                    </Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap anak"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="childBirthDate" className="text-sm font-semibold mb-2 text-foreground">
                      Tanggal Lahir Anak *
                    </Label>
                    <Input
                      id="childBirthDate"
                      name="childBirthDate"
                      type="date"
                      value={formData.childBirthDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-semibold mb-2 text-foreground">
                      Jenis Kelamin Anak *
                    </Label>
                    <RadioGroup 
                      value={formData.childGender} 
                      onValueChange={(value) => handleSelectChange("childGender", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Laki-laki" id="male" />
                        <Label htmlFor="male">Laki-laki</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Perempuan" id="female" />
                        <Label htmlFor="female">Perempuan</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div>
                    <Label className="text-sm font-semibold mb-2 text-foreground">
                      Kelompok *
                    </Label>
                    <RadioGroup 
                      value={formData.groupLevel} 
                      onValueChange={(value) => handleSelectChange("groupLevel", value)}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="A" id="groupA" />
                        <Label htmlFor="groupA">Kelompok A (4 tahun)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="B" id="groupB" />
                        <Label htmlFor="groupB">Kelompok B (5 tahun)</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              ) : (
                // Step 2: Data Orang Tua
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="parentName" className="text-sm font-semibold mb-2 text-foreground">
                      Nama Lengkap Orang Tua/Wali *
                    </Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap orang tua/wali"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="parentPhone" className="text-sm font-semibold mb-2 text-foreground">
                      Nomor Telepon/WhatsApp *
                    </Label>
                    <Input
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      placeholder="08xx-xxxx-xxxx"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="parentEmail" className="text-sm font-semibold mb-2 text-foreground">
                      Email *
                    </Label>
                    <Input
                      id="parentEmail"
                      name="parentEmail"
                      type="email"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="parentAddress" className="text-sm font-semibold mb-2 text-foreground">
                      Alamat Lengkap *
                    </Label>
                    <Textarea
                      id="parentAddress"
                      name="parentAddress"
                      value={formData.parentAddress}
                      onChange={handleInputChange}
                      placeholder="Masukkan alamat lengkap"
                      className="w-full px-4 py-3 border-2 border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
                      rows={4}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex gap-4 mt-8">
                {step === 2 && (
                  <Button
                    variant="outline"
                    onClick={handlePrevStep}
                    className="flex-1 border-2 border-primary text-primary hover:bg-primary/5"
                    disabled={loading}
                  >
                    Kembali
                  </Button>
                )}
                
                <Button
                  onClick={handleNextStep}
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
                  disabled={loading || !!success}
                >
                  {loading ? "Memproses..." : 
                   success ? "Berhasil!" : 
                   step === 1 ? "Lanjutkan" : "Daftar"}
                </Button>
              </div>
              
              <p className="text-center text-sm text-muted-foreground mt-6">
                Setelah mendaftar, Anda dapat melengkapi dokumen persyaratan di halaman dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}