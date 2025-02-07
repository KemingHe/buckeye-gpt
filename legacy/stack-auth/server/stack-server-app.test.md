# Failed Attempt at Unit Testing `StackServerApp` Instance

Updated: February 6, 2025

`StackServerApp` becomes un-test-able outside of NextJS runtime after upgrading to 2.7.12.

## Vitest Error Message

```TXT
FAIL
lib/stackAuth/server/stackServerApp.test.ts 
[ lib/stackAuth/server/stackServerApp.test.ts ]

Error: 
Cannot find module '/.../buckeye-gpt/node_modules/.pnpm/@stackframe+stack-shared@2.7.12_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_jp5v22pybxzihqwitug6g63uo4/node_modules/@stackframe/stack-shared/dist/utils/globals' imported from /.../buckeye-gpt/node_modules/.pnpm/@stackframe+stack-shared@2.7.12_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_jp5v22pybxzihqwitug6g63uo4/node_modules/@stackframe/stack-shared/dist/utils/errors.js
```

## Unit Test File

```Typescript
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
```
