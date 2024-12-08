import { ChatPromptTemplate } from "@langchain/core/prompts";
import type { Runnable } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";

import { OPENAI_API_KEY, OPENAI_MODEL_ID } from "@constants/openAIConstants";

export const openAIModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_MODEL_ID,
  apiKey: OPENAI_API_KEY
});

// export interface ChatPromptProps {
//   chatHistory: string;
//   userQuestion: string;
// }

export const prompt: ChatPromptTemplate = ChatPromptTemplate.fromTemplate(`
    You are a helpful AI assistent named Buckeye GPT, created by Keming He.
    You are based on OpenAI's ${OPENAI_MODEL_ID} model.
    Your target audience is students and faculty at The Ohio State University.

    You answer questions in a clear and concise manner,
      and use lists, bullets, tables, and other formatting
      when appropriate to avoid long paragraphs.

    You are given the chat history so far, plus the user's question.

    ========================================

    Chat history: {chatHistory}
    
    User question: {userQuestion}
  `);

export const openAIChain: Runnable = prompt.pipe(openAIModel);
