import type { Message } from 'ai/react';
import type { RefObject } from 'react';

export interface ChatBubbleProps {
  readonly message: Message;
}

// biome-ignore format: added alignment for clarity.
export interface ChatMessagesWireframeProps {
  messages        : Message[];
  endOfMessagesRef: RefObject<HTMLDivElement>;
}
