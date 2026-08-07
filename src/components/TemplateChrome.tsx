import { Link } from "react-router-dom";

interface TemplateChromeProps {
  /** Text/background tuned per-template so the badges sit well on each palette. */
  tone?: "light" | "dark";
}

export function BackToStudioBadge({ tone = "dark" }: TemplateChromeProps) {
  const isDark = tone === "dark";
  return (
    <Link
      to="/"
      className={`fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wide backdrop-blur-md transition-transform hover:scale-105 sm:left-6 sm:top-6 ${
        isDark
          ? "border-white/15 bg-black/40 text-white/80 hover:text-white"
          : "border-black/10 bg-white/70 text-black/70 hover:text-black"
      }`}
    >
      <span aria-hidden="true">&larr;</span>
      BrightWave Studio
    </Link>
  );
}

export function PickThisTemplateBadge({ tone = "dark" }: TemplateChromeProps) {
  const isDark = tone === "dark";
  return (
    <Link
      to="/#contact"
      className={`fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 font-display text-sm font-semibold shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6 ${
        isDark ? "text-ink" : "text-white"
      }`}
      style={{
        background: isDark
          ? "linear-gradient(100deg, #FFB84D 0%, #FF7A59 100%)"
          : "linear-gradient(100deg, #3A1220 0%, #7A2E4D 100%)",
      }}
    >
      This is my style &rarr;
    </Link>
  );
}