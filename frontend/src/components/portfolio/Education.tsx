import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="Academics" title="Education" />
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong animated-border rounded-3xl p-7"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--gradient-aurora)" }}>
                  <GraduationCap className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-xs tracking-wider text-primary uppercase">{e.period}</div>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{e.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
