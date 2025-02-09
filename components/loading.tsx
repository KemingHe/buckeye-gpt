import type { JSX } from 'react';

import type { LoadingSpinnerProps } from '@/types/loading-props.ts';

export const LoadingSpinner = ({
  message = 'Loading...',
}: LoadingSpinnerProps): JSX.Element => {
  return (
    <output
      className="card bg-base-200 shadow-lg text-center"
      aria-live="polite"
    >
      <div className="card-body items-center gap-3 text-lg">
        <span
          className="loading loading-spinner loading-lg"
          aria-hidden="true"
        />
        <p className="text-center">{message}</p>
      </div>
    </output>
  );
};
