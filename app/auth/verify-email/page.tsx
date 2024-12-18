'use client';

import {
  type CurrentInternalUser,
  type CurrentUser,
  type StackClientApp,
  useStackApp,
  useUser,
} from '@stackframe/stack';
import { type ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function VerifyEmailPage() {
  const stackClientApp: StackClientApp | undefined = useStackApp();
  const clientSearchParams: ReadonlyURLSearchParams = useSearchParams();
  useEffect(() => {
    // Short-circuit if the Stack Client App is not available.
    if (stackClientApp === undefined) return;

    // Extract the magic link code from the URL.
    // Short-circuit if the magic link code is not available.
    const magicLinkCode: string | null = clientSearchParams.get('code');
    if (magicLinkCode === null) return;

    // Attempt to sign in with the magic link code.
    try {
      stackClientApp.signInWithMagicLink(magicLinkCode);
    } catch (error) {
      console.error(error);
    }
  }, [stackClientApp, clientSearchParams]);

  const currentClientUser: CurrentUser | CurrentInternalUser | null = useUser();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      Current User:{' '}
      {currentClientUser ? currentClientUser.primaryEmail : 'None'}
      <button
        type="button"
        onClick={() => {
          if (currentClientUser) currentClientUser.signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
}
