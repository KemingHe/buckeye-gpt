import 'server-only';
import {
  LOCALHOST_DOMAIN,
  LOCAL_NETWORK_DOMAIN,
  PRODUCTION_DOMAIN,
} from '@/constants/domainConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

export default function isValidOrigin(origin: unknown): boolean {
  // Short-circuit if or origin or NODE_ENV is not available.
  if (!isNonEmptyString(origin) || !isNonEmptyString(process.env.NODE_ENV)) {
    return false;
  }

  // In production (next start), only allow requests from the production domain.
  if (process.env.NODE_ENV === 'production') {
    return origin === PRODUCTION_DOMAIN;
  }

  // In development (next dev), allow requests from the local network and localhost.
  if (process.env.NODE_ENV === 'development') {
    return origin === LOCAL_NETWORK_DOMAIN || origin === LOCALHOST_DOMAIN;
  }

  // wontfix: Invalid origin in test or unknown environment.
  // Catch-all and return false to prevent requests from unknown origins.
  return false;
}
