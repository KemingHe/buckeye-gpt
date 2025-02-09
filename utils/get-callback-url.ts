import { LOCALHOST_DOMAIN, PRODUCTION_DOMAIN } from '@/constants/domains';

export const getCallbackUrl = (path: string): string => {
  return process.env.NODE_ENV === 'production'
    ? `${PRODUCTION_DOMAIN}${path}`
    : `${LOCALHOST_DOMAIN}${path}`;
};
