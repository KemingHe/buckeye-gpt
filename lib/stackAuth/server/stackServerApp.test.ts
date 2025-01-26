import stackServerApp from '@/lib/stackAuth/server/stackServerApp';

vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

vi.mock('@/constants/routeConstants', () => {
  // biome-ignore format: added alignment for clarity.
  return {
    AUTH_SIGN_IN_ROUTE     : '/sign-in-route',
    AUTH_VERIFY_EMAIL_ROUTE: '/verify-email-route',
    HOME_ROUTE             : '/home-route',
  };
});

describe('stackServerApp instance', () => {
  it('has the correct custom URLs', () => {
    expect(stackServerApp.urls.home).toBe('/home-route');
    expect(stackServerApp.urls.signIn).toBe('/sign-in-route');
    expect(stackServerApp.urls.signUp).toBe('/sign-in-route');
    expect(stackServerApp.urls.afterSignIn).toBe('/home-route');
    expect(stackServerApp.urls.afterSignUp).toBe('/home-route');
    expect(stackServerApp.urls.afterSignOut).toBe('/sign-in-route');
    expect(stackServerApp.urls.emailVerification).toBe('/verify-email-route');
    expect(stackServerApp.urls.magicLinkCallback).toBe('/verify-email-route');
  });
});
