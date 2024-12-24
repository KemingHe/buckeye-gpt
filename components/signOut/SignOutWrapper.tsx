import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';
import { toast } from 'react-toastify';

import { SignOutWireframe } from '@/components/signOut/SignOutWireframe';
import { type UseLoadingReturnProps, useLoading } from '@/hooks/useLoading';

export default function SignOutWrapper(): JSX.Element {
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
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
}
