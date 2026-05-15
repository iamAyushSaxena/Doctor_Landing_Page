/*
  # Create registrations table for webinar signups

  1. New Tables
    - `registrations`
      - `id` (uuid, primary key) - Unique identifier for each registration
      - `name` (text) - Registrant's full name
      - `email` (text, unique) - Registrant's email address
      - `phone` (text) - Registrant's phone number
      - `specialization` (text) - Doctor's medical specialization
      - `created_at` (timestamptz) - Registration timestamp

  2. Security
    - Enable RLS on `registrations` table
    - Add policy for public inserts (anyone can register)
    - Add policy for authenticated users to read their own registrations

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for sorting

  4. Notes
    - Email is unique to prevent duplicate registrations
    - Phone and specialization are required fields
    - RLS allows public registration but protects data privacy
*/

-- Create registrations table
CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  specialization text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (register)
CREATE POLICY "Anyone can register"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read only their own registrations
CREATE POLICY "Users can read own registrations"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (auth.uid()::text = email);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_registrations_email ON registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations(created_at DESC);