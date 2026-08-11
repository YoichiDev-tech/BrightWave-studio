import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import BloomMock from "./portfolioMocks/BloomMock";
import BrowserChrome from "./Badge";

/* Template 1 — editorial broadsheet, for a bakery client */
function LedgerMock() {
  return (
    <BrowserChrome bg="#F1EBDF">
      <div className="flex h-full flex-col p-5" style={{ color: "#2B2416" }}>
        <p className="text-[9px] uppercase tracking-[0.25em]" style={{ fontFamily: "Georgia, serif" }}>
          Est. 2019 — Fielding &amp; Rye
        </p>
        <h4 className="mt-2 text-2xl leading-none" style={{ fontFamily: "Georgia, serif" }}>
          The Weekly
          <br />
          Loaf.
        </h4>
        <div className="mt-3 h-px w-full" style={{ background: "#C7401F", opacity: 0.4 }} />
        <div className="mt-3 grid flex-1 grid-cols-3 gap-3 text-[9px] leading-snug" style={{ fontFamily: "Georgia, serif" }}>
          <p className="col-span-2 border-r pr-3" style={{ borderColor: "rgba(43,36,22,0.15)" }}>
            Sourdough baked fresh each morning, delivered to five neighborhoods
            by nine. Order ahead for weekend pickup.
          </p>
          <div className="flex flex-col justify-between">
            <span className="inline-block rounded-full px-2 py-1 text-center" style={{ background: "#C7401F", color: "#F1EBDF" }}>
              Order
            </span>
            <span className="text-[8px] opacity-60">No. 04 / Bakery</span>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* Template 2 — dark SaaS product, glass panels */
function NovaMock() {
  return (
    <BrowserChrome bg="#0B1220">
      <div className="relative h-full p-5 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-40 blur-2xl"
          style={{ background: "#37E6C4" }}
        />
        <p className="font-mono text-[9px] uppercase tracking-widest text-white/50">Nova Cloud — dashboard</p>
        <h4 className="mt-2 font-mono text-xl font-semibold">Uptime 99.98%</h4>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[70, 45, 90].map((h, idx) => (
            <div key={idx} className="flex h-16 items-end rounded-md bg-white/5 p-1.5">
              <div
                className="w-full rounded-sm"
                style={{ height: `${h}%`, background: "linear-gradient(180deg, #37E6C4, #2AA9FF)" }}
              />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[9px] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-[#37E6C4]" />
          All systems operational
        </div>
      </div>
    </BrowserChrome>
  );
}

interface Project {
  name: string;
  category: string;
  desc: string;
  mock: () => ReactElement;
  hover: "slide" | "scan" | "wiggle";
  path: string;
}

const projects: Project[] = [
  {
    name: "Fielding & Rye",
    category: "Bakery — full redesign",
    desc: "An editorial, broadsheet-inspired site for a neighborhood bakery — hairline rules, serif type, and a menu that reads like a printed page.",
    mock: LedgerMock,
    hover: "slide",
    path: "/work/fielding-and-rye",
  },
  {
    name: "Nova Cloud",
    category: "SaaS — product site",
    desc: "A dark, data-forward dashboard-style site for a monitoring startup, built to make technical credibility legible at a glance.",
    mock: NovaMock,
    hover: "scan",
    path: "/work/nova-cloud",
  },
  {
    name: "Bloom Market",
    category: "Boutique — landing page",
    desc: "A playful, maximalist landing page for a flower and gift shop — big type, organic shapes, and a palette built to be shared.",
    mock: BloomMock,
    hover: "wiggle",
    path: "/work/bloom-market/case-study",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-ink py-24 text-paper md:py-32 cursor-default">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="font-mono text-[12px] uppercase tracking-widest text-paper/50">Selected work</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Three templates. Three completely different businesses.
          </h2>
          <p className="mt-4 text-paper/60">
            Every one of these started as nothing more than an idea. The goal
            is always a site that looks built for your business, not picked
            off a shelf. Click a card to open the full template.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project, i) => {
            const Mock = project.mock;
            return (
              <Reveal key={project.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <Link
                  to={project.path}
                  aria-label={`View the full ${project.name} template`}
                  className="group block h-full rounded-2xl border border-ink-line bg-ink-2/60 p-4 transition-transform hover:scale-[1.02] hover:bg-ink-2 hover:border-amber"
                >
                  <div
                    className={
                      project.hover === "slide"
                        ? "relative transition-transform duration-500 group-hover:-translate-y-1.5"
                        : project.hover === "scan"
                          ? "relative transition-transform duration-500 group-hover:scale-[1.02]"
                          : "relative transition-transform duration-500 group-hover:rotate-[0.5deg] group-hover:scale-[1.02]"
                    }
                  >
                    <Mock />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-ink/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span className="translate-y-2 rounded-full bg-paper px-4 py-2 font-display text-xs font-semibold text-ink shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                        View case study &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="p-2 pt-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                      <span className="font-mono text-[11px] uppercase tracking-wide text-paper/40 transition-transform duration-300 group-hover:translate-x-1">
                        &rarr;
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-paper/40">{project.category}</p>
                    <p className="mt-3 text-sm leading-relaxed text-paper/65">{project.desc}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}