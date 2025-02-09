import type { StopRequestKBDHandlerProps } from '@/types/chat-input-props';

export const stopRequestKBDHandler = ({
  event,
  isRequesting,
  stopRequestHandler,
}: StopRequestKBDHandlerProps): void => {
  // Short-circuit if no request is to be stopped.
  if (!isRequesting) return;

  const { key } = event;

  // Short-circuit if the other key pressed is not the Backspace or Delete key.
  if (!(key === 'Backspace' || key === 'Delete')) return;

  stopRequestHandler();
};
