import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function InformasiPage() {
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
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Syarat Usia Calon Peserta Didik</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-l-4 border-l-primary">
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
              <Card className="border-l-4 border-l-accent">
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
          <div className="mb-12">
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
          <div className="mb-12">
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
          <div className="mb-12">
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
          <div>
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
      </section>

      <Footer />
    </div>
  )
}
