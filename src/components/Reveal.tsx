import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "../lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  amount?: number;
  as?: "div" | "section" | "li" | "article";
}

/** Scroll-triggered reveal. Renders statically when reduced motion is on. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

/** Small tracked label used above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-label text-steel-300">
      <span className="h-px w-6 bg-steel-400/50" aria-hidden="true" />
      {children}
    </span>
  );
}
