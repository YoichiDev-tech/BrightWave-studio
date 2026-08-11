const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink cursor-default">
      <div className="mx-auto max-w-6xl px-6 py-14">
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
          </div>

          <div className="flex gap-16">
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