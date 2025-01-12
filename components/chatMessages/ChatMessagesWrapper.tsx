import { useChat } from 'ai/react';
import { type JSX, useEffect, useRef } from 'react';

import { ChatMessagesWireframe } from '@/components/chatMessages/ChatMessagesWireframe';
import { LANGCHAIN_OPENAI_API_ENDPOINT } from '@/constants/apiEndpointConstants';

export interface ChatMessagesWrapperProps {
  chatId: string;
}

export function ChatMessagesWrapper({
  chatId,
}: ChatMessagesWrapperProps): JSX.Element {
  const { messages } = useChat({
    api: LANGCHAIN_OPENAI_API_ENDPOINT,
    id: chatId,
    onError: (error) => console.error(error),
  });

  // ---------------------------------------------------------------------------
  const chatBottomRef = useRef<HTMLDivElement>(null);

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
