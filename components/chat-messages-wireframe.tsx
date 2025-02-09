import type { JSX } from 'react';

import { MemoizedChatBubble } from '@/components/chat-messages-bubble';
import type { ChatMessagesWireframeProps } from '@/types/chat-messages-props';

export const ChatMessagesWireframe = ({
  messages,
  endOfMessagesRef,
}: ChatMessagesWireframeProps): JSX.Element => {
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
};
