import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  Sparkles,
  Code2,
  Rocket,
  Brain,
  Globe,
  ArrowRight,
} from "lucide-react";

const ACCENT = "#c5f547"; // electric lime
const ACCENT_2 = "#a78bfa"; // soft violet

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "ventures", label: "Ventures" },
  { id: "work", label: "Work" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind", "Framer Motion",
  "Supabase", "PostgreSQL", "Figma", "Product Strategy", "Brand", "Growth",
];

const VENTURES = [
  {
    name: "ApkBongo",
    role: "Founder",
    year: "2024 — Now",
    desc: "A modern discovery platform making apps and games effortless to find, share, and access for the next billion users.",
    tags: ["Startup", "Marketplace", "Mobile"],
    accent: ACCENT,
  },
  {
    name: "Atelier Lab",
    role: "Studio",
    year: "Ongoing",
    desc: "A small studio practice for shipping interfaces and brand systems for early-stage founders.",
    tags: ["Design", "Development", "Brand"],
    accent: ACCENT_2,
  },
];

const PROJECTS = [
  {
    title: "ApkBongo Web",
    blurb: "Editorial-grade marketplace UI with personalized discovery.",
    stack: ["Next.js", "Tailwind", "Supabase"],
    color: ACCENT,
  },
  {
    title: "Founders OS",
    blurb: "An internal toolkit for tracking metrics, ideas, and weekly cadence.",
    stack: ["React", "tRPC", "Postgres"],
    color: ACCENT_2,
  },
  {
    title: "Brand Systems",
    blurb: "Design tokens, type scales, and motion guidelines for digital products.",
    stack: ["Figma", "Tokens", "Docs"],
    color: "#fb7185",
  },
  {
    title: "Portfolio v3",
    blurb: "This very site — a personal manifesto in motion.",
    stack: ["React", "Framer Motion"],
    color: "#38bdf8",
  },
];

const JOURNEY = [
  { year: "2026", title: "Scaling ApkBongo", desc: "Pushing the platform toward 1M+ MAU and a sharper brand identity." },
  { year: "2025", title: "Founded ApkBongo", desc: "Turned a long-standing idea into a real product, team, and roadmap." },
  { year: "2024", title: "Studio Practice", desc: "Worked with early founders on product, brand, and frontend craft." },
  { year: "2023", title: "Started Building", desc: "Shipped first real-world products and fell in love with the founder loop." },
];

// Magnetic button
function Magnetic({ children, className = "", href, ...rest }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const year = new Date().getFullYear();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-zinc-300 antialiased selection:bg-[color:var(--accent)] selection:text-zinc-950"
      style={{
        backgroundColor: "#0a0a0b",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
        ["--accent" as any]: ACCENT,
        ["--accent2" as any]: ACCENT_2,
      }}
    >
      <Helmet>
        <title>Fardin Ahmed Shovon — Founder & Developer</title>
        <meta
          name="description"
          content="Fardin Ahmed Shovon — founder of ApkBongo, developer, and product builder. Crafting modern startups, platforms, and digital experiences."
        />
        <link rel="canonical" href="https://fardinahmedshovon.com/" />
      </Helmet>

      {/* Background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 85% 0%, rgba(197,245,71,0.08), transparent 60%), radial-gradient(50% 50% at 0% 90%, rgba(167,139,250,0.10), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      {/* Floating glass navbar */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-1/2 top-4 z-50 -translate-x-1/2 sm:top-6"
      >
        <nav
          className={`flex items-center gap-1 rounded-full border border-white/10 px-2 py-2 backdrop-blur-xl transition-all sm:gap-2 ${
            scrolled ? "bg-zinc-950/70 shadow-2xl shadow-black/40" : "bg-zinc-950/40"
          }`}
        >
          <a href="#home" className="ml-1 mr-1 flex items-center gap-2 px-2">
            <span
              className="grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold text-zinc-950"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              fs
            </span>
          </a>
          <div className="hidden items-center gap-0.5 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`relative rounded-full px-3 py-1.5 text-[12px] font-medium tracking-wide transition-colors ${
                  active === n.id ? "text-zinc-950" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === n.id && (
                  <motion.span
                    layoutId="navpill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: ACCENT }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-1 hidden rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-zinc-950 transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Let's talk
          </a>
        </nav>
      </motion.header>

      {/* Mobile bottom nav for small screens */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/80 px-2 py-2 backdrop-blur-xl">
          {NAV.slice(0, 5).map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`rounded-full px-3 py-1.5 text-[11px] font-medium ${
                active === n.id ? "bg-[color:var(--accent)] text-zinc-950" : "text-zinc-400"
              }`}
            >
              {n.label}
            </a>
          ))}
        </div>
      </div>

      <main className="relative z-10">
        {/* HERO */}
        <section id="home" ref={heroRef} className="relative min-h-[100svh] px-5 pt-32 sm:px-8 md:pt-40">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-300 backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: ACCENT }} />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
              </span>
              Available — Building 2026
            </motion.div>

            <h1
              className="text-[14vw] leading-[0.9] tracking-tight text-white sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5rem]"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              {["Founder", "&", "Developer"].map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block overflow-hidden"
                >
                  <span className="inline-block">
                    {w === "&" ? (
                      <em
                        className="not-italic"
                        style={{
                          background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontStyle: "italic",
                        }}
                      >
                        {w}
                      </em>
                    ) : (
                      w
                    )}
                  </span>
                </motion.span>
              ))}
            </h1>

            <div className="mt-10 grid grid-cols-12 gap-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="col-span-12 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg md:col-span-6"
              >
                I'm <span className="text-white">Fardin Ahmed Shovon</span> — founder of{" "}
                <span className="text-white">ApkBongo</span>, a builder shipping startups, platforms, and product
                experiences with care.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="col-span-12 flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end"
              >
                <Magnetic
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg"
                  style={{ background: ACCENT, boxShadow: `0 10px 40px -10px ${ACCENT}` }}
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Magnetic>
                <Magnetic
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  View work
                </Magnetic>
              </motion.div>
            </div>

            {/* Socials row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-12 flex items-center gap-5 text-zinc-500"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Find me
              </span>
              <div className="h-px flex-1 max-w-16 bg-white/10" />
              {[
                { Icon: Github, href: "https://github.com/fardinahmedshovon", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/fardinahmedshovon", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/fardinahmedshovon", label: "Instagram" },
                { Icon: Facebook, href: "https://www.facebook.com/fardinahmedshovon", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-zinc-500 transition-colors hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Marquee skills strip */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-y border-white/5 bg-black/20 py-4 backdrop-blur">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {[...SKILLS, ...SKILLS, ...SKILLS].map((s, i) => (
                <span key={i} className="flex items-center gap-12 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {s}
                  <span className="h-1 w-1 rounded-full" style={{ background: ACCENT }} />
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" eyebrow="01 / About" title={<>A <Accent>builder</Accent> at heart.</>}>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 space-y-6 text-base leading-relaxed text-zinc-400 md:col-span-7 md:text-[17px]">
              <p>
                I build startups and the interfaces that carry them. My focus is the early loop — finding the right
                shape of an idea, then shipping it with taste, speed, and technical depth.
              </p>
              <p>
                As founder of <span className="text-white">ApkBongo</span>, I'm building a platform for app discovery
                that respects the user's time. Outside of it, I run a small studio practice for founders who care
                about craft.
              </p>
              <p>
                I believe the best products feel inevitable. They live where engineering meets design meets restraint.
              </p>
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Rocket, label: "Founder", val: "ApkBongo" },
                  { Icon: Code2, label: "Stack", val: "TS · React" },
                  { Icon: Brain, label: "Focus", val: "Product" },
                  { Icon: Globe, label: "Based in", val: "Bangladesh" },
                ].map(({ Icon, label, val }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
                  >
                    <Icon className="h-4 w-4 text-zinc-500" />
                    <div className="mt-6 text-[10px] uppercase tracking-[0.25em] text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">{val}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {SKILLS.slice(0, 8).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* VENTURES (bento) */}
        <Section id="ventures" eyebrow="02 / Ventures" title={<>What I'm <Accent alt>building</Accent>.</>}>
          <div className="grid grid-cols-12 gap-4">
            {VENTURES.map((v, i) => (
              <motion.a
                key={v.name}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 transition-all hover:border-white/20 sm:p-9 ${
                  i === 0 ? "col-span-12 md:col-span-8 md:row-span-2" : "col-span-12 md:col-span-4"
                }`}
              >
                <div
                  aria-hidden
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
                  style={{ background: v.accent }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <span>{v.role}</span>
                    <span>{v.year}</span>
                  </div>
                  <h3
                    className={`mt-4 text-white ${i === 0 ? "text-4xl sm:text-5xl md:text-6xl" : "text-3xl"}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    {v.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">{v.desc}</p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                    <div className="flex flex-wrap gap-2">
                      {v.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-zinc-950">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Stat cards filling grid */}
            <div className="col-span-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Shipped
              </div>
              <div className="mt-3 text-4xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                20+
              </div>
              <div className="mt-1 text-xs text-zinc-500">products & sites</div>
            </div>
            <div className="col-span-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:col-span-2">
              <div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Years
              </div>
              <div className="mt-3 text-4xl font-semibold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                3+
              </div>
              <div className="mt-1 text-xs text-zinc-500">building</div>
            </div>
          </div>
        </Section>

        {/* WORK / Projects */}
        <Section id="work" eyebrow="03 / Work" title={<>Selected <Accent>projects</Accent>.</>}>
          <div className="grid grid-cols-12 gap-4">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </Section>

        {/* JOURNEY (zigzag) */}
        <Section id="journey" eyebrow="04 / Journey" title={<>The <Accent alt>road</Accent> so far.</>}>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" />
            <div className="space-y-10 md:space-y-16">
              {JOURNEY.map((j, i) => {
                const left = i % 2 === 0;
                return (
                  <motion.div
                    key={j.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="relative grid grid-cols-12 items-center gap-4"
                  >
                    <div className={`col-span-12 md:col-span-5 ${left ? "md:order-1" : "md:order-3 md:text-right"}`}>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                        <div
                          className="text-xs uppercase tracking-[0.25em]"
                          style={{ fontFamily: "'JetBrains Mono', monospace", color: ACCENT }}
                        >
                          {j.year}
                        </div>
                        <h3 className="mt-2 text-2xl text-white" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
                          {j.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">{j.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:order-2 md:col-span-2 md:flex md:justify-center">
                      <div
                        className="h-3 w-3 rounded-full ring-8 ring-[#0a0a0b]"
                        style={{ background: left ? ACCENT : ACCENT_2 }}
                      />
                    </div>
                    <div className={`hidden md:col-span-5 md:block ${left ? "md:order-3" : "md:order-1"}`} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 sm:p-14 md:p-20"
            >
              <div
                aria-hidden
                className="absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
                style={{ background: ACCENT }}
              />
              <div
                aria-hidden
                className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
                style={{ background: ACCENT_2 }}
              />

              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  05 / Contact
                </div>
                <h2
                  className="mt-4 text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Have an idea?
                  <br />
                  <span style={{ background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Let's build it.
                  </span>
                </h2>
                <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                  I'm open to founder collaborations, freelance work, and conversations with people building
                  thoughtful things.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Magnetic
                    href="mailto:contact@shovon.iam.bd"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-zinc-950"
                  >
                    <Mail className="h-4 w-4" />
                    contact@shovon.iam.bd
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Magnetic>
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: Github, href: "https://github.com/fardinahmedshovon", label: "GitHub" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/fardinahmedshovon", label: "LinkedIn" },
                      { Icon: Instagram, href: "https://www.instagram.com/fardinahmedshovon", label: "Instagram" },
                      { Icon: Facebook, href: "https://www.facebook.com/fardinahmedshovon", label: "Facebook" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-zinc-300 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-10 text-xs text-zinc-500 sm:flex-row sm:items-center sm:px-8">
          <p>© {year} Fardin Ahmed Shovon. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Ideas · Execution · Impact
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ---------- helpers ---------- */

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-end justify-between gap-6 md:mb-16"
        >
          <div>
            <div
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-500"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {eyebrow}
            </div>
            <h2
              className="mt-3 text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              {title}
            </h2>
          </div>
          <Sparkles className="hidden h-5 w-5 text-zinc-600 md:block" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function Accent({ children, alt }: { children: React.ReactNode; alt?: boolean }) {
  return (
    <span
      style={{
        background: alt
          ? `linear-gradient(135deg, ${ACCENT_2}, ${ACCENT})`
          : `linear-gradient(135deg, ${ACCENT}, ${ACCENT_2})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontStyle: "italic",
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <motion.a
      ref={ref}
      href="#"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      className="group relative col-span-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all hover:border-white/20 sm:col-span-6 md:p-9"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px at ${pos.x}% ${pos.y}%, ${project.color}22, transparent 70%)`,
        }}
      />
      <div className="relative flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div
            className="text-[10px] uppercase tracking-[0.25em]"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: project.color }}
          >
            Project · {String(index + 1).padStart(2, "0")}
          </div>
          <h3
            className="mt-3 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
          >
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.blurb}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-zinc-400"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 transition-all group-hover:border-white/30 group-hover:bg-white group-hover:text-zinc-950">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}
