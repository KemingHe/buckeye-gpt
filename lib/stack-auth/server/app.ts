import 'server-only';
import { StackServerApp } from '@stackframe/stack';

import {
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_EMAIL_ROUTE,
  HOME_ROUTE,
} from '@/constants/routes';

export const stackServerApp = new StackServerApp({
  // Default token store, DO NOT MODIFY!
  tokenStore: 'nextjs-cookie',

  // Custom Stack Auth URLs.
  // biome-ignore format: added alignment for clarity.
  urls: {
    home             : HOME_ROUTE,
    signIn           : AUTH_SIGN_IN_ROUTE,
    signUp           : AUTH_SIGN_IN_ROUTE,
    afterSignIn      : HOME_ROUTE,
    afterSignUp      : HOME_ROUTE,
    afterSignOut     : AUTH_SIGN_IN_ROUTE,
    emailVerification: AUTH_VERIFY_EMAIL_ROUTE,
    magicLinkCallback: AUTH_VERIFY_EMAIL_ROUTE,
  },
});
