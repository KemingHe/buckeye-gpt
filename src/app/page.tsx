"use client";

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Header from "@components/Header";
import { ChatHistorySection } from "@components/chat/ChatHistorySection";
import { ChatInputSection } from "@components/chat/ChatInputSection";
import ctrlEnterFormSubmitHandler from "@utils/ctrlEnterFormSubmitHandler";

export default function Homepage(): JSX.Element {
  const chatId = uuidv4();

  // ---------------------------------------------------------------------------
  useEffect(() => {
    document.addEventListener("keydown", ctrlEnterFormSubmitHandler);
    return () =>
      document.removeEventListener("keydown", ctrlEnterFormSubmitHandler);
  }, []);

  // ---------------------------------------------------------------------------
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <ChatHistorySection chatId={chatId} />
      <ChatInputSection chatId={chatId} />
    </div>
  );
}
