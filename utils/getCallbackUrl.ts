import {
  LOCALHOST_DOMAIN,
  PRODUCTION_DOMAIN,
} from '@/constants/domainConstants';

export default function getCallbackUrl(path: string): string {
  return process.env.NODE_ENV === 'production'
    ? `${PRODUCTION_DOMAIN}${path}`
    : `${LOCALHOST_DOMAIN}${path}`;
}
