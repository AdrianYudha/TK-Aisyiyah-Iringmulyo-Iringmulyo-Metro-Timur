import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import AnimatedNumber from "@/components/animated-number";
import ContactForm from "@/components/contact-form";
import ClientTestimonialCarousel from "@/components/client-testimonial-carousel";
import ClientFAQ from "@/components/client-faq";
import ScrollAnimatedSection from "@/components/scroll-animated-section";

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
  ];

  const stats = [
    { label: "Murid Kelompok A", value: "71" },
    { label: "Murid Kelompok B", value: "86" },
    { label: "Total Guru", value: "17" },
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      link: "https://facebook.com/tkaisyiyah",
    },
    {
      name: "YouTube",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
      link: "https://youtube.com/tkaisyiyah",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <ScrollAnimatedSection animationType="fade-in">
        <section className="relative py-32 md:py-48 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/tk-aisyiyah-hero.jpg"
              alt="TK Aisyiyah Iringmulyo"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 z-0"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              TK Aisyiyah Iringmulyo
            </h1>
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
                <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold px-8 py-3 rounded-md text-lg transition-all duration-700 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                  Daftar Sekarang
                </button>
              </a>
              <Link href="#info">
                <button className="border-2 border-white text-white bg-green-500/20 hover:bg-green-500/30 active:bg-green-500/40 font-bold px-8 py-3 rounded-md text-lg transition-all duration-700 transform hover:scale-105 active:scale-95">
                  Pelajari Lebih Lanjut
                </button>
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationType="fade-in">
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <ScrollAnimatedSection
                  key={index}
                  animationType="slide-up"
                  delay={index * 100}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2 transition-transform duration-700 hover:scale-110">
                    <AnimatedNumber
                      value={parseInt(stat.value)}
                      className="text-5xl md:text-6xl font-bold text-primary"
                    />
                  </div>
                  <p className="text-lg font-semibold text-foreground transition-colors duration-700 hover:text-primary">
                    {stat.label}
                  </p>
                </ScrollAnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Important Info Cards */}
      <ScrollAnimatedSection animationType="fade-in">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
              Informasi Penting
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ScrollAnimatedSection
                animationType="slide-up"
                delay={200}
                className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-700">
                  Pendaftaran Dibuka
                </h3>
                <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-700 hover:scale-110">
                  1 November 2025
                </p>
                <p className="text-muted-foreground font-medium transition-colors duration-700">
                  Pukul 08:00 WIB
                </p>
              </ScrollAnimatedSection>
              <ScrollAnimatedSection
                animationType="slide-up"
                delay={300}
                className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-700">
                  Batas Pendaftaran
                </h3>
                <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-700 hover:scale-110">
                  28 Februari 2025
                </p>
                <p className="text-muted-foreground font-medium transition-colors duration-700">
                  Jangan sampai terlewatkan!
                </p>
              </ScrollAnimatedSection>
              <ScrollAnimatedSection
                animationType="slide-up"
                delay={400}
                className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-700 rounded-lg p-6 bg-card transform hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-primary text-xl font-bold mb-4 transition-colors duration-700">
                  Pengumuman Hasil
                </h3>
                <p className="text-3xl font-bold text-accent mb-2 transition-transform duration-700 hover:scale-110">
                  20 Maret 2025
                </p>
                <p className="text-muted-foreground font-medium transition-colors duration-700">
                  Harapkan kabar gembira!
                </p>
              </ScrollAnimatedSection>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* bagian ektrakurikuler disini */}

      {/* About School Section */}
      <ScrollAnimatedSection animationType="fade-in">
        <section id="info" className="py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimatedSection
                animationType="slide-up"
                className="animate-slide-up"
              >
                <h2 className="text-4xl font-bold mb-6 text-primary">
                  Tentang TK Kami
                </h2>
                <div className="space-y-6">
                  <div className="transition-transform duration-700 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Visi
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-medium transition-colors duration-700">
                      Terbentuknya Tunas Insan Pembelajar Yang Bertaqwa,
                      Berakhlaq Mulia, Mandiri, Cakap Kreatif, dan Peduli
                    </p>
                  </div>
                  <div className="transition-transform duration-700 hover:translate-x-2">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Keunggulan Kami
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 transition-transform duration-700 hover:translate-x-1">
                        <span className="text-accent font-bold text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground font-medium transition-colors duration-700">
                          Kurikulum berbasis nilai-nilai Islam dan pembelajaran
                          bermain
                        </span>
                      </li>
                      <li className="flex items-start gap-3 transition-transform duration-700 hover:translate-x-1">
                        <span className="text-accent font-bold text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground font-medium transition-colors duration-700">
                          Guru bersertifikat dan berpengalaman
                        </span>
                      </li>
                      <li className="flex items-start gap-3 transition-transform duration-700 hover:translate-x-1">
                        <span className="text-accent font-bold text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground font-medium transition-colors duration-700">
                          Fasilitas lengkap dan aman
                        </span>
                      </li>
                      <li className="flex items-start gap-3 transition-transform duration-700 hover:translate-x-1">
                        <span className="text-accent font-bold text-lg flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-muted-foreground font-medium transition-colors duration-700">
                          Program ekstrakurikuler beragam (Drumband, Tari, TPQ,
                          Mewarnai)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimatedSection>
              <ScrollAnimatedSection
                animationType="slide-up"
                delay={100}
                className="border-2 border-primary/30 rounded-lg p-6 bg-card transition-all duration-700 hover:shadow-xl"
              >
                <h3 className="text-primary text-center text-2xl font-bold mb-6">
                  Hubungi Kami
                </h3>
                <div className="space-y-6">
                  <div className="transition-transform duration-700 hover:translate-x-1">
                    <p className="font-bold text-foreground mb-1">WhatsApp</p>
                    <p className="text-red-500 font-medium mb-2">
                      Silahkan klik salah satu nomor WhatsApp di bawah, Nanti
                      Akan di Arahkan Langsung Ke WhatsApp
                    </p>
                    <div className="text-muted-foreground font-medium space-y-1">
                      <p>
                        <a
                          href="https://wa.me/6287872582297"
                          className="hover:underline"
                        >
                          📞 0878-7258-2297 (Bunda Tri)
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://wa.me/6281541500923"
                          className="hover:underline"
                        >
                          📞 0815-4150-0923 (Bunda Risma)
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://wa.me/6285763680886"
                          className="hover:underline"
                        >
                          📞 0857-6368-0886 (Bunda Siti)
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://wa.me/6285839850938"
                          className="hover:underline"
                        >
                          📞 0858-3985-0938 (Bunda Lita)
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="transition-transform duration-700 hover:translate-x-1">
                    <p className="font-bold text-foreground mb-1">Email</p>
                    <a
                      href="mailto:info@tkaisyiyah.ac.id"
                      className="text-accent font-bold hover:underline transition-colors duration-700"
                    >
                      info@tkaisyiyah.ac.id
                    </a>
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* Testimonials Section */}
      <ScrollAnimatedSection animationType="fade-in">
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">
              Apa Kata Orang Tua
            </h2>
            <ScrollAnimatedSection
              animationType="slide-up"
              delay={100}
              className="relative"
            >
              <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
              <ClientTestimonialCarousel />
            </ScrollAnimatedSection>
          </div>
        </section>
      </ScrollAnimatedSection>

      {/* FAQ Section */}
      <ScrollAnimatedSection animationType="fade-in">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">
              Pertanyaan Umum
            </h2>

            <ScrollAnimatedSection
              animationType="slide-up"
              delay={100}
              className="space-y-12"
            >
              {faqs.map((section, sectionIndex) => (
                <ScrollAnimatedSection
                  key={section.category}
                  animationType="slide-up"
                  delay={sectionIndex * 100}
                  className="transition-all duration-700"
                >
                  <h3 className="text-2xl font-bold text-primary mb-6 pb-3 border-b-2 border-accent transition-colors duration-700">
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.questions.map((faq, idx) => (
                      <details
                        key={idx}
                        className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-700"
                      >
                        <summary className="cursor-pointer bg-muted/50 hover:bg-muted px-6 py-4 font-bold text-primary flex justify-between items-center transition-colors duration-700">
                          <span>{faq.q}</span>
                          <span className="text-accent text-xl transition-transform duration-700">
                            +
                          </span>
                        </summary>
                        <div className="px-6 py-4 bg-white border-t border-primary/20 text-muted-foreground font-medium leading-relaxed transition-opacity duration-700">
                          {faq.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </ScrollAnimatedSection>
              ))}
            </ScrollAnimatedSection>
          </div>
        </section>

        <ScrollAnimatedSection animationType="fade-in">
          <section className="py-16 md:py-20 bg-muted/50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center text-primary">
                Lokasi Sekolah
              </h2>
              <ScrollAnimatedSection
                animationType="slide-up"
                delay={100}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="transition-transform duration-700 hover:translate-x-2">
                  <p className="font-bold text-foreground mb-4 text-lg">
                    Alamat Lengkap
                  </p>
                  <p className="text-muted-foreground font-medium mb-6 text-lg transition-colors duration-700">
                    Jl. Abri No. 26, Iringmulyo, Metro Timur, Kota Metro,
                    Lampung 34111
                  </p>
                  <div className="space-y-4">
                    <div className="transition-transform duration-700 hover:translate-x-1">
                      <p className="font-bold text-foreground mb-2">
                        Jam Operasional
                      </p>
                      <p className="text-muted-foreground font-medium">
                        Senin - Jumat: 07:00 - 14:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.google.com/maps/place/TK+Paud+Aisyiyah+Iringmulyo/@-5.121757,105.3228868,17z/data=!3m1!4b1!4m6!3m5!1s0x2e40bc1d4fe923c9:0x3fa275bb9f435ff5!8m2!3d-5.121757!4d105.3254627!16s%2Fg%2F11c6kz2yjf?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-96 rounded-lg overflow-hidden border-2 border-primary/30 block transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] relative group"
                >
                  <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-lg flex items-center justify-center text-gray-500">
                    <div className="text-center p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto mb-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="font-bold">Lokasi Sekolah</p>
                      <p className="text-sm">Klik untuk membuka peta</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="bg-white rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollAnimatedSection>
            </div>
          </section>
        </ScrollAnimatedSection>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection animationType="fade-in">
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary">
              Ikuti Kami
            </h2>
            <ScrollAnimatedSection
              animationType="slide-up"
              delay={100}
              className="flex justify-center gap-6 flex-wrap"
            >
              {socialMedia.map((media, index) => (
                <ScrollAnimatedSection
                  key={index}
                  animationType="slide-up"
                  delay={index * 100}
                  className="flex flex-col items-center gap-2 p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-700 transform hover:-translate-y-1 hover:scale-105 group"
                >
                  <div className="text-primary group-hover:text-accent transition-colors duration-700 transform group-hover:scale-110">
                    {media.icon}
                  </div>
                  <p className="font-bold text-primary text-sm group-hover:text-accent transition-colors duration-700">
                    {media.name}
                  </p>
                </ScrollAnimatedSection>
              ))}
            </ScrollAnimatedSection>
          </div>
        </section>
      </ScrollAnimatedSection>

      <Footer />
    </div>
  );
}
