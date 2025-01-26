import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

import { SimpleTooltip } from '@/components/tooltip/SimpleTooltip';

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
      <PaperAirplaneIcon className="size-4 -ms-1" aria-hidden="true" />
    </button>
  );
}

export function SendChatMessageButtonDesktop({
  isLoading,
}: { isLoading: boolean }): JSX.Element {
  const tooltipId: string = 'send-message-desktop-button-tooltip';
  return (
    <>
      <button
        type="submit"
        className="hidden sm:flex btn-primary btn btn-square"
        disabled={isLoading}
        aria-label="Send chat message"
        aria-disabled={isLoading}
        data-tooltip-id={tooltipId}
        data-tooltip-content="Send message"
        data-tooltip-place="top-start"
      >
        <PaperAirplaneIcon className="size-5" aria-hidden="true" />
      </button>
      <SimpleTooltip id={tooltipId} />
    </>
  );
}

export function SendChatMessageKBD(): JSX.Element {
  const tooltipId: string = 'send-message-kbd-tooltip';
  const kbdDescription: string = 'Pressing Enter key also sends chat message';
  return (
    <div className="hidden sm:flex font-semibold" aria-label={kbdDescription}>
      <kbd
        className="kbd kbd-xs"
        data-tooltip-id={tooltipId}
        data-tooltip-content={kbdDescription}
        data-tooltip-place="top-start"
      >
        Enter
      </kbd>
      <SimpleTooltip id={tooltipId} />
    </div>
  );
}
