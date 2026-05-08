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
                  I'm an entrepreneur focused on building products that solve real problems
                  for real people. My work sits at the intersection of technology, brand,
                  and operations — turning early-stage ideas into companies that ship,
                  grow, and last.
                </p>
                <p>
                  Over the past few years I've launched and led ventures across digital
                  products and services, building teams from zero and shaping every layer
                  from strategy down to the customer experience.
                </p>
                <p>
                  When I'm not building, I'm usually mentoring younger founders, reading
                  about business history, or sketching the next idea on a whiteboard.
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
                {[
                  {
                    period: "2023 — PRESENT",
                    role: "Founder & CEO",
                    org: "Current Venture",
                    desc: "Leading product, growth, and operations end-to-end. Built the founding team, shipped the first product, and grew an early customer base from zero.",
                    tags: ["Leadership", "Strategy", "Product"],
                  },
                  {
                    period: "2021 — 2023",
                    role: "Co-Founder",
                    org: "Previous Venture",
                    desc: "Co-built a digital services business serving regional clients. Owned sales, hiring, and delivery while scaling the team across two cities.",
                    tags: ["Sales", "Operations", "Hiring"],
                  },
                  {
                    period: "2019 — 2021",
                    role: "Independent Operator",
                    org: "Freelance & Consulting",
                    desc: "Advised early-stage founders on go-to-market and brand. Ran small projects that became the foundation for everything I'm building today.",
                    tags: ["Branding", "GTM", "Advisory"],
                  },
                ].map((job) => (
                  <div
                    key={job.role + job.period}
                    className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100"
                  >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50" />
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {job.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200">
                        <span className="transition-colors group-hover:text-teal-300">
                          {job.role}
                        </span>{" "}
                        · {job.org}
                      </h3>
                      <p className="mt-2 text-sm leading-normal">{job.desc}</p>
                      <ul className="mt-2 flex flex-wrap" aria-label="Keywords">
                        {job.tags.map((t) => (
                          <li
                            key={t}
                            className="mr-1.5 mt-2 rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
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
                    name: "Venture One",
                    tagline: "A short one-line description of what it does.",
                    status: "Active",
                  },
                  {
                    name: "Venture Two",
                    tagline: "Another product or company you've built.",
                    status: "Active",
                  },
                  {
                    name: "Venture Three",
                    tagline: "An earlier project worth mentioning.",
                    status: "Acquired",
                  },
                  {
                    name: "Venture Four",
                    tagline: "Experiment or side bet.",
                    status: "Sunset",
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
                  href="mailto:hello@fardinahmedshovon.com"
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
