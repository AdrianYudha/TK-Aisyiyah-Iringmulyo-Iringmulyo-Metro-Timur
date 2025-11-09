'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useRef } from "react";

export default function InformasiPage() {
  const { isVisible, registerElement } = useScrollAnimation();
  const syaratUsiaRef = useRef<HTMLDivElement>(null);
  const dokumenPersyaratanRef = useRef<HTMLDivElement>(null);
  const rincianBiayaRef = useRef<HTMLDivElement>(null);
  const jadwalPentingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const kebijakanPrivasiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (syaratUsiaRef.current) {
      registerElement('syarat-usia', syaratUsiaRef.current);
    }
    if (dokumenPersyaratanRef.current) {
      registerElement('dokumen-persyaratan', dokumenPersyaratanRef.current);
    }
    if (rincianBiayaRef.current) {
      registerElement('rincian-biaya', rincianBiayaRef.current);
    }
    if (jadwalPentingRef.current) {
      registerElement('jadwal-penting', jadwalPentingRef.current);
    }
    if (faqRef.current) {
      registerElement('faq', faqRef.current);
    }
    if (kebijakanPrivasiRef.current) {
      registerElement('kebijakan-privasi', kebijakanPrivasiRef.current);
    }
  }, [registerElement]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Informasi & Persyaratan</h1>
          <p className="text-primary-foreground/80 mt-2">Panduan lengkap untuk calon pendaftar</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          {/* Syarat Usia */}
          <div
            ref={syaratUsiaRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible['syarat-usia'] !== undefined
                ? (isVisible['syarat-usia']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Syarat Usia Calon Peserta Didik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Kelompok Bermain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-accent mb-2">Usia Minimal: 3 Tahun</p>
                  <p className="text-muted-foreground mb-4">
                    Dihitung per 1 Juli tahun berjalan sesuai dengan Permendikbud.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contoh: Anak yang lahir pada 1 Juli 2021 - 30 Juni 2022 dapat mendaftar di Kelompok Bermain.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-primary">Kelompok A</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-accent mb-2">Usia Minimal: 4 Tahun</p>
                  <p className="text-muted-foreground mb-4">
                    Dihitung per 1 Juli tahun berjalan sesuai dengan Permendikbud.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contoh: Anak yang lahir pada 1 Juli 2020 - 30 Juni 2021 dapat mendaftar di Kelompok A.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Kelompok B</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-bold text-accent mb-2">Usia Minimal: 5 Tahun</p>
                  <p className="text-muted-foreground mb-4">
                    Dihitung per 1 Juli tahun berjalan sesuai dengan Permendikbud.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contoh: Anak yang lahir pada 1 Juli 2019 - 30 Juni 2020 dapat mendaftar di Kelompok B.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Dokumen Persyaratan */}
          <div
            ref={dokumenPersyaratanRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible['dokumen-persyaratan'] !== undefined
                ? (isVisible['dokumen-persyaratan']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Dokumen Persyaratan</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Dokumen yang Harus Disiapkan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Akta Kelahiran</p>
                      <p className="text-sm text-muted-foreground">
                        Scan/foto akta kelahiran anak dalam format PDF atau JPG (ukuran maksimal 5MB)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Kartu Keluarga (KK)</p>
                      <p className="text-sm text-muted-foreground">
                        Scan/foto kartu keluarga dalam format PDF atau JPG (ukuran maksimal 5MB)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Pas Foto 3x4</p>
                      <p className="text-sm text-muted-foreground">
                        Foto digital anak ukuran 3x4 cm dalam format JPG (ukuran maksimal 2MB)
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">KTP Orang Tua/Wali</p>
                      <p className="text-sm text-muted-foreground">
                        Scan/foto KTP orang tua atau wali dalam format PDF atau JPG (ukuran maksimal 5MB)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rincian Biaya */}
          <div
            ref={rincianBiayaRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible['rincian-biaya'] !== undefined
                ? (isVisible['rincian-biaya']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Rincian Biaya</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">Biaya Pendaftaran</span>
                    <span className="text-lg font-bold text-accent">Rp 100.000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">Uang Pangkal</span>
                    <span className="text-lg font-bold text-accent">Rp 2.000.000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="font-semibold text-foreground">SPP Bulanan</span>
                    <span className="text-lg font-bold text-accent">Rp 500.000</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="font-semibold text-foreground">Biaya Seragam & Perlengkapan</span>
                    <span className="text-lg font-bold text-accent">Rp 1.500.000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Catatan: Biaya dapat berubah sesuai kebijakan sekolah. Hubungi sekolah untuk informasi terbaru.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Jadwal Penting */}
          <div
            ref={jadwalPentingRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible['jadwal-penting'] !== undefined
                ? (isVisible['jadwal-penting']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Jadwal Penting</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Pendaftaran Dibuka</p>
                    <p className="text-accent font-bold">1 Januari 2025</p>
                    <p className="text-sm text-muted-foreground">Mulai pukul 08:00 WIB</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Batas Akhir Pendaftaran</p>
                    <p className="text-accent font-bold">28 Februari 2025</p>
                    <p className="text-sm text-muted-foreground">Pukul 17:00 WIB</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Batas Verifikasi Dokumen</p>
                    <p className="text-accent font-bold">15 Maret 2025</p>
                    <p className="text-sm text-muted-foreground">Panitia menyelesaikan verifikasi</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Pengumuman Hasil</p>
                    <p className="text-accent font-bold">20 Maret 2025</p>
                    <p className="text-sm text-muted-foreground">Cek status di akun Anda</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">Daftar Ulang</p>
                    <p className="text-accent font-bold">1 - 10 April 2025</p>
                    <p className="text-sm text-muted-foreground">Bagi yang diterima</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ */}
          <div
            ref={faqRef}
            className={`animate-fade-in transition-all duration-700 ease-out transform-gpu ${
              isVisible['faq'] !== undefined
                ? (isVisible['faq']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Pertanyaan Umum</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Bagaimana cara mendaftar?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Klik tombol "Daftar Sekarang" di halaman utama, isi formulir pendaftaran dengan data yang benar,
                    upload dokumen yang diperlukan, dan submit formulir.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Apakah ada biaya pendaftaran?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ya, biaya pendaftaran adalah Rp 100.000. Biaya ini tidak dapat dikembalikan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Berapa lama proses verifikasi?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Proses verifikasi biasanya memakan waktu 2-3 minggu. Anda akan menerima notifikasi melalui email
                    atau WhatsApp.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">Bagaimana jika dokumen saya ditolak?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jika ada dokumen yang kurang jelas atau tidak sesuai, panitia akan menghubungi Anda untuk
                    memperbaiki. Anda dapat mengunggah ulang dokumen melalui akun Anda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>


        </div>
      </section>

      {/* Keamanan dan Privasi */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div
            ref={kebijakanPrivasiRef}
            className={`mb-12 transition-all duration-700 ease-out transform-gpu ${
              isVisible['kebijakan-privasi'] !== undefined
                ? (isVisible['kebijakan-privasi']
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10')
                : 'opacity-100 translate-y-0' // Default to visible if not yet observed
            }`}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-primary">Kebijakan Privasi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-primary">Perlindungan Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Kami menjamin kerahasiaan dan keamanan semua data pribadi yang Anda berikan selama proses pendaftaran.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Data hanya digunakan untuk proses penerimaan peserta didik baru</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Data tidak akan dibagikan kepada pihak ketiga</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Data disimpan dengan protokol keamanan tinggi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <CardTitle className="text-primary">Proses Penghapusan Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Data yang tidak diperlukan lagi akan dihapus secara aman setelah masa PPDB berakhir sesuai dengan ketentuan hukum yang berlaku.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Informasi Lebih Lanjut</h2>
            <p className="text-muted-foreground mt-4">Hubungi kami untuk informasi lebih lanjut tentang pendaftaran dan sekolah</p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-lg border-2 border-primary/20 p-6 shadow-sm">
            <div className="space-y-4">
              <p className="text-lg font-bold text-center text-primary mb-6">Kontak Person</p>
              <div className="space-y-3">
                <p className="text-muted-foreground"><a href="https://wa.me/6287872582297" className="hover:underline">📞 0878-7258-2297 (Bunda Tri)</a></p>
                <p className="text-muted-foreground"><a href="https://wa.me/6281541500923" className="hover:underline">📞 0815-4150-0923 (Bunda Risma)</a></p>
                <p className="text-muted-foreground"><a href="https://wa.me/6285763680886" className="hover:underline">📞 0857-6368-0886 (Bunda Siti)</a></p>
                <p className="text-muted-foreground"><a href="https://wa.me/6285839850938" className="hover:underline">📞 0858-3985-0938 (Bunda Lita)</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
