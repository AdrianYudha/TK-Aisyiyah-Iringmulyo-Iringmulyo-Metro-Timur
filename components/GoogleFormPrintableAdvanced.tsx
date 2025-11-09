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

const GoogleFormPrintableAdvanced: React.FC<GoogleFormPrintableProps> = ({
  formUrl,
  formTitle = 'Formulir Pendaftaran',
  printableTitle = 'Cetak Formulir Pendaftaran',
  showPrintButton = true,
  printButtonText = 'Cetak Formulir'
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const printableRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Cara 1: Membuka iframe dalam jendela baru untuk dicetak
    const iframe = iframeRef.current;
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      if (iframeDoc) {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } else {
        // Jika tidak bisa akses konten iframe, buka di jendela baru
        window.open(formUrl, '_blank');
      }
    }
  };

  // Extract the form ID from the Google Form URL
  const extractFormId = (url: string) => {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/');
      const formIndex = pathParts.indexOf('forms');
      if (formIndex !== -1 && pathParts[formIndex + 1] === 'd') {
        return pathParts[formIndex + 2];
      }
      // Alternative extraction for newer Google Forms URLs
      const match = url.match(/forms\.google\.com\/.*\/d\/([a-zA-Z0-9-_]+)/);
      return match ? match[1] : null;
    } catch (e) {
      console.error('Invalid Google Form URL:', e);
      return null;
    }
  };

  const formId = extractFormId(formUrl);
  const embedUrl = formId ? `https://docs.google.com/forms/d/e/${formId}/viewform?embedded=true` : formUrl;

  return (
    <div ref={printableRef} className="w-full">
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

export default GoogleFormPrintableAdvanced;