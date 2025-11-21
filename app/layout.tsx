import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from '@/components/theme-provider'
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const _geist = Geist({
  subsets: ["latin"],
  display: "swap" // Add swap for better font loading
})
const _geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap" // Add swap for better font loading
})

export const metadata: Metadata = {
  title: {
    default: "PPDB TK Aisyiyah Iringmulyo - Penerimaan Peserta Didik Baru",
    template: "%s | PPDB TK Aisyiyah Iringmulyo"
  },
  description: "Portal Penerimaan Peserta Didik Baru TK Aisyiyah Iringmulyo, sekolah taman kanak-kanak dengan pendidikan berbasis nilai-nilai Islam dan pendekatan bermain.",
  keywords: ["TK Aisyiyah", "Pendaftaran", "Taman Kanak-Kanak", "Pendidikan Anak Usia Dini", "Metro", "Lampung"],
  authors: [{ name: "TK Aisyiyah Iringmulyo" }],
  creator: "v0.app",
  publisher: "TK Aisyiyah Iringmulyo",
  metadataBase: new URL('https://tkaisyiyahiringmulyo.com'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tkaisyiyahiringmulyo.com",
    title: "PPDB TK Aisyiyah Iringmulyo",
    description: "Portal Penerimaan Peserta Didik Baru TK Aisyiyah Iringmulyo",
    images: [
      {
        url: "/tk-aisyiyah-hero.jpg",
        width: 1200,
        height: 630,
        alt: "TK Aisyiyah Iringmulyo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPDB TK Aisyiyah Iringmulyo",
    description: "Portal Penerimaan Peserta Didik Baru TK Aisyiyah Iringmulyo",
    images: ["/tk-aisyiyah-hero.jpg"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${_geist.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
