import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import Footer from "@components/Footer";

import googleAnalyticsMeasurementId from "@lib/firebase/googleAnalyticsMeasurementId";

// -----------------------------------------------------------------------------
import "./globals.css";

// -----------------------------------------------------------------------------
// Text metadata, defined according to the NextJS metadata interface.
export const metadata: Metadata = {
  title: "The Buckeye App",
  description:
    "A free, open-source student organization management SaaS built for The Ohio State University community (not affiliated with Ohio State officials).",
  generator: "Next.js",
  applicationName: "The Buckeye App",
  // Sends the full URL as the referrer for same-origin requests, only the
  // origin for cross-origin requests to the same or higher security level,
  // and no referrer for cross-origin requests to less secure origins.
  // This provides a good balance of privacy and functionality.
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "student organization",
    "student club",
    "SaaS",
    "management",
    "attendance",
    "events",
    "Ohio State",
    "Buckeye"
  ],
  authors: [{ name: "Keming He", url: "https://linkedin.com/in/keminghe" }],
  creator: "Keming He",
  publisher: "Keming He",
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large"
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "BuckApp"
    // statusBarStyle: "black-translucent",
    // startupImage: [{ url: "...", media: "(...)"}],
  }
};

// -----------------------------------------------------------------------------
// Theme color metadata, defined separately through the NextJS viewport interface.
export const viewport: Viewport = {
  themeColor: "#ffffff"
};

// -----------------------------------------------------------------------------
export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Icon metadata, explicitly defined here due to NextJS's limitations. */}
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
      </head>
      <body className="flex flex-col min-h-screen justify-center items-center">
        {children}
      </body>
      <GoogleAnalytics gaId={googleAnalyticsMeasurementId} />
    </html>
  );
}
