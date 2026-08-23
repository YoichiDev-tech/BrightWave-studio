import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageview } from "../lib/track";

export default function usePageTracking(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageview(pathname);
  }, [pathname]);
}