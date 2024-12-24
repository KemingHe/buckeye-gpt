import { LOCAL_DOMAIN, PRODUCTION_DOMAIN } from '@/constants/domainConstants';

export const ALLOWED_ORIGINS: string[] = [LOCAL_DOMAIN, PRODUCTION_DOMAIN];

export function validateOrigin(origin: unknown): boolean {
  return typeof origin === 'string' && ALLOWED_ORIGINS.includes(origin);
}
