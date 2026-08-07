import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CRISP_WEBSITE_ID = import.meta.env.VITE_CRISP_WEBSITE_ID as
  | string
  | undefined;

export default function LiveChat() {
  useEffect(() => {
    if (!CRISP_WEBSITE_ID) {
      console.warn(
        "LiveChat: VITE_CRISP_WEBSITE_ID is not set — chat widget disabled."
      );
      return;
    }

    Crisp.configure(CRISP_WEBSITE_ID);
  }, []);

  return null;
}