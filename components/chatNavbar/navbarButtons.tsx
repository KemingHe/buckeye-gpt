import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { JSX } from 'react';

import {
  AUTH_SIGN_IN_ROUTE,
  AUTH_SIGN_OUT_ROUTE,
} from '@/constants/routeConstants';

export function SignOutLinkButton(): JSX.Element {
  return (
    <Link
      href={AUTH_SIGN_OUT_ROUTE}
      className="btn btn-sm btn-square btn-neutral"
      aria-label="Go to sign out page"
      aria-current="false"
    >
      <ArrowRightStartOnRectangleIcon className="size-5" aria-hidden="true" />
    </Link>
  );
}

export function SignInLinkButton(): JSX.Element {
  return (
    <Link
      href={AUTH_SIGN_IN_ROUTE}
      className="btn btn-accent btn-sm rounded-full px-2"
      aria-label="Go to sign in page"
      aria-current="false"
    >
      Log In
    </Link>
  );
}

export function SignUpLinkButton(): JSX.Element {
  return (
    <Link
      href={AUTH_SIGN_IN_ROUTE}
      className="btn btn-accent btn-outline btn-sm rounded-full px-2"
      aria-label="Go to sign up page"
      aria-current="false"
    >
      Sign Up
    </Link>
  );
}
