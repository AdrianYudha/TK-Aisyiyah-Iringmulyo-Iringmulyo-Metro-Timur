"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

export default function CaraPendaftaran() {
  const { isVisible, registerElement } = useScrollAnimation();
  const langkahPendaftaranRef = useRef<HTMLDivElement>(null);
  const catatanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (langkahPendaftaranRef.current) {
      registerElement("langkah-pendaftaran", langkahPendaftaranRef.current);
    }
    if (catatanRef.current) {
      registerElement("catatan", catatanRef.current);
    }
  }, [registerElement]);

  const steps = [
    {
      step: 1,
      title: "Mendapatkan Formulir Pendaftaran",
      description:
        "Wali murid memiliki 2 pilihan untuk mendapatkan formulir: (1) Unduh dan Cetak: Klik Unduh Formulir di bawah dan otomatis ke unduh di perangkat, (2) Ambil Langsung: Datang ke Tata Usaha (TU) Sekolah pada jam kerja untuk meminta formulir.",
      icon: "📝",
    },
    {
      step: 2,
      title: "Mengisi Formulir dan Melengkapi Dokumen",
      description:
        "Wali murid mengisi seluruh formulir dengan data yang benar dan lengkap. Selanjutnya, siapkan dan lengkapi semua dokumen persyaratan yang diminta oleh sekolah (fotokopi KK, Akta Lahir, dll.).",
      icon: "📋",
    },
    {
      step: 3,
      title: "Menyerahkan Berkas Lengkap",
      description:
        "Wali murid datang ke sekolah untuk menyerahkan berkas lengkap (Formulir yang sudah diisi dan semua dokumen pendukung). Berkas akan diperiksa kelengkapannya oleh panitia.",
      icon: "📁",
    },
    {
      step: 4,
      title: "Proses Seleksi",
      description:
        "Sekolah akan memproses dan menyeleksi semua berkas pendaftar sesuai dengan kriteria dan kuota yang ditetapkan.",
      icon: "✅",
    },
    {
      step: 5,
      title: "Pengumuman Hasil",
      description:
        "Hasil seleksi akan diumumkan pada tanggal yang ditetapkan melalui WhatsApp.",
      icon: "📢",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Cara Pendaftaran</h1>
          <p className="text-primary-foreground/80 mt-2">
            Langkah-langkah pendaftaran peserta didik baru
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div
            ref={langkahPendaftaranRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible["langkah-pendaftaran"] !== undefined
                ? isVisible["langkah-pendaftaran"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                : "opacity-100 translate-y-0" // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Langkah-Langkah Pendaftaran
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Ikuti langkah-langkah berikut untuk menyelesaikan proses
              pendaftaran anak Anda.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((item) => (
                <Card
                  key={item.step}
                  className="overflow-hidden hover:shadow-xl transition-all duration-700 transform hover:-translate-y-1 border-2 border-primary/10"
                >
                  <CardHeader className="bg-primary/5">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div className="text-3xl">{item.icon}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-primary mb-3">
                      {item.title}
                    </CardTitle>
                    <p className="text-muted-foreground">{item.description}</p>
                    {item.step === 1 && (
                      <div className="mt-4">
                        <a
                          href="/formulir-pendaftaran.pdf"
                          download
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white dark:text-foreground bg-primary hover:bg-primary/90 focus:outline-none"
                        >
                          Unduh Formulir
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>



          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">
              Catatan Penting
            </h2>
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Jam Kerja TU
                      </h3>
                      <p className="text-muted-foreground">
                        Pengambilan formulir secara langsung hanya dapat
                        dilakukan pada jam kerja sekolah. Silakan hubungi pihak
                        sekolah untuk informasi jam kerja TU.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Kuota Terbatas
                      </h3>
                      <p className="text-muted-foreground">
                        Pendaftaran akan ditutup secara otomatis ketika kuota
                        terpenuhi, meskipun jadwal pendaftaran masih
                        berlangsung.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      !
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">
                        Pengumuman Hasil
                      </h3>
                      <p className="text-muted-foreground">
                        Hasil seleksi akan diumumkan melalui WhatsApp resmi
                        sekolah. Pastikan nomor WhatsApp Anda aktif dan
                        terdaftar dengan benar.
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
  );
}
