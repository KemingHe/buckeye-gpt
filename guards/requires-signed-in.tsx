import {
  type CurrentInternalUser,
  type CurrentUser,
  type StackClientApp,
  useStackApp,
  useUser,
} from '@stackframe/stack';
import { type JSX, useEffect } from 'react';

import { FatalError } from '@/components/error';
import { LoadingSpinner } from '@/components/loading';
import { AUTH_SIGN_IN_ROUTE } from '@/constants/routes';
import { withCenteredWrapper } from '@/hocs/with-centered-wrapper';
import { useRouterResources } from '@/hooks/use-router-resources';
import type { GuardProps } from '@/types/guard-props';
import type { RouterResources } from '@/types/router-resources-props';

export const RequiresSignedInGuard = ({
  children,
}: GuardProps): JSX.Element => {
  // Wrap the loading spinner and fatal error components with a centered wrapper.
  const WrappedLoadingSpinner = withCenteredWrapper(LoadingSpinner);
  const WrappedFatalError = withCenteredWrapper(FatalError);

  const stackClientApp: StackClientApp | undefined = useStackApp();
  const { clientRouter, pathname }: RouterResources = useRouterResources();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  useEffect(() => {
    function redirectToSignInIfUnauthed(): void {
      // Redirect to sign in route when
      // - the Stack Client App is available,
      // - the user is NOT signed in, and
      // - the current path is not already the sign in route.
      if (
        stackClientApp !== undefined &&
        clientUser === null &&
        pathname !== AUTH_SIGN_IN_ROUTE
      ) {
        clientRouter.push(AUTH_SIGN_IN_ROUTE);
      }
    }
    redirectToSignInIfUnauthed();
  }, [stackClientApp, clientUser, pathname]);

  // Render the fatal error page if the stack client app is not available.
  if (stackClientApp === undefined) return <WrappedFatalError />;

  // Render the children if user IS signed in.
  if (clientUser !== null) return <>{children}</>;

  // Render the loading spinner page by default.
  return <WrappedLoadingSpinner />;
};
