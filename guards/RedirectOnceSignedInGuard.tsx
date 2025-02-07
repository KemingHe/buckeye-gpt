import {
  type CurrentInternalUser,
  type CurrentUser,
  type StackClientApp,
  useStackApp,
  useUser,
} from '@stackframe/stack';
import { type JSX, type ReactNode, useEffect } from 'react';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import FatalError from '@/components/error/FatalError';
import { HOME_ROUTE } from '@/constants/routeConstants';
import { withCenteredWrapper } from '@/hocs/withCenteredWrapper';
import {
  type RouterResources,
  useRouterResources,
} from '@/hooks/use-router-resources';

export default function RedirectOnceSignedInGuard({
  children,
}: { children: ReactNode }): JSX.Element {
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
}
