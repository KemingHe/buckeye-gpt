"use client";

import { AcademicCapIcon, UserIcon } from "@heroicons/react/24/outline";
import type { Message } from "ai";
import { memo } from "react";

import StyledMarkdown from "@components/styledMarkdown/StyledMarkdown";

export function ChatBubble({ message }: { message: Message }): JSX.Element {
  return (
    <div
      className={`chat ${message.role === "user" ? "chat-end" : "chat-start"} p-1`}
    >
      <div className="chat-image avatar">
        <div className="w-8 rounded-full">
          {message.role === "user" ? <UserIcon /> : <AcademicCapIcon />}
        </div>
      </div>
      <div className="chat-bubble">
        <StyledMarkdown>{message.content}</StyledMarkdown>
      </div>
    </div>
  );
}

export const MemoizedChatBubble = memo(ChatBubble);
