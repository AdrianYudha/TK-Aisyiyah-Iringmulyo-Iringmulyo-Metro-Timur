-- Remove password_hash column from users table since Supabase Auth manages passwords
ALTER TABLE users DROP COLUMN IF EXISTS password_hash;

-- Add default values for created_at and updated_at if they don't have them
ALTER TABLE users ALTER COLUMN created_at SET DEFAULT NOW();
ALTER TABLE users ALTER COLUMN updated_at SET DEFAULT NOW();
