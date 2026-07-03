import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { experience, education } from "../data/content";
import { stagger, fadeUp } from "../lib/motion";

export function Experience() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <Eyebrow>Track Record</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
              Five years of getting things done.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-paper/70">
              Sales, HR and marketing roles across the Philippines, the US and New
              Zealand — a range that makes me quick to slot into a team and own the
              details.
            </p>
          </Reveal>

          {/* Education */}
          <Reveal>
            <div className="mt-8 space-y-3">
              {education.map((e) => (
                <div key={e.title} className="rounded-2xl hairline bg-ink-900/50 p-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={18} className="text-steel-300" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-paper">{e.title}</p>
                      <p className="text-xs text-paper-muted">{e.org}</p>
                    </div>
                    <span className="text-xs font-medium text-paper-dim">{e.period}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-paper/60">{e.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <motion.ol
          variants={reduce ? undefined : stagger(0.12)}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          <div
            className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-steel-400/40 via-steel-400/15 to-transparent"
            aria-hidden="true"
          />
          {experience.map((job) => (
            <motion.li key={job.role + job.period} variants={fadeUp} className="relative pb-10 pl-9 last:pb-0">
              <span
                className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-ink-950"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-steel-300 ring-4 ring-steel-400/15" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-label text-steel-300">
                {job.period}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-white">{job.role}</h3>
              <p className="text-sm text-paper-muted">
                {job.org} · <span className="text-paper-dim">{job.place}</span>
              </p>
              <ul className="mt-3 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-paper/75">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-steel-400" aria-hidden="true" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
