import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

// Lokasi file untuk menyimpan data registrasi
const DATA_FILE = join(process.cwd(), 'data', 'registrations.json');

// Data awal jika file tidak ada
const initialData = [
  {
    id: "1",
    user_id: "user_1",
    child_name: "Anak Test",
    child_birth_date: "2020-01-01",
    child_gender: "Laki-laki",
    group_level: "A",
    parent_name: "Orang Tua Test",
    parent_phone: "081234567890",
    parent_email: "parent@example.com",
    parent_address: "Alamat Test",
    status: "pending",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "2",
    user_id: "user_2",
    child_name: "Anak Test 2",
    child_birth_date: "2019-05-15",
    child_gender: "Perempuan",
    group_level: "B",
    parent_name: "Orang Tua Test 2",
    parent_phone: "089876543210",
    parent_email: "parent2@example.com",
    parent_address: "Alamat Test 2",
    status: "verified",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "3",
    user_id: "user_3",
    child_name: "Anak Test 3",
    child_birth_date: "2020-03-20",
    child_gender: "Laki-laki",
    group_level: "A",
    parent_name: "Orang Tua Test 3",
    parent_phone: "081234567891",
    parent_email: "parent3@example.com",
    parent_address: "Alamat Test 3",
    status: "accepted",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: "4",
    user_id: "user_4",
    child_name: "Anak Test 4",
    child_birth_date: "2019-11-10",
    child_gender: "Perempuan",
    group_level: "B",
    parent_name: "Orang Tua Test 4",
    parent_phone: "081234567892",
    parent_email: "parent4@example.com",
    parent_address: "Alamat Test 4",
    status: "rejected",
    documents: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];

// Fungsi untuk memastikan direktori data ada
function ensureDataDirectory() {
  const dataDir = join(process.cwd(), 'data');
  // Kita tidak bisa menggunakan fs.mkdir secara langsung di Next.js API routes
  // Jadi kita abaikan pembuatan direktori di sini
}

// Fungsi untuk membaca data dari file
export function readRegistrations() {
  ensureDataDirectory();
  
  if (!existsSync(DATA_FILE)) {
    // Jika file tidak ada, buat dengan data awal
    writeRegistrations(initialData);
    return [...initialData];
  }

  try {
    const fileContent = readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading registrations data:', error);
    return [...initialData];
  }
}

// Fungsi untuk menulis data ke file
export function writeRegistrations(data: any[]) {
  try {
    // Buat direktori jika belum ada
    const fs = require('fs');
    const path = require('path');
    const dataDir = path.join(process.cwd(), 'data');
    
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing registrations data:', error);
  }
}

// Inisialisasi data dari file atau gunakan data awal
export let mockRegistrations = readRegistrations();
export const validStatuses = ['pending', 'verified', 'accepted', 'rejected'] as const;

export type RegistrationStatus = typeof validStatuses[number];