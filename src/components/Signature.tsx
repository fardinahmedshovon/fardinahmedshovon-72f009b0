import { useEffect, useRef, useState } from "react";

type Props = { width?: number; className?: string; label?: string };

export default function Signature({ width = 220, className = "", label }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        ref={ref}
        viewBox="0 0 320 120"
        width={width}
        role="img"
        aria-label="Signature of Fardin Ahmed Shovon"
        style={{ overflow: "visible" }}
      >
        <text
          x="160"
          y="78"
          textAnchor="middle"
          className={`pv-signature ${drawn ? "is-drawn" : ""}`}
          style={{ fontFamily: "'Mrs Saint Delafield', cursive", fontSize: 86 }}
        >
          Shovon
        </text>
        <path
          d="M70 96 C 130 88, 210 86, 268 92"
          fill="none"
          stroke="rgba(248,249,250,0.55)"
          strokeWidth="1.2"
          strokeLinecap="round"
          pathLength={1}
          className={`pv-signature-line ${drawn ? "is-drawn" : ""}`}
        />
      </svg>
      {label && (
        <span className="mt-1 text-[11px] uppercase tracking-[0.32em]" style={{ color: "#bdbab3" }}>
          {label}
        </span>
      )}
    </div>
  );
}
