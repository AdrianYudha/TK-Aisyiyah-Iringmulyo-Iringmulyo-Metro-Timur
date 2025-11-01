import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

// Static data moved outside component for performance
const staff = [
  {
    name: "Tri Handayani, S.Pd.AUD",
    position: "Kepala Sekolah",
    image: "https://picsum.photos/400/400?random=20",
  },
  {
    name: "Diah Apriyanti, S.Pd.AUD",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=21",
  },
  {
    name: "Siti Aminah, S.Pd.I",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=22",
  },
  {
    name: "Widyastuti, S.Pd.AUD",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=23",
  },
  {
    name: "Eviyanti, S.Pd.AUD",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=24",
  },
  {
    name: "Wiwik Tri Utami, S.Pd.AUD",
    position: "Bendahara",
    image: "https://picsum.photos/400/400?random=25",
  },
  {
    name: "Ervi Rismawati, S.Pd.AUD",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=26",
  },
  {
    name: "Ari Setyawati, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=27",
  },
  {
    name: "Wahyu Maulina, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=28",
  },
  {
    name: "Liswati, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=29",
  },
  {
    name: "Afi Ristanti, S.Pd.AUD",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=30",
  },
  {
    name: "Limas Agustin, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=31",
  },
  {
    name: "Purnani, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=32",
  },
  {
    name: "Helen Paula, S.Pd",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=33",
  },
  {
    name: "Nindya Aprilia, S.E",
    position: "Operator",
    image: "https://picsum.photos/400/400?random=34",
  },
  {
    name: "Rana Septian",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=35",
  },
  {
    name: "Ari Arlita",
    position: "Guru Kelas",
    image: "https://picsum.photos/400/400?random=36",
  },
]

const facilities = [
  { name: "Ruang Kelas", description: "Ruang kelas yang nyaman dan dilengkapi dengan media pembelajaran modern", image: "/images/fasilitas/ruang-kelas.jpeg" },
  { name: "Playground", description: "Area bermain yang aman dengan berbagai permainan edukatif", image: "/images/fasilitas/playground.jpeg" },
  { name: "Perpustakaan", description: "Koleksi buku cerita dan buku pembelajaran untuk anak usia dini", image: "/images/fasilitas/perpustakaan.jpeg" },
  { name: "Ruang Seni", description: "Fasilitas untuk kegiatan seni, musik, dan kreativitas anak", image: "/images/fasilitas/ruang-seni.jpeg" },
  { name: "Ruang Bermain Indoor", description: "Area bermain dalam ruangan untuk cuaca ekstrem", image: "/images/fasilitas/ruang-bermain-indoor.jpeg" },
];

export default function ProfilPage() {

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
          {/* Galeri Foto Sekolah - Pindah ke halaman /galeri */}
          <div className="mb-12 animate-fade-in text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Galeri Foto Sekolah</h2>
            <p className="text-muted-foreground mb-6">
              Galeri dokumentasi kegiatan dan fasilitas sekolah kami dapat dilihat di halaman khusus kami
            </p>
            <a 
              href="/galeri" 
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-md transition-colors duration-300"
            >
              Lihat Galeri Lengkap
            </a>
          </div>

          {/* Sejarah */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary  text-center">Sejarah Singkat</h2>
            <Card className="transition-all duration-500 hover:shadow-lg">
              <CardContent className="">
                <p className="text-muted-foreground mb-4 transition-opacity duration-300 text-justify">
                  TK Aisyiyah Iringmulyo didirikan pada tahun 1998 dengan visi untuk memberikan pendidikan berkualitas
                  kepada anak usia dini. Sejak awal berdiri, sekolah ini telah berkomitmen untuk mengembangkan karakter
                  dan akademik anak dengan pendekatan yang holistik dan berbasis nilai-nilai Islam.
                </p>
                <p className="text-muted-foreground transition-opacity duration-300 text-justify">
                  Dengan dukungan dari organisasi Aisyiyah dan dedikasi para pendidik, TK Aisyiyah Iringmulyo terus
                  berkembang dan menjadi pilihan utama bagi orang tua di wilayah Metro dan sekitarnya.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visi Misi */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">Visi</h2>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="">
                  <p className="text-muted-foreground transition-colors duration-300 text-justify">
                    Terbentuknya Tunas Insan Pembelajar Yang Bertaqwa, Berakhlaq Mulia, Mandiri, Cakap Kreatif, dan
                    Peduli.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="transition-transform duration-500 hover:scale-[1.02]">
              <h2 className="text-2xl font-bold mb-4 text-primary text-center">Misi</h2>
              <Card className="transition-all duration-300 hover:shadow-lg">
                <CardContent className="">
                  <ul className="space-y-2 text-muted-foreground transition-colors duration-300 text-justify">
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
          <div className="mb-12 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center">Tujuan Sekolah</h2>
            <div className="grid md:grid-cols-2 gap-4  text-center">
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2 transition-colors duration-300">Terbentuknya anak yang beriman dan bertaqwa</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">
                    Mengembangkan nilai-nilai spiritual dan keagamaan sejak dini
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2 transition-colors duration-300">Terwujudnya anak yang berakhlaqul karimah</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">Membentuk karakter dan perilaku yang baik dan mulia</p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2 transition-colors duration-300">Terbangunnya model-model stimulasi psiko-sosial</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">
                    Memberikan rangsangan perkembangan yang sesuai dengan usia anak
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2 transition-colors duration-300">Terbentuknya kecerdasan majemuk anak</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">
                    Mengembangkan berbagai aspek kecerdasan anak secara optimal
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardContent className="">
                  <p className="font-semibold text-primary mb-2 transition-colors duration-300">Mengembangkan kecerdasan spiritual melalui pembiasaan beribadah dan bersedekah</p>
                  <p className="text-sm text-muted-foreground transition-colors duration-300">
                    Melalui kegiatan TPA (Taman Pendidikan Al-Qur'an) dan kebiasaan sehari-hari
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Fasilitas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary text-center animate-fade-in">Fasilitas Sekolah</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              {facilities.map((facility, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
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
            <h2 className="text-2xl font-bold mb-6 text-primary text-center animate-fade-in">Tim Pendidik</h2>
            
            {/* Head of School - Single card at the top */}
            <div className="mb-8 flex justify-center">
              {staff.filter(person => person.position === "Kepala Sekolah").map((person, index) => (
                <Card 
                  key={`kepsek-${index}`} 
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden w-full max-w-xs"
                >
                  <CardContent className="pt-6">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform duration-500 hover:scale-110"
                      unoptimized
                    />
                    <p className="font-semibold text-foreground text-sm transition-colors duration-300">{person.name}</p>
                    <p className="text-sm text-accent font-medium mt-2 transition-colors duration-300">{person.position}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Remaining Staff - in grid below */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.filter(person => person.position !== "Kepala Sekolah").map((person, index) => (
                <Card 
                  key={person.name} 
                  className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
                >
                  <CardContent className="pt-6">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform duration-500 hover:scale-110"
                      unoptimized
                    />
                    <p className="font-semibold text-foreground text-sm transition-colors duration-300">{person.name}</p>
                    <p className="text-sm text-accent font-medium mt-2 transition-colors duration-300">{person.position}</p>
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
