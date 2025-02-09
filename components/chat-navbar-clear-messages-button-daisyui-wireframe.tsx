import { ArrowPathIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

import { SimpleTooltip } from '@/components/tooltip';
import type { ClearMessagesButtonWireframeProps } from '@/types/chat-navbar-props';

export const ClearMessagesButtonWireframe = ({
  isLoading,
  isMessagesEmpty,
  clearMessages,
}: ClearMessagesButtonWireframeProps): JSX.Element => {
  const dialogId: string = 'clear-messages-dialog';
  const tooltipId: string = 'clear-messages-tooltip';

  const openModal = (): void => {
    const dialogElement = document.getElementById(
      dialogId,
    ) as HTMLDialogElement;
    if (dialogElement) dialogElement.showModal();
  };

  const closeModal = (): void => {
    const dialogElement = document.getElementById(
      dialogId,
    ) as HTMLDialogElement;
    if (dialogElement) dialogElement.close();
  };

  const handleClearMessages = (): void => {
    clearMessages();
    closeModal();
  };

  const getTooltipContent = (): string => {
    if (isLoading) return 'Loading...';
    if (isMessagesEmpty) return 'No messages to clear';
    return 'Clear messages';
  };

  const getAriaLabel = (): string => {
    if (isLoading) return 'Please wait, messages are loading';
    if (isMessagesEmpty) return 'No messages available to clear';
    return 'Clear chat conversation messages';
  };

  return (
    <>
      {/* Wrap button in div to allow tooltip to display when button is disabled. */}
      <div
        className="inline-block"
        data-tooltip-id={tooltipId}
        data-tooltip-content={getTooltipContent()}
        data-tooltip-place="bottom-start"
      >
        <button
          className={`btn btn-sm btn-square btn-neutral ${isLoading || isMessagesEmpty ? 'btn-disabled pointer-events-none' : ''}`}
          type="button"
          onClick={openModal}
          disabled={isLoading || isMessagesEmpty}
          aria-disabled={isLoading || isMessagesEmpty}
          aria-label={getAriaLabel()}
        >
          <ArrowPathIcon className="size-5" aria-hidden="true" />
        </button>
      </div>
      <SimpleTooltip id={tooltipId} />
      <dialog id={dialogId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Clear messages</h3>
          <p>
            Are you sure you want to clear all messages? This cannot be undone.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button type="button" className="btn" onClick={closeModal}>
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-error btn-outline"
                onClick={handleClearMessages}
              >
                Clear Messages
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
