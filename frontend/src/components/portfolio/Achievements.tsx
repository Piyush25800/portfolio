import { motion } from "framer-motion";
import { ScrollText, BookOpen, FileCheck, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { achievements } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  "scroll-text": <ScrollText className="h-5 w-5" />,
  "book-open": <BookOpen className="h-5 w-5" />,
  "file-check": <FileCheck className="h-5 w-5" />,
  star: <Star className="h-5 w-5" />,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Milestones"
          title="Achievements & Highlights"
          subtitle="Concrete proof of passion, persistence, and progress."
        />


        {/* Achievement cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            >
              {/* Aurora glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                style={{ background: "var(--gradient-aurora)" }}
              />

              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-primary">
                  {iconMap[a.icon] ?? <Star className="h-5 w-5" />}
                </div>
                <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                  {a.year}
                </span>
              </div>

              <h3 className="font-display text-base font-semibold tracking-tight">
                {a.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{a.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                {a.description}
              </p>

              {/* Bottom accent line */}
              <div
                aria-hidden
                className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "var(--gradient-aurora)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
