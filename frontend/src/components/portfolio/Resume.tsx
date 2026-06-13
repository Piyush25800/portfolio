import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong animated-border relative overflow-hidden rounded-3xl p-10 md:p-14"
        >
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl" style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}>
              <FileText className="h-9 w-9 text-primary-foreground" />
            </div>
            <div>
              <div className="text-xs tracking-wider text-primary uppercase">My Resume</div>
              <h3 className="mt-1 font-display text-2xl font-bold md:text-3xl">
                Get the <span className="text-gradient">full story</span>, on one page.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A concise one-page resume with everything recruiters need: stack, projects, and impact.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
