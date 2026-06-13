import { motion } from "framer-motion";
import {
  Sigma,
  Filter,
  Brush,
  TrendingUp,
  Layers,
  Settings2,
  LineChart,
  BarChart3,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { skillCategories } from "@/data/portfolio";
import { brandIcons } from "./SkillIcons";

type Skill = {
  name: string;
  level: number;
  icon?: string;
  lucide?: string;
};

const lucideMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sigma: Sigma,
  filter: Filter,
  brush: Brush,
  "trending-up": TrendingUp,
  layers: Layers,
  "settings-2": Settings2,
  "line-chart": LineChart,
  "bar-chart-3": BarChart3,
};

function SkillLogo({ skill }: { skill: Skill }) {
  if (skill.icon && brandIcons[skill.icon]) {
    const BrandIcon = brandIcons[skill.icon];
    return (
      <BrandIcon className="h-3.5 w-3.5 opacity-90 transition-opacity group-hover/chip:opacity-100" />
    );
  }
  if (skill.icon) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${skill.icon}`}
        alt=""
        aria-hidden
        loading="lazy"
        className="h-3.5 w-3.5 object-contain opacity-90 transition-opacity group-hover/chip:opacity-100"
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
      />
    );
  }
  if (skill.lucide && lucideMap[skill.lucide]) {
    const IconComp = lucideMap[skill.lucide];
    return (
      <IconComp className="h-3.5 w-3.5 opacity-90 transition-opacity group-hover/chip:opacity-100" />
    );
  }
  return null;
}


export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Skills & Tooling"
          subtitle="The toolkit I reach for, daily."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
            >
              {/* Aurora glow on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: "var(--gradient-aurora)" }}
              />

              {/* Corner index */}
              <div className="mb-6 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="h-8 w-1 rounded-full"
                    style={{ background: "var(--gradient-aurora)" }}
                  />
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-muted-foreground">
                  / {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Skills as compact chips */}
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s, j) => (
                  <motion.li
                    key={s.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: i * 0.06 + j * 0.03 }}
                    className="group/chip relative inline-flex cursor-default items-center gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] px-2.5 py-1.5 text-xs font-medium text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07] hover:text-foreground"
                  >
                    <SkillLogo skill={s} />
                    <span>{s.name}</span>
                  </motion.li>
                ))}
              </ul>

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
