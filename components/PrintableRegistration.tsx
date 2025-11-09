'use client';

import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface RegistrationData {
  id: string;
  child_name: string;
  child_birth_date: string;
  child_gender: string;
  group_level: string;
  parent_name: string;
  parent_phone: string;
  parent_email: string;
  parent_address: string;
  status: string;
  created_at: string;
  updated_at: string;
  documents?: any;
}

interface PrintableRegistrationProps {
  registration: RegistrationData;
  showPrintButton?: boolean;
  printButtonText?: string;
}

const PrintableRegistration: React.FC<PrintableRegistrationProps> = ({
  registration,
  showPrintButton = true,
  printButtonText = 'Cetak Data Pendaftar'
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Buat jendela baru untuk cetak
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Data Pendaftar - ${registration.child_name}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .header { text-align: center; margin-bottom: 20px; }
              .title { font-size: 18px; font-weight: bold; margin-bottom: 5px; }
              .subtitle { font-size: 14px; color: #666; margin-bottom: 15px; }
              .section { margin-bottom: 20px; }
              .section-title { font-size: 16px; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-bottom: 10px; }
              .info-row { display: flex; margin-bottom: 8px; }
              .label { font-weight: bold; width: 200px; flex-shrink: 0; }
              .value { flex-grow: 1; }
              .status-badge {
                display: inline-block;
                padding: 4px 8px;
                border-radius: 4px;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
              }
              .status-pending { background-color: #fff3cd; color: #856404; }
              .status-verified { background-color: #cce5ff; color: #004085; }
              .status-accepted { background-color: #d4edda; color: #155724; }
              .status-rejected { background-color: #f8d7da; color: #721c24; }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="title">FORMULIR PENDAFTARAN</div>
              <div class="subtitle">TK AISYIYAH IRINGMULYO</div>
            </div>
            
            <div class="section">
              <div class="section-title">DATA ANAK</div>
              <div class="info-row">
                <div class="label">Nama Lengkap Anak:</div>
                <div class="value">${registration.child_name}</div>
              </div>
              <div class="info-row">
                <div class="label">Tanggal Lahir:</div>
                <div class="value">${new Date(registration.child_birth_date).toLocaleDateString('id-ID')}</div>
              </div>
              <div class="info-row">
                <div class="label">Jenis Kelamin:</div>
                <div class="value">${registration.child_gender}</div>
              </div>
              <div class="info-row">
                <div class="label">Kelompok:</div>
                <div class="value">Kelompok ${registration.group_level}</div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">DATA ORANG TUA/WALI</div>
              <div class="info-row">
                <div class="label">Nama Lengkap:</div>
                <div class="value">${registration.parent_name}</div>
              </div>
              <div class="info-row">
                <div class="label">Nomor Telepon:</div>
                <div class="value">${registration.parent_phone}</div>
              </div>
              <div class="info-row">
                <div class="label">Email:</div>
                <div class="value">${registration.parent_email}</div>
              </div>
              <div class="info-row">
                <div class="label">Alamat:</div>
                <div class="value">${registration.parent_address}</div>
              </div>
            </div>
            
            <div class="section">
              <div class="section-title">INFORMASI PENDAFTARAN</div>
              <div class="info-row">
                <div class="label">ID Pendaftaran:</div>
                <div class="value">${registration.id}</div>
              </div>
              <div class="info-row">
                <div class="label">Status:</div>
                <div class="value">
                  <span class="status-badge status-${registration.status.toLowerCase()}">
                    ${registration.status === 'pending' ? 'Menunggu Verifikasi' : 
                      registration.status === 'verified' ? 'Terverifikasi' : 
                      registration.status === 'accepted' ? 'Diterima' : 'Ditolak'}
                  </span>
                </div>
              </div>
              <div class="info-row">
                <div class="label">Tanggal Pendaftaran:</div>
                <div class="value">${new Date(registration.created_at).toLocaleDateString('id-ID')}</div>
              </div>
              <div class="info-row">
                <div class="label">Terakhir Diperbarui:</div>
                <div class="value">${new Date(registration.updated_at).toLocaleDateString('id-ID')}</div>
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
  };

  return (
    <div ref={componentRef} className="w-full">
      <Card className="p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Data Pendaftar: {registration.child_name}</h2>
          {showPrintButton && (
            <Button onClick={handlePrint} variant="outline">
              {printButtonText}
            </Button>
          )}
        </div>
      </Card>
      
      <Card className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Data Anak</h3>
            <div className="space-y-2">
              <div><span className="font-medium">Nama Lengkap:</span> {registration.child_name}</div>
              <div>
                <span className="font-medium">Tanggal Lahir:</span>{' '}
                {new Date(registration.child_birth_date).toLocaleDateString('id-ID')}
              </div>
              <div><span className="font-medium">Jenis Kelamin:</span> {registration.child_gender}</div>
              <div><span className="font-medium">Kelompok:</span> Kelompok {registration.group_level}</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-primary">Data Orang Tua/Wali</h3>
            <div className="space-y-2">
              <div><span className="font-medium">Nama Lengkap:</span> {registration.parent_name}</div>
              <div><span className="font-medium">Nomor Telepon:</span> {registration.parent_phone}</div>
              <div><span className="font-medium">Email:</span> {registration.parent_email}</div>
              <div><span className="font-medium">Alamat:</span> {registration.parent_address}</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <h3 className="text-lg font-semibold mb-3 text-primary">Informasi Pendaftaran</h3>
          <div className="grid md:grid-cols-2 gap-2">
            <div><span className="font-medium">ID Pendaftaran:</span> {registration.id}</div>
            <div>
              <span className="font-medium">Status:</span>{' '}
              <span className={`
                px-2 py-1 rounded-full text-xs font-bold
                ${registration.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                  registration.status === 'verified' ? 'bg-blue-100 text-blue-800' : 
                  registration.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                  'bg-red-100 text-red-800'}
              `}>
                {registration.status === 'pending' ? 'Menunggu Verifikasi' : 
                  registration.status === 'verified' ? 'Terverifikasi' : 
                  registration.status === 'accepted' ? 'Diterima' : 'Ditolak'}
              </span>
            </div>
            <div>
              <span className="font-medium">Tanggal Pendaftaran:</span>{' '}
              {new Date(registration.created_at).toLocaleDateString('id-ID')}
            </div>
            <div>
              <span className="font-medium">Terakhir Diperbarui:</span>{' '}
              {new Date(registration.updated_at).toLocaleDateString('id-ID')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PrintableRegistration;