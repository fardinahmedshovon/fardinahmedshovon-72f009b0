import { useEffect, useState } from "react";

type Action = {
  label: string;
  hint: string;
  action: () => void;
};

const ACTIONS: Action[] = [
  {
    label: "About",
    hint: "G A",
    action: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Ventures",
    hint: "G V",
    action: () =>
      document.getElementById("ventures")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Contact",
    hint: "G C",
    action: () =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Email me",
    hint: "\u21B5",
    action: () => {
      window.location.href = "mailto:contact@shovon.iam.bd";
    },
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open quick actions"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 40,
          background: "#403f3c",
          color: "#F8F9FA",
          border: "0.5px solid rgba(248,249,250,0.16)",
          borderRadius: 8,
          padding: "8px 12px",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          cursor: "pointer",
        }}
      >
        ⌘K
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick actions"
        onClick={() => setOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "18vh",
          zIndex: 50,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.18s ease",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            width: "min(90vw, 340px)",
            background: "#403f3c",
            border: "0.5px solid rgba(248,249,250,0.16)",
            borderRadius: 10,
            overflow: "hidden",
            transform: open ? "scale(1)" : "scale(0.96)",
            transition: "transform 0.18s ease",
          }}
        >
          {ACTIONS.map((a) => (
            <div
              key={a.label}
              role="button"
              tabIndex={0}
              onClick={() => {
                a.action();
                setOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  a.action();
                  setOpen(false);
                }
              }}
              style={{
                padding: "10px 14px",
                fontSize: 13,
                color: "#F8F9FA",
                fontFamily: "Inter, sans-serif",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{a.label}</span>
              <span style={{ opacity: 0.6 }}>{a.hint}</span>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
