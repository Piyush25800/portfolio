import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3 md:items-center">
        <div className="font-display text-lg font-bold">
          <span className="text-gradient">{"</piyush>"}</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-3 md:justify-end">
          {[
            { Icon: Github, href: profile.socials.github },
            { Icon: Linkedin, href: profile.socials.linkedin },
            { Icon: Twitter, href: profile.socials.twitter },
            { Icon: Mail, href: profile.socials.email },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="glass flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:text-primary">
              <Icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Built with React, TanStack & Tailwind CSS · Crafted with care.
      </div>
    </footer>
  );
}
