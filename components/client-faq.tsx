'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Kapan pendaftaran dibuka?",
      answer: "Pendaftaran dibuka mulai tanggal 1 November 2025 pukul 08:00 WIB."
    },
    {
      question: "Berapa biaya pendaftaran?",
      answer: "Biaya pendaftaran sebesar Rp 100.000 yang dapat dibayarkan melalui transfer ke rekening sekolah."
    },
    {
      question: "Berapa lama proses verifikasi dokumen?",
      answer: "Proses verifikasi dokumen membutuhkan waktu maksimal 2-3 hari kerja sejak dokumen diterima."
    },
    {
      question: "Apakah ada kuota penerimaan?",
      answer: "Ya, kami memiliki kuota terbatas sebanyak 30 siswa untuk Kelompok A dan 50 siswa untuk Kelompok B."
    },
    {
      question: "Bagaimana jika dokumen saya ditolak?",
      answer: "Anda dapat mengunggah kembali dokumen yang telah diperbaiki melalui halaman akun pendaftar."
    },
    {
      question: "Kapan pengumuman hasil seleksi?",
      answer: "Pengumuman hasil seleksi akan diumumkan pada tanggal 20 Maret 2025 melalui akun pendaftar."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <Card 
          key={index} 
          className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-700"
        >
          <summary 
            className="cursor-pointer bg-muted/50 hover:bg-muted px-6 py-4 font-bold text-primary flex justify-between items-center transition-colors duration-700"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className={`text-accent text-xl transition-transform duration-700 ${openIndex === index ? 'rotate-45' : ''}`}>+</span>
          </summary>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white border-t border-primary/20 text-muted-foreground font-medium leading-relaxed transition-opacity duration-700">
              {faq.answer}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}