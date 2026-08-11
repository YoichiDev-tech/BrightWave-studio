import Reveal from "./Reveal";

export default function FAQ() {
  return (
    <section id="faq" className="grain relative overflow-hidden bg-ink py-24 md:py-32 cursor-default">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[130px]"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            Everything you need to know before we start.
          </h2>
        </Reveal>

        <Reveal delay={1} className="mt-16 space-y-10">
          {/* FAQ Item */}
          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              How long does a project take?
            </h3>
            <p className="text-ink-soft text-sm">
              Most landing pages take 3-7 days. Small business sites usually take
              2-3 weeks depending on content readiness and revision rounds.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              Do I own the site after it's built?
            </h3>
            <p className="text-ink-soft text-sm">
              Yes — you fully own the code, design, and all exported assets. Nothing
              is locked behind subscriptions or proprietary builders.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              What if I need changes after launch?
            </h3>
            <p className="text-ink-soft text-sm">
              You can request additional updates anytime. Small fixes are quick;
              larger changes can be scoped as a mini-project.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              Do you offer hosting or maintenance?
            </h3>
            <p className="text-ink-soft text-sm">
              Hosting and domains are handled by providers like Vercel or Namecheap.
              We do offer ongoing maintanance, but you stay in full control.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              What do you need from me to get started?
            </h3>
            <p className="text-ink-soft text-sm">
              A short description of your business, your goals, any existing content,
              and examples of sites you like. That's enough to begin.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber">
            <h3 className="font-display text-xl text-paper mb-3">
              What if I don't have a logo or brand yet?
            </h3>
            <p className="text-ink-soft text-sm">
              No problem — We can design a simple starter brand or work with neutral
              styling until you have a full identity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}