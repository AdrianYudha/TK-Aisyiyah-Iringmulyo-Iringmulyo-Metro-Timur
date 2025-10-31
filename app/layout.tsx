import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  title: "PPDB TK Aisyiyah Iringmulyo",
  description: "Portal Penerimaan Peserta Didik Baru TK Aisyiyah Iringmulyo",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href={_geist.variable} as="style" />
        <link rel="preload" href={_geistMono.variable} as="style" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
