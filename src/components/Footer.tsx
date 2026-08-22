import type { ReactNode } from "react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

// Build-in-public social channels 
// Centralized here so the same list can be reused (e.g. Nav, a future "Follow the build" section) 
// without duplicating hrefs across components
// Update handles in one place if they ever change
const SOCIALS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Threads",
    href: "https://www.threads.net/@yoichidev", // TODO: confirm exact handle before shipping
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2c5.2 0 8.5 3.3 8.5 8.2 0 4-2.1 6.5-5.4 7.4-.5.1-1-.2-1.1-.7-.1-.5.2-1 .7-1.1 2.5-.7 4-2.6 4-5.6 0-3.9-2.5-6.4-6.7-6.4-4.3 0-6.9 2.6-6.9 6.8 0 3.7 2 6.1 5.2 6.6.4-1.2.4-2.5-.1-3.6-.5-1.2-1.5-1.9-2.8-1.9-1 0-1.7.5-1.7 1.3 0 .7.5 1.1 1.3 1.1.3 0 .6-.1.8-.2.4-.2.9 0 1.1.4.2.4 0 .9-.4 1.1-.5.3-1 .4-1.5.4-1.8 0-3.1-1.1-3.1-2.8 0-1.7 1.4-3 3.5-3 1.9 0 3.4 1 4.1 2.7.6 1.4.6 3-.1 4.5 3.7-.9 5.7-3.6 5.7-7.7 0-4-2.6-6.4-6.7-6.4S5.3 6.3 5.3 10.5c0 1 .1 1.9.4 2.7.2.5-.1 1-.6 1.2-.5.2-1-.1-1.2-.6-.4-1-.5-2.1-.5-3.3C3.4 5.5 6.9 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yoichidev",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/YoichiDev-tech",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03a9.6 9.6 0 0 1 5.02 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink cursor-default">
      <div
        className="mx-auto max-w-6xl px-6 py-14"
        style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold text-paper">
              <svg width="22" height="22" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <path
                  d="M2 15c2.5 0 2.5-6 5-6s2.5 6 5 6 2.5-6 5-6 2.5 6 5 6"
                  stroke="url(#footer-wave)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="footer-wave" x1="2" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB84D" />
                    <stop offset="0.5" stopColor="#FF7A59" />
                    <stop offset="1" stopColor="#6C63FF" />
                  </linearGradient>
                </defs>
              </svg>
              BrightWave
            </a>
            <p className="mt-3 max-w-xs text-sm text-ink-soft">
              Websites for small businesses that want to look — and load — as
              good as they perform.
            </p>

            {/* Build-in-public channels: to give visitors a next step even if
                they aren't ready to hire yet, and cross-feeds traffic between
                the site and the social build-in-public content */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-line text-ink-soft transition-colors hover:border-amber hover:text-paper"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-10 sm:gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Menu</p>
              <ul className="mt-4 space-y-2.5">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-paper/80 transition-colors hover:text-paper">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">Contact</p>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
                <li>yoichi_dev@proton.me</li>
                <li>Mon-Fri, 9:00am-5:30pm</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-line pt-6 font-mono text-[11px] uppercase tracking-wide text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BrightWave Studio. All rights reserved.</p>
          <p>Designed &amp; built in-house.</p>
        </div>
      </div>
    </footer>
  );
}