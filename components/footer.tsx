export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">TK Aisyiyah Iringmulyo</h3>
            <p className="text-primary-foreground/80 mb-2">
              Lembaga pendidikan anak usia dini yang berkomitmen pada pengembangan karakter dan akademik anak.
            </p>
            <p className="text-primary-foreground/80">Jl. Abri No. 26, Metro, Lampung</p>
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
              <li><a href="https://wa.me/6287872582297" className="hover:underline">📞 0878-7258-2297 (Bunda Tri)</a></li>
              <li><a href="https://wa.me/6281541500923" className="hover:underline">📞 0815-4150-0923 (Bunda Risma)</a></li>
              <li><a href="https://wa.me/6285763680886" className="hover:underline">📞 0857-6368-0886 (Bunda Siti)</a></li>
              <li><a href="https://wa.me/6285839850938" className="hover:underline">📞 0858-3985-0938 (Bunda Lita)</a></li>
              <li>Email: info@tkaisyiyah.ac.id</li>
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
