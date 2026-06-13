import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass animated-border group flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: "var(--gradient-aurora)" }}>
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
              </div>
              <h3 className="font-display text-base leading-tight font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
              <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 self-start text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                <BadgeCheck className="h-3.5 w-3.5" /> Verify
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
