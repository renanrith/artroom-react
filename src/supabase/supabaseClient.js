import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ggfpnkrbiemoiphmgdjn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZnBua3JiaWVtb2lwaG1nZGpuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2NjM0OTA5OSwiZXhwIjoxOTgxOTI1MDk5fQ.1iGINGBLaFSn2SVF_g1D2DPlYZAfMmTHisryqZcjDa8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)