import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Power-Ups", href: "#power-ups" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className={`liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
          scrolled ? "liquid-glass--nav" : ""
        }`}
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Jaypee Caldamo — home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-paper font-serif text-lg leading-none text-ink-950">
            J
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold text-paper">Jaypee Caldamo</span>
            <span className="mt-0.5 text-[0.62rem] uppercase tracking-label text-paper-muted">
              Virtual Assistant
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-paper/75 transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#book"
            className="hidden items-center gap-2 rounded-full bg-paper px-5 py-2 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            <CalendarCheck size={16} strokeWidth={2.2} />
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-paper md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="liquid-glass liquid-glass--nav mx-auto mt-2 max-w-5xl rounded-3xl p-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-paper/80 transition-colors hover:bg-paper/5 hover:text-paper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-paper px-4 py-3 text-sm font-semibold text-ink-950"
          >
            <CalendarCheck size={16} /> Book a call
          </a>
        </div>
      )}
    </header>
  );
}
