"use client";

import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

import { MemoizedChatBubble } from "@components/chat/ChatBubble";
import { LANGCHAIN_OPENAI_API_ENDPOINT } from "@constants/apiEndpointConstants";

export function ChatHistorySection({
  chatId
}: { chatId: string }): JSX.Element {
  const { messages } = useChat({
    api: LANGCHAIN_OPENAI_API_ENDPOINT,
    id: chatId,
    onError: (error) => console.error(error)
  });

  // ---------------------------------------------------------------------------
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domNode: HTMLDivElement | null = chatBottomRef.current;
    if (domNode) {
      domNode.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // ---------------------------------------------------------------------------
  return (
    <section className="px-2 flex-grow overflow-y-auto">
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <MemoizedChatBubble message={message} />
          </li>
        ))}
        <li aria-hidden="true">
          <div ref={chatBottomRef} />
        </li>
      </ul>
    </section>
  );
}
