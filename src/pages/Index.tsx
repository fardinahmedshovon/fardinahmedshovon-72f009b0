import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Founder & CEO",
    company: "ApkBongo",
    url: "https://apkbongo.com",
    description:
      "Building a modern Android app discovery platform focused on curation, performance, and a clean reading experience. Lead product direction, brand, and growth from zero to launch.",
    tags: ["Product", "Brand", "Next.js", "SEO", "Growth"],
  },
  {
    period: "2022 — 2024",
    role: "Independent Builder",
    company: "Self-employed",
    url: "#",
    description:
      "Designed and shipped a series of small web products and landing pages for early-stage founders across Bangladesh and the GCC. Worked end-to-end across design, code, and launch.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    period: "2020 — 2022",
    role: "Freelance Developer",
    company: "Various clients",
    url: "#",
    description:
      "Built dashboards, marketing sites, and internal tools. Focused on clean interfaces, accessible markup, and pragmatic engineering.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
  },
];

const PROJECTS = [
  {
    name: "ApkBongo",
    description:
      "A curated Android app discovery platform with a focus on speed, clean typography, and editorial-style write-ups.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    url: "https://apkbongo.com",
  },
  {
    name: "Personal Portfolio",
    description:
      "This site — a single-page portfolio built with React, Vite, and Tailwind. Designed and developed in pure code, no template.",
    tags: ["React", "Vite", "Tailwind"],
    url: "#",
  },
  {
    name: "Founder Notes",
    description:
      "A small writing space documenting product, design, and lessons from building startups out of Bangladesh.",
    tags: ["MDX", "Editorial"],
    url: "#",
  },
];

const SOCIALS = [
  { icon: Github, url: "https://github.com/", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Instagram, url: "https://instagram.com/", label: "Instagram" },
  { icon: Facebook, url: "https://facebook.com/", label: "Facebook" },
  { icon: Mail, url: "mailto:contact@shovon.iam.bd", label: "Email" },
];

export default function Index() {
  const [active, setActive] = useState("about");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Spotlight follow
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#0a192f] text-slate-400 selection:bg-teal-300/20 selection:text-teal-200"
      style={{
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Helmet>
        <title>Fardin Ahmed Shovon — Founder & Developer</title>
        <meta
          name="description"
          content="Fardin Ahmed Shovon is a founder and developer based in Bangladesh, building thoughtful digital products and the team behind ApkBongo."
        />
        <meta name="theme-color" content="#0a192f" />
      </Helmet>

      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: `radial-gradient(600px at ${mouse.x}px ${mouse.y}px, rgba(29, 78, 216, 0.12), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* LEFT — sticky sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Fardin Ahmed Shovon</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Founder & Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Building thoughtful digital products and the team behind ApkBongo.
              </p>

              {/* Nav */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {NAV.map((n) => {
                    const isActive = active === n.id;
                    return (
                      <li key={n.id}>
                        <a
                          href={`#${n.id}`}
                          className="group flex items-center py-3"
                        >
                          <span
                            className={`mr-4 h-px transition-all motion-reduce:transition-none ${
                              isActive
                                ? "w-16 bg-slate-200"
                                : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-widest ${
                              isActive
                                ? "text-slate-200"
                                : "text-slate-500 group-hover:text-slate-200"
                            }`}
                          >
                            {n.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Socials */}
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
              {SOCIALS.map(({ icon: Icon, url, label }) => (
                <li key={label} className="mr-5 text-xs">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="block text-slate-400 transition hover:text-slate-200"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </header>

          {/* RIGHT — content */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* About */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  About
                </h2>
              </div>
              <div className="space-y-4">
                <p>
                  I&apos;m a developer and founder who enjoys building at the intersection
                  of <span className="text-slate-200">design</span>,{" "}
                  <span className="text-slate-200">engineering</span>, and{" "}
                  <span className="text-slate-200">product</span>. My focus is on
                  shipping calm, well-considered software that respects the people who
                  use it.
                </p>
                <p>
                  Currently, I&apos;m the founder of{" "}
                  <a
                    href="https://apkbongo.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-slate-200 hover:text-teal-300"
                  >
                    ApkBongo
                  </a>
                  , where I lead product, design, and engineering. Before that, I
                  spent a few years freelancing — designing landing pages, building
                  small dashboards, and helping early-stage founders get their first
                  versions out the door.
                </p>
                <p>
                  Outside of building, I write occasionally about product and design,
                  read more than I should, and enjoy long walks around Dhaka.
                </p>
              </div>
            </section>

            {/* Experience */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Experience
                </h2>
              </div>
              <ol className="group/list">
                {EXPERIENCE.map((job) => (
                  <li key={job.role} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={job.period}
                      >
                        {job.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                            <span>
                              {job.role} ·{" "}
                              <span className="inline-block">
                                {job.company}
                                <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                              </span>
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {job.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Tech stack">
                          {job.tags.map((t) => (
                            <li key={t} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {t}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-12">
                <a
                  href="#"
                  className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300">
                    View Full Résumé
                  </span>
                  <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </section>

            {/* Projects */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0a192f]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                  Projects
                </h2>
              </div>
              <ul className="group/list">
                {PROJECTS.map((p) => (
                  <li key={p.name} className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link"
                          >
                            <span>
                              {p.name}
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">{p.description}</p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Stack">
                          {p.tags.map((t) => (
                            <li key={t} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                {t}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="z-10 mb-4 aspect-video w-full rounded border-2 border-slate-200/10 bg-gradient-to-br from-slate-800 to-slate-900 sm:order-1 sm:col-span-2 sm:translate-y-1" />
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Designed in <span className="text-slate-300">Figma</span> and built in{" "}
                <span className="text-slate-300">VS Code</span> with React, Vite, and
                Tailwind CSS. All text set in the Inter typeface.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
