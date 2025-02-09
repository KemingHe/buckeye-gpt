import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';
import { toast } from 'react-toastify';

import { SignOutWireframe } from '@/components/auth-sign-out-wireframe';
import { useLoading } from '@/hooks/use-loading';
import type { LoadingControls } from '@/types/loading-props';

export const SignOut = (): JSX.Element => {
  const { isLoading, startLoading, stopLoading }: LoadingControls =
    useLoading();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  async function signOutHandler(): Promise<void> {
    // Short-circuit if the user is not signed in.
    if (clientUser === null) {
      toast.error('Error. You are not signed in.');
      return;
    }

    try {
      startLoading();
      await clientUser.signOut();
      toast.success('Success! You have been signed out.');
    } catch (error) {
      console.error('Sign out error:', error);
      toast.error('Server error. Please try again later.');
    } finally {
      stopLoading();
    }
  }

  return (
    <SignOutWireframe isLoading={isLoading} signOutHandler={signOutHandler} />
  );
};
