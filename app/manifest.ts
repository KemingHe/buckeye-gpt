import type { MetadataRoute } from 'next';

import { COLOR_PRIMARY } from '@/constants/app-config';

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: 'Buckeye GPT',
    short_name: 'BuckeyeGPT',
    description:
      'Buckeye GPT is an independent AI chatbot making advanced language models freely accessible to Ohio State students',
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
};

export default manifest;
