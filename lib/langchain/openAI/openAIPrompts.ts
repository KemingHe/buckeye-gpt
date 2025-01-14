import type { ChatPromptTemplate } from '@langchain/core/prompts';

import {
  OPENAI_LITE_MODEL_ID,
  OPENAI_PREMIUM_MODEL_ID,
  OPENAI_REGULAR_MODEL_ID,
} from '@/lib/langchain/openAI/openAIConstants';
import { createPrompt } from '@/lib/langchain/utils/createPrompt';
import { AI_PROVIDER_ENUM } from '@/schemas/AIProviderSchema';

export const openAILitePrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_LITE_MODEL_ID,
});

export const openAIRegularPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_REGULAR_MODEL_ID,
});

export const openAIPremiumPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_PREMIUM_MODEL_ID,
});
