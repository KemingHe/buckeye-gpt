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
import { AUTH_SIGN_IN_ROUTE } from '@/constants/routeConstants';
import withCenteredWrapper from '@/hocs/withCenteredWrapper';
import {
  type RouterResources,
  useRouterResources,
} from '@/hooks/useRouterResources';

export default function RequiresSignedInGuard({
  children,
}: { children: ReactNode }): JSX.Element {
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
}
