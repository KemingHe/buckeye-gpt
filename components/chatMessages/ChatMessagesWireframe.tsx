import type { Message } from 'ai/react';
import type { JSX, RefObject } from 'react';

import { MemoizedChatBubble } from '@/components/chatMessages/ChatBubble';

export interface ChatMessagesWireframeProps {
  messages: Message[];
  endOfMessagesRef: RefObject<HTMLDivElement>;
}

export function ChatMessagesWireframe({
  messages,
  endOfMessagesRef,
}: ChatMessagesWireframeProps): JSX.Element {
  return (
    <section className="flex-grow overflow-y-auto min-h-0 px-2">
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
