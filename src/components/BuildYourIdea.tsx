import type { Intent } from "../pages/Home";
import Reveal from "./Reveal";

interface BuildYourIdeaProps {
  onSelectIntent: (intent: Intent) => void;
}

const EXAMPLES = [
  "Your brand-new startup's first site",
  "A barber shop booking site",
  "A neighborhood supermarket site",
  "Something nobody's built yet",
];

export default function BuildYourIdea({ onSelectIntent }: BuildYourIdeaProps) {
  return (
    <section id="build" className="grain relative overflow-hidden bg-ink py-24 md:py-32 cursor-default">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[130px] will-change-transform transform-gpu"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">Starting from zero</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            Got an idea? We'll build it from scratch.
          </h2>
          <p className="mt-5 text-ink-soft">
            No site to fix, no existing brand to work from — just something
            you've wanted to build. That's enough for us to start. Tell us
            what it is and what it's for, and we'll take it from there.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-14">
          <div className="flex flex-wrap justify-center gap-3">
            {EXAMPLES.map((example) => (
              <span
                key={example}
                className="rounded-full border border-ink-line bg-ink-2/60 px-5 py-2.5 font-mono text-[13px] text-ink-soft"
              >
                {example}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-14 flex justify-center">
          <a
            href="#contact"
            onClick={() => onSelectIntent("build")}
            className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            style={{ background: "linear-gradient(100deg, #FFB84D 0%, #FF7A59 100%)" }}
          >
            Tell Us Your Idea
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}