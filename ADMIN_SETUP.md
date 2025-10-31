# Setup Admin User

Untuk membuat admin user, ikuti langkah-langkah berikut:

## 1. Buat Admin User di Supabase Auth

1. Buka **Supabase Dashboard** → Pilih project Anda
2. Pergi ke **Authentication** → **Users**
3. Klik tombol **"Add user"** atau **"Invite"**
4. Isi form dengan:
   - **Email**: `admin@tkaisyiyah.ac.id`
   - **Password**: `admin123` (atau password yang Anda inginkan)
   - Centang **"Auto send invite email"** jika ingin
5. Klik **"Create user"**

## 2. Jalankan SQL Script

Setelah membuat user di Supabase Auth, jalankan script SQL di `scripts/03-create-admin-user.sql` untuk membuat record di tabel `users` dengan role `admin`.

Atau jalankan query berikut di Supabase SQL Editor:

\`\`\`sql
INSERT INTO users (id, email, phone, full_name, role, created_at)
VALUES (
  'GANTI_DENGAN_USER_ID_DARI_AUTH',
  'admin@tkaisyiyah.ac.id',
  '081234567890',
  'Administrator TK Aisyiyah',
  'admin',
  NOW()
)
ON CONFLICT (id) DO NOTHING;
\`\`\`

Ganti `GANTI_DENGAN_USER_ID_DARI_AUTH` dengan user ID yang Anda dapatkan dari Supabase Auth.

## 3. Login Admin

Setelah setup selesai, Anda bisa login di `/admin/login` dengan:
- **Email**: `admin@tkaisyiyah.ac.id`
- **Password**: `admin123` (atau password yang Anda set)

## Troubleshooting

Jika masih tidak bisa login:
1. Pastikan email sudah dikonfirmasi di Supabase Auth
2. Pastikan user record sudah ada di tabel `users` dengan role `admin`
3. Cek console browser untuk error message yang lebih detail
