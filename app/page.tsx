import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AnimatedNumber from "@/components/animated-number"
import ContactForm from "@/components/contact-form"
import ClientTestimonialCarousel from "@/components/client-testimonial-carousel";
import ClientFAQ from "@/components/client-faq";

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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M21.5 12.5c0 1.8-1 3.5-2.5 4.9l-1.9 1.5c-1.2.9-2.7 1.5-4.2 1.8l-2.9.6c-1.2.2-2.4-.1-3.3-.9l-3.7-2.9c-1.6-1.3-2.5-3.2-2.6-5.2l-.1-4.2c0-1.4.4-2.8 1.2-4l1.5-1.9c1.4-1.5 3.1-2.5 4.9-2.5h2.9c1.2 0 2.4.3 3.4.9l3.3 2.5c.9.7 1.5 1.6 1.8 2.7l.6 2.9c.3 1.5-.1 3-1 4.2z" />
          <path d="M17.5 8.5a6 6 0 1 1-12 0 6 6 0 1 1 12 0z" />
          <circle cx="17.5" cy="8.5" r="1" />
        </svg>
      ),
      link: "https://wa.me/628219876543",
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5z" />
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
      ),
      link: "https://instagram.com/tkaisyiyah",
    },
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      link: "https://facebook.com/tkaisyiyah",
    },
    {
      name: "YouTube",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
      link: "https://youtube.com/tkaisyiyah",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden animate-fade-in">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(/tk-aisyiyah-hero.jpg)",
            opacity: 0.7,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight animate-slide-up">TK Aisyiyah Iringmulyo</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-95 font-bold animate-slide-up delay-100">
            Pendaftaran Peserta Didik Baru Tahun Ajaran 2025/2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-200">
            <a
              href="https://forms.gle/emTPDPfVH7vFb6rN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-8 py-3 rounded-md text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                Daftar Sekarang
              </button>
            </a>
            <Link href="#info">
              <button className="border-2 border-white text-white bg-green-500/20 hover:bg-green-500/30 active:bg-green-500/40 font-bold px-8 py-3 rounded-md text-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Pelajari Lebih Lanjut
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2 transition-transform duration-300 hover:scale-110">
                  <AnimatedNumber value={parseInt(stat.value)} className="text-5xl md:text-6xl font-bold text-primary" />
                </div>
                <p className="text-lg font-semibold text-foreground transition-colors duration-300 hover:text-primary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info Cards */}
      <section className="py-16 md:py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Informasi Penting</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div 
              className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: '200ms' }}
            >
              <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-300">Pendaftaran Dibuka</h3>
              <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-300 hover:scale-110">1 November 2025</p>
              <p className="text-muted-foreground font-medium transition-colors duration-300">Pukul 08:00 WIB</p>
            </div>
            <div 
              className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-300">Batas Pendaftaran</h3>
              <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-300 hover:scale-110">28 Februari 2025</p>
              <p className="text-muted-foreground font-medium transition-colors duration-300">Jangan sampai terlewatkan!</p>
            </div>
            <div 
              className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              style={{ animationDelay: '400ms' }}
            >
              <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-300">Pengumuman Hasil</h3>
              <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-300 hover:scale-110">20 Maret 2025</p>
              <p className="text-muted-foreground font-medium transition-colors duration-300">Harapkan kabar gembira!</p>
            </div>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section id="info" className="py-16 md:py-20 bg-muted/50 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6 text-primary">Tentang TK Kami</h2>
              <div className="space-y-6">
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-bold text-primary mb-2">Visi</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium transition-colors duration-300">
                    Terbentuknya Tunas Insan Pembelajar Yang Bertaqwa, Berakhlaq Mulia, Mandiri, Cakap Kreatif, dan
                    Peduli
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-2">
                  <h3 className="text-xl font-bold text-primary mb-3">Keunggulan Kami</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium transition-colors duration-300">
                        Kurikulum berbasis nilai-nilai Islam dan pembelajaran bermain
                      </span>
                    </li>
                    <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium transition-colors duration-300">Guru bersertifikat dan berpengalaman</span>
                    </li>
                    <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium transition-colors duration-300">Fasilitas lengkap dan aman</span>
                    </li>
                    <li className="flex items-start gap-3 transition-transform duration-300 hover:translate-x-1">
                      <span className="text-accent font-bold text-lg flex-shrink-0">✓</span>
                      <span className="text-muted-foreground font-medium transition-colors duration-300">
                        Program ekstrakurikuler beragam (Drumband, Tari, TPQ, Mewarnai)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-2 border-primary/30 rounded-lg p-6 bg-card animate-slide-up delay-100 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-primary text-2xl font-bold mb-6">Hubungi Kami</h3>
              <div className="space-y-6">
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <p className="font-bold text-foreground mb-1">Alamat</p>
                  <p className="text-muted-foreground font-medium">
                    Jl. Abri No. 26, Iringmulyo, Metro Timur, Metro, Lampung 34111
                  </p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <p className="font-bold text-foreground mb-1">Telepon</p>
                  <p className="text-muted-foreground font-medium">(0721) 123-456</p>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <p className="font-bold text-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/628219876543" className="text-accent font-bold hover:underline transition-colors duration-300">
                    0821-9876-5432
                  </a>
                </div>
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <p className="font-bold text-foreground mb-1">Email</p>
                  <a href="mailto:info@tkaisyiyah.ac.id" className="text-accent font-bold hover:underline transition-colors duration-300">
                    info@tkaisyiyah.ac.id
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-accent/5 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Apa Kata Orang Tua</h2>
          <div className="relative animate-slide-up delay-100">
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
            <ClientTestimonialCarousel />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Pertanyaan Umum (FAQ)</h2>

          <div className="space-y-12 animate-slide-up delay-100">
            {faqs.map((section, sectionIndex) => (
              <div 
                key={section.category} 
                className="transition-all duration-300"
                style={{ animationDelay: `${sectionIndex * 100}ms` }}
              >
                <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent transition-colors duration-300">
                  {section.category}
                </h3>
                <div className="space-y-4">
                  {section.questions.map((faq, idx) => (
                    <details
                      key={idx}
                      className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                      <summary className="cursor-pointer bg-muted/50 hover:bg-muted px-6 py-4 font-bold text-primary flex justify-between items-center transition-colors duration-300">
                        <span>{faq.q}</span>
                        <span className="text-accent text-xl transition-transform duration-300">+</span>
                      </summary>
                      <div className="px-6 py-4 bg-white border-t border-primary/20 text-muted-foreground font-medium leading-relaxed transition-opacity duration-300">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/10 rounded-lg border-2 border-primary/30 animate-slide-up delay-200 transition-all duration-300 hover:shadow-lg">
            <p className="text-center text-muted-foreground font-medium">
              Pertanyaan lain tidak tercantum? Silakan hubungi kami melalui WhatsApp{" "}
              <a href="https://wa.me/628219876543" className="text-accent font-bold hover:underline transition-colors duration-300">
                0821-9876-5432
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/50 animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Lokasi Sekolah</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center animate-slide-up delay-100">
            <div className="transition-transform duration-300 hover:translate-x-2">
              <p className="font-bold text-foreground mb-4 text-lg">Alamat Lengkap</p>
              <p className="text-muted-foreground font-medium mb-6 text-lg transition-colors duration-300">
                Jl. Abri No. 26, Iringmulyo, Metro Timur, Kota Metro, Lampung 34111
              </p>
              <div className="space-y-4">
                <div className="transition-transform duration-300 hover:translate-x-1">
                  <p className="font-bold text-foreground mb-2">Jam Operasional</p>
                  <p className="text-muted-foreground font-medium">Senin - Jumat: 07:00 - 14:00 WIB</p>
                </div>
              </div>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden border-2 border-primary/30 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
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

      <section className="py-16 md:py-20 bg-white animate-fade-in">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Ikuti Kami</h2>
          <div className="flex justify-center gap-6 flex-wrap animate-slide-up delay-100">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-primary group-hover:text-accent transition-colors duration-300 transform group-hover:scale-110">{media.icon}</div>
                <p className="font-bold text-primary text-sm group-hover:text-accent transition-colors duration-300">
                  {media.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-slide-up">Hubungi Kami</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up delay-100">
              <h3 className="text-2xl font-bold mb-6 text-primary">Punya Pertanyaan?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tim kami siap membantu Anda dengan segala pertanyaan mengenai pendaftaran, program pendidikan, atau informasi lainnya tentang TK Aisyiyah Iringmulyo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Telepon</h4>
                    <p className="text-muted-foreground">(0721) 123-456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@tkaisyiyah.ac.id</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">WhatsApp</h4>
                    <a href="https://wa.me/628219876543" className="text-accent font-bold hover:underline transition-colors duration-300">
                      0821-9876-543
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-up delay-200">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
