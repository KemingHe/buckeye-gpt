import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

export function SendChatMessageButton({
  isLoading,
}: { isLoading: boolean }): JSX.Element {
  return (
    <button
      type="submit"
      className="btn-primary w-full btn btn-sm sm:btn-md"
      disabled={isLoading}
      aria-label="Send chat message"
      aria-disabled={isLoading}
    >
      Send
      <PaperAirplaneIcon className="size-4 -ms-1" />
    </button>
  );
}

export function SendChatMessageKBD(): JSX.Element {
  return (
    <div
      className="hidden sm:flex font-semibold"
      aria-label="Pressing Enter key also sends chat message"
    >
      <kbd className="kbd kbd-xs">Enter</kbd>
    </div>
  );
}
