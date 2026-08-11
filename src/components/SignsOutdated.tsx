import type { Intent } from "../pages/Home";
import Reveal from "./Reveal";

interface SignsOutdatedProps {
  onSelectIntent: (intent: Intent) => void;
}

const SIGNS = [
  "It doesn't look right on a phone — and most of your visitors are on one.",
  "It takes more than a few seconds to load, so people leave before it finishes.",
  "The design hasn't changed since it was first built.",
  "There's no clear next step for a visitor to take.",
  "You wouldn't want a new customer's first impression to be this page.",
];

export default function SignsOutdated({ onSelectIntent }: SignsOutdatedProps) {
  return (
    <section className="border-y border-ink-line bg-ink-2 py-20 md:py-2 cursor-default">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">A quick gut check</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-paper md:text-4xl">
              Does your site look and feel <span className="text-gradient">old?</span>
            </h2>
            <p className="mt-5 max-w-sm text-ink-soft">
              Most business owners don't notice it happening gradually — until
              a visitor bounces in three seconds and picks a competitor
              instead.
            </p>
            <a
              href="#contact"
              onClick={() => onSelectIntent("audit")}
              className="group mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-amber"
            >
              Get a free audit — no obligation
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </Reveal>

          <Reveal delay={1}>
            <ul className="divide-y divide-ink-line overflow-hidden rounded-2xl border border-ink-line">
              {SIGNS.map((sign) => (
                <li key={sign} className="flex items-start gap-4 bg-ink px-6 py-5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-coral/50 text-coral"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path d="M12 8v5M12 16.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className="text-[15px] leading-relaxed text-ink-soft">{sign}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}