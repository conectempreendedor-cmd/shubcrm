import { createClient } from "@supabase/supabase-js";

// Cliente Supabase conectado ao projeto SHUB CRM
// Referência: karrmlkthmgyljfvxajm.supabase.co
export const supabaseUrl = "https://karrmlkthmgyljfvxajm.supabase.co";
export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthcnJtbGt0aG1neWxqZnZ4YWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMDAwMDAsImV4cCI6MjA0NTU3NjAwMH0.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
