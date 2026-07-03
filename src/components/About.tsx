import { MapPin, Target, GraduationCap } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { SITE } from "../config";
import { reference } from "../data/content";

const facts = [
  { icon: MapPin, label: "Based in", value: "Tanjay City, PH" },
  { icon: Target, label: "Focus", value: "Marketing & Admin" },
  { icon: GraduationCap, label: "Studied", value: "BSc Psychology" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        {/* Portrait */}
        <Reveal className="order-1">
          <div className="relative mx-auto max-w-sm">
            <div
              className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 20%, rgba(35,57,93,0.9), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] hairline bg-gradient-to-b from-deep-600/40 to-ink-900">
              <img
                src="/assets/image-01.png"
                alt="Jaypee Caldamo, virtual assistant"
                className="relative z-10 w-full object-contain"
                loading="lazy"
                width={816}
                height={1024}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-2">
          <Reveal>
            <Eyebrow>About Jaypee</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
              A calm operator behind
              <br className="hidden sm:block" /> the scenes.
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-paper/75 sm:text-base">
              <p>
                I help founders and small teams look organised and consistent. My
                background spans customer service, digital sales and human
                resources — so I understand both the front-of-house polish and the
                back-of-house systems that keep a business running.
              </p>
              <p>
                Today I run marketing and admin support for {""}
                <span className="text-paper">Contact Centre Network New Zealand</span>
                , producing the podcast, newsletter and social assets for{" "}
                <span className="text-paper">The Kiwi CX Collective</span>. A degree
                in psychology means I read the context behind a request — not just
                the task in front of me.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <dl className="mt-8 grid grid-cols-1 gap-3 xs:grid-cols-3">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl hairline bg-ink-900/50 px-4 py-4"
                >
                  <f.icon size={18} className="text-steel-300" strokeWidth={2} />
                  <dt className="mt-2.5 text-[0.68rem] uppercase tracking-label text-paper-dim">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-paper">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-paper-muted">
              <span className="font-medium text-paper">{reference.name}</span>
              <span className="text-paper-dim">·</span>
              <span>{reference.title}</span>
              <span className="ml-1 rounded-full bg-deep-700/60 px-2.5 py-0.5 text-[0.7rem] text-steel-200">
                Reference on request
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <p className="sr-only">
        {SITE.name} is a {SITE.role.toLowerCase()} specialising in{" "}
        {SITE.discipline.toLowerCase()}.
      </p>
    </section>
  );
}
