import { useEffect } from "react";
import { Facebook, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const BG = "#403f3c";
const FG = "#F8F9FA";
const MUTED = "#bdbab3";
const BORDER = "rgba(248,249,250,0.14)";

const NAV = [
  { id: "about", label: "About" },
  { id: "ventures", label: "Ventures" },
  { id: "contact", label: "Contact" },
];

const VENTURES = [
  {
    title: "ApkBongo",
    description: "Simplifying how people discover and access apps and games.",
    url: "https://apkbongo.com",
    tag: "Founder · Active",
  },
];

const SOCIALS = [
  { icon: Facebook, url: "https://www.facebook.com/fardinahmedshovon", label: "Facebook" },
  { icon: Instagram, url: "https://www.instagram.com/fardinahmedshovon", label: "Instagram" },
  { icon: Linkedin, url: "https://www.linkedin.com/in/fardinahmedshovon", label: "LinkedIn" },
  { icon: Mail, url: "mailto:contact@shovon.iam.bd", label: "Email" },
];

export default function Index() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: BG,
        color: FG,
        fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
      className="min-h-screen antialiased"
    >



      {/* Top nav */}
      <header
        className="sticky top-0 z-40 backdrop-blur-md"
        style={{ backgroundColor: `${BG}cc`, borderBottom: `1px solid ${BORDER}` }}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-center px-6 py-4">
          <ul
            className="flex items-center gap-8 text-xs uppercase tracking-[0.22em]"
            style={{ color: MUTED }}
          >
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className="transition-colors duration-300 hover:text-[color:var(--fg)]"
                  style={{ ["--fg" as never]: FG }}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center pt-20 pb-24 text-center md:pt-28 md:pb-32">
          <div
            className="overflow-hidden rounded-full"
            style={{
              width: 176,
              height: 176,
              border: `1px solid ${FG}`,
              boxShadow:
                "0 25px 50px -20px rgba(0,0,0,0.55), 0 8px 20px -8px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src="/images/profile/shovon.webp"
              alt="Fardin Ahmed Shovon portrait"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>

          <h1
            className="mt-10 text-4xl leading-[1.05] tracking-tight md:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: FG }}
          >
            Fardin Ahmed Shovon
          </h1>

          <p
            className="mt-5 text-xs uppercase tracking-[0.32em]"
            style={{ color: MUTED, fontFamily: "Inter, sans-serif" }}
          >
            Entrepreneur
          </p>
          <p
            className="mt-3 max-w-md text-base md:text-lg"
            style={{ color: FG, fontFamily: "Inter, sans-serif" }}
          >
            Turning visions into ventures.
          </p>

          {/* Socials */}
          <ul className="mt-10 flex items-center gap-6">
            {SOCIALS.map(({ icon: Icon, url, label }) => (
              <li key={label}>
                <a
                  href={url}
                  target={url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="block opacity-60 transition-all duration-300 hover:-translate-y-0.5 hover:opacity-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t py-20 md:py-28"
          style={{ borderColor: BORDER }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
              About
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: FG }}
            >
              A founder building quietly, shipping deliberately.
            </h2>
            <div
              className="mt-8 space-y-5 text-[15px] leading-relaxed md:text-base"
              style={{ color: MUTED }}
            >
              <p>
                I’m Fardin Ahmed Shovon, an 19-year-old entrepreneur and student passionate
                about building startups, platforms, and future-focused ideas. I enjoy turning
                concepts into real experiences that create value and solve problems through
                technology and creativity.
              </p>
              <p>
                As the founder of{" "}
                <a
                  href="https://apkbongo.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-4 decoration-1 transition-opacity hover:opacity-80"
                  style={{ color: FG }}
                >
                  ApkBongo
                </a>
                , an app platform focused on making apps and games more accessible, I’m
                continuously exploring opportunities in startups, innovation, and modern web
                experiences. My approach combines vision, execution, and long-term thinking —
                with a strong focus on building meaningful things that last.
              </p>
              <p>
                I believe the future belongs to creators and builders who are willing to
                learn, adapt, and innovate. Every project I work on is a step toward creating
                impactful experiences, solving real-world problems, and building for the
                future.
              </p>
              <p>
                Driven by curiosity and ambition, I’m constantly learning, experimenting, and
                pushing ideas forward with the goal of creating startups that leave a lasting
                impact.
              </p>
            </div>
          </div>
        </section>

        {/* Ventures */}
        <section
          id="ventures"
          className="border-t py-20 md:py-28"
          style={{ borderColor: BORDER }}
        >
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
              Ventures
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: FG }}
            >
              Selected work & companies.
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl gap-5">
            {VENTURES.map((v) => (
              <a
                key={v.title}
                href={v.url}
                target={v.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="group flex flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: `1px solid ${BORDER}`,
                  backgroundColor: "rgba(248,249,250,0.02)",
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className="text-[11px] uppercase tracking-[0.22em]"
                    style={{ color: MUTED }}
                  >
                    {v.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
                <h3
                  className="mt-8 text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: FG }}
                >
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
                  {v.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t py-24 text-center md:py-32"
          style={{ borderColor: BORDER }}
        >
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
            Contact
          </p>
          <h2
            className="mx-auto mt-4 max-w-2xl text-3xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: FG }}
          >
            Have an idea worth building?
          </h2>
          <p
            className="mx-auto mt-5 max-w-md text-[15px]"
            style={{ color: MUTED }}
          >
            I’m always open to thoughtful conversations about new ventures, collaborations,
            or just a good cup of coffee.
          </p>
          <a
            href="mailto:contact@shovon.iam.bd"
            className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: FG, color: BG }}
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer
        className="border-t py-10 text-center"
        style={{ borderColor: BORDER }}
      >
        <p className="text-sm" style={{ color: FG }}>
          © 2026 Fardin Ahmed Shovon
        </p>
        <p
          className="mt-2 text-[11px] uppercase tracking-[0.32em]"
          style={{ color: MUTED }}
        >
          Ideas. Execution. Impact.
        </p>
      </footer>
    </div>
  );
}
