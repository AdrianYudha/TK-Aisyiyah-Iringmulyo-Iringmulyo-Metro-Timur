"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

export default function ProgramPendidikan() {
  const { isVisible, registerElement } = useScrollAnimation();
  const programUnggulanRef = useRef<HTMLDivElement>(null);
  const metodePembelajaranRef = useRef<HTMLDivElement>(null);
  const ekstrakurikulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (programUnggulanRef.current) {
      registerElement("program-unggulan", programUnggulanRef.current);
    }
    if (metodePembelajaranRef.current) {
      registerElement("metode-pembelajaran", metodePembelajaranRef.current);
    }
    if (ekstrakurikulerRef.current) {
      registerElement("ekstrakurikuler", ekstrakurikulerRef.current);
    }
  }, [registerElement]);
  const programs = [
    {
      title: "Pendidikan Agama Islam",
      description:
        "Mengenalkan dasar-dasar agama Islam melalui kegiatan sehari-hari dan pembiasaan ibadah sederhana",
      icon: "🌙",
      color: "primary",
    },
    {
      title: "Bahasa & Literasi",
      description:
        "Membangun dasar kemampuan membaca, menulis, dan berkomunikasi yang efektif",
      icon: "📚",
      color: "accent",
    },
    {
      title: "Seni & Kreativitas",
      description:
        "Mengembangkan ekspresi kreatif melalui seni lukis, tari, dan musik",
      icon: "🎨",
      color: "primary",
    },
    {
      title: "Motorik Halus & Kasar",
      description:
        "Mengembangkan koordinasi gerak melalui permainan dan kegiatan fisik",
      icon: "🏃",
      color: "accent",
    },
    {
      title: "Sosial Emosional",
      description:
        "Membentuk karakter dan kemampuan sosial anak melalui interaksi sehari-hari",
      icon: "🤝",
      color: "primary",
    },
    {
      title: "Pendekatan Individual",
      description:
        "Memberikan pendekatan individual sesuai kebutuhan dan kecepatan belajar setiap anak",
      icon: "👤",
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Program Pendidikan</h1>
          <p className="text-primary-foreground/80 mt-2">
            Kurikulum dan kegiatan pendidikan di TK Aisyiyah
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div
            ref={programUnggulanRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible["program-unggulan"] !== undefined
                ? isVisible["program-unggulan"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                : "opacity-100 translate-y-0" // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Program Unggulan
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Kami menawarkan program unggulan yang dirancang untuk mendukung
              tumbuh kembang anak secara optimal.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  1. Model pembelajaran berkesadaran, bermakna & menggembirakan
                </h3>
                <p className="text-muted-foreground">
                  Pembelajaran yang memberikan pengalaman bermakna bagi anak
                  melalui pendekatan yang menyenangkan dan penuh kesadaran.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  2. Kelas Inspirasi / Kelas Orang Tua
                </h3>
                <p className="text-muted-foreground">
                  Kelas khusus untuk meningkatkan kapasitas orang tua dalam
                  mendukung perkembangan anak melalui pendidikan karakter.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  3. Outing Class
                </h3>
                <p className="text-muted-foreground">
                  Kegiatan pembelajaran di luar kelas untuk memberikan
                  pengalaman langsung kepada anak tentang dunia nyata.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  4. Mengedepankan nilai Islami
                </h3>
                <p className="text-muted-foreground">
                  Pembentuan karakter berdasarkan nilai-nilai Islami yang
                  diintegrasikan dalam setiap kegiatan pembelajaran.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={ekstrakurikulerRef}
            className={`animate-fade-in transition-all duration-700 ease-out transform-gpu ${
              isVisible["ekstrakurikuler"] !== undefined
                ? isVisible["ekstrakurikuler"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                : "opacity-100 translate-y-0" // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Ekstrakurikuler
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  1. Drumband
                </h3>
                <p className="text-muted-foreground">
                  Kegiatan ekstrakurikuler drumband yang mengembangkan bakat
                  musik, kedisiplinan, dan kerja sama tim anak.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  2. Mewarnai
                </h3>
                <p className="text-muted-foreground">
                  Kegiatan kreatif yang meningkatkan konsentrasi, ketelitian,
                  dan daya imajinasi anak melalui seni mewarnai.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  3. Menari
                </h3>
                <p className="text-muted-foreground">
                  Ekstrakurikuler tari yang mengembangkan koordinasi gerak,
                  kepercayaan diri, dan apresiasi seni anak.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
                <h3 className="text-xl font-bold text-primary mb-3">
                  4. Hizbul Wathan
                </h3>
                <p className="text-muted-foreground">
                  Kegiatan keorganisasian keagamaan yang membentuk karakter dan
                  kepribadian anak berdasarkan nilai-nilai keislaman.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 md:col-span-2">
                <h3 className="text-xl font-bold text-primary mb-3">
                  5. TPQ (Taman Pendidikan Al-Qur'an)
                </h3>
                <p className="text-muted-foreground">
                  Program pendidikan Al-Qur'an untuk anak-anak yang bertujuan
                  membentuk budi pekerti luhur dan memperkenalkan nilai-nilai
                  agama Islam.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={metodePembelajaranRef}
            className={`animate-fade-in transition-all duration-700 ease-out transform-gpu mt-11 ${
              isVisible["metode-pembelajaran"] !== undefined
                ? isVisible["metode-pembelajaran"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                : "opacity-100 translate-y-0" // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Metode Pembelajaran
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-700 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src="https://picsum.photos/600/400?random=50"
                    alt="Bermain Sambil Belajar"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">
                    Bermain Sambil Belajar
                  </CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Pembelajaran dilakukan melalui permainan edukatif yang
                    menyenangkan untuk menumbuhkan minat belajar anak.
                  </p>
                </div>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-700 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src="https://picsum.photos/600/400?random=51"
                    alt="Project Based Learning"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">
                    Project Based Learning
                  </CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Anak-anak belajar melalui proyek-proyek sederhana yang
                    melibatkan eksplorasi dan penemuan.
                  </p>
                </div>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-700 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src="https://picsum.photos/600/400?random=52"
                    alt="Pendekatan Individual"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">
                    Pendekatan Individual
                  </CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Setiap anak memiliki kecepatan belajar yang berbeda, kami
                    memberikan pendekatan individual sesuai kebutuhan.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
