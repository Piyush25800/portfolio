import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import avatar from "@/assets/avatar.png";
import { profile, typedRoles } from "@/data/portfolio";

function useTyped(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = w.slice(0, text.length + 1);
          setText(next);
          if (next === w) setTimeout(() => setDel(true), pause);
        } else {
          const next = w.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((x) => x + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const typed = useTyped(typedRoles);
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Open for internships & full-time roles · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl"
          >
            Hi, I'm <span className="text-gradient">{profile.name.split(" ")[0]}</span>.
            <br />
            <span className="cursor-blink text-foreground/90">{typed}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {"Transforming data into insights, insights into intelligence, and intelligence into impact. I explore the intersection of Data Analytics, Data Science, Machine Learning, and Artificial Intelligence to build meaningful solutions."}
          </motion.p>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-aurora)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resumeUrl}
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { Icon: Github, href: profile.socials.github },
              { Icon: Linkedin, href: profile.socials.linkedin },
              { Icon: Twitter, href: profile.socials.twitter },
              { Icon: Mail, href: profile.socials.email },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:text-primary hover:glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto aspect-square w-[280px] md:w-[380px]"
        >
          <div className="absolute inset-0 animate-pulse-glow rounded-full" style={{ background: "var(--gradient-aurora)", filter: "blur(40px)", opacity: 0.5 }} />
          <div className="animate-float glass-strong relative h-full w-full overflow-hidden rounded-full p-2">
            <img src={avatar} alt={profile.name} className="h-full w-full rounded-full object-cover" width={380} height={380} />
          </div>
          <motion.div
            className="glass absolute -right-4 top-10 rounded-2xl px-4 py-2 text-xs"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-primary">●</span> Python · ML
          </motion.div>
          <motion.div
            className="glass absolute -left-6 bottom-12 rounded-2xl px-4 py-2 text-xs"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <span className="text-accent">●</span> 94% model F1
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
