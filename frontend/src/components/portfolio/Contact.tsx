import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { profile } from "@/data/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", subject: "", email: "", message: "" });

  const handleFieldChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (sent) setSent(false); // Reset success message when user types
    if (errorMessage) setErrorMessage(null); // Clear error message
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    if (!form.name.trim() || !form.subject.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMessage("Please fill all fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch((import.meta.env.VITE_CONTACT_API_URL as string) || "http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim().slice(0, 255),
          subject: form.subject.trim().slice(0, 255),
          email: form.email.trim().slice(0, 255),
          message: form.message.trim().slice(0, 1000),
        }),
      });

      if (res.status === 201) {
        setSent(true);
        setForm({ name: "", subject: "", email: "", message: "" });
      } else if (res.status === 400) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || "Validation error");
      } else {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(body.error || `Server error (${res.status})`);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Get in Touch" title="Let's build something" subtitle="Open to internships, full-time, and meaningful freelance work." />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="glass-strong animated-border rounded-2xl p-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" /> {profile.email}
              </div>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" /> India · Open to remote
              </div>
            </div>
            <div className="glass-strong animated-border rounded-2xl p-6">
              <div className="text-xs tracking-wider text-muted-foreground uppercase">Find me on</div>
              <div className="mt-4 flex gap-3">
                {[
                  { Icon: Github, href: profile.socials.github, label: "GitHub" },
                  { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn" },
                  { Icon: Twitter, href: profile.socials.twitter, label: "Twitter" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110 hover:text-primary hover:glow"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div className="glass relative h-44 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
                >
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </motion.div>
              </div>
              <div className="absolute right-4 bottom-4 text-xs text-muted-foreground">Available worldwide · Remote-first</div>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong animated-border space-y-4 rounded-3xl p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Your Name" value={form.name} onChange={(v) => handleFieldChange("name", v)} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => handleFieldChange("email", v)} />
            </div>
            <div>
              <Field label="Subject" value={form.subject} onChange={(v) => handleFieldChange("subject", v)} />
            </div>
            <div>
              <label className="text-xs tracking-wider text-muted-foreground uppercase">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
                rows={5}
                maxLength={1000}
                className="mt-1 w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Tell me about the role, project, or idea…"
              />
              {errorMessage && <p className="mt-2 text-xs text-destructive">{errorMessage}</p>}
            </div>
            <button
              type="submit"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
              style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent — thank you!
                </>
              ) : submitting ? (
                <>Sending…</>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
              <span className="pointer-events-none absolute inset-0 animate-shimmer" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs tracking-wider text-muted-foreground uppercase">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="mt-1 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        placeholder={label}
      />
    </div>
  );
}
