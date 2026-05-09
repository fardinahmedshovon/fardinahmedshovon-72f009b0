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
  return (
    <div className="min-h-screen bg-[#0f172a] font-sans leading-relaxed text-slate-400 antialiased selection:bg-lime-300 selection:text-lime-950 scroll-smooth">

      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-slate-100">Fardin Ahmed Shovon</h1>
          <p className="mt-4 text-xl text-slate-400">Entrepreneur</p>
          <p className="mt-2 text-slate-500">Turning visions into ventures.</p>

          <div className="mt-8 flex justify-center gap-6">
            <a href="https://www.facebook.com/fardinahmedshovon" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com/fardinahmedshovon" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/fardinahmedshovon" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-200">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          <section className="mt-16 text-left">
            <h2 className="text-2xl font-bold text-slate-100">About</h2>
            <p className="mt-4 text-slate-400">
              I'm Fardin Ahmed Shovon, an 18-year-old entrepreneur and student passionate about building startups and innovative platforms. As the founder of ApkBongo, I'm focused on making apps and games more accessible.
            </p>
          </section>

          <section className="mt-12 text-left">
            <h2 className="text-2xl font-bold text-slate-100">Ventures</h2>
            <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/20 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-100">ApkBongo</h3>
                <span className="rounded-full bg-lime-400/10 px-2 py-1 text-xs font-medium text-lime-300">Active</span>
              </div>
              <p className="mt-2 text-slate-400">Simplifying how people discover and access apps and games.</p>
            </div>
          </section>

          <section className="mt-12 text-left">
            <h2 className="text-2xl font-bold text-slate-100">Contact</h2>
            <a href="mailto:contact@shovon.iam.bd" className="mt-4 inline-block rounded border border-lime-300 px-6 py-3 font-medium text-lime-300 hover:bg-lime-300/10">
              Get In Touch
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
