// biome-ignore format: added alignment for clarity.
export interface StopRequestKBDHandlerProps {
  event             : KeyboardEvent;
  isRequesting      : boolean;
  stopRequestHandler: () => void;
}

export function stopRequestKBDHandler({
  event,
  isRequesting,
  stopRequestHandler,
}: StopRequestKBDHandlerProps): void {
  // Short-circuit if no request is to be stopped.
  if (!isRequesting) return;

  const { key } = event;

  // Short-circuit if the other key pressed is not the Backspace or Delete key.
  if (!(key === 'Backspace' || key === 'Delete')) return;

  stopRequestHandler();
}
