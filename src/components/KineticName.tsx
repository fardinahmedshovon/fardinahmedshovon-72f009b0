import { useEffect, useRef, useState } from "react";

const NAME_TEXT = "Fardin Ahmed Shovon";

export default function KineticName() {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleMove(e: React.MouseEvent) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    const mx = e.clientX - containerRect.left;
    const my = e.clientY - containerRect.top;
    letterRefs.current.forEach((el) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const lx = r.left + r.width / 2 - containerRect.left;
      const ly = r.top + r.height / 2 - containerRect.top;
      const dx = mx - lx;
      const dy = my - ly;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 70;
      if (dist < radius) {
        const strength = 1 - dist / radius;
        const rot = (dx / radius) * 14 * strength;
        el.style.transform = `translateY(${(-strength * 6).toFixed(1)}px) rotate(${rot.toFixed(1)}deg)`;
      } else {
        el.style.transform = "translateY(0) rotate(0deg)";
      }
    });
  }

  function handleLeave() {
    letterRefs.current.forEach((el) => {
      if (el) el.style.transform = "translateY(0) rotate(0deg)";
    });
  }

  let letterIndex = 0;

  return (
    <h1
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="mt-10 text-4xl leading-[1.05] tracking-tight md:text-[2.75rem] lg:text-6xl text-balance"
      style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        color: "#F8F9FA",
      }}
    >
      {NAME_TEXT.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((ch, ci) => {
            const idx = letterIndex++;
            return (
              <span
                key={ci}
                ref={(el) => {
                  letterRefs.current[idx] = el;
                }}
                className="inline-block"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.45s ease ${idx * 26}ms, transform 0.45s ease ${idx * 26}ms`,
                }}
              >
                {ch}
              </span>
            );
          })}
          {wi < NAME_TEXT.split(" ").length - 1 ? "\u00A0" : null}
        </span>
      ))}
    </h1>
  );
}
