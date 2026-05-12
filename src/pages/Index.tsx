import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Linkedin, Twitter, Instagram, Github, Mail, ArrowUpRight } from "lucide-react";

const BG = "#403f3c";
const FG = "#F5F5F5";
const MUTED = "#bdbab3";
const BORDER = "rgba(245,245,245,0.14)";

const NAV = [
  { id: "about", label: "About" },
  { id: "ventures", label: "Ventures" },
  { id: "contact", label: "Contact" },
];

const VENTURES = [
  {
    title: "ApkBongo",
    description:
      "A curated Android app discovery platform built for speed, clarity, and editorial-quality writing.",
    url: "https://apkbongo.com",
    tag: "Founder · 2024",
  },
  {
    title: "Founder Notes",
    description:
      "A personal writing space documenting product, design, and lessons from building from Bangladesh.",
    url: "#",
    tag: "Writing",
  },
  {
    title: "Studio Work",
    description:
      "Independent product, brand, and engineering work for early-stage founders across South Asia and the GCC.",
    url: "#",
    tag: "Independent",
  },
];

const SOCIALS = [
  { icon: Linkedin, url: "https://linkedin.com/", label: "LinkedIn" },
  { icon: Twitter, url: "https://x.com/", label: "X" },
  { icon: Instagram, url: "https://instagram.com/", label: "Instagram" },
  { icon: Github, url: "https://github.com/", label: "GitHub" },
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
      <Helmet>
        <title>Fardin Ahmed Shovon — Entrepreneur</title>
        <meta
          name="description"
          content="Fardin Ahmed Shovon — Entrepreneur turning visions into ventures. Founder of ApkBongo, building thoughtful digital products from Bangladesh."
        />
        <meta name="theme-color" content={BG} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600&display=swap"
        />
      </Helmet>

      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: `${BG}cc`, borderBottom: `1px solid ${BORDER}` }}>
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="text-sm font-medium tracking-wide"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            FAS.
          </a>
          <ul className="flex items-center gap-7 text-xs uppercase tracking-[0.18em]" style={{ color: MUTED }}>
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition-colors hover:text-white">
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
              width: 168,
              height: 168,
              border: `1px solid ${BORDER}`,
              boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
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
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            Fardin Ahmed Shovon
          </h1>

          <p
            className="mt-5 text-xs uppercase tracking-[0.32em]"
            style={{ color: MUTED }}
          >
            Entrepreneur
          </p>
          <p className="mt-3 max-w-md text-base md:text-lg" style={{ color: FG }}>
            Turning visions into ventures.
          </p>

          {/* Socials */}
          <ul className="mt-10 flex items-center gap-6">
            {SOCIALS.map(({ icon: Icon, url, label }) => (
              <li key={label}>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="block opacity-60 transition-opacity hover:opacity-100"
                >
                  <Icon className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section id="about" className="border-t py-20 md:py-28" style={{ borderColor: BORDER }}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
              About
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              A founder building quietly, shipping deliberately.
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed md:text-base" style={{ color: MUTED }}>
              <p>
                I&apos;m an entrepreneur and developer based in Bangladesh, working at the
                intersection of design, engineering, and product. I focus on calm,
                well-considered software that respects the people who use it.
              </p>
              <p>
                Today I lead{" "}
                <a
                  href="https://apkbongo.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline-offset-4 hover:underline"
                  style={{ color: FG }}
                >
                  ApkBongo
                </a>
                , a curated Android discovery platform. Before that, I spent years
                freelancing — designing landing pages, building dashboards, and helping
                early-stage founders get their first versions out the door.
              </p>
            </div>
          </div>
        </section>

        {/* Ventures */}
        <section id="ventures" className="border-t py-20 md:py-28" style={{ borderColor: BORDER }}>
          <div className="mb-14 text-center">
            <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
              Ventures
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              Selected work & companies.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VENTURES.map((v) => (
              <a
                key={v.title}
                href={v.url}
                target={v.url.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer noopener"
                className="group flex flex-col rounded-2xl p-7 transition-colors"
                style={{
                  border: `1px solid ${BORDER}`,
                  backgroundColor: "rgba(245,245,245,0.02)",
                }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTED }}>
                    {v.tag}
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </div>
                <h3
                  className="mt-8 text-2xl"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
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
        <section id="contact" className="border-t py-24 text-center md:py-32" style={{ borderColor: BORDER }}>
          <p className="text-xs uppercase tracking-[0.32em]" style={{ color: MUTED }}>
            Contact
          </p>
          <h2
            className="mx-auto mt-4 max-w-2xl text-3xl md:text-5xl"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
          >
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px]" style={{ color: MUTED }}>
            I&apos;m always open to thoughtful conversations about new ventures,
            collaborations, or just a good cup of coffee.
          </p>
          <a
            href="mailto:contact@shovon.iam.bd"
            className="mt-10 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: FG, color: BG }}
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </section>
      </main>

      <footer className="border-t py-10 text-center text-xs" style={{ borderColor: BORDER, color: MUTED }}>
        <p>© 2026 Fardin Ahmed Shovon</p>
        <p className="mt-2 uppercase tracking-[0.32em]">Ideas. Execution. Impact.</p>
      </footer>
    </div>
  );
}
