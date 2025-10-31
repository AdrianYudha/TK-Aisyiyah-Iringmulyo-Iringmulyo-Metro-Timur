import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          q: "Berapa usia minimum untuk mendaftar?",
          a: "Usia minimum adalah 4 tahun untuk Kelompok A dan 5 tahun untuk Kelompok B, dihitung per 1 Juli tahun berjalan sesuai Permendikbud.",
        },
        {
          q: "Kapan pendaftaran dimulai dan berakhir?",
          a: "Pendaftaran dimulai tanggal 1 Januari 2025 pukul 08:00 WIB dan berakhir 28 Februari 2025. Silakan segera daftar melalui Google Form kami.",
        },
        {
          q: "Apa saja dokumen yang diperlukan?",
          a: "Dokumen yang diperlukan: Akta Kelahiran, Kartu Keluarga (KK), Pas Foto 3x4, KTP Orang Tua. Semua dalam bentuk digital/scan yang jelas.",
        },
        {
          q: "Berapa biaya pendaftaran?",
          a: "Biaya pendaftaran Rp 50.000. Untuk informasi lebih detail tentang uang pangkal dan SPP bulanan, silakan hubungi sekolah melalui WhatsApp atau telepon.",
        },
        {
          q: "Apakah ada proses seleksi?",
          a: "Ya, ada proses verifikasi dokumen dan observasi. Hasil pengumuman akan diumumkan pada 20 Maret 2025 melalui Google Form.",
        },
        {
          q: "Bagaimana dengan transportasi anak ke sekolah?",
          a: "Orang tua dapat membawa anak sendiri atau menggunakan jasa penjemput. Silakan diskusikan dengan sekolah untuk opsi transportasi yang tersedia.",
        },
        {
          q: "Apakah ada program beasiswa?",
          a: "Kami memiliki program bantuan untuk keluarga yang membutuhkan. Silakan hubungi pihak sekolah untuk diskusi lebih lanjut tentang kemungkinan ini.",
        },
      ],
    },
    {
      category: "Anak Berkebutuhan Khusus & Disabilitas",
      questions: [
        {
          q: "Apakah TK Aisyiyah menerima anak berkebutuhan khusus?",
          a: "Ya, kami terbuka untuk menerima anak berkebutuhan khusus. Kami berkomitmen memberikan pendidikan inklusif yang mendukung perkembangan setiap anak.",
        },
        {
          q: "Apa jenis disabilitas yang dapat diterima?",
          a: "Kami dapat menerima anak dengan berbagai kebutuhan khusus termasuk: kesulitan belajar, gangguan pendengaran, gangguan penglihatan, dan keterlambatan perkembangan. Tim kami akan melakukan asesmen khusus.",
        },
        {
          q: "Apakah ada fasilitas khusus untuk anak disabilitas?",
          a: "Kami memiliki fasilitas akses yang ramah untuk semua anak. Untuk kebutuhan khusus yang lebih spesifik, silakan diskusikan dengan tim sekolah saat pendaftaran.",
        },
        {
          q: "Apakah ada guru pendamping khusus?",
          a: "Kami memiliki tim guru yang terlatih. Untuk kasus-kasus tertentu yang memerlukan pendamping khusus, hal ini akan didiskusikan lebih lanjut dengan orang tua.",
        },
        {
          q: "Bagaimana proses komunikasi dengan orang tua mengenai perkembangan anak?",
          a: "Kami melakukan komunikasi rutin dengan orang tua melalui rapor berkala, pertemuan orang tua, dan komunikasi informal. Untuk anak berkebutuhan khusus, kami memberikan laporan perkembangan yang lebih detail.",
        },
        {
          q: "Berapa biaya tambahan untuk layanan khusus anak disabilitas?",
          a: "Biaya dasar sama dengan anak lainnya. Untuk layanan pendamping khusus atau terapi tambahan, akan ada diskusi khusus dengan orang tua mengenai investasi tambahan yang diperlukan.",
        },
      ],
    },
  ]

  const stats = [
    { label: "Murid Kelompok A", value: "71" },
    { label: "Murid Kelompok B", value: "86" },
    { label: "Total Guru", value: "17" },
  ]

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.404 2.124 7.682l-2.261 6.541 6.718-2.221c2.252 1.235 4.763 1.884 7.297 1.884 5.372 0 9.748-4.361 9.77-9.799 0-2.634-.541-5.108-1.56-7.530-1.02-2.42-2.462-4.58-4.239-6.251-1.777-1.672-3.935-2.965-6.348-3.822-2.412-.857-4.989-1.294-7.755-1.294z" />
        </svg>
      ),
      link: "https://wa.me/628219876543",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.162 2.759 6.162 6.162 0 3.403-2.759 6.162-6.162 6.162-3.403 0-6.162-2.759-6.162-6.162zm3.35 0c0 1.557 1.255 2.812 2.812 2.812 1.557 0 2.812-1.255 2.812-2.812 0-1.557-1.255-2.812-2.812-2.812-1.557 0-2.812 1.255-2.812 2.812zm10.273-5.412c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44-.001-.795-.646-1.44-1.44-1.44-.794 0-1.44.645-1.44 1.44z" />
        </svg>
      ),
      link: "https://instagram.com/tkaisyiyah",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: "https://facebook.com/tkaisyiyah",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      link: "https://youtube.com/tkaisyiyah",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/tk-aisyiyah-hero.jpg)",
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">TK Aisyiyah Iringmulyo</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-95 font-bold">
            Pendaftaran Peserta Didik Baru Tahun Ajaran 2025/2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://forms.gle/emTPDPfVH7vFb6rN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-gradient-to-r from-accent to-blue-600 hover:from-accent/90 hover:to-blue-700 text-accent-foreground font-bold px-8 py-3 rounded-md text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Daftar Sekarang
              </button>
            </a>
            <Link href="#info">
              <button className="border-2 border-white text-white hover:bg-white/20 bg-gradient-to-r from-transparent to-white/10 font-bold px-8 py-3 rounded-md text-lg transition-all duration-200">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-lg font-semibold text-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info Cards */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">Informasi Penting</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-primary/20 hover:border-primary/50 transition-colors rounded-lg p-6 bg-card">
              <h3 className="text-primary text-xl font-bold mb-4">Pendaftaran Dibuka</h3>
              <p className="text-3xl font-bold text-accent mb-2">1 November 2025</p>
              <p className="text-muted-foreground font-medium">Pukul 08:00 WIB</p>
            </div>
            <div className="border-2 border-primary/20 hover:border-primary/50 transition-colors rounded-lg p-6 bg-card">
              <h3 className="text-primary text-xl font-bold mb-4">Batas Pendaftaran</h3>
              <p className="text-3xl font-bold text-accent mb-2">28 Februari 2025</p>
              <p className="text-muted-foreground font-medium">Jangan sampai terlewatkan!</p>
            </div>
            <div className="border-2 border-primary/20 hover:border-primary/50 transition-colors rounded-lg p-6 bg-card">
              <h3 className="text-primary text-xl font-bold mb-4">Pengumuman Hasil</h3>
              <p className="text-3xl font-bold text-accent mb-2">20 Maret 2025</p>
              <p className="text-muted-foreground font-medium">Harapkan kabar gembira!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section id="info" className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Tentang TK Kami</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">Visi</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    Terbentuknya Tunas Insan Pembelajar Yang Bertaqwa, Berakhlaq Mulia, Mandiri, Cakap Kreatif, dan
                    Peduli
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Keunggulan Kami</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium">
                        Kurikulum berbasis nilai-nilai Islam dan pembelajaran bermain
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium">Guru bersertifikat dan berpengalaman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium">Fasilitas lengkap dan aman</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium">
                        Program ekstrakurikuler beragam (Drumband, Tari, TPQ, Mewarnai)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-2 border-primary/30 rounded-lg p-6 bg-card">
              <h3 className="text-primary text-2xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-foreground mb-1">Alamat</p>
                  <p className="text-muted-foreground font-medium">
                    Jl. Abri No. 26, Iringmulyo, Metro Timur, Metro, Lampung 34111
                  </p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Telepon</p>
                  <p className="text-muted-foreground font-medium">(0721) 123-456</p>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/628219876543" className="text-accent font-bold hover:underline">
                    0821-9876-5432
                  </a>
                </div>
                <div>
                  <p className="font-bold text-foreground mb-1">Email</p>
                  <a href="mailto:info@tkaisyiyah.ac.id" className="text-accent font-bold hover:underline">
                    info@tkaisyiyah.ac.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Pertanyaan Umum (FAQ)</h2>

          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((faq, idx) => (
                    <details
                      key={idx}
                      className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
                    >
                      <summary className="cursor-pointer bg-muted/50 hover:bg-muted px-6 py-4 font-bold text-primary flex justify-between items-center">
                        <span>{faq.q}</span>
                        <span className="text-accent text-xl">+</span>
                      </summary>
                      <div className="px-6 py-4 bg-white border-t border-primary/20 text-muted-foreground font-medium leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
            <p className="text-center text-muted-foreground font-medium">
              Pertanyaan lain tidak tercantum? Silakan hubungi kami melalui WhatsApp{" "}
              <a href="https://wa.me/628219876543" className="text-accent font-bold hover:underline">
                0821-9876-5432
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Lokasi Sekolah</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-bold text-foreground mb-4 text-lg">Alamat Lengkap</p>
              <p className="text-muted-foreground font-medium mb-6 text-lg">
                Jl. Abri No. 26, Iringmulyo, Metro Timur, Kota Metro, Lampung 34111
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-bold text-foreground mb-2">Jam Operasional</p>
                  <p className="text-muted-foreground font-medium">Senin - Jumat: 07:00 - 14:00 WIB</p>
                  <p className="text-muted-foreground font-medium">Sabtu: 07:00 - 11:00 WIB</p>
                </div>
              </div>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-primary/30 hover-shadow">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7947.775848032404!2d105.32288677577618!3d-5.1217569948553585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40bc1d4fe923c9%3A0x3fa275bb9f435ff5!2sTK%20Paud%20Aisyiyah%20Iringmulyo!5e0!3m2!1sen!2sus!4v1761870531903!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Ikuti Kami</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="text-primary group-hover:text-accent transition-colors duration-200">{media.icon}</div>
                <p className="font-bold text-primary text-sm group-hover:text-accent transition-colors duration-200">
                  {media.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
