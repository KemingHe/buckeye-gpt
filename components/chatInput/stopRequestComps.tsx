import { StopIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

// biome-ignore format: added alignment for clarity.
export interface StopChatRequestButtonProps {
  isLoading: boolean;
  stop     : () => void;
}

export function StopChatRequestButtonMobile({
  isLoading,
  stop,
}: StopChatRequestButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="btn-error btn btn-sm w-full sm:hidden"
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

export function StopChatRequestButtonDesktop({
  isLoading,
  stop,
}: StopChatRequestButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="hidden sm:flex btn-error btn btn-square"
      onClick={stop}
      disabled={!isLoading}
      aria-label="Stop chat request"
      aria-disabled={!isLoading}
    >
      <StopIcon className="size-5" />
    </button>
  );
}

export function StopChatRequestKBD(): JSX.Element {
  return (
    <div
      className="hidden sm:flex font-semibold"
      aria-label="Pressing Delete or Bacspace key also stops chat request"
    >
      <kbd className="kbd kbd-xs">Delete</kbd>
    </div>
  );
}
