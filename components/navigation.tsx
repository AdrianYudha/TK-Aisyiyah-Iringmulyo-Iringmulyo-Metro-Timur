"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-bold text-2xl">TK Aisyiyah</span>
              <span className="text-xs font-medium opacity-90">Iringmulyo Metro Timur</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="font-semibold hover:opacity-80 transition">
              Beranda
            </Link>
            <Link href="/profil" className="font-semibold hover:opacity-80 transition">
              Profil
            </Link>
            <Link href="/program-pendidikan" className="font-semibold hover:opacity-80 transition">
              Program Pendidikan
            </Link>
            <Link href="/cara-pendaftaran" className="font-semibold hover:opacity-80 transition">
              Cara Pendaftaran
            </Link>
            <Link href="/informasi" className="font-semibold hover:opacity-80 transition">
              Informasi
            </Link>
            <Link href="/galeri" className="font-semibold hover:opacity-80 transition">
              Galeri
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 font-semibold hover:opacity-80">
              Beranda
            </Link>
            <Link href="/profil" className="block py-2 font-semibold hover:opacity-80">
              Profil
            </Link>
            <Link href="/program-pendidikan" className="block py-2 font-semibold hover:opacity-80">
              Program Pendidikan
            </Link>
            <Link href="/cara-pendaftaran" className="block py-2 font-semibold hover:opacity-80">
              Cara Pendaftaran
            </Link>
            <Link href="/informasi" className="block py-2 font-semibold hover:opacity-80">
              Informasi
            </Link>
            <Link href="/galeri" className="block py-2 font-semibold hover:opacity-80">
              Galeri
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
