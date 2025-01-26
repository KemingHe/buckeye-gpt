import { StopCircleIcon } from '@heroicons/react/24/solid';
import type { JSX } from 'react';

import { SimpleTooltip } from '@/components/tooltip/SimpleTooltip';

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
      className="w-full sm:hidden btn-error btn btn-sm btn-outline"
      onClick={stop}
      disabled={!isLoading}
      aria-label="Stop chat request"
      aria-disabled={!isLoading}
    >
      Stop
      <StopCircleIcon className="size-4 -ms-1" aria-hidden="true" />
    </button>
  );
}

export function StopChatRequestButtonDesktop({
  isLoading,
  stop,
}: StopChatRequestButtonProps): JSX.Element {
  const tooltipId: string = 'stop-request-desktop-button-tooltip';
  return (
    <>
      <button
        type="button"
        className="hidden sm:flex btn-error btn btn-square btn-outline"
        onClick={stop}
        disabled={!isLoading}
        aria-label="Stop chat request"
        aria-disabled={!isLoading}
        data-tooltip-id={tooltipId}
        data-tooltip-content="Stop request"
        data-tooltip-place="top-end"
      >
        <StopCircleIcon className="size-5" aria-hidden="true" />
      </button>
      <SimpleTooltip id={tooltipId} />
    </>
  );
}

export function StopChatRequestKBD(): JSX.Element {
  const tooltipId: string = 'stop-request-kbd-tooltip';
  const kbdDescription: string =
    'Pressing Delete or Backspace key also stops chat request';
  return (
    <div
      className="hidden sm:flex font-semibold"
      aria-label="Pressing Delete or Bacspace key also stops chat request"
    >
      <kbd
        className="kbd kbd-xs"
        data-tooltip-id={tooltipId}
        data-tooltip-content={kbdDescription}
        data-tooltip-place="top-end"
      >
        Delete
      </kbd>
      <SimpleTooltip id={tooltipId} />
    </div>
  );
}
