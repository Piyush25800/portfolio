import { supabase } from "@/integrations/supabase/client";

const KEY = "pf_visitor_id";

export function getVisitorId(): string {
  if (typeof window === "undefined") return "ssr";
  let id = localStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(KEY, id);
  }
  return id;
}

export async function trackPageView(path: string) {
  if (typeof window === "undefined") return;
  try {
    await supabase.from("page_views").insert({
      visitor_id: getVisitorId(),
      path,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    });
  } catch (e) {
    console.warn("trackPageView failed", e);
  }
}

export async function trackProjectView(slug: string) {
  if (typeof window === "undefined") return;
  try {
    await supabase.from("project_views").insert({
      visitor_id: getVisitorId(),
      project_slug: slug,
    });
  } catch (e) {
    console.warn("trackProjectView failed", e);
  }
}
