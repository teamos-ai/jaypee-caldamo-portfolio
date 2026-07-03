import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { useVideoLoop } from "../hooks/useVideoLoop";
import { floatingSkills, type IconType } from "../data/content";
import { easeOutQuint } from "../lib/motion";

interface ChipPos {
  style: React.CSSProperties;
  depth: number;
  back?: boolean;
}

// Positions spread around the periphery so the centred headline stays clear.
const positions: ChipPos[] = [
  { style: { top: "20%", left: "5%" }, depth: 1.3 },
  { style: { top: "39%", left: "13%" }, depth: 0.6, back: true },
  { style: { top: "63%", left: "7%" }, depth: 1.5 },
  { style: { top: "80%", left: "17%" }, depth: 0.8, back: true },
  { style: { top: "21%", right: "6%" }, depth: 1.4 },
  { style: { top: "41%", right: "13%" }, depth: 0.6, back: true },
  { style: { top: "64%", right: "5%" }, depth: 1.3 },
  { style: { top: "81%", right: "16%" }, depth: 0.85, back: true },
];

function FloatingChip({
  mx,
  my,
  pos,
  label,
  Icon,
  index,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  pos: ChipPos;
  label: string;
  Icon: IconType;
  index: number;
}) {
  const reduce = useReducedMotion();
  const x = useTransform(mx, (v) => v * pos.depth * 46);
  const y = useTransform(my, (v) => v * pos.depth * 46);

  return (
    <motion.div
      className="absolute"
      style={{ ...pos.style, x: reduce ? 0 : x, y: reduce ? 0 : y }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: pos.back ? 0.72 : 1, scale: 1 }}
      transition={{ delay: 0.7 + index * 0.09, duration: 0.6, ease: easeOutQuint }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -9, 0] }}
        transition={{
          duration: 5 + pos.depth,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      >
        <div
          className={`liquid-glass flex items-center gap-2 rounded-full ${
            pos.back ? "px-3.5 py-2" : "px-4 py-2.5"
          }`}
        >
          <Icon
            size={pos.back ? 14 : 16}
            className="text-steel-200"
            strokeWidth={2}
          />
          <span
            className={`whitespace-nowrap font-medium text-paper ${
              pos.back ? "text-xs" : "text-[0.82rem]"
            }`}
          >
            {label}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const videoRef = useVideoLoop();
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMove = (e: React.MouseEvent) => {
    mx.set(e.clientX / window.innerWidth - 0.5);
    my.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={reduce ? undefined : handleMove}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink-950"
    >
      {/* Background video — shifted down 17%, JS-faded via useVideoLoop */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full translate-y-[17%] object-cover"
        style={{ opacity: 0 }}
        src="/hero.mp4"
        muted
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Cinematic grade + legibility scrims */}
      <div className="cinematic-vignette pointer-events-none absolute inset-0" />

      {/* Floating power-up chips (desktop delight) */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden md:block">
        {positions.map((pos, i) => (
          <FloatingChip
            key={floatingSkills[i].label}
            mx={mx}
            my={my}
            pos={pos}
            label={floatingSkills[i].label}
            Icon={floatingSkills[i].icon}
            index={i}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutQuint }}
          className="liquid-glass mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-medium text-paper/85">
            Available for new clients
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeOutQuint, delay: 0.08 }}
          className="font-serif text-[2.9rem] font-normal leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Your brand deserves
          <br />
          an assistant who <span className="italic text-steel-200">cares</span>.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.18 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-paper/80 sm:text-lg"
        >
          I'm Jaypee — a marketing &amp; admin virtual assistant who turns busywork
          into momentum. CRM, content, podcasts and newsletters, handled end to
          end so you can focus on the work only you can do.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutQuint, delay: 0.28 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#book"
            className="group inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <CalendarCheck size={18} strokeWidth={2.2} />
            Book a call
          </a>
          <a
            href="#work"
            className="group liquid-glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:bg-paper/5"
          >
            See my work
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-paper/30 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-paper/70"
            animate={reduce ? undefined : { y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
