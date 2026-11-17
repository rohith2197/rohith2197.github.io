import { useEffect } from "react";

const defaultWebsiteId = "87085902-a881-4a20-a1f2-e8d70b22e024";
const configuredWebsiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID?.trim();
export const analyticsEnabled =
  !import.meta.env.DEV && configuredWebsiteId?.toLowerCase() !== "off";
const websiteId = analyticsEnabled
  ? configuredWebsiteId || defaultWebsiteId
  : "";

export function Analytics() {
  useEffect(() => {
    if (!analyticsEnabled || !websiteId) return;
    if (document.querySelector("script[data-portfolio-umami]")) return;

    const script = document.createElement("script");
    script.src = "https://cloud.umami.is/script.js";
    script.defer = true;
    script.dataset.websiteId = websiteId;
    script.dataset.doNotTrack = "true";
    script.dataset.portfolioUmami = "true";
    document.head.appendChild(script);
  }, []);

  return null;
}
