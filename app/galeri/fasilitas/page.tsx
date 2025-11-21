"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

export default function FacilityGalleryPage() {
  const { isVisible, registerElement } = useScrollAnimation();
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      registerElement('header', headerRef.current);
    }
    if (galleryRef.current) {
      registerElement('gallery', galleryRef.current);
    }
  }, [registerElement]);

  const facilityImages = [
    {
      id: 6,
      title: "Playground Sekolah",
      description: "Area bermain yang aman dan menyenangkan dengan berbagai peralatan edukatif untuk mengembangkan motorik anak.",
      image: "/images/fasilitas/galeri6.jpeg",
    },
    {
      id: 7,
      title: "Ruang Kelas Modern",
      description: "Ruang kelas yang dirancang khusus untuk anak usia dini dengan fasilitas pembelajaran yang lengkap dan menyenangkan.",
      image: "/images/fasilitas/ruang-kelas.jpeg",
    },
    {
      id: 8,
      title: "Perpustakaan Sekolah",
      description: "Perpustakaan yang dilengkapi dengan koleksi buku cerita dan buku pembelajaran yang menarik untuk anak-anak.",
      image: "/images/fasilitas/perpustakaan.jpeg",
    },
    {
      id: 16,
      title: "Ruang Perpustakaan Anak",
      description: "Ruang perpustakaan yang nyaman dengan koleksi buku yang menarik untuk meningkatkan minat baca anak.",
      image: "/images/fasilitas/galeri6.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section 
        ref={headerRef}
        className={`bg-primary text-primary-foreground py-8 md:py-12 transition-all duration-700 ease-out transform-gpu ${
          isVisible['header'] !== undefined
            ? (isVisible['header']
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10')
            : 'opacity-100 translate-y-0' // Default to visible if not yet observed
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold">Galeri Fasilitas</h1>
              <p className="text-primary-foreground/80 mt-2">Berbagai fasilitas pendidikan dan sarana penunjang yang tersedia di TK Aisyiyah</p>
            </div>
            <a
              href="/galeri"
              className="bg-white dark:bg-background text-primary hover:bg-white/90 dark:hover:bg-background/90 font-semibold px-6 py-3 rounded-md transition-colors duration-700 text-center"
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
          <div
            ref={galleryRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ease-out transform-gpu ${
              isVisible['gallery'] !== undefined
                ? (isVisible['gallery']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            {facilityImages.map((item, index) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-700 flex flex-col h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-muted h-64 group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-4">
                    <p className="text-white dark:text-foreground text-sm line-clamp-2">{item.title}</p>
                  </div>
                </div>
                <CardContent className="pt-4 flex-1 flex flex-col transition-all duration-700">
                  <p className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{item.title}</p>
                  <p className="text-sm text-muted-foreground mb-3 flex-1 group-hover:text-foreground transition-colors">{item.description}</p>
                  <p className="text-xs text-accent font-semibold">
                    🏢 Fasilitas Sekolah
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