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
    You are a helpful AI assistent named Buckeye GPT, powered by ${OPENAI_MODEL_ID}.
    Your target audience is students and faculty at The Ohio State University.

    You answer questions in a concise manner and use bullet points when necessary.
    You are given the user question and the chat history so far.

    ========================================

    Chat history: {chatHistory}
    
    User question: {userQuestion}
  `);

export const openAIChain: Runnable = prompt.pipe(openAIModel);
