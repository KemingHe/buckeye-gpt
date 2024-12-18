import 'server-only';
import type { IterableReadableStream } from '@langchain/core/utils/stream';
import { LangChainAdapter, type Message } from 'ai';

import { openAIChain } from '@/lib/langchain/openAI';
import stringifyChatHistory from '@/utils/stringifyChatHistory';

// Disabled caching for endpoint.
export const dynamic = 'force-dynamic';

export async function POST(request: Request): Promise<Response> {
  try {
    const { messages }: { messages: Message[] } = await request.json();

    const chatHisotry: Message[] = messages.slice(0, -1);
    const chatHistoryString: string = stringifyChatHistory(chatHisotry);

    const userQuestion: string = messages.at(-1)?.content ?? '';

    const stream: IterableReadableStream<string> = await openAIChain.stream({
      chatHistory: chatHistoryString,
      userQuestion,
    });
    return LangChainAdapter.toDataStreamResponse(stream);
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
}
