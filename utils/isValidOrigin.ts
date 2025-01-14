import { LOCAL_DOMAIN, PRODUCTION_DOMAIN } from '@/constants/domainConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

export function isValidOrigin(origin: unknown): boolean {
  // Short-circuit if or origin or NODE_ENV is not available.
  if (!isNonEmptyString(origin) || !isNonEmptyString(process.env.NODE_ENV)) {
    return false;
  }

  // In production, only allow requests from the production domain.
  if (process.env.NODE_ENV === 'production') {
    return origin === PRODUCTION_DOMAIN;
  }

  // TODO: This will fail in dev/test when not running on localhost.
  return origin === LOCAL_DOMAIN;
}
