"use client";

import {
  ChevronDownIcon,
  ChevronUpDownIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";

import { LANGCHAIN_OPENAI_API_ENDPOINT } from "@constants/apiEndpointConstants";

export function ChatInputSection({ chatId }: { chatId: string }): JSX.Element {
  const { input, isLoading, stop, handleInputChange, handleSubmit } = useChat({
    api: LANGCHAIN_OPENAI_API_ENDPOINT,
    id: chatId,
    onError: (error) => console.error(error)
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
            className={`w-full resize-none overflow-y-auto textarea textarea-bordered border-neutral transition-all duration-300 ${taExpanded ? "h-96" : "h-20"} leading-normal`}
            onChange={handleInputChange}
            disabled={isLoading}
            placeholder={
              isLoading ? "Loading..." : "I have a question about..."
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
            aria-label={taExpanded ? "Collapse textarea" : "Expand textarea"}
          >
            {taExpanded ? <ChevronDownIcon /> : <ChevronUpDownIcon />}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-full sm:w-24">
          {isLoading ? (
            <button
              type="button"
              className="btn-error w-full btn btn-sm sm:btn-md"
              onClick={stop}
              disabled={!isLoading}
              aria-label="Stop chat request"
              aria-disabled={!isLoading}
            >
              Stop
              <StopIcon className="size-4 sm:size-4.5 -ms-1" />
            </button>
          ) : (
            <button
              type="submit"
              className="btn-primary w-full btn btn-sm sm:btn-md"
              disabled={isLoading}
              aria-label="Send chat message"
              aria-disabled={isLoading}
            >
              Send
              <PlayIcon className="size-4 sm:size-4.5 -ms-1" />
            </button>
          )}
          <span
            className={`hidden sm:block ${isLoading ? "sm:invisible" : "sm:visible"} text-xs`}
            aria-label="Pressing ctrl and enter key also sends chat message"
            aria-hidden={isLoading}
          >
            Ctrl + Enter
          </span>
        </div>
      </form>
    </section>
  );
}
