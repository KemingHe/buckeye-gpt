import { FireIcon } from '@heroicons/react/24/outline';
import type { JSX } from 'react';

export default function FatalError(): JSX.Element {
  return (
    <div
      className="card bg-base-200 shadow-lg text-center"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="card-body items-center gap-3 text-lg">
        <FireIcon className="size-12 text-error" aria-hidden="true" />
        <p className="text-center flex flex-col justify-center items-center leading-snug">
          <span className="sr-only">Service Unavailable</span>
          <span aria-hidden="true">Service</span>
          <span aria-hidden="true">Unavailable</span>
        </p>
      </div>
    </div>
  );
}
