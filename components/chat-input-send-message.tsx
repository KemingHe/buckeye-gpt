import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

import { SimpleTooltip } from '@/components/tooltip';
import type { SendMessageButtonProps } from '@/types/chat-input-props';

export const SendMessageButtonMobile = ({
  isLoading,
}: SendMessageButtonProps): JSX.Element => {
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
};

export const SendMessageButtonDesktop = ({
  isLoading,
}: SendMessageButtonProps): JSX.Element => {
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
        data-tooltip-place="top-end"
      >
        <PaperAirplaneIcon className="size-5" aria-hidden="true" />
      </button>
      <SimpleTooltip id={tooltipId} />
    </>
  );
};

export const SendMessageKBD = (): JSX.Element => {
  const tooltipId: string = 'send-message-kbd-tooltip';
  const kbdDescription: string = 'Pressing Enter key also sends chat message';
  return (
    <div className="hidden sm:flex font-semibold" aria-label={kbdDescription}>
      <kbd
        className="kbd kbd-xs"
        data-tooltip-id={tooltipId}
        data-tooltip-content={kbdDescription}
        data-tooltip-place="top-end"
      >
        Enter
      </kbd>
      <SimpleTooltip id={tooltipId} />
    </div>
  );
};
