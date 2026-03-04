-- Create contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (contact form doesn't require auth)
CREATE POLICY "Anyone can insert contacts"
  ON public.contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only service role can read contacts
CREATE POLICY "Service role can read contacts"
  ON public.contacts
  FOR SELECT
  TO service_role
  USING (true);