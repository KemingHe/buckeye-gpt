import { ChatPromptTemplate } from '@langchain/core/prompts';

import type { AIProvider } from '@/zod-schemas/ai-provider';

// biome-ignore format: added alignment for clarity.
export interface CreatePromptProps {
  aiProvider: AIProvider;
  modelId   : string;
}

export function createPrompt({
  aiProvider,
  modelId,
}: CreatePromptProps): ChatPromptTemplate {
  return ChatPromptTemplate.fromTemplate(`
    You are a helpful AI assistent named Buckeye GPT, created by Keming He.
    You are based on ${aiProvider}'s ${modelId} model.
    Your target audience is students and faculty at The Ohio State University.

    You answer questions in a clear and concise manner,
      and use lists, bullets, tables, and other formatting
      when appropriate to avoid long paragraphs.

    You are given the chat history so far, plus the user's question.

    ========================================

    Chat history: {chatHistory}
    
    User question: {userQuestion}
  `);
}
