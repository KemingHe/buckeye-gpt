import { SparklesIcon, UserIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import ReactMarkDown from "react-markdown";

// ---------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface ProtoChatBubbleProps {
  id      : string;
  role     : "genAI" | "user";
  isLoading: boolean;
  rawText  : string;
}

export function ProtoChatBubble({
  id,
  role,
  isLoading,
  rawText
}: ProtoChatBubbleProps): JSX.Element {
  return (
    <div
      id={id}
      className={`chat ${role === "genAI" ? "chat-start" : "chat-end"} pb-1`}
    >
      <div className="chat-image avatar">
        <div className="w-7 rounded-full">
          {role === "genAI" ? <SparklesIcon /> : <UserIcon />}
        </div>
      </div>
      <div
        aria-live="polite"
        className="chat-bubble flex flex-col justify-center items-start"
      >
        {isLoading ? (
          <span
            aria-label="Loading chat bubble message"
            className="loading loading-dots loading-md"
            role="status"
          />
        ) : (
          <ReactMarkDown>{rawText}</ReactMarkDown>
        )}
      </div>
    </div>
  );
}

export const MemoizedProtoChatBubble = memo(ProtoChatBubble);
