-- Create admin user in users table
INSERT INTO users (id, email, phone, full_name, role, created_at)
VALUES (
  'admin-user-id-12345',
  'admin@tkaisyiyah.ac.id',
  '081234567890',
  'Administrator TK Aisyiyah',
  'admin',
  NOW()
)
ON CONFLICT (id) DO NOTHING;
