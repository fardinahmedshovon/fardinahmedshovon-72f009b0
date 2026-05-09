import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Facebook, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fardin Ahmed Shovon — Entrepreneur" },
      {
        name: "description",
        content:
          "Fardin Ahmed Shovon — 18-year-old entrepreneur, founder of ApkBongo. Ideas. Execution. Impact.",
      },
      { property: "og:title", content: "Fardin Ahmed Shovon — Entrepreneur" },
      { property: "og:description", content: "Ideas. Execution. Impact." },
    ],
  }),
  component: Portfolio,
});

const SCRAMBLE_CHARS = "!<>-_\\/[]{}—=+*^?#________";

function ScrambleText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<number | null>(null);

  const scramble = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    let frame = 0;
    const total = 22;
    const tick = () => {
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          const reveal = (frame / total) * text.length;
          if (i < reveal) return text[i];
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setDisplay(out);
      frame++;
      if (frame <= total) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    tick();
  };

  return (
    <span
      onMouseEnter={scramble}
      onFocus={scramble}
      className="cursor-default"
    >
      {display}
    </span>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-body text-[#a8a9ad] antialiased selection:bg-[#5a5c62] selection:text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-[#1a1b1f] bg-[#0b0b0d]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
          <a href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-white">
            FAS<span className="text-[#5a5c62]">.</span>
          </a>
          <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7a7b80] md:flex">
            <a href="#about" className="transition-colors hover:text-white">About</a>
            <a href="#ventures" className="transition-colors hover:text-white">Ventures</a>
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
          </nav>
          <a
            href="mailto:contact@shovon.iam.bd"
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-70"
          >
            Get in touch →
          </a>
        </div>
      </header>

      {/* Hero — full width, vertical, big serif */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-40 md:pt-32">
        <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.3em] text-[#5a5c62]">
          01 — Entrepreneur · Dhaka, BD
        </p>
        <h1 className="font-serif text-[15vw] font-light leading-[0.92] tracking-tight text-white md:text-[10rem]">
          <ScrambleText text="Fardin" />
          <br />
          <span className="italic text-[#5a5c62]">
            <ScrambleText text="Ahmed" />
          </span>{" "}
          <ScrambleText text="Shovon" />
        </h1>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="h-px w-16 bg-[#5a5c62]" />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-[#7a7b80]">
              Founder · ApkBongo
            </p>
          </div>
          <p className="font-serif text-2xl leading-snug text-white md:col-span-7 md:text-3xl">
            Turning visions into ventures — building startups, platforms, and
            future-focused ideas that solve real problems.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#1a1b1f]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5a5c62]">
              02 — About
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">
              The story <span className="italic text-[#5a5c62]">so far.</span>
            </h2>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[#a8a9ad] md:col-span-8 md:text-lg">
            <p>
              I'm an 18-year-old entrepreneur and student passionate about
              building startups, platforms, and future-focused ideas. I enjoy
              turning concepts into real experiences that create value and
              solve problems through technology and creativity.
            </p>
            <p>
              As the founder of <span className="text-white">ApkBongo</span> —
              an app platform focused on making apps and games more accessible —
              I'm continuously exploring opportunities in startups, innovation,
              and modern web experiences. My approach combines vision, execution,
              and long-term thinking.
            </p>
            <p>
              I believe the future belongs to creators and builders who are
              willing to learn, adapt, and innovate. Driven by curiosity and
              ambition, every project is a step toward creating impactful
              experiences and building startups that leave a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures" className="border-t border-[#1a1b1f]">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5a5c62]">
                03 — Ventures
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light text-white md:text-5xl">
                Things I've <span className="italic text-[#5a5c62]">built.</span>
              </h2>
            </div>
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-[#7a7b80] md:block">
              01 / 01
            </p>
          </div>

          <a
            href="#"
            className="group block border-t border-[#1a1b1f] py-10 transition-colors hover:border-[#5a5c62]"
          >
            <div className="grid items-baseline gap-6 md:grid-cols-12">
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-[#5a5c62]">01</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-3xl font-light text-white transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                  ApkBongo
                </h3>
              </div>
              <div className="md:col-span-5">
                <p className="text-base text-[#a8a9ad] md:text-lg">
                  Simplifying how people discover and access apps and games.
                </p>
              </div>
              <div className="flex items-center justify-between md:col-span-2 md:justify-end">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5a5c62]">
                  Active
                </span>
                <ArrowUpRight className="ml-4 h-5 w-5 text-[#5a5c62] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </div>
          </a>
          <div className="border-t border-[#1a1b1f]" />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[#1a1b1f]">
        <div className="mx-auto max-w-6xl px-6 py-32 md:px-10 md:py-48">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#5a5c62]">
            04 — Contact
          </p>
          <h2 className="mt-6 font-serif text-5xl font-light leading-[0.95] text-white md:text-8xl">
            Have a vision? <br />
            <span className="italic text-[#5a5c62]">Let's build it.</span>
          </h2>

          <a
            href="mailto:contact@shovon.iam.bd"
            className="mt-12 inline-flex items-center gap-3 border-b border-[#5a5c62] pb-2 font-mono text-sm uppercase tracking-[0.25em] text-white transition-all hover:gap-5 hover:border-white"
          >
            contact@shovon.iam.bd
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1a1b1f]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center md:px-10">
          <div>
            <p className="font-mono text-xs text-[#7a7b80]">
              © {new Date().getFullYear()} Fardin Ahmed Shovon
            </p>
            <p className="mt-2 font-serif text-sm italic text-[#5a5c62]">
              Ideas. Execution. Impact.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/fardinahmedshovon"
              target="_blank"
              rel="noreferrer"
              className="text-[#7a7b80] transition-colors hover:text-white"
              title="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/fardinahmedshovon"
              target="_blank"
              rel="noreferrer"
              className="text-[#7a7b80] transition-colors hover:text-white"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/fardinahmedshovon"
              target="_blank"
              rel="noreferrer"
              className="text-[#7a7b80] transition-colors hover:text-white"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
