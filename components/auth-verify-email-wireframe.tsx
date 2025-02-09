import type { JSX } from 'react';

import { FailurePrompt } from '@/components/auth-verify-email-failure-prompt';
import { LoadingSpinner } from '@/components/loading';
import type { VerifyEmailWireframeProps } from '@/types/auth-verify-email-props';

export const VerifyEmailWireframe = ({
  isFailed,
}: VerifyEmailWireframeProps): JSX.Element => {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {isFailed ? (
        <FailurePrompt />
      ) : (
        <LoadingSpinner message={'Verifying...'} />
      )}
    </main>
  );
};
