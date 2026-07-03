import { tools } from "../data/content";

/** Infinite tools marquee — duplicated track for a seamless loop. */
export function Marquee() {
  const row = [...tools, ...tools];
  return (
    <div
      className="relative overflow-hidden border-y border-steel-400/10 bg-ink-900/60 py-5"
      aria-label="Tools and platforms I work with"
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12 motion-reduce:animate-none">
        {row.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-paper-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-steel-400" aria-hidden="true" />
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
