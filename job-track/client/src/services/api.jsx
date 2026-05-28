import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export const getJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*");
  if (error) console.error(error);
  return data || [];
};

export const addJob = async (job) => {
  const { data, error } = await supabase.from("jobs").insert([job]).select();
  if (error) console.error(error);
  return data?.[0];
};

export const deleteJob = async (id) => {
  const { error } = await supabase.from("jobs").delete().eq("id", id);
  if (error) console.error(error);
};

export const updateJob = async (id, changes) => {
  const { error } = await supabase.from("jobs").update(changes).eq("id", id);
  if (error) console.error(error);
};