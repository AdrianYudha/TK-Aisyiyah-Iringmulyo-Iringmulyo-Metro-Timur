import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Pendaftaran | PPDB TK Aisyiyah Iringmulyo",
  description: "Langkah-langkah pendaftaran peserta didik baru di TK Aisyiyah Iringmulyo",
};

export default function CaraPendaftaranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}