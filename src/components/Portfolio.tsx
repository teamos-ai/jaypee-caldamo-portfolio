import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, X } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { works } from "../data/content";
import { stagger, fadeUp } from "../lib/motion";

export function Portfolio() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((cur) => (cur === null ? cur : (cur + dir + works.length) % works.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, go]);

  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
              Assets that ship every week.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper/70">
              Real deliverables produced for {""}
              <span className="text-paper">The Kiwi CX Collective</span> — podcast
              covers, thumbnails, carousels and newsletters, all kept on-brand.
            </p>
          </div>
          <span className="shrink-0 text-sm text-paper-dim">Tap any piece to enlarge</span>
        </div>
      </Reveal>

      <motion.div
        variants={reduce ? undefined : stagger(0.08)}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.12 }}
        className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2"
      >
        {works.map((w, i) => (
          <motion.button
            key={w.title}
            type="button"
            variants={fadeUp}
            onClick={() => setOpen(i)}
            className="group relative block overflow-hidden rounded-3xl hairline bg-ink-900 text-left"
            aria-label={`Enlarge ${w.title}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={w.image}
                alt={`${w.title} — ${w.category}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
              <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink-950/50 text-paper opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <Plus size={18} />
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
              <div>
                <span className="text-[0.68rem] font-semibold uppercase tracking-label text-steel-300">
                  {w.n} · {w.category}
                </span>
                <h3 className="mt-1.5 font-serif text-2xl text-white sm:text-[1.7rem]">
                  {w.title}
                </h3>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox — direct mount/unmount (no AnimatePresence) so a closed
          overlay can never linger invisibly and swallow page clicks. */}
      {open !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-md sm:p-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${works[open].title} preview`}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full hairline bg-ink-900/70 text-paper transition-colors hover:bg-deep-700 sm:right-6 sm:top-6"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full hairline bg-ink-900/70 p-3 text-paper transition-colors hover:bg-deep-700 sm:grid"
              aria-label="Previous"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full hairline bg-ink-900/70 p-3 text-paper transition-colors hover:bg-deep-700 sm:grid"
              aria-label="Next"
            >
              <ArrowRight size={20} />
            </button>

            <motion.figure
              key={open}
              className="max-w-5xl"
              initial={reduce ? undefined : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={works[open].image}
                alt={`${works[open].title} — ${works[open].category}`}
                className="max-h-[78vh] w-full rounded-2xl object-contain"
              />
              <figcaption className="mt-4 flex flex-col items-center gap-1 text-center">
                <span className="font-serif text-xl text-white">{works[open].title}</span>
                <span className="max-w-lg text-sm text-paper/70">{works[open].desc}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
    </section>
  );
}
