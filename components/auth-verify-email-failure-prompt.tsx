import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { JSX } from 'react';

import { AUTH_SIGN_IN_ROUTE } from '@/constants/routes';

export const FailurePrompt = (): JSX.Element => {
  // NOTE: Width is manually set here to be consistent with SignInWirefram,
  // refactor when ready.
  return (
    <div className="card bg-base-200 shadow-lg w-72">
      <figure className="pt-8">
        <ExclamationTriangleIcon className="size-12 text-warning" />
      </figure>
      <div className="card-body items-center py-4 gap-4">
        {/* NOTE: Current manual width setting breaks if using text-2xl or above. */}
        <h2 className="card-title">Verification Failed</h2>
        <div className="card-actions gap-4">
          <div className="flex flex-col gap-2 text-sm leading-tight">
            <p>Make sure to:</p>
            <ul className="list-disc flex flex-col ps-5 gap-2">
              <li>
                Use the&nbsp;
                <span className="font-bold">most recent</span>
                &nbsp;link sent to your Ohio State email.
              </li>
              <li>
                Use the&nbsp;
                <span className="font-bold">same browser</span>
                &nbsp;you used to sign in.
              </li>
              <li>
                Enabled&nbsp;
                <span className="font-bold">cookies</span>.
              </li>
            </ul>
          </div>
          <div className="w-full">
            <Link
              href={AUTH_SIGN_IN_ROUTE}
              className="btn btn-primary btn-sm w-full"
            >
              Try again
              <ArrowRightIcon className="size-4 -ms-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
