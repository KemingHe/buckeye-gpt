import { useEffect, useRef } from "react";

import {
  MemoizedProtoChatBubble,
  type ProtoChatBubbleProps
} from "@components/genAIChat/ProtoChatBubble";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface ProtoChatProps {
  messages: ProtoChatBubbleProps[];
}

export function ProtoChat({ messages }: ProtoChatProps): JSX.Element {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full">
      <div
        aria-live="polite"
        aria-relevant="additions"
        className="h-[400px] overflow-y-auto p-1 bg-base-200 rounded-lg shadow-lg"
        role="log"
      >
        {messages.map((message) => (
          <MemoizedProtoChatBubble key={message.id} {...message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
