import {
  type CurrentInternalUser,
  type CurrentUser,
  type StackClientApp,
  useStackApp,
  useUser,
} from '@stackframe/stack';
import { useCallback, useEffect, useState } from 'react';

import { AUTH_VERIFY_EMAIL_ROUTE } from '@/constants/routeConstants';
import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';
import {
  type RouterResources,
  useRouterResources,
} from '@/hooks/useRouterResources';

export interface UseVerifyEmailReturnProps {
  isLoading: boolean;
  isFailed: boolean;
}

export function useVerifyEmail(): UseVerifyEmailReturnProps {
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const { pathname, searchParams }: RouterResources = useRouterResources();
  const stackClientApp: StackClientApp | undefined = useStackApp();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  // Memoize the verifySignIn function to prevent unnecessary re-renders per useEffect trigger.
  const verifySignIn = useCallback(async (): Promise<void> => {
    // IMPORTANT: Prefer explicity short-circuiting over nested if statements.

    // Short-circuit if the Stack Client App is not available,
    // or if current path is not the auth verify email route.
    if (stackClientApp === undefined || pathname !== AUTH_VERIFY_EMAIL_ROUTE) {
      setIsFailed(true);
      return;
    }

    // Short-circuit if the user is already signed in.
    // (Not setting isFailed to true because it's not a failure condition.)
    if (clientUser !== null) return;

    // Extract the magic link code from the URL.
    // Short-circuit if the magic link code is not available.
    const magicLinkCode: string | null = searchParams.get('code');
    if (magicLinkCode === null) {
      setIsFailed(true);
      return;
    }

    // Attempt to sign in with the magic link code, handle any errors.
    try {
      startLoading();
      await stackClientApp.signInWithMagicLink(magicLinkCode);
    } catch (error) {
      console.error(error);
      setIsFailed(true);
    } finally {
      stopLoading();
    }
  }, [stackClientApp, pathname, searchParams, clientUser]);

  useEffect(() => {
    if (!isFailed) verifySignIn();
  }, [isFailed, verifySignIn]);

  return { isLoading, isFailed };
}
