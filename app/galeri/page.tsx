"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const galleryItems = [
    {
      id: 21,
      title: "TPA (Taman Pendidikan Al-Qur'an)",
      description:
        "Mengembangkan kecerdasan spiritual melalui pembiasaan beribadah dan bersedekah di TPA (Taman Pendidikan Al-Qur'an).",
      category: "activity",
      image: "/tpa.jpeg",
    },
    {
      id: 1,
      title: "Kegiatan Belajar Bermain",
      description:
        "Anak-anak sedang melakukan kegiatan belajar sambil bermain di kelas. Metode pembelajaran kami menggabungkan pendidikan dengan keseruan bermain.",
      category: "activity",
      image: "/images/fasilitas/galeri1.jpeg",
    },
    {
      id: 2,
      title: "Ekstrakurikuler Drumband",
      description:
        "Pelatihan drumband menjadi salah satu ekstrakurikuler unggulan kami yang mengembangkan bakat musik dan disiplin anak.",
      category: "activity",
      image: "/images/fasilitas/galeri2.jpeg",
    },
    {
      id: 3,
      title: "Juara Drumband Provinsi",
      description:
        "Prestasi gemilang! Tim drumband TK Aisyiyah meraih juara 2 konser devisi mandiri tingkat provinsi Lampung pada Maret 2025.",
      category: "achievement",
      image: "/images/fasilitas/galeri3.jpeg",
    },
    {
      id: 4,
      title: "Pertunjukan Tari Kreasi",
      description:
        "Anak-anak sedang menampilkan pertunjukan tari kreasi yang indah dan mengesankan di panggung sekolah.",
      category: "activity",
      image: "/images/fasilitas/galeri4.jpeg",
    },
    {
      id: 5,
      title: "Juara Tari Kreasi",
      description:
        "Prestasi tari kami terus berkembang dengan berbagai penghargaan di tingkat kota dan provinsi untuk kategori tari kreasi.",
      category: "achievement",
      image: "/images/fasilitas/galeri5.jpeg",
    },
    {
      id: 6,
      title: "Playground Sekolah",
      description:
        "Area bermain yang aman dan menyenangkan dengan berbagai peralatan edukatif untuk mengembangkan motorik anak.",
      category: "facility",
      image: "/images/fasilitas/galeri6.jpeg",
    },
    {
      id: 7,
      title: "Ruang Kelas Modern",
      description:
        "Ruang kelas yang dirancang khusus untuk anak usia dini dengan fasilitas pembelajaran yang lengkap dan menyenangkan.",
      category: "facility",
      image: "/images/fasilitas/ruang-kelas.jpeg",
    },
    {
      id: 8,
      title: "Perpustakaan Sekolah",
      description:
        "Perpustakaan yang dilengkapi dengan koleksi buku cerita dan buku pembelajaran yang menarik untuk anak-anak.",
      category: "facility",
      image: "/images/fasilitas/perpustakaan.jpeg",
    },
    {
      id: 9,
      title: "Kegiatan TPQ",
      description:
        "Anak-anak belajar mengaji dan menghafal surat-surat pendek Al-Qur'an dalam program TPQ (Taman Pendidikan Qur'an).",
      category: "activity",
      image: "/images/fasilitas/ruang-seni.jpeg",
    },
    {
      id: 10,
      title: "Juara Hafalan Quran",
      description:
        "Prestasi mengesankan dalam lomba hafalan surat-surat pendek dan adzan dengan meraih juara 3 di level kota.",
      category: "achievement",
      image: "/images/fasilitas/ruang-bermain-indoor.jpeg",
    },
    {
      id: 11,
      title: "Kegiatan Seni Lukis",
      description:
        "Anak-anak mengekspresikan kreativitas melalui kegiatan seni lukis dan melukis di bawah bimbingan guru berpengalaman.",
      category: "activity",
      image: "/images/fasilitas/galeri1.jpeg",
    },
    {
      id: 12,
      title: "Juara Lomba Mewarnai",
      description:
        "Anak-anak kami meraih berbagai penghargaan dalam lomba mewarnai tingkat kota dan provinsi, menunjukkan kreativitas luar biasa.",
      category: "achievement",
      image: "/images/fasilitas/galeri2.jpeg",
    },
    {
      id: 13,
      title: "Kegiatan Membaca Al-Qur'an",
      description:
        "Anak-anak belajar membaca Al-Qur'an dengan metode yang menyenangkan dan efektif untuk usia dini.",
      category: "activity",
      image: "/images/fasilitas/galeri3.jpeg",
    },
    {
      id: 14,
      title: "Penghargaan Sekolah Ramah Anak",
      description:
        "Penghargaan atas komitmen kami dalam menciptakan lingkungan belajar yang aman dan ramah anak.",
      category: "achievement",
      image: "/images/fasilitas/galeri4.jpeg",
    },
    {
      id: 15,
      title: "Kegiatan Outbond Edukatif",
      description:
        "Kegiatan outbond yang dirancang untuk mengembangkan kemandirian dan kerjasama tim pada anak-anak.",
      category: "activity",
      image: "/images/fasilitas/galeri5.jpeg",
    },
    {
      id: 16,
      title: "Ruang Perpustakaan Anak",
      description:
        "Ruang perpustakaan yang nyaman dengan koleksi buku yang menarik untuk meningkatkan minat baca anak.",
      category: "facility",
      image: "/images/fasilitas/galeri6.jpeg",
    },
    {
      id: 17,
      title: "Kegiatan Masak Bersama",
      description:
        "Kegiatan memasak sederhana yang mengenalkan anak-anak pada bahan makanan sehat dan pentingnya gizi.",
      category: "activity",
      image: "/images/fasilitas/ruang-kelas.jpeg",
    },
    {
      id: 18,
      title: "Pelatihan Kemandirian",
      description:
        "Program pelatihan kemandirian yang mengajarkan anak-anak untuk mandiri dalam kegiatan sehari-hari.",
      category: "activity",
      image: "/images/fasilitas/ruang-seni.jpeg",
    },
    {
      id: 19,
      title: "Kegiatan Bercocok Tanam",
      description:
        "Kegiatan bercocok tanam yang mengenalkan anak-anak pada alam dan pentingnya menjaga lingkungan.",
      category: "activity",
      image: "/images/fasilitas/playground.jpeg",
    },
    {
      id: 20,
      title: "Pameran Hasil Karya Anak",
      description:
        "Pameran hasil karya anak-anak yang menampilkan kreativitas dan kemajuan mereka selama di sekolah.",
      category: "achievement",
      image: "/images/fasilitas/perpustakaan.jpeg",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12 animate-fade-in-down">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Galeri Sekolah</h1>
          <p className="text-primary-foreground/80 mt-2">Dokumentasi kegiatan dan prestasi TK Aisyiyah Iringmulyo</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center animate-fade-in-down">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === "all"
                  ? "bg-primary text-primary-foreground hover-scale"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setSelectedCategory("activity")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === "activity"
                  ? "bg-primary text-primary-foreground hover-scale"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Kegiatan
            </button>
            <button
              onClick={() => setSelectedCategory("achievement")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === "achievement"
                  ? "bg-primary text-primary-foreground hover-scale"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Prestasi
            </button>
            <button
              onClick={() => setSelectedCategory("facility")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === "facility"
                  ? "bg-primary text-primary-foreground hover-scale"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              Fasilitas
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <Card 
                key={item.id} 
                className={`overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (item.title.includes("TPA")) {
                    window.location.href = '/galeri/tpa';
                  } else if (item.category === "activity") {
                    window.location.href = '/galeri/aktivitas';
                  } else if (item.category === "achievement") {
                    window.location.href = '/galeri/prestasi';
                  } else if (item.category === "facility") {
                    window.location.href = '/galeri/fasilitas';
                  }
                }}
              >
                <div className="relative overflow-hidden bg-muted h-64 group">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm line-clamp-2">{item.title}</p>
                  </div>
                </div>
                <CardContent className="pt-4 flex-1 flex flex-col transition-all duration-300">
                  <p className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-sm text-muted-foreground mb-3 flex-1 group-hover:text-foreground transition-colors">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-accent font-semibold">
                      {item.category === "activity"
                        ? "🎨 Kegiatan"
                        : item.category === "achievement"
                          ? "🏆 Prestasi"
                          : "🏢 Fasilitas"}
                    </p>
                    <span className="text-sm bg-primary text-primary-foreground px-3 py-1.5 rounded-md font-medium">
                      Lihat Selengkapnya →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
