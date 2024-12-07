"use client";

import type {
  ChatSession,
  GenerateContentResult,
  StartChatParams
} from "firebase/vertexai";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { type UseLoadingReturnProps, useLoading } from "@hooks/useLoading";
import { gemini } from "@lib/firebase/firebaseClientApp";

import { ProtoChat } from "@components/genAIChat/ProtoChat";
import type { ProtoChatBubbleProps } from "@components/genAIChat/ProtoChatBubble";

export default function GenAIPage(): JSX.Element {
  const preseedMessages: ProtoChatBubbleProps[] = [
    {
      id: uuidv4(),
      role: "genAI",
      isLoading: false,
      rawText: "Hello, I am Lite GPT. What can I help you with today?"
    }
  ];

  const mockUserMessage: ProtoChatBubbleProps = {
    id: uuidv4(),
    role: "user",
    isLoading: false,
    rawText: "Tell me another joke about cats."
  };

  const startChatParams: StartChatParams = {
    history: [],
    generationConfig: {
      maxOutputTokens: 100,
      temperature: 0.9
      // topP: 1.0,
      // frequencyPenalty: 0.0,
      // presencePenalty: 0.0
    }
  };
  // ---------------------------------------------------------------------------
  const [messages, setMessages] =
    useState<ProtoChatBubbleProps[]>(preseedMessages);

  const addMessage = (newMessage: ProtoChatBubbleProps) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const resetMessages = () => {
    setMessages(preseedMessages);
  };

  // ---------------------------------------------------------------------------
  const [chatSession, setChatSession] = useState<ChatSession>(
    gemini.startChat(startChatParams)
  );

  const resetChatSession = () => {
    setChatSession(gemini.startChat(startChatParams));
  };

  // ---------------------------------------------------------------------------
  function handleStartANewChat(): void {
    resetMessages();
    resetChatSession();
  }

  // ---------------------------------------------------------------------------
  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();

  // ---------------------------------------------------------------------------
  async function getGenAIResponse(newUserMessageText: string): Promise<string> {
    let rawText =
      "I'm sorry, I'm having trouble generating a response right now.";
    try {
      startLoading();
      const result = await chatSession.sendMessage(newUserMessageText);
      rawText = (result as GenerateContentResult).response.text();
    } catch (error) {
      console.error("Error generating content:", error);
    }
    stopLoading();
    return rawText;
  }

  async function handleUserMessage(newUserMessageText: string): Promise<void> {
    addMessage({
      id: uuidv4(),
      role: "user",
      isLoading: false,
      rawText: newUserMessageText
    });
    const newGenAIResponseText: string =
      await getGenAIResponse(newUserMessageText);
    addMessage({
      id: uuidv4(),
      role: "genAI",
      isLoading: false,
      rawText: newGenAIResponseText
    });
  }

  return (
    <div className="flex flex-col items-center justify-center p-5 space-y-2">
      <h1 className="rainbow-text text-4xl text-bold">Lite GPT</h1>
      <p className="text-sm">Powered by Google Gemini</p>
      <button
        className="btn btn-warning btn-sm btn-outline"
        onClick={() => handleStartANewChat()}
        type="button"
      >
        Start A New Chat
      </button>
      <ProtoChat messages={messages} />
      <div className="flex justify-center items-center space-x-2">
        <button
          aria-disabled={isLoading}
          className={`btn btn-accent btn-sm ${isLoading ? "btn-disabled" : ""}`}
          disabled={isLoading}
          onClick={() => handleUserMessage(mockUserMessage.rawText)}
          type="button"
        >
          Add User Message
        </button>
      </div>
    </div>
  );
}
