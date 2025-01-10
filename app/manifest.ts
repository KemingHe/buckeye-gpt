import type { MetadataRoute } from 'next';

import { COLOR_PRIMARY } from '@/constants/styleConstants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Buckeye GPT',
    short_name: 'BuckeyeGPT',
    description:
      'Multi-modal ChatGPT clone with RAG built free for students at the Ohio State University.',
    start_url: '/',
    icons: [
      {
        src: '/icons/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    theme_color: COLOR_PRIMARY,
    background_color: COLOR_PRIMARY,
    display: 'standalone',
  };
}
