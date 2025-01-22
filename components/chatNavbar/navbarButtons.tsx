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
      className="btn btn-square btn-ghost"
      aria-label="Go to sign out page"
      aria-current="false"
    >
      <ArrowRightStartOnRectangleIcon className="size-7" aria-hidden="true" />
    </Link>
  );
}

export function SignInLinkButton(): JSX.Element {
  return (
    <Link
      href={AUTH_SIGN_IN_ROUTE}
      className="btn btn-ghost text-accent"
      aria-label="Go to sign in page"
      aria-current="false"
    >
      Sign in
    </Link>
  );
}
