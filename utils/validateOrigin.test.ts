import { LOCAL_DOMAIN, PRODUCTION_DOMAIN } from '@/constants/domainConstants';
import { ALLOWED_ORIGINS, validateOrigin } from '@/utils/validateOrigin';

vi.mock('@/constants/domainConstants', () => {
  return {
    LOCAL_DOMAIN: 'http://localhost:3000',
    PRODUCTION_DOMAIN: 'https://example.com',
  };
});

describe('validateOrigin', (): void => {
  it('returns true for allowed origins', (): void => {
    expect(validateOrigin(LOCAL_DOMAIN)).toBe(true);
    expect(validateOrigin(PRODUCTION_DOMAIN)).toBe(true);
  });

  it('returns false for disallowed origins', (): void => {
    expect(validateOrigin('https://example.org')).toBe(false);
    expect(validateOrigin('http://localhost:3001')).toBe(false);
  });

  it('returns false for non-string origins', (): void => {
    expect(validateOrigin(123)).toBe(false);
    expect(validateOrigin(null)).toBe(false);
    expect(validateOrigin(undefined)).toBe(false);
  });
});

describe('ALLOWED_ORIGINS', (): void => {
  it('matches the expected values', (): void => {
    expect(ALLOWED_ORIGINS).toEqual([LOCAL_DOMAIN, PRODUCTION_DOMAIN]);
  });
});
