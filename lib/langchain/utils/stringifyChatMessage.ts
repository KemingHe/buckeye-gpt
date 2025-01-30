import type { Message } from 'ai/react';

export default function stringifyChatMessage(message: Message): string {
  return `${message.role}: ${message.content}`;
}
