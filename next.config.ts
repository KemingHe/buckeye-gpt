import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // Perma disable dev server indicator to prevent issue with Playwright.
    appIsrStatus: false
  }
};

export default nextConfig;
