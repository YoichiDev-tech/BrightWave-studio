import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-ink py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">
            Who We Are
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            From hospitality to building digital experiences.
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-14 mx-auto max-w-3xl space-y-8">
          <p className="text-ink-soft text-lg leading-relaxed">
            We're BrightWave Studio — a small, focused team with roots in hospitality
            and service-based businesses. Before stepping into development, we spent
            years working directly with customers, solving real problems in real
            environments. That experience shapes everything we build today.
          </p>

          <p className="text-ink-soft text-lg leading-relaxed">
            We understand how small businesses operate, what slows them down, and
            what actually helps them grow. A website isn't just a design — it's a
            tool that needs to support your workflow, your customers, and your goals.
          </p>

          <p className="text-ink-soft text-lg leading-relaxed">
            When we moved into development, we brought that mindset with us. Every
            project we take on is built with clarity, simplicity, and real-world
            usability. No bloated features, no confusing dashboards, no agency-style
            upsells — just clean, fast, effective websites that do their job.
          </p>

          <p className="text-ink-soft text-lg leading-relaxed">
            If you're a small business owner, you're not hiring “just a coder.”
            You're partnering with a team that understands your world and builds
            with your customers in mind.
          </p>
        </Reveal>

        <Reveal delay={2} className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
            style={{ background: "linear-gradient(100deg, #FFB84D 0%, #FF7A59 100%)" }}
          >
            Let's Work Together
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}