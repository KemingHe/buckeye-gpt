import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import type { JSX } from 'react';

import {
  SendMessageButtonDesktop,
  SendMessageButtonMobile,
  SendMessageKBD,
} from '@/components/chat-input-send-message';
import {
  StopRequestButtonDesktop,
  StopRequestButtonMobile,
  StopRequestKBD,
} from '@/components/chat-input-stop-request';
import { SimpleTooltip } from '@/components/tooltip';
import type { ChatInputWireframeProps } from '@/types/chat-input-props';

export const ChatInputWireframe = ({
  isLoading,
  handleSubmit,
  handleInputChange,
  handleKeyDown,
  handleStopRequest,
  textAreaValue,
  textAreaRef,
  isTextAreaExpanded,
  toggleTextAreaExpanded,
}: ChatInputWireframeProps): JSX.Element => {
  const inputHeadingId: string = 'chat-input-heading';
  const textAreaId: string = 'chat-input-textarea';
  const expandTextAreaButtonTooltipId: string =
    'expand-textarea-button-tooltip';

  const getExpandTextAreaButtonLabel = (): string => {
    if (isTextAreaExpanded) return 'Collapse textarea';
    return 'Expand textarea';
  };

  return (
    <section className="flex-shrink-0" aria-labelledby={inputHeadingId}>
      <h2 id={inputHeadingId} className="sr-only">
        Chat Input Section
      </h2>
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-2 mx-4 my-2"
        onSubmit={handleSubmit}
        aria-label="Chat input form"
      >
        <div className="relative w-full sm:w-auto sm:flex-grow">
          <textarea
            id={textAreaId}
            className={`textarea textarea-bordered border-neutral w-full resize-none overflow-y-auto transition-all duration-300 ${isTextAreaExpanded ? 'h-96' : 'h-24'} leading-normal`}
            ref={textAreaRef}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            placeholder={
              isLoading ? 'Loading...' : 'I have a question about...'
            }
            value={textAreaValue}
            required
            aria-required
            aria-label="Chat input textarea"
            aria-disabled={isLoading}
          />
          <div className="absolute top-0 start-0 -ms-3.5 -mt-3.5">
            <button
              type="button"
              className="btn btn-ghost btn-sm btn-square transition transform active:scale-90"
              onClick={toggleTextAreaExpanded}
              aria-label={getExpandTextAreaButtonLabel()}
              aria-controls={textAreaId}
              aria-expanded={isTextAreaExpanded}
              data-tooltip-id={expandTextAreaButtonTooltipId}
              data-tooltip-content={getExpandTextAreaButtonLabel()}
              data-tooltip-place="top-start"
            >
              {isTextAreaExpanded ? (
                <ChevronDownIcon className="size-8" />
              ) : (
                <ChevronUpDownIcon className="size-8" />
              )}
            </button>
            <SimpleTooltip id={expandTextAreaButtonTooltipId} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 w-full sm:w-16 transition-all">
          {isLoading ? (
            <>
              <StopRequestButtonMobile
                isLoading={isLoading}
                stop={handleStopRequest}
              />
              <StopRequestButtonDesktop
                isLoading={isLoading}
                stop={handleStopRequest}
              />
              <StopRequestKBD />
            </>
          ) : (
            <>
              <SendMessageButtonMobile isLoading={isLoading} />
              <SendMessageButtonDesktop isLoading={isLoading} />
              <SendMessageKBD />
            </>
          )}
        </div>
      </form>
    </section>
  );
};
