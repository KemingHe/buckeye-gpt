import {
  ChevronDownIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/24/outline';
import { useChat } from 'ai/react';
import {
  type JSX,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  SendChatMessageButton,
  SendChatMessageKBD,
} from '@/components/chatInput/sendMessageComps';
import {
  StopChatRequestButton,
  StopChatRequestKBD,
} from '@/components/chatInput/stopRequestComps';
import { textareaKBDHandler } from '@/components/chatInput/textareaKBDHandler';
import { useStopRequestKBD } from '@/components/chatInput/useStopRequestKBD';
import { LANGCHAIN_OPENAI_API_ENDPOINT } from '@/constants/apiEndpointConstants';

export function ChatInputSection({ chatId }: { chatId: string }): JSX.Element {
  const { input, setInput, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
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
  // Textarea keyboard shortcuts:
  //   - Enter to submit form.
  //   - Shift+Enter to add new line.
  // (See textarea onKeyPress event handler.)

  // Document keyboard shortcuts:
  //   - Backspace or Delete to stop chat request.
  useStopRequestKBD({ isRequesting: isLoading, stopRequestHandler: stop });

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
            className={`textarea textarea-bordered border-neutral w-full resize-none overflow-y-auto transition-all duration-300 ${taExpanded ? 'h-96' : 'h-24'} leading-normal`}
            onChange={handleInputChange}
            onKeyDown={(event: KeyboardEvent<HTMLTextAreaElement>) =>
              textareaKBDHandler({
                event,
                currentInput: input,
                setInput,
                handleSubmit,
              })
            }
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
