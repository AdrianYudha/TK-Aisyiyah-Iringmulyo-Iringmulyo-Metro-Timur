import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ProfilPage() {
  const staff = [
    {
      name: "Tri Handayani, S.Pd.AUD",
      position: "Kepala Sekolah",
      image: "/kepala-sekolah-wanita.jpg",
    },
    {
      name: "Diah Apriyanti, S.Pd.AUD",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Siti Aminah, S.Pd.I",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Widyastuti, S.Pd.AUD",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Eviyanti, S.Pd.AUD",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Wiwik Tri Utami, S.Pd.AUD",
      position: "Bendahara",
      image: "/bendahara-wanita.jpg",
    },
    {
      name: "Ervi Rismawati, S.Pd.AUD",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Ari Setyawati, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Wahyu Maulina, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Liswati, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Afi Ristanti, S.Pd.AUD",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Limas Agustin, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Purnani, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Helen Paula, S.Pd",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Nindya Aprilia, S.E",
      position: "Operator",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Rana Septian",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
    {
      name: "Ari Arlita",
      position: "Guru Kelas",
      image: "/guru-wanita.jpg",
    },
  ]

  const facilities = [
    { name: "Ruang Kelas", description: "Ruang kelas yang nyaman dan dilengkapi dengan media pembelajaran modern" },
    { name: "Playground", description: "Area bermain yang aman dengan berbagai permainan edukatif" },
    { name: "Perpustakaan", description: "Koleksi buku cerita dan buku pembelajaran untuk anak usia dini" },
    { name: "Ruang Seni", description: "Fasilitas untuk kegiatan seni, musik, dan kreativitas anak" },
    { name: "Kantin Sehat", description: "Menyediakan makanan bergizi untuk anak-anak" },
    { name: "Ruang Bermain Indoor", description: "Area bermain dalam ruangan untuk cuaca ekstrem" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Profil Sekolah</h1>
          <p className="text-primary-foreground/80 mt-2">Mengenal lebih dekat TK Aisyiyah Iringmulyo</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          {/* Sejarah */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary  text-center">Sejarah Singkat</h2>
            <Card>
              <CardContent className="">
                <p className="text-muted-foreground mb-4">
                  TK Aisyiyah Iringmulyo didirikan pada tahun 1998 dengan visi untuk memberikan pendidikan berkualitas
                  kepada anak usia dini. Sejak awal berdiri, sekolah ini telah berkomitmen untuk mengembangkan karakter
                  dan akademik anak dengan pendekatan yang holistik dan berbasis nilai-nilai Islam.
                </p>
                <p className="text-muted-foreground">
                  Dengan dukungan dari organisasi Aisyiyah dan dedikasi para pendidik, TK Aisyiyah Iringmulyo terus
                  berkembang dan menjadi pilihan utama bagi orang tua di wilayah Metro dan sekitarnya.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">Visi</h2>
              <Card>
                <CardContent className="">
                  <p className="text-muted-foreground">
                    Terbentuknya Tunas Insan Pembelajar Yang Bertaqwa, Berakhlaq Mulia, Mandiri, Cakap Kreatif, dan
                    Peduli.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">Misi</h2>
              <Card>
                <CardContent className="">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Menumbuhkan semangat cinta belajar pada anak</li>
                    <li>• Menanamkan nilai-nilai keimanan dan akhlaq mulia</li>
                    <li>• Membiasakan anak beribadah sesuai manhaj Tarjih Muhammadiyah</li>
                    <li>• Mendidik anak secara optimal sesuai perkembangannya</li>
                    <li>• Membiasakan anak bersikap peduli terhadap sesama dan lingkungan</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tujuan */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center">Tujuan Sekolah</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2">Terbentuknya anak yang beriman dan bertaqwa</p>
                  <p className="text-sm text-muted-foreground">
                    Mengembangkan nilai-nilai spiritual dan keagamaan sejak dini
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2">Terwujudnya anak yang berakhlaqul karimah</p>
                  <p className="text-sm text-muted-foreground">Membentuk karakter dan perilaku yang baik dan mulia</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2">Terbangunnya model-model stimulasi psiko-sosial</p>
                  <p className="text-sm text-muted-foreground">
                    Memberikan rangsangan perkembangan yang sesuai dengan usia anak
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2">Terbentuknya kecerdasan majemuk anak</p>
                  <p className="text-sm text-muted-foreground">
                    Mengembangkan berbagai aspek kecerdasan anak secara optimal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center">Fasilitas Sekolah</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {facilities.map((facility, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{facility.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tim Pendidik */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary  text-center">Tim Pendidik (17 Guru)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((person, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition">
                  <CardContent className="pt-6">
                    <img
                      src={person.image || "/placeholder.svg"}
                      alt={person.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="font-semibold text-foreground text-sm">{person.name}</p>
                    <p className="text-sm text-accent font-medium mt-2">{person.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
