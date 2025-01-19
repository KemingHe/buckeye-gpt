import type { Message } from '@ai-sdk/ui-utils';

export default function stringifyChatMessage(message: Message): string {
  return `${message.role}: ${message.content}`;
}
