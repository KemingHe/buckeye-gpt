// biome-ignore format: added alignment for clarity.
export interface ctrlDeleteStopRequestHandlerProps {
  event             : KeyboardEvent;
  requestInProcess  : boolean;
  stopRequestHandler: () => void;
}

export function ctrlDeleteStopRequestHandler({
  event,
  requestInProcess,
  stopRequestHandler,
}: ctrlDeleteStopRequestHandlerProps): void {
  // Short-circuit if no request is to be stopped.
  if (!requestInProcess) return;

  const { key, metaKey, ctrlKey } = event;

  // Short-circuit if the Apple Meta (⌘) or Control (Ctrl) key is not pressed.
  if (!(metaKey || ctrlKey)) return;

  // Short-circuit if the other key pressed is not the "Delete" or "Backspace" key.
  if (!(key === 'Delete' || key === 'Backspace')) return;

  stopRequestHandler();
}
