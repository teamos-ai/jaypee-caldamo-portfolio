import { useEffect, useState } from "react";
import { Check, Copy, Mail, Phone, MapPin, Clock, CalendarClock } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { SITE } from "../config";

const expectations = [
  "A quick intro to your business and goals",
  "Where a VA saves you the most time",
  "A simple plan and clear next step",
];

function EmailCopy() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-center justify-between gap-3 rounded-2xl hairline bg-ink-950/50 px-4 py-3.5 text-left transition-colors hover:bg-deep-800/40"
      aria-label="Copy email address"
    >
      <span className="flex items-center gap-3">
        <Mail size={18} className="text-steel-300" />
        <span className="text-sm text-paper">{SITE.email}</span>
      </span>
      <span className="flex items-center gap-1.5 text-xs font-medium text-steel-300">
        {copied ? <Check size={15} /> : <Copy size={15} />}
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}

export function Booking() {
  const hasEmbed = SITE.bookingEmbedUrl.trim().length > 0;
  const isGhl = SITE.bookingEmbedUrl.includes("link.teamos.ai");

  // Load GHL's form_embed.js once so the calendar iframe auto-resizes to its
  // own content height (no inner scrollbars).
  useEffect(() => {
    if (!hasEmbed || !isGhl) return;
    const src = SITE.bookingEmbedScript;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, [hasEmbed, isGhl]);

  return (
    <section id="book" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
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

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact rail */}
        <Reveal className="flex flex-col gap-4">
          <div className="rounded-3xl hairline bg-deep-900/40 p-6 sm:p-7">
            <h3 className="font-serif text-2xl text-white">What to expect</h3>
            <ul className="mt-4 space-y-3">
              {expectations.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-paper/80">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-deep-700/70 text-steel-200">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {e}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3 border-t border-steel-400/10 pt-6">
              <EmailCopy />
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-3 rounded-2xl hairline bg-ink-950/50 px-4 py-3.5 text-sm text-paper transition-colors hover:bg-deep-800/40"
              >
                <Phone size={18} className="text-steel-300" />
                {SITE.phone}
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-paper-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-steel-400" /> {SITE.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-steel-400" /> Replies within 24h
              </span>
            </div>
          </div>
        </Reveal>

        {/* Scheduler embed / fallback */}
        <Reveal>
          {hasEmbed ? (
            <div className="overflow-hidden rounded-3xl bg-white p-1.5 ring-1 ring-steel-400/15">
              <iframe
                src={SITE.bookingEmbedUrl}
                title="Book a call with Jaypee Caldamo"
                id={SITE.bookingEmbedId}
                scrolling="no"
                loading="lazy"
                className="w-full rounded-[1.35rem]"
                style={{ width: "100%", minHeight: 720, border: "none", overflow: "hidden" }}
              />
            </div>
          ) : (
            <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl hairline bg-gradient-to-br from-deep-800/40 via-ink-900 to-ink-950 p-8 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-deep-700/50 text-steel-200">
                <CalendarClock size={26} />
              </span>
              <h3 className="mt-5 font-serif text-2xl text-white">
                Grab a time that suits you
              </h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-paper/70">
                Send a quick note and I&rsquo;ll reply with a booking link within a
                day — or reach me directly using the details on the left.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Discovery%20call%20with%20Jaypee&body=Hi%20Jaypee%2C%20I%27d%20love%20to%20book%20a%20call.%20Here%27s%20a%20little%20about%20my%20business%3A`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail size={17} strokeWidth={2.2} />
                Request a time
              </a>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
