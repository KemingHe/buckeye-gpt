import * as routes from '@/constants/routes';

describe('Route constants', () => {
  it('exports a valid home route', () => {
    expect(routes.HOME_ROUTE).toBe('/');
  });

  it('exports valid auth routes', () => {
    expect(routes.AUTH_SIGN_IN_ROUTE).toBe('/auth/sign-in');
    expect(routes.AUTH_VERIFY_EMAIL_ROUTE).toBe('/auth/verify-email');
    expect(routes.AUTH_SIGN_OUT_ROUTE).toBe('/auth/sign-out');
  });

  it('matches the latest snapshot', () => {
    expect(routes).toMatchSnapshot();
  });
});
