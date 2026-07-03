import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Eyebrow } from "./Reveal";
import { powerUps, type PowerUp } from "../data/content";
import { stagger, fadeUp } from "../lib/motion";

const spanClass: Record<PowerUp["span"], string> = {
  tall: "lg:row-span-2",
  wide: "lg:col-span-2",
  std: "",
};

function Card({ p }: { p: PowerUp }) {
  const wide = p.span === "wide";
  return (
    <motion.article
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-3xl hairline bg-deep-900/40 p-6 transition-colors duration-500 hover:bg-deep-800/50 sm:p-7 ${spanClass[p.span]}`}
    >
      {/* hover glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(circle, rgba(35,57,93,0.85), transparent 70%)" }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-950/60 hairline text-steel-200">
            <p.icon size={20} strokeWidth={2} />
          </span>
          <span className="text-[0.66rem] font-semibold uppercase tracking-label text-paper-dim">
            {p.tag}
          </span>
        </div>

        <h3 className="mt-5 font-serif text-2xl text-white sm:text-[1.7rem]">
          {p.title}
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/70">
          {p.blurb}
        </p>

        <ul
          className={`mt-5 grid gap-x-6 gap-y-2.5 ${
            wide ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {p.items.map((item) => (
            <li key={item.label} className="flex items-start gap-2.5 text-sm text-paper/80">
              <item.icon
                size={15}
                className="mt-0.5 shrink-0 text-steel-400"
                strokeWidth={2}
              />
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export function PowerUps() {
  const reduce = useReducedMotion();
  return (
    <section id="power-ups" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="max-w-2xl">
          <Eyebrow>Power-Ups</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
            What I plug into your business.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70">
            Four stacks of capability — from the systems that keep operations tidy
            to the content that keeps a brand visible. Mix and match to what you
            need most.
          </p>
        </div>
      </Reveal>

      <motion.div
        variants={reduce ? undefined : stagger(0.1)}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:grid-flow-row-dense"
      >
        {powerUps.map((p) => (
          <Card key={p.title} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
