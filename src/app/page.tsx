"use client";

import { v4 as uuidv4 } from "uuid";

import Header from "@components/Header";
import { ChatHistorySection } from "@components/chat/ChatHistorySection";
import { ChatInputSection } from "@components/chat/ChatInputSection";

export default function Homepage(): JSX.Element {
  const chatId = uuidv4();

  // ---------------------------------------------------------------------------
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <ChatHistorySection chatId={chatId} />
      <ChatInputSection chatId={chatId} />
    </div>
  );
}
