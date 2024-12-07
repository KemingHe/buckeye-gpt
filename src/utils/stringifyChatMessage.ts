import type { Message } from "ai";

export default function stringifyChatMessage(message: Message): string {
  return `${message.role}: ${message.content}`;
}
