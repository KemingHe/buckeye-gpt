import type { JSX } from 'react';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import FailurePrompt from '@/components/verifyEmail/FailurePrompt';

export interface VerifyEmailWireframeProps {
  isFailed: boolean;
}

export function VerifyEmailWireframe({
  isFailed,
}: VerifyEmailWireframeProps): JSX.Element {
  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {isFailed ? (
        <FailurePrompt />
      ) : (
        <LoadingSpinner message={'Verifying...'} />
      )}
    </main>
  );
}
