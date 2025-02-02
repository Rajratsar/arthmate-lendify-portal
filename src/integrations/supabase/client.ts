import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://shtppwisehnsjwcpiwnz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNodHBwd2lzZWhuc2p3Y3Bpd256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNDc2MTAsImV4cCI6MjA1MzYyMzYxMH0.tauBTDmzINYm3HEGIyehcYXL0UDz7bMwWr1ZY8aNO3M";

export const supabase = createClient<Database>(
  SUPABASE_URL, 
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      persistSession: true,
      storageKey: 'arthmate-auth',
      storage: window.localStorage,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  }
);

// Add event listeners for auth state changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event, session);
});