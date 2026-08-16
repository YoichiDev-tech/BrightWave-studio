import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import type { Intent } from "../pages/Home";

interface CoreOption {
  id: string;
  label: string;
  price: number;
  weeks: number;
  intent: Intent;
  description: string;
}

interface AddonOption {
  id: string;
  label: string;
  price: number;
  weeks: number;
  description: string;
}

// Mirrors the tiers already shown in Pricing.tsx, plus the full-stack/backend
// scopes this configurator is meant to surface
// Keep prices in sync with Pricing.tsx if either changes
const CORE_OPTIONS: CoreOption[] = [
  {
    id: "landing-redesign",
    label: "Landing Page Redesign",
    price: 350,
    weeks: 1,
    intent: "audit",
    description: "Modernize one existing page: layout, speed, mobile-first.",
  },
  {
    id: "business-site",
    label: "Small Business Site",
    price: 1000,
    weeks: 2,
    intent: "build",
    description: "3-6 pages, navigation, contact form, basic SEO.",
  },
  {
    id: "saas-mvp",
    label: "Full-Stack SaaS MVP",
    price: 3500,
    weeks: 5,
    intent: "build",
    description: "A real, working product: frontend, backend logic, and a database behind it.",
  },
];

const ADDON_OPTIONS: AddonOption[] = [
  {
    id: "supabase-auth",
    label: "Supabase Auth + Database Setup",
    price: 600,
    weeks: 1,
    description: "User accounts, row-level security, and a schema built for your data.",
  },
  {
    id: "speed-pass",
    label: "Performance Speed Pass",
    price: 250,
    weeks: 0.5,
    description: "Image optimization, lazy loading, and a Core Web Vitals pass.",
  },
  {
    id: "custom-api",
    label: "Custom API / Backend Logic",
    price: 800,
    weeks: 1.5,
    description: "Serverless functions for anything the frontend can't do alone — payments, emails, integrations.",
  },
];

function formatWeeks(weeks: number): string {
  return weeks === 1 ? "1 week" : `${weeks % 1 === 0 ? weeks : weeks.toFixed(1)} weeks`;
}

interface SprintConfiguratorProps {
  onRequestScope: (summary: string, intent: Intent) => void;
}

export default function SprintConfigurator({ onRequestScope }: SprintConfiguratorProps) {
  const [coreId, setCoreId] = useState<string>(CORE_OPTIONS[0].id);
  const [addonIds, setAddonIds] = useState<Set<string>>(new Set());

  const core = CORE_OPTIONS.find((o) => o.id === coreId) ?? CORE_OPTIONS[0];
  const selectedAddons = ADDON_OPTIONS.filter((a) => addonIds.has(a.id));

  const { minPrice, maxPrice, totalWeeks } = useMemo(() => {
    const addonPrice = selectedAddons.reduce((sum, a) => sum + a.price, 0);
    const addonWeeks = selectedAddons.reduce((sum, a) => sum + a.weeks, 0);
    const base = core.price + addonPrice;
    return {
      minPrice: base,
      maxPrice: Math.round(base * 1.25),
      totalWeeks: core.weeks + addonWeeks,
    };
  }, [core, selectedAddons]);

  const toggleAddon = (id: string) => {
    setAddonIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleRequestScope = () => {
    const addonLines = selectedAddons.length
      ? `\nAdd-ons:\n${selectedAddons.map((a) => `- ${a.label}`).join("\n")}`
      : "";

    const summary = [
      `I'm interested in a fixed-scope project:`,
      `Core scope: ${core.label} (est. $${minPrice.toLocaleString()}-$${maxPrice.toLocaleString()}, ~${formatWeeks(totalWeeks)}).${addonLines}`,
      "",
      "Tell me more about timeline and next steps.",
    ].join("\n");

    onRequestScope(summary, core.intent);
  };

  return (
    <section id="configurator" className="bg-ink py-24 md:py-32 cursor-default">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[12px] uppercase tracking-widest text-ink-soft">
            Architecture &amp; MVP Sprint
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
            Build your scope. See the number instantly.
          </h2>
          <p className="mt-5 text-ink-soft">
            No vague proposals. Pick what you need — the estimate and timeline update as you go.
          </p>
        </Reveal>

        <Reveal delay={1} className="mt-14">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Choose a core scope</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {CORE_OPTIONS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setCoreId(option.id)}
                aria-pressed={coreId === option.id}
                className={`rounded-xl border p-5 text-left transition-colors ${
                  coreId === option.id
                    ? "border-amber bg-amber/10"
                    : "border-ink-line bg-ink-2/60 hover:border-ink-soft"
                }`}
              >
                <p className="font-display text-base font-semibold text-paper">{option.label}</p>
                <p className="mt-1 font-mono text-[12px] text-ink-soft">From ${option.price.toLocaleString()}</p>
                <p className="mt-2.5 text-sm text-ink-soft">{option.description}</p>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={2} className="mt-10">
          <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft">Add-ons</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {ADDON_OPTIONS.map((addon) => {
              const checked = addonIds.has(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  aria-pressed={checked}
                  className={`rounded-xl border p-5 text-left transition-colors ${
                    checked ? "border-amber bg-amber/10" : "border-ink-line bg-ink-2/60 hover:border-ink-soft"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-display text-sm font-semibold text-paper">{addon.label}</p>
                    <span
                      className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${
                        checked ? "border-amber bg-amber text-ink" : "border-ink-soft"
                      }`}
                      aria-hidden="true"
                    >
                      {checked && (
                        <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3">
                          <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[12px] text-ink-soft">+${addon.price.toLocaleString()}</p>
                  <p className="mt-2 text-sm text-ink-soft">{addon.description}</p>
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={3} className="mt-12">
          <div className="rounded-2xl border border-ink-line bg-ink-2/60 p-8 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Estimated investment</p>
            <p className="mt-2 font-display text-4xl font-semibold text-paper md:text-5xl">
              ${minPrice.toLocaleString()}–${maxPrice.toLocaleString()}
            </p>
            <p className="mt-2 font-mono text-[13px] text-ink-soft">~{formatWeeks(totalWeeks)} turnaround</p>

            <button
              type="button"
              onClick={handleRequestScope}
              className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-display text-sm font-semibold text-ink transition-transform hover:scale-[1.03]"
              style={{ background: "linear-gradient(100deg, #FFB84D 0%, #FF7A59 100%)" }}
            >
              Get this scoped
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </button>
            <p className="mt-3 font-mono text-[11px] text-ink-soft">
              This estimate is directional — final scope is confirmed together before any work starts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}