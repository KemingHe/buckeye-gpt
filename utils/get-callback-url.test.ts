import { getCallbackUrl } from '@/utils/get-callback-url';

vi.mock('@/constants/domains', () => {
  return {
    LOCAL_NETWORK_DOMAIN: 'http://local-network:3000',
    LOCALHOST_DOMAIN: 'http://localhost:3000',
    PRODUCTION_DOMAIN: 'https://example.com',
  };
});

describe('getCallbackUrl', () => {
  it('returns the correct URL in production environment', () => {
    vi.stubEnv('NODE_ENV', 'production');
    expect(getCallbackUrl('/path')).toBe('https://example.com/path');
    vi.unstubAllEnvs();
  });

  it('returns the correct URL in non-production, i.e. development and test environment', () => {
    vi.stubEnv('NODE_ENV', 'development');
    expect(getCallbackUrl('/path')).toBe('http://localhost:3000/path');

    vi.stubEnv('NODE_ENV', 'test');
    expect(getCallbackUrl('/path')).toBe('http://localhost:3000/path');

    vi.unstubAllEnvs();
  });
});
