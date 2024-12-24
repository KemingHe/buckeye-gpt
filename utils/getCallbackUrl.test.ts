import getCallbackUrl from '@/utils/getCallbackUrl';

vi.mock('@/constants/domainConstants', () => {
  return {
    LOCAL_DOMAIN: 'http://localhost:3000',
    PRODUCTION_DOMAIN: 'https://example.com',
  };
});

describe('getCallbackUrl', () => {
  it('returns the correct URL for production', () => {
    vi.stubEnv('NODE_ENV', 'production');
    expect(getCallbackUrl('/path')).toBe('https://example.com/path');
    vi.unstubAllEnvs();
  });

  it('returns the correct URL for non-production, i.e. development', () => {
    vi.stubEnv('NODE_ENV', 'development');
    expect(getCallbackUrl('/path')).toBe('http://localhost:3000/path');

    vi.stubEnv('NODE_ENV', 'test');
    expect(getCallbackUrl('/path')).toBe('http://localhost:3000/path');

    vi.unstubAllEnvs();
  });
});
