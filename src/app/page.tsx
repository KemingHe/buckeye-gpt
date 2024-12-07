"use client";

import { SparklesIcon, UserIcon } from "@heroicons/react/24/outline";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";

import StyledMarkdown from "@components/styledMarkdown/StyledMarkdown";
import { LANGCHAIN_OPENAI_API_ENDPOINT } from "@constants/apiEndpointConstants";
import ctrlEnterFormSubmitHandler from "@utils/ctrlEnterFormSubmitHandler";

export default function Homepage(): JSX.Element {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: LANGCHAIN_OPENAI_API_ENDPOINT,
    onError: (error: Error) => console.error(error)
  });

  // ---------------------------------------------------------------------------
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const domNode = chatBottomRef.current;
    if (domNode) {
      domNode.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // ---------------------------------------------------------------------------
  useEffect(() => {
    document.addEventListener("keydown", ctrlEnterFormSubmitHandler);
    return () =>
      document.removeEventListener("keydown", ctrlEnterFormSubmitHandler);
  }, []);

  // ---------------------------------------------------------------------------
  return (
    <div className="w-full h-screen flex flex-col">
      <section className="p-4 flex-shrink-0 flex justify-center items-center shadow-neutral shadow-sm">
        <label className="flex cursor-pointer gap-2">
          <span className="font-semibold">Toogle Theme</span>
          <input
            type="checkbox"
            value="valentine"
            className="toggle theme-controller"
          />
        </label>
      </section>
      <section className="px-2 flex-grow overflow-y-auto">
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              <div
                className={`chat ${message.role === "user" ? "chat-end" : "chat-start"} pb-1`}
              >
                <div className="chat-image avatar">
                  <div className="w-8 rounded-full">
                    {message.role === "user" ? <UserIcon /> : <SparklesIcon />}
                  </div>
                </div>
                <div className="chat-bubble">
                  <StyledMarkdown>{message.content}</StyledMarkdown>
                </div>
              </div>
            </li>
          ))}
          <li aria-hidden="true">
            <div ref={chatBottomRef} />
          </li>
        </ul>
      </section>
      <section className="flex-shrink-0">
        <form
          className="flex flex-col sm:flex-row justify-center items-center gap-2 p-4"
          onSubmit={handleSubmit}
        >
          <textarea
            className="w-full sm:w-auto sm:flex-grow textarea textarea-bordered border-neutral"
            onChange={handleInputChange}
            placeholder="Ask me anything..."
            value={input}
          />
          <div className="flex flex-col justify-center items-center gap-1 w-full sm:w-auto">
            <button
              className="w-full btn btn-primary btn-sm sm:btn-md"
              type="submit"
            >
              Send
            </button>
            <span className="hidden sm:block text-xs">Ctrl + Enter</span>
          </div>
        </form>
      </section>
    </div>
  );
}
