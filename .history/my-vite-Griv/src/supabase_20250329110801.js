import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://sttpmwjxcnlfphnplylt.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
