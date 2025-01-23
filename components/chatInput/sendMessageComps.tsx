import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

export function SendChatMessageButtonMobile({
  isLoading,
}: { isLoading: boolean }): JSX.Element {
  return (
    <button
      type="submit"
      className="btn-primary btn btn-sm w-full sm:hidden"
      disabled={isLoading}
      aria-label="Send chat message"
      aria-disabled={isLoading}
    >
      Send
      <PaperAirplaneIcon className="size-4 -ms-1" />
    </button>
  );
}

export function SendChatMessageButtonDesktop({
  isLoading,
}: { isLoading: boolean }): JSX.Element {
  return (
    <button
      type="submit"
      className="hidden sm:flex btn-primary btn btn-square"
      disabled={isLoading}
      aria-label="Send chat message"
      aria-disabled={isLoading}
    >
      <PaperAirplaneIcon className="size-5" />
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
