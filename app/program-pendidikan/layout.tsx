import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Program Pendidikan | PPDB TK Aisyiyah Iringmulyo",
  description: "Kurikulum dan program pendidikan di TK Aisyiyah Iringmulyo",
};

export default function ProgramPendidikanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}