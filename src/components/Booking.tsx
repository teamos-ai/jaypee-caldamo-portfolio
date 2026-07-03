import { Mail, Phone, CalendarClock } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { SITE } from "../config";

export function Booking() {
  const hasEmbed = SITE.bookingEmbedUrl.trim().length > 0;

  // NOTE: we deliberately do NOT load GHL's form_embed.js. In this external
  // SPA context that script hides the iframe (left:-9999px) waiting for a
  // handshake that never completes, so the calendar vanishes. The GHL booking
  // widget is a standalone page and renders fine in a plain, fixed-height
  // iframe — sized here so the whole month is visible without inner scrolling.

  return (
    <section id="book" className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow>Let&rsquo;s talk</Eyebrow>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl">
            Book a call with Jaypee.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-paper/70">
            A relaxed 20-minute conversation to see if we&rsquo;re a fit. No
            pressure — just a clear sense of how I can lighten your load.
          </p>
        </div>
      </Reveal>

      {hasEmbed ? (
        <Reveal>
          <div className="mx-auto mt-12 max-w-[880px] overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-2xl shadow-black/50 ring-1 ring-steel-400/20 sm:p-2.5">
            <iframe
              src={SITE.bookingEmbedUrl}
              title="Book a call with Jaypee Caldamo"
              id={SITE.bookingEmbedId}
              loading="lazy"
              className="block h-[940px] w-full rounded-[1.35rem] border-0 sm:h-[900px]"
            />
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <div className="mx-auto mt-12 flex min-h-[440px] max-w-xl flex-col items-center justify-center rounded-[1.75rem] hairline bg-gradient-to-br from-deep-800/40 via-ink-900 to-ink-950 p-10 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-deep-700/50 text-steel-200">
              <CalendarClock size={26} />
            </span>
            <h3 className="mt-5 font-serif text-2xl text-white">
              Grab a time that suits you
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
              Send a quick note and I&rsquo;ll reply with a booking link within a
              day — or reach me directly below.
            </p>
            <a
              href={`mailto:${SITE.email}?subject=Discovery%20call%20with%20Jaypee&body=Hi%20Jaypee%2C%20I%27d%20love%20to%20book%20a%20call.%20Here%27s%20a%20little%20about%20my%20business%3A`}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={17} strokeWidth={2.2} />
              Request a time
            </a>
          </div>
        </Reveal>
      )}

      {/* Subtle direct-contact fallback — keeps the calendar the clear focus */}
      <Reveal>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-paper-muted">
          <span className="text-paper-dim">Prefer to reach out directly?</span>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            <Mail size={15} className="text-steel-300" />
            {SITE.email}
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-paper"
          >
            <Phone size={15} className="text-steel-300" />
            {SITE.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
