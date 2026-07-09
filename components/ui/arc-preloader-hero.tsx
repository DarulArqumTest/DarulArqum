"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Greeting {
  text: string;
  lang?: string;
}

interface ArcRevealHeroProps {
  children?: React.ReactNode;
  greetings?: Greeting[];
  greetingHold?: number;
  revealDuration?: number;
  storageKey?: string;
  className?: string;
  introClassName?: string;
  greetingClassName?: string;
}

export function ArcRevealHero({
  children,
  greetings = [],
  greetingHold = 800,
  revealDuration = 1200,
  storageKey = "arc-reveal-seen",
  className = "",
  introClassName = "",
  greetingClassName = "",
}: ArcRevealHeroProps) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(greetings.length === 0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (storageKey && window.sessionStorage.getItem(storageKey) === "1") {
      setRevealed(true);
      return;
    }

    if (greetings.length === 0) {
      setRevealed(true);
      return;
    }

    if (index >= greetings.length) {
      setRevealed(true);
      if (storageKey) window.sessionStorage.setItem(storageKey, "1");
      return;
    }

    const t = window.setTimeout(() => setIndex((i) => i + 1), greetingHold);
    return () => window.clearTimeout(t);
  }, [index, greetings.length, greetingHold, storageKey]);

  const current = greetings[Math.min(index, Math.max(greetings.length - 1, 0))];

  return (
    <div className={`relative isolate overflow-hidden ${className}`}>
      <AnimatePresence>
        {!revealed && current && (
          <motion.div
            key="arc-intro"
            className={`absolute inset-0 z-20 flex items-center justify-center px-5 ${introClassName}`}
            exit={{ opacity: 0 }}
            transition={{ duration: revealDuration / 1000, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                dir={current.lang === "ar" ? "rtl" : "ltr"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`text-center text-3xl md:text-5xl ${greetingClassName}`}
              >
                {current.text}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={false}
        animate={{ opacity: revealed ? 1 : 0 }}
        transition={{ duration: revealDuration / 1000, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
