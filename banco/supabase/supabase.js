import { createClient } from '@supabase/supabase-js'

const supabaseurl = 'https://pewxdpysiilclfiyzfra.supabase.co'
const supabasekey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBld3hkcHlzaWlsY2xmaXl6ZnJhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Mzk0MzMxNCwiZXhwIjoxOTc5NTE5MzE0fQ.uEqkstRgi5bWJhKEN8YTjavVcpxEi6cVfIdotgYdLdI
const supabase = createClient(supabaseUrl, supabaseKey)