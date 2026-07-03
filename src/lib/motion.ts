import type { Variants } from "framer-motion";

// Exponential ease-out — natural deceleration (no bounce/elastic).
export const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutQuint },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: easeOutQuint } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutQuint },
  },
};

// Parent orchestrator for staggered reveals.
export const stagger = (childDelay = 0.08, delayChildren = 0.04): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: childDelay, delayChildren },
  },
});
