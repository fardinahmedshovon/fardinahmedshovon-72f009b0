import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fardin Ahmed Shovon | Entrepreneur" },
      {
        name: "description",
        content:
          "Fardin Ahmed Shovon — Entrepreneur turning visions into ventures. Building scalable solutions and driving innovation.",
      },
      { property: "og:title", content: "Fardin Ahmed Shovon | Entrepreneur" },
      {
        property: "og:description",
        content: "Turning visions into ventures.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] font-sans leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth">
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background:
            "radial-gradient(600px at var(--x) var(--y), rgba(45, 212, 191, 0.15), transparent 80%)",
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="mb-6 lg:mb-8">
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjaTZcjqC-1EHF0RuIeORQJ0AFQMidz1zBWxkBWgpq35yixO4q0AqPTwjoTIhoXGGR915aDZcMLTw0abQ8amTZMe3DJevMt8qBf7y-0WmSn10sTJkNWTJqXJyAPqcZLvI5ybobxScvxyjOEHq_IaTuozEyGKCywVMfY84epRurB8uOjOBLFbhXN42hMVrA/s1195/Gemini_Generated_Image_d9ui24d9ui24d9ui.png"
                  alt="Fardin Ahmed Shovon"
                  className="h-32 w-32 rounded-full border-2 border-slate-700/50 object-cover shadow-2xl transition-all duration-300 hover:scale-105 hover:border-teal-300/50"
                />
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Fardin Ahmed Shovon</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Entrepreneur
              </h2>
              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                Turning visions into ventures.
              </p>

              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {[
                    { href: "#about", label: "About" },
                    { href: "#experience", label: "Experience" },
                    { href: "#ventures", label: "Ventures" },
                    { href: "#contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a className="nav-link group flex items-center py-3" href={item.href}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200" />
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 transition-all group-hover:text-slate-200">
                          {item.label}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.facebook.com/fardinahmedshovon"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-slate-200"
                title="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/fardinahmedshovon"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-slate-200"
                title="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/fardinahmedshovon"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition-colors hover:text-slate-200"
                title="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </header>

          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  About
                </h2>
              </div>
              <div className="text-base text-slate-400">
                <p className="mb-4">
                  Entrepreneurship is more than just starting businesses; it's about solving
                  problems and creating lasting value. I focus on building scalable solutions
                  and driving innovation in every venture.
                </p>
              </div>
            </section>

            <section id="experience" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Experience
                </h2>
              </div>

              <div className="space-y-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50" />
                  <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                    2023 — PRESENT
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <span className="transition-colors group-hover:text-teal-300">
                        Founder & CEO
                      </span>{" "}
                      · Venture
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      Strategic lead for venture operations, scaling digital products, and
                      building cross-functional teams.
                    </p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Keywords">
                      <li className="mr-1.5 mt-2 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
                        Leadership
                      </li>
                      <li className="mr-1.5 mt-2 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
                        Strategy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Contact
                </h2>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/10 p-8">
                <p className="mb-6 text-slate-400">
                  Have a vision you want to discuss? Let's connect and build something
                  impactful together.
                </p>
                <a
                  href="mailto:fardinahmedshovon@email.com"
                  className="inline-block rounded border border-teal-300 px-6 py-3 font-mono text-sm font-medium text-teal-300 transition-all hover:bg-teal-300/10"
                >
                  Get In Touch
                </a>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-[10px] uppercase tracking-widest text-slate-500 sm:pb-0">
              <p>Designed for Fardin Ahmed Shovon. Built with Tailwind CSS.</p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
