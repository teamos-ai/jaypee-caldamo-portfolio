import { Linkedin, Mail, Globe, ArrowUp, FileText } from "lucide-react";
import { SITE } from "../config";

const socials = [
  { label: "LinkedIn", href: SITE.socials.linkedin, icon: Linkedin },
  { label: "Email", href: SITE.socials.email, icon: Mail },
  { label: "Portfolio", href: SITE.socials.portfolio, icon: Globe },
];

export function Footer() {
  return (
    <footer className="relative border-t border-steel-400/10 bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-paper font-serif text-lg leading-none text-ink-950">
                J
              </span>
              <span className="text-sm font-semibold text-paper">Jaypee Caldamo</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              {SITE.worksWith}. Marketing &amp; admin support, delivered with care.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="liquid-glass grid h-11 w-11 place-items-center rounded-full text-paper/80 transition-all duration-300 hover:bg-paper/5 hover:text-paper"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.resume}
                download
                className="inline-flex items-center gap-2 rounded-full hairline px-4 py-2 text-sm text-paper/80 transition-colors hover:text-paper"
              >
                <FileText size={16} /> Résumé (PDF)
              </a>
              <a
                href="#top"
                className="inline-flex items-center gap-2 rounded-full hairline px-4 py-2 text-sm text-paper/80 transition-colors hover:text-paper"
              >
                <ArrowUp size={16} /> Back to top
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-steel-400/10 pt-6 text-xs text-paper-dim sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jaypee Caldamo. All rights reserved.</p>
          <p>Virtual Assistant · Marketing &amp; Admin Support</p>
        </div>
      </div>
    </footer>
  );
}
