import { createClient } from '@supabase/supabase-js'

    const supabaseUrl = 'https://ggfpnkrbiemoiphmgdjn.supabase.co'
    const supabaseKey = 'process.env.REACT_APP_SUPABASE_KEY'
 export const supabase = createClient(supabaseUrl, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdnZnBua3JiaWVtb2lwaG1nZGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzNDkwOTksImV4cCI6MTk4MTkyNTA5OX0.glNn5AW3KVSHxI8MXUpgGKBt_B45j22QnjllpC7_7nU")