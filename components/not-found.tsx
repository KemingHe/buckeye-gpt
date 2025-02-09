import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import type { JSX } from 'react';

import { AUTH_SIGN_IN_ROUTE, HOME_ROUTE } from '@/constants/routes';

export const NotFoundPrompt = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-4">
      <h1 className="flex flex-col text-center font-extrabold">
        <span className="text-xl text-error">404</span>
        <span className="text-5xl">Page Not Found</span>
      </h1>
      <p className="text-center">Are you looking for one of these pages?</p>
      <div className="flex jusify-center items-center gap-4">
        <BuckeyeGPTLinkButton />
        <SignInLinkButton />
      </div>
    </div>
  );
};

const BuckeyeGPTLinkButton = (): JSX.Element => {
  return (
    <Link
      href={HOME_ROUTE}
      className="btn btn-outline btn-primary font-extrabold"
    >
      Buckeye GPT
      <ArrowUpRightIcon className="size-5 -ms-2" aria-hidden="true" />
    </Link>
  );
};

const SignInLinkButton = (): JSX.Element => {
  return (
    <Link
      href={AUTH_SIGN_IN_ROUTE}
      className="btn btn-outline btn-secondary font-extrabold"
    >
      Sign In
      <ArrowUpRightIcon className="size-5 -ms-2" aria-hidden="true" />
    </Link>
  );
};
