import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/20/solid';
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
    >
      <ArrowRightStartOnRectangleIcon className="size-7" aria-hidden="true" />
    </Link>
  );
}

export function SignInLinkButton(): JSX.Element {
  return (
    <Link
      href={AUTH_SIGN_IN_ROUTE}
      className="btn btn-accent btn-outline"
      aria-label="Go to sign in page"
    >
      Sign in
      <ArrowRightEndOnRectangleIcon
        className="size-7 -ms-1"
        aria-hidden="true"
      />
    </Link>
  );
}
