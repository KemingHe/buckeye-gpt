import "server-only";

import { StackServerApp } from "@stackframe/stack";

import {
  AUTH_SIGN_IN_ROUTE,
  AUTH_SIGN_UP_ROUTE
} from "@constants/routeConstants";

const stackServerApp = new StackServerApp({
  // Default token store, DO NOT MODIFY!
  tokenStore: "nextjs-cookie",

  // Custom Stack Auth URLs.
  urls: {
    signIn: AUTH_SIGN_IN_ROUTE,
    signUp: AUTH_SIGN_UP_ROUTE
  }
});

export default stackServerApp;
