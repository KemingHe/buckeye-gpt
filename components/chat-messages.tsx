import { type JSX, useEffect, useRef } from 'react';

import { ChatMessagesWireframe } from '@/components/chat-messages-wireframe';
import { useChatDataContext } from '@/contexts/chat-data';
import type { ChatDataContextValue } from '@/types/chat-context-props';

/**
 * Manages chat message display and auto-scrolling behavior.
 *
 * Auto-scrolling is managed at this level to maintain separation of concerns
 * from the global chat layout state management.
 */
export const ChatMessages = (): JSX.Element => {
  const { messages }: ChatDataContextValue = useChatDataContext();
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <ChatMessagesWireframe
      messages={messages}
      endOfMessagesRef={endOfMessagesRef}
    />
  );
};
