import { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";
import { trackAction } from "../lib/track";

const CHECK_DELAY_MS = 1500;
const RECHECK_INTERVAL_MS = 3000;
const MAX_CHECKS = 6; // ~19s total before we stop rechecking and just keep the fallback up

function isCrispVisible(): boolean {
  try {
    return Crisp.chat.isVisible();
  } catch {
    return false;
  }
}

export default function ChatFallback() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    let checks = 0;
    let cancelled = false;
    let timeoutId: number | undefined;

    const check = () => {
      checks += 1;
      if (cancelled) return;

      if (isCrispVisible()) {
        setShowFallback(false);
        return; // Crisp is genuinely up — stop polling entirely.
      }

      setShowFallback(true);
      if (checks < MAX_CHECKS) {
        timeoutId = window.setTimeout(check, RECHECK_INTERVAL_MS);
      }
    };

    timeoutId = window.setTimeout(check, CHECK_DELAY_MS);

    return () => {
      cancelled = true;
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!showFallback) return null;

  const handleClick = () => {
    if (isCrispVisible()) {
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