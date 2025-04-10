import type { Mock } from 'vitest';

import { stackServerApp } from '@/lib/stack-auth/server/app';
import { isAuthedWithRole } from '@/lib/stack-auth/server/is-authed-with-role';

vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

vi.mock('@/lib/stack-auth/server/app', () => {
  return {
    __esModule: true,
    stackServerApp: {
      getUser: vi.fn(),
    },
  };
});

describe('isAuthedWithRole', () => {
  it('returns false if the user is not authenticated', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce(null);
    expect(await isAuthedWithRole('admin')).toBe(false);
  });

  it('returns true if the regular user is authenticated and no role is provided', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: { role: 'user' },
    });
    expect(await isAuthedWithRole(null)).toBe(true);
  });

  it('returns true if the admin user is authenticated and no role is provided', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: { role: 'admin' },
    });
    expect(await isAuthedWithRole(null)).toBe(true);
  });

  it('returns true if the user has the specified role, i.e. admin', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: { role: 'admin' },
    });
    expect(await isAuthedWithRole('admin')).toBe(true);
  });

  it('returns false if the user does not have the specified role', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: { role: 'user' },
    });
    expect(await isAuthedWithRole('admin')).toBe(false);
  });

  it('returns false if the user is missing serverMetadata when checking for specific role', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({});
    expect(await isAuthedWithRole('admin')).toBe(false);
  });

  it('returns true if the user is missing serverMetadata when no role is provided', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({});
    expect(await isAuthedWithRole(null)).toBe(true);
  });

  it('returns false if the user is missing serverMetadata role field when checking for specific role', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: {},
    });
    expect(await isAuthedWithRole('admin')).toBe(false);
  });

  it('returns true if the user is missing serverMetadata role field when no role is provided', async () => {
    (stackServerApp.getUser as Mock).mockResolvedValueOnce({
      serverMetadata: {},
    });
    expect(await isAuthedWithRole(null)).toBe(true);
  });
});
