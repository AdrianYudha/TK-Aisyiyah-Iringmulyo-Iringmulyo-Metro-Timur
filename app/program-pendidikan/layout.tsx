import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Program Pendidikan | PPDB TK Aisyiyah Iringmulyo",
  description: "Kurikulum dan program pendidikan di TK Aisyiyah Iringmulyo",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ProgramPendidikanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}