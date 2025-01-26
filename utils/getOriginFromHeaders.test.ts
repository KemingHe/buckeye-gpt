import { headers } from 'next/headers';
import type { Mock } from 'vitest';

import getOriginFromHeaders from '@/utils/getOriginFromHeaders';

vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

vi.mock('next/headers', () => {
  return {
    headers: vi.fn(),
  };
});

vi.mock('@/constants/domainConstants', () => {
  return {
    LOCAL_NETWORK_DOMAIN: 'http://local-network:3000',
    LOCALHOST_DOMAIN: 'http://localhost:3000',
    PRODUCTION_DOMAIN: 'https://example.com',
  };
});

describe('getOriginFromHeaders', () => {
  it('throws the correct error if host header is missing in production env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue(null),
    });
    vi.stubEnv('NODE_ENV', 'production');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Host header is missing from the request.',
    );
    vi.unstubAllEnvs();
  });

  it('throws the correct error if host header is missing in development env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue(null),
    });
    vi.stubEnv('NODE_ENV', 'development');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Host header is missing from the request.',
    );
    vi.unstubAllEnvs();
  });

  it('throws the correct error if host header is missing in test env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue(null),
    });
    vi.stubEnv('NODE_ENV', 'test');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Host header is missing from the request.',
    );
    vi.unstubAllEnvs();
  });

  it('throws the correct error if host header is missing in unknown env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue(null),
    });
    vi.stubEnv('NODE_ENV', 'unknown');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Host header is missing from the request.',
    );
    vi.unstubAllEnvs();
  });

  it('returns the correct origin for valid headers in production env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('example.com'),
    });
    vi.stubEnv('NODE_ENV', 'production');
    await expect(getOriginFromHeaders()).resolves.toBe('https://example.com');
    vi.unstubAllEnvs();
  });

  it('throws the correct error for invalid headers in production env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('not-example.com'),
    });
    vi.stubEnv('NODE_ENV', 'production');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Invalid origin in production environment.',
    );
    vi.unstubAllEnvs();
  });

  it('returns the correct origin for valid localhost headers in development env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('localhost:3000'),
    });
    vi.stubEnv('NODE_ENV', 'development');
    await expect(getOriginFromHeaders()).resolves.toBe('http://localhost:3000');
    vi.unstubAllEnvs();
  });

  it('returns the correct origin for valid local network headers in development env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('local-network:3000'),
    });
    vi.stubEnv('NODE_ENV', 'development');
    await expect(getOriginFromHeaders()).resolves.toBe(
      'http://local-network:3000',
    );
    vi.unstubAllEnvs();
  });

  it('throws the correct error for invalid headers in development env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('localhost:5000'),
    });
    vi.stubEnv('NODE_ENV', 'development');
    await expect(getOriginFromHeaders()).rejects.toThrow(
      'Invalid origin in development environment.',
    );
    vi.unstubAllEnvs();
  });

  it('throws the correct error for all non-null headers in test env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('localhost:3000'),
    });
    vi.stubEnv('NODE_ENV', 'test');
    await expect(getOriginFromHeaders()).rejects.toThrow('Invalid origin.');
    vi.unstubAllEnvs();
  });

  it('throws the correct error for all non-null headers in unknown env', async () => {
    (headers as Mock).mockReturnValueOnce({
      get: vi.fn().mockReturnValue('localhost:3000'),
    });
    vi.stubEnv('NODE_ENV', 'unknown');
    await expect(getOriginFromHeaders()).rejects.toThrow('Invalid origin.');
    vi.unstubAllEnvs();
  });
});
