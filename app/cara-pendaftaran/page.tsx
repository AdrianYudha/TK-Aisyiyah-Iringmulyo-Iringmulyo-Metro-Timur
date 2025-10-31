import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function CaraPendaftaran() {
  const steps = [
    {
      step: 1,
      title: "Pendaftaran Akun",
      description: "Buat akun dengan mengisi data diri pada formulir pendaftaran di website ini",
      icon: "📝"
    },
    {
      step: 2,
      title: "Lengkapi Data Diri",
      description: "Isi formulir pendaftaran dengan data anak dan orang tua secara lengkap",
      icon: "📋"
    },
    {
      step: 3,
      title: "Unggah Dokumen",
      description: "Unggah dokumen persyaratan yang dibutuhkan seperti akta kelahiran dan kartu keluarga",
      icon: "📁"
    },
    {
      step: 4,
      title: "Verifikasi",
      description: "Tim akan memverifikasi data dan dokumen yang telah Anda kirimkan",
      icon: "✅"
    },
    {
      step: 5,
      title: "Pengumuman",
      description: "Hasil pendaftaran akan diumumkan sesuai jadwal yang telah ditentukan",
      icon: "📢"
    },
    {
      step: 6,
      title: "Daftar Ulang",
      description: "Bagi yang diterima, lakukan daftar ulang sesuai jadwal yang ditentukan",
      icon: "✅"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Cara Pendaftaran</h1>
          <p className="text-primary-foreground/80 mt-2">Langkah-langkah pendaftaran peserta didik baru</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Langkah-Langkah Pendaftaran</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Ikuti langkah-langkah berikut untuk menyelesaikan proses pendaftaran anak Anda. 
              Proses pendaftaran dilakukan secara online melalui website ini.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((item) => (
                <Card 
                  key={item.step} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary/10"
                >
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="text-3xl">
                        {item.icon}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-primary mb-3">{item.title}</CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Persyaratan Pendaftaran</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Dokumen Wajib</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Akta Kelahiran Anak</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Kartu Keluarga (KK)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">Pas Foto 3x4 (2 lembar)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-muted-foreground">KTP Orang Tua/Wali</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-primary">Keterangan Tambahan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="text-muted-foreground">Semua dokumen dalam bentuk digital</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="text-muted-foreground">Format dokumen: JPG, PNG, atau PDF</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="text-muted-foreground">Ukuran file maksimal: 2MB per dokumen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="text-muted-foreground">Pastikan dokumen terlihat jelas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Catatan Penting</h2>
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Proses Verifikasi</h3>
                      <p className="text-muted-foreground">
                        Proses verifikasi dokumen membutuhkan waktu 1-2 hari kerja. 
                        Anda akan menerima notifikasi melalui email atau sistem dashboard.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Kuota Terbatas</h3>
                      <p className="text-muted-foreground">
                        Pendaftaran akan ditutup secara otomatis ketika kuota terpenuhi, 
                        meskipun jadwal pendaftaran masih berlangsung.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Update Status</h3>
                      <p className="text-muted-foreground">
                        Cek secara berkala status pendaftaran Anda melalui akun pribadi di dashboard.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}