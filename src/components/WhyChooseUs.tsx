import type { ReactElement } from "react";
import Reveal from "./Reveal";

interface Reason {
  title: string;
  desc: string;
  icon: ReactElement;
}

const reasons: Reason[] = [
  {
    title: "Fast loading",
    desc: "Optimized assets and lean code so pages load in seconds, not minutes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Mobile-first",
    desc: "Designed for the phone in your customer's hand, then scaled up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2.5" width="10" height="19" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 18.5h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Smooth animations",
    desc: "Motion used with purpose — to guide attention, never to distract.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h4l2-7 4 14 2-7h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SEO-friendly",
    desc: "Semantic markup and clean structure so search engines find you first.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="m20 20-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Modern frameworks",
    desc: "Built on React and TypeScript — reliable today and easy to extend later.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Tailored to each business",
    desc: "No shared templates — every layout and color choice starts from your brand.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-ink-2 py-24 md:py-32 cursor-default">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">Why BrightWave</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-[2.75rem]">
              Built to a standard, not a shortcut.
            </h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              Every project is measured against the same bar before it ships —
              regardless of industry or budget.
            </p>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full bg-ink-2 p-6 transition-colors duration-300 hover:bg-ink">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-amber">
                    <div className="h-4 w-4">{reason.icon}</div>
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{reason.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}