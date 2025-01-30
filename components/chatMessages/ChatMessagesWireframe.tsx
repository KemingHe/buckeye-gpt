import type { Message } from 'ai/react';
import type { JSX, RefObject } from 'react';

import { MemoizedChatBubble } from '@/components/chatMessages/ChatBubble';

// biome-ignore format: added alignment for clarity.
export interface ChatMessagesWireframeProps {
  messages        : Message[];
  endOfMessagesRef: RefObject<HTMLDivElement>;
}

export function ChatMessagesWireframe({
  messages,
  endOfMessagesRef,
}: ChatMessagesWireframeProps): JSX.Element {
  const messagesHeadingId: string = 'chat-messages-heading';
  return (
    <section
      className="flex-grow overflow-y-auto min-h-0 px-2"
      aria-labelledby={messagesHeadingId}
    >
      <h2 id={messagesHeadingId} className="sr-only">
        Chat Conversation Messages
      </h2>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <MemoizedChatBubble message={message} />
          </li>
        ))}
        <li aria-hidden="true">
          <div ref={endOfMessagesRef} />
        </li>
      </ul>
    </section>
  );
}
