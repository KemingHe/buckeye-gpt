import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import type {
  ChangeEvent,
  FormEvent,
  JSX,
  KeyboardEvent,
  RefObject,
} from 'react';

import {
  SendChatMessageButton,
  SendChatMessageKBD,
} from '@/components/chatInput/sendMessageComps';
import {
  StopChatRequestButton,
  StopChatRequestKBD,
} from '@/components/chatInput/stopRequestComps';

// biome-ignore format: added alignment for clarity.
export interface ChatInputWireframeProps {
  // Loading state.
  isLoading             : boolean;

  // Form event handlers.
  handleSubmit          : (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange     : (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown         : (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  handleStopRequest     : () => void;

  // Textarea states.
  textAreaValue         : string;
  textAreaRef           : RefObject<HTMLTextAreaElement>;
  isTextAreaExpanded    : boolean;
  toggleTextAreaExpanded: () => void;
}

export function ChatInputWireframe({
  isLoading,
  handleSubmit,
  handleInputChange,
  handleKeyDown,
  handleStopRequest,
  textAreaValue,
  textAreaRef,
  isTextAreaExpanded,
  toggleTextAreaExpanded,
}: ChatInputWireframeProps): JSX.Element {
  const inputHeadingId: string = 'chat-input-heading';
  return (
    <section className="flex-shrink-0 mt-1.5" aria-labelledby={inputHeadingId}>
      <h2 id={inputHeadingId} className="sr-only">
        Chat Input Section
      </h2>
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4"
        onSubmit={handleSubmit}
        aria-label="Chat input form"
      >
        <div className="relative w-full sm:w-auto sm:flex-grow">
          <textarea
            ref={textAreaRef}
            className={`textarea textarea-bordered border-neutral w-full resize-none overflow-y-auto transition-all duration-300 ${isTextAreaExpanded ? 'h-96' : 'h-24'} leading-normal`}
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
          <button
            type="button"
            className="absolute top-0 start-0 -ms-3.5 -mt-3.5 btn btn-ghost btn-sm btn-square transition transform active:scale-90"
            onClick={toggleTextAreaExpanded}
            aria-label={
              isTextAreaExpanded ? 'Collapse textarea' : 'Expand textarea'
            }
          >
            {isTextAreaExpanded ? (
              <ChevronDownIcon className="size-8" />
            ) : (
              <ChevronUpDownIcon className="size-8" />
            )}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full sm:w-28 transition-all">
          {isLoading ? (
            <>
              <StopChatRequestButton
                isLoading={isLoading}
                stop={handleStopRequest}
              />
              <StopChatRequestKBD />
            </>
          ) : (
            <>
              <SendChatMessageButton isLoading={isLoading} />
              <SendChatMessageKBD />
            </>
          )}
        </div>
      </form>
    </section>
  );
}
