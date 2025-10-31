export interface Registration {
  id: string;
  user_id: string;
  child_name: string;
  child_birth_date: string;
  child_gender: 'Laki-laki' | 'Perempuan';
  group_level: 'A' | 'B';
  parent_name: string;
  parent_phone: string;
  parent_email: string;
  parent_address: string;
  status: 'pending' | 'verified' | 'accepted' | 'rejected';
  documents?: any;
  created_at: string;
  updated_at: string;
}

export interface NewRegistration {
  user_id: string;
  child_name: string;
  child_birth_date: string;
  child_gender: 'Laki-laki' | 'Perempuan';
  group_level: 'A' | 'B';
  parent_name: string;
  parent_phone: string;
  parent_email: string;
  parent_address: string;
  documents?: any;
}