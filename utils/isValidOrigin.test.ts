import type { Mock } from 'vitest';

import isNonEmptyString from '@/utils/isNonEmptyString';
import isValidOrigin from '@/utils/isValidOrigin';

vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

vi.mock('@/constants/domainConstants', () => {
  return {
    LOCAL_NETWORK_DOMAIN: 'http://local-network:3000',
    LOCALHOST_DOMAIN: 'http://localhost:3000',
    PRODUCTION_DOMAIN: 'https://example.com',
  };
});

vi.mock('@/utils/isNonEmptyString', () => {
  return {
    __esModule: true,
    default: vi.fn().mockReturnValue(true),
  };
});

describe('isValidOrigin', () => {
  it('returns false if origin or NODE_ENV is not available', () => {
    (isNonEmptyString as Mock).mockReturnValueOnce(false);
    expect(isValidOrigin('https://example.com')).toBe(false);
    expect(isValidOrigin('http://localhost:3000')).toBe(false);
    expect(isValidOrigin('http://local-network:3000')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);
  });

  it('only accepts production domain in production environment', () => {
    vi.stubEnv('NODE_ENV', 'production');
    expect(isValidOrigin('https://example.com')).toBe(true);

    expect(isValidOrigin('http://localhost:3000')).toBe(false);
    expect(isValidOrigin('http://local-network:3000')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);
    vi.unstubAllEnvs();
  });

  it('only accepts local network and localhost in development environment', () => {
    vi.stubEnv('NODE_ENV', 'development');
    expect(isValidOrigin('http://localhost:3000')).toBe(true);
    expect(isValidOrigin('http://local-network:3000')).toBe(true);

    expect(isValidOrigin('https://example.com')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);
    vi.unstubAllEnvs();
  });

  it('rejects all origins in test and unknown environment', () => {
    vi.stubEnv('NODE_ENV', 'test');
    expect(isValidOrigin('https://example.com')).toBe(false);
    expect(isValidOrigin('http://localhost:3000')).toBe(false);
    expect(isValidOrigin('http://local-network:3000')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);

    vi.stubEnv('NODE_ENV', 'unknown');
    expect(isValidOrigin('https://example.com')).toBe(false);
    expect(isValidOrigin('http://localhost:3000')).toBe(false);
    expect(isValidOrigin('http://local-network:3000')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);

    vi.stubEnv('NODE_ENV', undefined);
    expect(isValidOrigin('https://example.com')).toBe(false);
    expect(isValidOrigin('http://localhost:3000')).toBe(false);
    expect(isValidOrigin('http://local-network:3000')).toBe(false);
    expect(isValidOrigin('https://example.org')).toBe(false);

    vi.unstubAllEnvs();
  });
});
