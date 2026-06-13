import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="mx-auto h-16 w-16 rounded-full border-2 border-transparent"
              style={{
                background: "conic-gradient(from 0deg, transparent, var(--neon-cyan), var(--neon-violet), transparent) border-box",
                WebkitMask: "linear-gradient(#000 0 0) padding-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "2px",
              }}
            />
            <div className="mt-5 font-display text-sm tracking-widest text-muted-foreground uppercase">
              Initializing portfolio<span className="cursor-blink" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
