import type { Metadata } from 'next';

import { PRODUCTION_DOMAIN } from '@/constants/domainConstants';
import {
  SOCIALIFY_PREVIEW_IMAGE_ALT,
  SOCIALIFY_PREVIEW_IMAGE_HEIGHT,
  SOCIALIFY_PREVIEW_IMAGE_URL,
  SOCIALIFY_PREVIEW_IMAGE_WIDTH,
} from '@/constants/styleConstants';
import { getVersion } from '@/utils/package';

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
        url: SOCIALIFY_PREVIEW_IMAGE_URL,
        width: SOCIALIFY_PREVIEW_IMAGE_WIDTH,
        height: SOCIALIFY_PREVIEW_IMAGE_HEIGHT,
        alt: SOCIALIFY_PREVIEW_IMAGE_ALT,
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
        url: SOCIALIFY_PREVIEW_IMAGE_URL,
        width: SOCIALIFY_PREVIEW_IMAGE_WIDTH,
        height: SOCIALIFY_PREVIEW_IMAGE_HEIGHT,
        alt: SOCIALIFY_PREVIEW_IMAGE_ALT,
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
    version: getVersion(),
  },
};
