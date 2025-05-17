import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ukecwqevytycjsrsgmnp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZWN3cWV2eXR5Y2pzcnNnbW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4NTQ3NjYsImV4cCI6MjA2MjQzMDc2Nn0.SdUMRuY-nyoD2hxpnnLWUz4wK4AB5iyDGA-ryP8awM0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
