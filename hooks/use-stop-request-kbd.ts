import { useEffect } from 'react';

import { stopRequestKBDHandler } from '@/handlers/chat-input-stop-request-kbd-handler';
import type { UseStopRequestKBDProps } from '@/types/chat-input-props';

export const useStopRequestKBD = ({
  isRequesting,
  stopRequestHandler,
}: UseStopRequestKBDProps): void => {
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
};
