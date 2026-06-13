import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trash2, LogOut, Mail, BarChart3, Users, Eye, Loader2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  ssr: false,
  head: () => ({ meta: [{ title: "Admin Dashboard" }, { name: "robots", content: "noindex,nofollow" }] }),
});

type Message = { id: string; name: string; email: string; message: string; is_read: boolean; created_at: string };
type PageView = { id: string; visitor_id: string; path: string; created_at: string };
type ProjectView = { project_slug: string };

function AdminPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [pageViews, setPageViews] = useState<PageView[]>([]);
  const [projectViews, setProjectViews] = useState<ProjectView[]>([]);
  const [tab, setTab] = useState<"messages" | "analytics">("messages");

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate({ to: "/auth" });
        return;
      }
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
      const admin = !!roles?.some((r) => r.role === "admin");
      setIsAdmin(admin);
      setReady(true);
      if (admin) await loadAll();
    })();
  }, [navigate]);

  const loadAll = async () => {
    const [m, pv, prv] = await Promise.all([
      supabase.from("contact_messages").select("*").order("created_at", { ascending: false }),
      supabase.from("page_views").select("id, visitor_id, path, created_at").order("created_at", { ascending: false }).limit(1000),
      supabase.from("project_views").select("project_slug"),
    ]);
    setMessages((m.data as Message[]) ?? []);
    setPageViews((pv.data as PageView[]) ?? []);
    setProjectViews((prv.data as ProjectView[]) ?? []);
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await supabase.from("contact_messages").delete().eq("id", id);
    setMessages((m) => m.filter((x) => x.id !== id));
  };

  const markRead = async (id: string, is_read: boolean) => {
    await supabase.from("contact_messages").update({ is_read }).eq("id", id);
    setMessages((m) => m.map((x) => (x.id === id ? { ...x, is_read } : x)));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  };

  const stats = useMemo(() => {
    const total = pageViews.length;
    const unique = new Set(pageViews.map((v) => v.visitor_id)).size;
    const counts = new Map<string, number>();
    projectViews.forEach((v) => counts.set(v.project_slug, (counts.get(v.project_slug) ?? 0) + 1));
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
    return { total, unique, top };
  }, [pageViews, projectViews]);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4">
        <h1 className="text-xl font-semibold">Access denied</h1>
        <p className="text-sm text-muted-foreground">Your account is not an admin.</p>
        <button onClick={signOut} className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            <p className="text-xs text-muted-foreground">Portfolio backend</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setTab("messages")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors ${tab === "messages" ? "bg-primary text-primary-foreground" : "glass"}`}
            >
              <Mail className="h-3.5 w-3.5" /> Messages ({messages.length})
            </button>
            <button
              onClick={() => setTab("analytics")}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-colors ${tab === "analytics" ? "bg-primary text-primary-foreground" : "glass"}`}
            >
              <BarChart3 className="h-3.5 w-3.5" /> Analytics
            </button>
            <button onClick={signOut} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs">
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {tab === "messages" && (
          <div className="space-y-3">
            {messages.length === 0 ? (
              <p className="text-sm text-muted-foreground">No messages yet.</p>
            ) : (
              messages.map((m) => (
                <div key={m.id} className="glass-strong rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{m.name}</h3>
                        {!m.is_read && <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-medium text-primary-foreground">NEW</span>}
                      </div>
                      <a href={`mailto:${m.email}`} className="text-xs text-primary hover:underline">{m.email}</a>
                      <p className="mt-2 whitespace-pre-wrap text-sm text-foreground/90">{m.message}</p>
                      <p className="mt-2 text-[11px] text-muted-foreground">{new Date(m.created_at).toLocaleString()}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => markRead(m.id, !m.is_read)}
                        className="glass rounded-full px-3 py-1 text-[11px]"
                      >
                        {m.is_read ? "Mark unread" : "Mark read"}
                      </button>
                      <button
                        onClick={() => deleteMessage(m.id)}
                        className="flex items-center justify-center gap-1 rounded-full bg-destructive/10 px-3 py-1 text-[11px] text-destructive hover:bg-destructive/20"
                      >
                        <Trash2 className="h-3 w-3" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {tab === "analytics" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard icon={Eye} label="Total Visitors (page views)" value={stats.total} />
              <StatCard icon={Users} label="Unique Visitors" value={stats.unique} />
            </div>
            <div className="glass-strong rounded-2xl p-6">
              <h3 className="mb-4 font-semibold">Most Viewed Projects</h3>
              {stats.top.length === 0 ? (
                <p className="text-sm text-muted-foreground">No project views yet.</p>
              ) : (
                <ul className="space-y-2">
                  {stats.top.map(([slug, count]) => (
                    <li key={slug} className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-2 text-sm">
                      <span className="truncate">{slug}</span>
                      <span className="font-mono text-primary">{count}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Eye; label: string; value: number }) {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}
