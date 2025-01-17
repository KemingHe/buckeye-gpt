import { type JSX, useEffect, useRef } from 'react';

import { ChatMessagesWireframe } from '@/components/chatMessages/ChatMessagesWireframe';
import { type ChatContextValue, useChatContext } from '@/contexts/ChatContext';

export default function ChatMessagesWrapper(): JSX.Element {
  const { messages }: ChatContextValue = useChatContext();
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // ---------------------------------------------------------------------------
  useEffect(() => {
    const domNode: HTMLDivElement | null = chatBottomRef.current;
    if (domNode) {
      domNode.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // ---------------------------------------------------------------------------
  return (
    <ChatMessagesWireframe
      messages={messages}
      endOfMessagesRef={chatBottomRef}
    />
  );
}
