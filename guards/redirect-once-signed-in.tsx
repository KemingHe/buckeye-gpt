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
import { HOME_ROUTE } from '@/constants/routes';
import { withCenteredWrapper } from '@/hocs/with-centered-wrapper';
import { useRouterResources } from '@/hooks/use-router-resources';
import type { GuardProps } from '@/types/guard-props';
import type { RouterResources } from '@/types/router-resources-props';

export const RedirectOnceSignedInGuard = ({
  children,
}: GuardProps): JSX.Element => {
  // Wrap the loading spinner and fatal error components with a centered wrapper.
  const WrappedLoadingSpinner = withCenteredWrapper(LoadingSpinner);
  const WrappedFatalError = withCenteredWrapper(FatalError);

  const stackClientApp: StackClientApp | undefined = useStackApp();
  const { clientRouter, pathname }: RouterResources = useRouterResources();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  useEffect(() => {
    function redirectToHomeIfSignedIn(): void {
      // Redirect to home route when
      // - the Stack Client App is available,
      // - the user is signed in, and
      // - the current path is not already the home route.
      if (
        stackClientApp !== undefined &&
        clientUser !== null &&
        pathname !== HOME_ROUTE
      ) {
        clientRouter.push(HOME_ROUTE);
      }
    }
    redirectToHomeIfSignedIn();
  }, [stackClientApp, clientUser, pathname]);

  // Render the wrapped fatal error if the client app is not available.
  if (stackClientApp === undefined) return <WrappedFatalError />;

  // Render the children if user is NOT signed in.
  if (clientUser === null) return <>{children}</>;

  // Render the wrapped loading spinner by default.
  return <WrappedLoadingSpinner />;
};
