import type { ChatPromptTemplate } from '@langchain/core/prompts';

import {
  OPENAI_GPT_LITE_MODEL_ID,
  OPENAI_GPT_PREMIUM_MODEL_ID,
  OPENAI_GPT_REGULAR_MODEL_ID,
} from '@/lib/langchain/openAI/gptConstants';
import { createPrompt } from '@/lib/langchain/utils/createPrompt';
import { AI_PROVIDER_ENUM } from '@/schemas/AIProviderSchema';

export const gptLitePrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_GPT_LITE_MODEL_ID,
});

export const gptRegularPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_GPT_REGULAR_MODEL_ID,
});

export const gptPremiumPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.OPENAI,
  modelId: OPENAI_GPT_PREMIUM_MODEL_ID,
});
