import { GoogleAnalytics } from '@next/third-parties/google';
import { StackProvider } from '@stackframe/stack';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { PRODUCTION_DOMAIN } from '@/constants/domainConstants';
import { MEASUREMENT_ID } from '@/constants/googleConstants';
import { COLOR_PRIMARY } from '@/constants/styleConstants';
import stackServerApp from '@/lib/stackAuth/server/stackServerApp';
import packageDotJson from '@/package.json';

import './globals.css';

// -----------------------------------------------------------------------------
// Text metadata, defined according to the NextJS metadata interface.
export const metadata: Metadata = {
  title: 'Buckeye GPT',
  description:
    'Multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
  generator: 'Next.js',
  applicationName: 'Buckeye GPT',
  // Sends the full URL as the referrer for same-origin requests, only the
  // origin for cross-origin requests to the same or higher security level,
  // and no referrer for cross-origin requests to less secure origins.
  // This provides a good balance of privacy and functionality.
  referrer: 'strict-origin-when-cross-origin',
  keywords: ['Langchain', 'OpenAI', 'Gemini', 'Ohio State', 'Buckeyes'],
  authors: [{ name: 'Keming He', url: 'https://linkedin.com/in/keminghe' }],
  creator: 'Keming He',
  publisher: 'Keming He',
  // formatDetection: {
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // metadataBase: new URL(PRODUCTION_DOMAIN),
  openGraph: {
    title: 'Buckeye GPT',
    description:
      'Multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
    url: PRODUCTION_DOMAIN,
    siteName: 'Buckeye GPT',
    images: [
      {
        // Socailify-generated preview based on the GitHub repository.
        url: 'https://socialify.git.ci/KemingHe/buckeye-gpt/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fgithub.com%2FKemingHe%2Fbuckeye-gpt%2Fblob%2Fmain%2Fpublic%2Fimages%2Ftransparent-buckeye-gpt-icon-512x512px.svg%3Fraw%3Dtrue&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light',
        width: 1280,
        height: 640,
        alt: 'Buckeye GPT is a open-source multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buckeye GPT',
    description:
      'Multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
    site: '@Keming_He',
    creator: '@Keming_He',
    images: [
      {
        // Socailify-generated preview based on the GitHub repository.
        url: 'https://socialify.git.ci/KemingHe/buckeye-gpt/image?description=1&forks=1&issues=1&language=1&logo=https%3A%2F%2Fgithub.com%2FKemingHe%2Fbuckeye-gpt%2Fblob%2Fmain%2Fpublic%2Fimages%2Ftransparent-buckeye-gpt-icon-512x512px.svg%3Fraw%3Dtrue&name=1&owner=1&pattern=Plus&pulls=1&stargazers=1&theme=Light',
        width: 1280,
        height: 640,
        alt: 'Buckeye GPT is a open-source multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    // "max-snippet": -1,
    // "max-video-preview": -1,
    // "max-image-preview": "large"
  },
  appleWebApp: {
    title: 'BuckeyeGPT',
    // statusBarStyle: "black-translucent",
    // startupImage: [{ url: "...", media: "(...)"}],
  },
  category: 'technology',
  other: {
    version: packageDotJson.version,
  },
};

// -----------------------------------------------------------------------------
// Theme color metadata, defined separately through the NextJS viewport interface.
export const viewport: Viewport = {
  themeColor: COLOR_PRIMARY,
  // width: 'device-width',
  // initialScale: 1,
  // maximumScale: 1,
  // userScalable: false,
  colorScheme: 'dark',
  // viewportFit: 'cover',
};

// -----------------------------------------------------------------------------
// Explicitly define the Inter font subset to use for the entire application
// for UI consistency and performance.
const inter = Inter({
  subsets: ['latin'],
});

// -----------------------------------------------------------------------------
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={`h-dvh ${inter.className}`}>
        <StackProvider app={stackServerApp}>
          {children}
          <ToastContainer position="top-center" theme="colored" />
        </StackProvider>
      </body>
      <GoogleAnalytics gaId={MEASUREMENT_ID} />
    </html>
  );
}
