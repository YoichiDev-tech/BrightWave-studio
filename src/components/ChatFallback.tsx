import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Crisp } from "crisp-sdk-web";
import { trackAction } from "../lib/track";

const CHECK_DELAY_MS = 1500;
const RECHECK_INTERVAL_MS = 3000;
const MAX_CHECKS = 6; // ~19s total before we stop rechecking and just keep the fallback up

// Crisp.chat.isVisible() reports whether the widget is *configured* to be
// visible — it can return true even when a dashboard-side rule (e.g. a
// page-targeting/trigger rule scoped to certain URLs) means nothing is
// actually rendered on screen for the current page. That gap is exactly
// what let the home page slip through silently: Crisp claimed "visible",
// so this component trusted it and never stepped in

// Fixed by also checking the real DOM: Crisp injects its widget as
// #crisp-client, a direct child of <body>. I require BOTH Crisp's own
// isVisible() AND actual on-screen presence (non-zero size, not
// display:none/visibility:hidden/opacity:0) before deciding Crisp is
// truly up. If either check fails, the fallback takes over
function isCrispActuallyVisible(): boolean {
  try {
    if (!Crisp.chat.isVisible()) return false;
  } catch {
    return false;
  }

  const el = document.getElementById("crisp-client");
  if (!el) return false;

  const style = window.getComputedStyle(el);
  if (style.display === "none" || style.visibility === "hidden" || Number(style.opacity) === 0) {
    return false;
  }

  const rect = el.getBoundingClientRect();
  return rect.width > 0 && rect.height > 0;
}

export default function ChatFallback() {
  const [showFallback, setShowFallback] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let checks = 0;
    let cancelled = false;
    let timeoutId: number | undefined;

    const check = () => {
      checks += 1;
      if (cancelled) return;

      if (isCrispActuallyVisible()) {
        setShowFallback(false);
        return; // Crisp is genuinely on screen for this page — stop polling
      }

      setShowFallback(true);
      if (checks < MAX_CHECKS) {
        timeoutId = window.setTimeout(check, RECHECK_INTERVAL_MS);
      }
    };

    // Re-run on every route change, not just on first mount — Crisp's
    // dashboard-side rules can scope visibility per URL, and this is a
    // client-side-routed SPA, so a fresh page load doesn't happen on
    // in-app navigation. (If the fallback was showing on the previous
    // page, it stays showing for the ~1.5s until this page's first check
    // resolves — a brief harmless overlap rather than a flash of nothing)
    timeoutId = window.setTimeout(check, CHECK_DELAY_MS);

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [pathname]);

  if (!showFallback) return null;

  const handleClick = () => {
    if (isCrispActuallyVisible()) {
      Crisp.chat.open();
      trackAction("chat_opened");
      return;
    }

    // Crisp genuinely isn't available right now — get the visitor to the
    // contact form immediately instead of leaving them on a dead button
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Chat with us"
      className="fixed bottom-4 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      style={{ background: "linear-gradient(100deg, #FFB84D 0%, #FF7A59 100%)" }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
          stroke="#0A0E1A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}