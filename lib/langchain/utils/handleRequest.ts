import 'server-only';
import type { Message } from '@ai-sdk/ui-utils';
import type { Runnable } from '@langchain/core/runnables';
import type { IterableReadableStream } from '@langchain/core/utils/stream';
import { LangChainAdapter } from 'ai';

import stringifyChatHistory from '@/lib/langchain/utils/stringifyChatHistory';

export interface HandleChatRequestProps {
  request: Request;
  aiChain: Runnable;
}

export async function handleChatRequest({
  request,
  aiChain,
}: HandleChatRequestProps): Promise<Response> {
  const { messages }: { messages: Message[] } = await request.json();

  const chatHisotryObjects: Message[] = messages.slice(0, -1);
  const chatHistory: string = stringifyChatHistory(chatHisotryObjects);

  const userQuestion: string = messages.at(-1)?.content ?? '';

  const stream: IterableReadableStream<string> = await aiChain.stream({
    chatHistory,
    userQuestion,
  });

  return LangChainAdapter.toDataStreamResponse(stream);
}
