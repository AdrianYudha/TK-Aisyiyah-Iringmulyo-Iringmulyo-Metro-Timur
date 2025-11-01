import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Cara Pendaftaran | PPDB TK Aisyiyah Iringmulyo",
  description: "Langkah-langkah pendaftaran peserta didik baru di TK Aisyiyah Iringmulyo",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function CaraPendaftaranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}