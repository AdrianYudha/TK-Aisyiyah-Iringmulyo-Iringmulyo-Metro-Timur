-- Create users table for admin and registrants
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password_hash VARCHAR(255) NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'registrant', -- 'admin' or 'registrant'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create registrations table for applicants
CREATE TABLE IF NOT EXISTS registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  child_name VARCHAR(255) NOT NULL,
  child_birth_date DATE NOT NULL,
  child_gender VARCHAR(10),
  group_level VARCHAR(10) NOT NULL, -- 'A' or 'B'
  parent_name VARCHAR(255) NOT NULL,
  parent_phone VARCHAR(20) NOT NULL,
  parent_email VARCHAR(255),
  parent_address TEXT,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'verified', 'rejected', 'accepted'
  verification_notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create documents table for uploaded files
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE,
  document_type VARCHAR(100) NOT NULL, -- 'birth_certificate', 'family_card', 'photo', 'parent_id'
  file_url VARCHAR(500),
  file_name VARCHAR(255),
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create settings table for admin configuration
CREATE TABLE IF NOT EXISTS settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key VARCHAR(100) UNIQUE NOT NULL,
  setting_value TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create gallery table for photos and videos
CREATE TABLE IF NOT EXISTS gallery (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  category VARCHAR(100), -- 'activity', 'achievement', 'facility'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default settings
INSERT INTO settings (setting_key, setting_value) VALUES
  ('registration_open', 'true'),
  ('registration_start_date', '2025-01-01'),
  ('registration_end_date', '2025-02-28'),
  ('verification_deadline', '2025-03-15'),
  ('announcement_date', '2025-03-20'),
  ('group_a_quota', '30'),
  ('group_b_quota', '50'),
  ('school_name', 'TK AISYIYAH IRINGMULYO'),
  ('school_address', 'Jl. Abri No. 26, Iringmulyo, Metro Timur, Metro, Lampung'),
  ('school_phone', '0721-123456'),
  ('school_email', 'info@tkaisyiyah.ac.id');

-- Create indexes for better performance
CREATE INDEX idx_registrations_user_id ON registrations(user_id);
CREATE INDEX idx_registrations_status ON registrations(status);
CREATE INDEX idx_documents_registration_id ON documents(registration_id);
CREATE INDEX idx_gallery_category ON gallery(category);
