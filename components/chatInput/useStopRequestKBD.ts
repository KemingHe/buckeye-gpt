import { useEffect } from 'react';

import { stopRequestKBDHandler } from '@/components/chatInput/stopRequestKBDHandler';

export interface UseStopRequestKBDProps {
  isRequesting: boolean;
  stopRequestHandler: () => void;
}

export function useStopRequestKBD({
  isRequesting,
  stopRequestHandler,
}: UseStopRequestKBDProps): void {
  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) =>
      stopRequestKBDHandler({
        event,
        isRequesting,
        stopRequestHandler,
      }),
    );

    // Cleanup event listeners on unmount.
    return () => {
      document.removeEventListener('keydown', (event: KeyboardEvent) =>
        stopRequestKBDHandler({
          event,
          isRequesting,
          stopRequestHandler,
        }),
      );
    };
  }, [isRequesting]);
}
