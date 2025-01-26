import { ArrowPathIcon } from '@heroicons/react/20/solid';
import type { JSX } from 'react';

import { useState } from 'react';
import Modal from 'react-modal';

import { SimpleTooltip } from '@/components/tooltip/SimpleTooltip';

// biome-ignore format: added alignment for clarity.
export interface ClearMessagesButtonWireframeProps {
  isLoading      : boolean;
  isMessagesEmpty: boolean;
  clearMessages  : () => void;
}

export function ClearMessagesButtonWireframe({
  isLoading,
  isMessagesEmpty,
  clearMessages,
}: ClearMessagesButtonWireframeProps): JSX.Element {
  const tooltipId: string = 'clear-messages-tooltip';

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

  // Experimental modal feature. TODO: refactor.
  const [isModalOpen, setModalState] = useState<boolean>(false);
  const closeModal = (): void => setModalState(false);
  const openModal = (): void => setModalState(true);

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
      <Modal
        contentLabel="Clear messages modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={true}
      >
        <form className="flex flex-col gap-4 bg-base-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold">Clear messages</h2>
          <p>
            Are you sure you want to clear all messages? This cannot be undone.
          </p>
          <div className="flex justify-end items-center gap-3">
            <button className="btn" type="button" onClick={closeModal}>
              Cancel
            </button>
            <button
              className="btn btn-error btn-outline"
              type="button"
              onClick={() => {
                clearMessages();
                closeModal();
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
