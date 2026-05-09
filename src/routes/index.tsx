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
              <div className="space-y-4 text-base text-slate-400">
                <p>
                  I'm Fardin Ahmed Shovon, an 18-year-old entrepreneur and student passionate
                  about building startups, platforms, and future-focused ideas. I enjoy turning
                  concepts into real experiences that create value and solve problems through
                  technology and creativity.
                </p>
                <p>
                  As the founder of <span className="text-slate-200">ApkBongo</span>, an app
                  platform focused on making apps and games more accessible, I'm continuously
                  exploring opportunities in startups, innovation, and modern web experiences.
                  My approach combines vision, execution, and long-term thinking — with a strong
                  focus on building meaningful things that last.
                </p>
                <p>
                  I believe the future belongs to creators and builders who are willing to learn,
                  adapt, and innovate. Every project I work on is a step toward creating impactful
                  experiences, solving real-world problems, and building for the future.
                </p>
                <p>
                  Driven by curiosity and ambition, I'm constantly learning, experimenting, and
                  pushing ideas forward with the goal of creating startups that leave a lasting
                  impact.
                </p>
              </div>
            </section>

            <section id="ventures" className="mb-16 scroll-mt-24 md:mb-24 lg:mb-36">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0f172a]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Ventures
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "ApkBongo",
                    tagline:
                      "Simplifying how people discover and access apps and games.",
                    status: "Active",
                  },
                ].map((v) => (
                  <div
                    key={v.name}
                    className="group rounded-lg border border-slate-800 bg-slate-900/20 p-5 transition-all hover:border-teal-300/40 hover:bg-slate-800/40"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-slate-200 transition-colors group-hover:text-teal-300">
                        {v.name}
                      </h3>
                      <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-teal-300">
                        {v.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-400">{v.tagline}</p>
                  </div>
                ))}
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
                  href="mailto:contact@shovon.iam.bd"
                  className="inline-block rounded border border-teal-300 px-6 py-3 font-mono text-sm font-medium text-teal-300 transition-all hover:bg-teal-300/10"
                >
                  Get In Touch
                </a>
              </div>
            </section>

            <footer className="max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
              <p>
                © {new Date().getFullYear()} Fardin Ahmed Shovon. All rights reserved.
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Crafted with intention. Built to last.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
