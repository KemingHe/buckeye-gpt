import { type JSX, useEffect, useRef } from 'react';

import { ChatMessagesWireframe } from '@/components/chatMessages/ChatMessagesWireframe';
import {
  type ChatDataContextValue,
  useChatDataContext,
} from '@/contexts/ChatDataContext';

/**
 * Manages chat message display and auto-scrolling behavior.
 *
 * Auto-scrolling is managed at this level to maintain separation of concerns
 * from the global chat layout state management.
 */
export default function ChatMessagesWrapper(): JSX.Element {
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
}
