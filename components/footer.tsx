export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TK Aisyiyah Iringmulyo</h3>
            <p className="text-primary-foreground/80">
              Lembaga pendidikan anak usia dini yang berkomitmen pada pengembangan karakter dan akademik anak.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="/" className="hover:text-primary-foreground">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/profil" className="hover:text-primary-foreground">
                  Profil
                </a>
              </li>
              <li>
                <a href="/informasi" className="hover:text-primary-foreground">
                  Informasi
                </a>
              </li>
              <li>
                <a href="/galeri" className="hover:text-primary-foreground">
                  Galeri
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Telepon: 0721-123456</li>
              <li>WhatsApp: 0821-9876-5432</li>
              <li>Email: info@tkaisyiyah.ac.id</li>
              <li>Jl. Abri No. 26, Metro, Lampung</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 TK Aisyiyah Iringmulyo. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
