import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { PowerUps } from "./components/PowerUps";
import { Portfolio } from "./components/Portfolio";
import { Experience } from "./components/Experience";
import { Testimonial } from "./components/Testimonial";
import { Booking } from "./components/Booking";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />

        {/* Content world: subtle blue-tinted depth behind the dark sections */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(70% 40% at 15% 8%, rgba(28,46,74,0.35), transparent 60%), radial-gradient(60% 40% at 90% 60%, rgba(25,40,65,0.3), transparent 60%), #05080f",
            }}
            aria-hidden="true"
          />
          <Marquee />
          <About />
          <PowerUps />
          <Portfolio />
          <Experience />
          <Testimonial />
          <Booking />
        </div>
      </main>

      <Footer />
    </>
  );
}
