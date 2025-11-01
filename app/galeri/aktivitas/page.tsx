"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";

export default function ActivityGalleryPage() {
  const activityImages = [
    {
      id: 1,
      title: "Kegiatan Belajar Bermain",
      description: "Anak-anak sedang melakukan kegiatan belajar sambil bermain di kelas. Metode pembelajaran kami menggabungkan pendidikan dengan keseruan bermain.",
      image: "/images/fasilitas/galeri1.jpeg",
    },
    {
      id: 2,
      title: "Ekstrakurikuler Drumband",
      description: "Pelatihan drumband menjadi salah satu ekstrakurikuler unggulan kami yang mengembangkan bakat musik dan disiplin anak.",
      image: "/images/fasilitas/galeri2.jpeg",
    },
    {
      id: 4,
      title: "Pertunjukan Tari Kreasi",
      description: "Anak-anak sedang menampilkan pertunjukan tari kreasi yang indah dan mengesankan di panggung sekolah.",
      image: "/images/fasilitas/galeri4.jpeg",
    },
    {
      id: 9,
      title: "Kegiatan TPQ",
      description: "Anak-anak belajar mengaji dan menghafal surat-surat pendek Al-Qur'an dalam program TPQ (Taman Pendidikan Qur'an).",
      image: "/images/fasilitas/ruang-seni.jpeg",
    },
    {
      id: 11,
      title: "Kegiatan Seni Lukis",
      description: "Anak-anak mengekspresikan kreativitas melalui kegiatan seni lukis dan melukis di bawah bimbingan guru berpengalaman.",
      image: "/images/fasilitas/galeri1.jpeg",
    },
    {
      id: 13,
      title: "Kegiatan Membaca Al-Qur'an",
      description: "Anak-anak belajar membaca Al-Qur'an dengan metode yang menyenangkan dan efektif untuk usia dini.",
      image: "/images/fasilitas/galeri3.jpeg",
    },
    {
      id: 15,
      title: "Kegiatan Outbond Edukatif",
      description: "Kegiatan outbond yang dirancang untuk mengembangkan kemandirian dan kerjasama tim pada anak-anak.",
      image: "/images/fasilitas/galeri5.jpeg",
    },
    {
      id: 17,
      title: "Kegiatan Masak Bersama",
      description: "Kegiatan memasak sederhana yang mengenalkan anak-anak pada bahan makanan sehat dan pentingnya gizi.",
      image: "/images/fasilitas/ruang-kelas.jpeg",
    },
    {
      id: 18,
      title: "Pelatihan Kemandirian",
      description: "Program pelatihan kemandirian yang mengajarkan anak-anak untuk mandiri dalam kegiatan sehari-hari.",
      image: "/images/fasilitas/ruang-seni.jpeg",
    },
    {
      id: 19,
      title: "Kegiatan Bercocok Tanam",
      description: "Kegiatan bercocok tanam yang mengenalkan anak-anak pada alam dan pentingnya menjaga lingkungan.",
      image: "/images/fasilitas/playground.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-8 md:py-12 animate-fade-in-down">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">Galeri Kegiatan</h1>
              <p className="text-primary-foreground/80 mt-2">Dokumentasi berbagai kegiatan pendidikan dan pengembangan anak di TK Aisyiyah</p>
            </div>
            <a 
              href="/galeri" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 rounded-md transition-colors duration-300 text-center"
            >
              ← Kembali ke Galeri
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activityImages.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-muted h-64 group">
                  <Image
                    src={item.image}
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
                  <p className="text-xs text-accent font-semibold">
                    🎨 Kegiatan Edukatif
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}