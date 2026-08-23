import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

let cachedClient: ReturnType<typeof createClient<any>> | null = null;

export function getSupabaseAdmin() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error(
      "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set. Add them as server-side env vars in Vercel (never prefix them with VITE_)."
    );
  }

  if (!cachedClient) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cachedClient = createClient<any>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false },
    });
  }

  return cachedClient;
}