'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';

interface FormData {
  [key: string]: string;
}

interface PrintFormDataProps {
  data: FormData;
  title?: string;
}

const PrintFormData: React.FC<PrintFormDataProps> = ({ data, title = "Data Pendaftaran" }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Membuat jendela baru untuk mencetak
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Periksa pengaturan popup blocker Anda');
      return;
    }

    // Membuat konten cetak
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              margin: 20px; 
              font-size: 14px;
            }
            .print-header {
              text-align: center;
              margin-bottom: 20px;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
            }
            .print-header h1 {
              margin: 0 0 5px 0;
              font-size: 18px;
              color: #333;
            }
            .print-header p {
              margin: 0;
              font-size: 12px;
              color: #666;
            }
            .form-data {
              border: 1px solid #ccc;
              padding: 15px;
              margin-bottom: 20px;
              border-radius: 4px;
            }
            .form-field {
              margin-bottom: 10px;
              display: flex;
              min-height: 24px;
              padding: 5px 0;
              border-bottom: 1px solid #eee;
            }
            .field-label {
              font-weight: bold;
              display: inline-block;
              width: 200px;
              min-width: 200px;
              color: #444;
            }
            .field-value {
              display: inline-block;
              flex: 1;
              word-break: break-word;
              color: #333;
            }
            .print-footer {
              margin-top: 20px;
              text-align: center;
              font-style: italic;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ccc;
              padding-top: 10px;
            }
            @media print {
              body { margin: 10px; }
            }
          </style>
        </head>
        <body>
          <div class="print-header">
            <h1>${title}</h1>
            <p>Tanggal Cetak: ${new Date().toLocaleDateString('id-ID', { 
              day: '2-digit', 
              month: 'long', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          <div class="form-data">
            ${Object.entries(data)
              .filter(([key]) => key !== 'id') // Jangan tampilkan ID di cetakan
              .map(([key, value]) => `
                <div class="form-field">
                  <div class="field-label">
                    ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                  </div>
                  <div class="field-value">${value || '-'}</div>
                </div>
              `)
              .join('')}
          </div>
          <div class="print-footer">
            <p>Dicetak dari Sistem Administrasi TK Aisyiyah Iringmulyo</p>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Tunggu sebentar agar konten dimuat sebelum mencetak
    printWindow.onload = () => {
      printWindow.print();
      // Tidak menutup jendela agar pengguna bisa melihat hasilnya jika perlu
    };
  };

  return (
    <div>
      <Button onClick={handlePrint} className="bg-green-600 hover:bg-green-700">
        🖨️ Cetak Data
      </Button>
    </div>
  );
};

export default PrintFormData;