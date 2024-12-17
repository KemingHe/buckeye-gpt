import type { Message } from 'ai';

import stringifyChatMessage from '@/utils/stringifyChatMessage';

export default function stringifyChatHistory(messages: Message[]): string {
  return messages.map((message) => stringifyChatMessage(message)).join('\n');
}
