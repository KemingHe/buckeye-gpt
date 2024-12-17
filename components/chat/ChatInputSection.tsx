import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid';
import { useChat } from 'ai/react';
import { useEffect, useRef, useState } from 'react';

import { LANGCHAIN_OPENAI_API_ENDPOINT } from '@/constants/apiEndpointConstants';
import { ctrlDeleteStopRequestHandler } from '@/utils/ctrlDeleteStopRequestHandler';
import ctrlEnterFormSubmitHandler from '@/utils/ctrlEnterFormSubmitHandler';

export function ChatInputSection({ chatId }: { chatId: string }): JSX.Element {
  const { input, isLoading, stop, handleInputChange, handleSubmit } = useChat({
    api: LANGCHAIN_OPENAI_API_ENDPOINT,
    id: chatId,
    onError: (error) => console.error(error),
  });

  // ---------------------------------------------------------------------------
  // Auto re-focus on textarea when loading is done.
  const taRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!isLoading && taRef.current) {
      taRef.current.focus();
    }
  }, [isLoading]);

  // ---------------------------------------------------------------------------
  // Textarea expand/collapse state.
  const [taExpanded, setTAExpanded] = useState(false);
  const toggleTAExpanded = () => setTAExpanded(!taExpanded);

  // ---------------------------------------------------------------------------
  // KBDs:
  // (Meta) Ctrl+Enter to submit form,
  // (Meta) Ctrl+Delete (BS) to stop request.
  useEffect(() => {
    document.addEventListener('keydown', (event: KeyboardEvent) =>
      ctrlEnterFormSubmitHandler(event),
    );
    document.addEventListener('keydown', (event: KeyboardEvent) =>
      ctrlDeleteStopRequestHandler({
        event,
        requestInProcess: isLoading,
        stopRequestHandler: stop,
      }),
    );

    // Cleanup event listeners on component unmount.
    return () => {
      document.removeEventListener('keydown', (event: KeyboardEvent) =>
        ctrlEnterFormSubmitHandler(event),
      );
      document.removeEventListener('keydown', (event: KeyboardEvent) =>
        ctrlDeleteStopRequestHandler({
          event,
          requestInProcess: isLoading,
          stopRequestHandler: stop,
        }),
      );
    };
  }, [isLoading]);

  // ---------------------------------------------------------------------------
  return (
    <section
      className="flex-shrink-0 mt-1.5"
      aria-labelledby="chat-input-section-heading"
    >
      <h2 id="chat-input-section-heading" className="sr-only">
        Chat Input Section
      </h2>
      <form
        className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4"
        onSubmit={handleSubmit}
        aria-label="Chat input form"
      >
        <div className="relative w-full sm:w-auto sm:flex-grow">
          <textarea
            ref={taRef}
            className={`w-full resize-none overflow-y-auto textarea textarea-bordered border-neutral transition-all duration-300 ${taExpanded ? 'h-96' : 'h-24'} leading-normal`}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder={
              isLoading ? 'Loading...' : 'I have a question about...'
            }
            value={input}
            required
            aria-required
            aria-label="Chat input textarea"
            aria-disabled={isLoading}
          />
          <button
            type="button"
            className="absolute top-0 start-0 -ms-3.5 -mt-3.5 btn btn-ghost btn-sm btn-square transition transform active:scale-90"
            onClick={toggleTAExpanded}
            aria-label={taExpanded ? 'Collapse textarea' : 'Expand textarea'}
          >
            {taExpanded ? (
              <ChevronDownIcon className="size-8" />
            ) : (
              <ChevronUpDownIcon className="size-8" />
            )}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-full sm:w-28 transition-all">
          {isLoading ? (
            <>
              <StopChatRequestButton isLoading={isLoading} stop={stop} />
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

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface StopChatRequestButtonProps {
  isLoading: boolean;
  stop     : () => void;
}

export function StopChatRequestButton({
  isLoading,
  stop,
}: StopChatRequestButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className="btn-error w-full btn btn-sm sm:btn-md"
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

export function StopChatRequestKBD(): JSX.Element {
  return (
    <div
      className="hidden sm:flex font-semibold"
      aria-label="Pressing Delete or Backspace key also stops chat request"
    >
      <kbd className="kbd kbd-xs">Delete</kbd>
    </div>
  );
}

// -----------------------------------------------------------------------------
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
      <PlayIcon className="size-4 -ms-1" />
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
