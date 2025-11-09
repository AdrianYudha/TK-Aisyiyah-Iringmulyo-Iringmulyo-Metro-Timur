'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GoogleFormPrintableProps {
  formUrl: string;
  formTitle?: string;
  printableTitle?: string;
  showPrintButton?: boolean;
  printButtonText?: string;
}

// Fungsi bantuan untuk ekstraksi ID form
const extractFormId = (url: string) => {
  try {
    // Pattern untuk Google Form lama: /forms/d/.../
    const pattern1 = /forms\.google\.com\/.*\/d\/([a-zA-Z0-9-_]+)/;
    // Pattern untuk Google Form baru: /forms/d/e/.../
    const pattern2 = /forms\.google.com\/.*\/d\/e\/([a-zA-Z0-9-_]+)/;
    
    const match1 = url.match(pattern1);
    const match2 = url.match(pattern2);
    
    return match1 ? match1[1] : match2 ? match2[1] : null;
  } catch (e) {
    console.error('Invalid Google Form URL:', e);
    return null;
  }
};

const GoogleFormPrintable: React.FC<GoogleFormPrintableProps> = ({
  formUrl,
  formTitle = 'Formulir Pendaftaran',
  printableTitle = 'Cetak Formulir Pendaftaran',
  showPrintButton = true,
  printButtonText = 'Cetak Formulir'
}) => {
  const componentRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePrint = () => {
    // Karena tidak bisa langsung mencetak konten iframe dari domain berbeda,
    // kita buka form di tab baru dan panggil fungsi cetak di sana
    const newWindow = window.open(formUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) {
      // Tunggu sebentar agar konten dimuat, lalu cetak
      setTimeout(() => {
        newWindow.focus();
        newWindow.print();
      }, 1000);
    } else {
      alert('Mohon izinkan popup untuk membuka formulir di jendela baru.');
      window.open(formUrl, '_blank');
    }
  };

  const formId = extractFormId(formUrl);
  const embedUrl = formId ? `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true` : formUrl;

  return (
    <div ref={componentRef} className="w-full">
      <Card className="p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{formTitle}</h2>
          {showPrintButton && (
            <Button onClick={handlePrint} variant="outline">
              {printButtonText}
            </Button>
          )}
        </div>
      </Card>
      <Card className="overflow-hidden">
        <iframe
          ref={iframeRef}
          src={embedUrl}
          width="100%"
          height="800px"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title={formTitle}
          className="w-full"
        />
      </Card>
    </div>
  );
};

export default GoogleFormPrintable;