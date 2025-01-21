import 'server-only';
import type { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { headers } from 'next/headers';

import {
  LOCALHOST_DOMAIN,
  LOCAL_NETWORK_DOMAIN,
  PRODUCTION_DOMAIN,
} from '@/constants/domainConstants';

export default async function getOriginFromHeaders(): Promise<string> {
  const headersList: ReadonlyHeaders = await headers();
  const host: string | null = headersList.get('host');

  if (!host) throw new Error('Host header is missing from the request.');

  if (process.env.NODE_ENV === 'production') {
    const prodOrigin: string = `https://${host}`;

    // Validate production origin.
    if (prodOrigin === PRODUCTION_DOMAIN) return prodOrigin;

    throw new Error('Invalid origin in production environment.');
  }

  if (process.env.NODE_ENV === 'development') {
    const devOrigin: string = `http://${host}`;

    // Validate development origin.
    if (devOrigin === LOCAL_NETWORK_DOMAIN || devOrigin === LOCALHOST_DOMAIN)
      return devOrigin;

    throw new Error('Invalid origin in development environment.');
  }

  // wontfix: invalid origin in test or unknown environment.
  throw new Error('Invalid origin.');
}
