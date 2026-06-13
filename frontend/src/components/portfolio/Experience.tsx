import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Journey" title="Experience & Internships" />
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px md:left-1/2" style={{ background: "var(--gradient-aurora)", opacity: 0.4 }} />
          <div className="space-y-12">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`relative grid gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass-strong animated-border rounded-2xl p-6">
                    <div className="text-xs tracking-wider text-primary uppercase">{e.period}</div>
                    <h3 className="mt-1 font-display text-xl font-semibold">{e.role}</h3>
                    <div className="text-sm text-muted-foreground">{e.company}</div>
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {e.points.map((p) => (
                        <li key={p} className={`flex gap-2 ${i % 2 ? "" : "md:flex-row-reverse"}`}>
                          <span className="text-accent">◆</span>
                          <span className="text-left">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-4 flex flex-wrap gap-1.5 ${i % 2 ? "" : "md:justify-end"}`}>
                      {e.tech.map((t) => (
                        <span key={t} className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-4 top-6 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full md:left-1/2"
                  style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
                >
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
