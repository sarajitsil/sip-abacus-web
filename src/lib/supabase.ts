// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual keys from Supabase Dashboard -> Project Settings -> API
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);