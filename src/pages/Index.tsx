import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Facebook, Instagram, Linkedin, ArrowUpRight, Mail } from "lucide-react";

export default function Index() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = orbRef.current;
      if (!el) return;
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const year = new Date().getFullYear();

  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-stone-300 antialiased selection:bg-amber-200 selection:text-stone-900"
      style={{
        backgroundColor: "#0b0b10",
        fontFamily: "'Geist', ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <Helmet>
        <title>Fardin Ahmed Shovon | Entrepreneur & Founder of ApkBongo</title>
        <meta
          name="description"
          content="Fardin Ahmed Shovon — entrepreneur, student, and founder of ApkBongo. Building startups, platforms, and future-focused ideas."
        />
        <link rel="canonical" href="https://fardinahmedshovon.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Fardin Ahmed Shovon",
            jobTitle: "Entrepreneur",
            url: "https://fardinahmedshovon.com",
            email: "contact@shovon.iam.bd",
            sameAs: [
              "https://www.facebook.com/fardinahmedshovon",
              "https://www.instagram.com/fardinahmedshovon",
              "https://www.linkedin.com/in/fardinahmedshovon",
            ],
            worksFor: { "@type": "Organization", name: "ApkBongo" },
          })}
        </script>
      </Helmet>

      {/* Ambient background layers */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(60% 40% at 80% 0%, rgba(251, 191, 36, 0.10), transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(99, 102, 241, 0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div
        ref={orbRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background:
            "radial-gradient(420px at var(--mx, 50%) var(--my, 50%), rgba(251, 191, 36, 0.08), transparent 70%)",
        }}
      />

      {/* Top bar */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-6 sm:px-8 md:pt-10">
          <a
            href="/"
            className="flex items-center gap-2 text-stone-200"
            aria-label="Fardin Ahmed Shovon — home"
          >
            <span
              className="grid h-9 w-9 place-items-center rounded-full border border-amber-200/30 bg-stone-900/60 text-sm tracking-tight text-amber-200"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              fs
            </span>
            <span className="hidden text-sm font-medium tracking-wide text-stone-200 sm:inline">
              Fardin Ahmed Shovon
            </span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-1 text-xs sm:gap-2">
            {[
              { href: "#about", label: "About" },
              { href: "#ventures", label: "Ventures" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 font-medium uppercase tracking-[0.18em] text-stone-400 transition-colors hover:text-amber-200"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* Hero */}
        <section className="grid grid-cols-12 gap-8 pt-16 pb-24 md:pt-28 md:pb-36">
          <div className="col-span-12 md:col-span-8">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-700/70 bg-stone-900/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Available for new ventures
            </p>
            <h1
              className="text-balance text-5xl leading-[1.02] tracking-tight text-stone-100 sm:text-6xl md:text-7xl lg:text-[5.5rem]"
              style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400 }}
            >
              Turning <em className="text-amber-200">visions</em>
              <br />
              into <em className="text-amber-200">ventures</em>.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-stone-400 sm:text-lg">
              I'm <span className="text-stone-200">Fardin Ahmed Shovon</span> — entrepreneur,
              student, and founder of ApkBongo. I build startups, platforms, and future-focused
              ideas at the edge of technology and creativity.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-amber-200 px-5 py-3 text-sm font-medium text-stone-900 transition-transform hover:-translate-y-0.5"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#ventures"
                className="inline-flex items-center gap-2 rounded-full border border-stone-700 px-5 py-3 text-sm font-medium text-stone-200 transition-colors hover:border-amber-200/60 hover:text-amber-200"
              >
                See ventures
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <div className="relative ml-auto w-fit">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full opacity-60 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 120deg, rgba(251,191,36,0.35), rgba(168,85,247,0.25), rgba(251,191,36,0.35))",
                }}
              />
              <img
                src="/images/profile/shovon.webp"
                alt="Portrait of Fardin Ahmed Shovon, entrepreneur and founder of ApkBongo"
                loading="eager"
                decoding="async"
                width={224}
                height={224}
                className="relative h-40 w-40 rounded-full border border-stone-700/60 object-cover shadow-2xl sm:h-48 sm:w-48 md:h-56 md:w-56"
              />
            </div>
          </div>
        </section>

        <hr className="border-stone-800/80" />

        {/* About */}
        <section id="about" className="scroll-mt-24 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p
                className="text-xs font-medium uppercase tracking-[0.3em] text-amber-200/80"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                01 — About
              </p>
              <h2
                className="mt-3 text-3xl text-stone-100 sm:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                A builder, in motion.
              </h2>
            </div>
            <div className="col-span-12 space-y-5 text-base leading-relaxed text-stone-400 md:col-span-8 md:text-[17px]">
              <p>
                I'm passionate about building startups, platforms, and future-focused ideas. I
                enjoy turning concepts into real experiences that create value and solve problems
                through technology and creativity.
              </p>
              <p>
                As the founder of <span className="text-stone-200">ApkBongo</span>, I'm
                continuously exploring opportunities in startups, innovation, and modern web
                experiences. My approach combines vision, execution, and long-term thinking — with
                a strong focus on building meaningful things that last.
              </p>
              <p>
                I believe the future belongs to creators and builders who are willing to learn,
                adapt, and innovate. Every project I work on is a step toward creating impactful
                experiences and solving real-world problems.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-stone-800/80" />

        {/* Ventures */}
        <section id="ventures" className="scroll-mt-24 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p
                className="text-xs font-medium uppercase tracking-[0.3em] text-amber-200/80"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                02 — Ventures
              </p>
              <h2
                className="mt-3 text-3xl text-stone-100 sm:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                What I'm building.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <ul className="divide-y divide-stone-800/80 border-y border-stone-800/80">
                {[
                  {
                    name: "ApkBongo",
                    tagline: "Simplifying how people discover and access apps and games.",
                    status: "Active",
                    href: "#",
                  },
                ].map((v) => (
                  <li key={v.name}>
                    <a
                      href={v.href}
                      className="group flex flex-col gap-2 py-6 transition-colors hover:bg-stone-900/30 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <h3
                            className="text-2xl text-stone-100 transition-colors group-hover:text-amber-200 sm:text-3xl"
                            style={{ fontFamily: "'Instrument Serif', serif" }}
                          >
                            {v.name}
                          </h3>
                          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-300">
                            {v.status}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-stone-400 sm:text-base">{v.tagline}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-stone-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber-200" />
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-stone-500">More projects in the works.</p>
            </div>
          </div>
        </section>

        <hr className="border-stone-800/80" />

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 py-20 md:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p
                className="text-xs font-medium uppercase tracking-[0.3em] text-amber-200/80"
                style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
              >
                03 — Contact
              </p>
              <h2
                className="mt-3 text-3xl text-stone-100 sm:text-4xl"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Let's build something.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="rounded-3xl border border-stone-800/80 bg-stone-900/30 p-6 sm:p-10">
                <p className="max-w-lg text-base leading-relaxed text-stone-400 sm:text-lg">
                  Have a vision you want to discuss, or an idea worth chasing? I read every
                  message — let's connect.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="mailto:contact@shovon.iam.bd"
                    className="group inline-flex items-center gap-2 rounded-full bg-amber-200 px-5 py-3 text-sm font-medium text-stone-900 transition-transform hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    contact@shovon.iam.bd
                  </a>
                  <div className="flex items-center gap-2">
                    {[
                      { Icon: Facebook, href: "https://www.facebook.com/fardinahmedshovon", label: "Facebook" },
                      { Icon: Instagram, href: "https://www.instagram.com/fardinahmedshovon", label: "Instagram" },
                      { Icon: Linkedin, href: "https://www.linkedin.com/in/fardinahmedshovon", label: "LinkedIn" },
                    ].map(({ Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        title={label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-stone-700 text-stone-300 transition-colors hover:border-amber-200/60 hover:text-amber-200"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-stone-800/80">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-5 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:px-8">
          <p>© {year} Fardin Ahmed Shovon</p>
          <p
            className="tracking-[0.25em] uppercase text-stone-600"
            style={{ fontFamily: "'Geist Mono', ui-monospace, monospace" }}
          >
            Ideas · Execution · Impact
          </p>
        </div>
      </footer>
    </div>
  );
}
