import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { projects, projectCategories, type Project } from "@/data/portfolio";
import { trackProjectView } from "@/lib/analytics";

function TiltCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="glass-strong animated-border group relative flex flex-col overflow-hidden rounded-3xl"
    >
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        {p.image && (
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            width={1024}
            height={640}
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 flex items-end p-5">
          <span className="glass rounded-full px-3 py-1 text-[11px] tracking-wider uppercase">{p.category}</span>
        </div>
        <motion.div
          className="absolute -inset-1 opacity-0 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at center, oklch(0.85 0.18 195 / 0.25), transparent 60%)" }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
        <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
          {p.features.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-primary">▸</span>
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className="rounded-md border border-border bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end">
          <div className="group/gh relative">
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackProjectView(p.title)}
              aria-label={`${p.title} on GitHub`}
              className="glass flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-110 hover:glow-violet"
            >
              <Github className="h-4 w-4" />
            </a>
            <span className="glass pointer-events-none absolute -top-9 right-0 rounded-md px-2 py-1 text-[11px] whitespace-nowrap opacity-0 transition-opacity group-hover/gh:opacity-100">
              View Repo
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const filtered = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="Featured Work" title="Projects" subtitle="Shipped, measured, and explainable." />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-all ${
                filter === c
                  ? "border-transparent text-primary-foreground glow"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
              style={filter === c ? { background: "var(--gradient-aurora)" } : {}}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <TiltCard key={p.title} p={p} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
