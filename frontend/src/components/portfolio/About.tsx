import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="About" title="A builder obsessed with signal in the noise" />
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong animated-border rounded-3xl p-8"
          >
            <p className="leading-relaxed text-foreground/90">
              I'm a recent <span className="text-primary">Artificial Intelligence</span> graduate with a strong foundation in
              Data Analytics, Data Science, Machine Learning, and Artificial Intelligence. Through internships and hands-on
              projects, I have worked on predictive analytics, machine learning solutions, and intelligent systems, applying
              data-driven approaches to solve real-world business problems.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I am passionate about transforming data into actionable insights and exploring innovative applications of
              Artificial Intelligence. With a strong interest in AI-driven technologies, analytics, and problem-solving, I am
              actively seeking opportunities to contribute as an AI Engineer, Data Analyst, or Data Scientist while
              continuously expanding my technical expertise and industry knowledge.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Analytical", "Builder", "AI Enthusiast", "Problem Solver", "Continuous Learner"].map((t) => (
                <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass animated-border rounded-2xl p-6"
              >
                <div className="text-gradient font-display text-4xl font-bold">{s.value}+</div>
                <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
