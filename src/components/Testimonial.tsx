import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonial } from "../data/content";

export function Testimonial() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <Reveal>
        <figure className="relative overflow-hidden rounded-[2rem] hairline bg-gradient-to-br from-deep-800/50 via-ink-900 to-ink-950 p-8 sm:p-14">
          <div
            className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(35,57,93,0.9), transparent 70%)" }}
            aria-hidden="true"
          />
          <Quote size={40} className="relative text-steel-400/60" strokeWidth={1.5} />
          <blockquote className="relative mt-5 font-serif text-2xl leading-snug text-white sm:text-[2.1rem] sm:leading-[1.25]">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="relative mt-7 flex items-center gap-3 text-sm">
            <span className="h-px w-8 bg-steel-400/50" />
            <span className="font-medium text-paper">{testimonial.attribution}</span>
            <span className="text-paper-dim">·</span>
            <span className="text-paper-muted">{testimonial.context}</span>
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
