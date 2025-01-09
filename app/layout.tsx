import { GoogleAnalytics } from '@next/third-parties/google';
import { StackProvider } from '@stackframe/stack';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { MEASUREMENT_ID } from '@/constants/googleConstants';
import stackServerApp from '@/lib/stackAuth/server/stackServerApp';
import '@/app/globals.css';

// -----------------------------------------------------------------------------
// Text metadata, defined according to the NextJS metadata interface.
export const metadata: Metadata = {
  title: 'Buckeye GPT',
  description:
    'ChatGPT clone (with latest OpenAI models) built free for students at the Ohio State University.',
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
  robots: {
    index: true,
    follow: false,
    // "max-snippet": -1,
    // "max-video-preview": -1,
    // "max-image-preview": "large"
  },
  appleWebApp: {
    title: 'BuckeyeGPT',
    // statusBarStyle: "black-translucent",
    // startupImage: [{ url: "...", media: "(...)"}],
  },
};

// -----------------------------------------------------------------------------
// Theme color metadata, defined separately through the NextJS viewport interface.
// export const viewport: Viewport = {
//   themeColor: '#ffffff',
// };

// TODO: dynamically use device theme color.

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
