-- Create leads table for storing all incoming inquiries
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  job_title TEXT,
  service_of_interest TEXT,
  message TEXT,
  source_page TEXT NOT NULL,
  submission_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting leads (public can submit forms)
CREATE POLICY "Anyone can submit a lead" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading leads (requires auth for admin access in future)
CREATE POLICY "Authenticated users can view leads" 
ON public.leads 
FOR SELECT 
USING (auth.role() = 'authenticated');

-- Create indexes for common queries
CREATE INDEX idx_leads_service ON public.leads (service_of_interest);
CREATE INDEX idx_leads_company ON public.leads (company);
CREATE INDEX idx_leads_status ON public.leads (status);
CREATE INDEX idx_leads_submission_date ON public.leads (submission_date DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_leads_updated_at();