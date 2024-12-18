import { StopIcon } from '@heroicons/react/24/solid';

// biome-ignore format: added alignment for clarity.
export interface StopChatRequestButtonProps {
  isLoading: boolean;
  stop     : () => void;
}

export function StopChatRequestButton({
  isLoading,
  stop,
}: StopChatRequestButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="btn-error w-full btn btn-sm sm:btn-md"
      onClick={stop}
      disabled={!isLoading}
      aria-label="Stop chat request"
      aria-disabled={!isLoading}
    >
      Stop
      <StopIcon className="size-4 -ms-1" />
    </button>
  );
}

export function StopChatRequestKBD(): JSX.Element {
  return (
    <div
      className="hidden sm:flex font-semibold"
      aria-label="Pressing Backspace or Delete key also stops chat request"
    >
      <kbd className="kbd kbd-xs">Backspace</kbd>
    </div>
  );
}
