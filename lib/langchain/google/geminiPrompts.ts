import type { ChatPromptTemplate } from '@langchain/core/prompts';

import {
  GOOGLE_GEMINI_LITE_MODEL_ID,
  GOOGLE_GEMINI_PREMIUM_MODEL_ID,
  GOOGLE_GEMINI_REGULAR_MODEL_ID,
} from '@/lib/langchain/google/geminiConstants';
import { createPrompt } from '@/lib/langchain/utils/createPrompt';
import { AI_PROVIDER_ENUM } from '@/schemas/AIProviderSchema';

export const geminiLitePrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.GOOGLE,
  modelId: GOOGLE_GEMINI_LITE_MODEL_ID,
});

export const geminiRegularPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.GOOGLE,
  modelId: GOOGLE_GEMINI_REGULAR_MODEL_ID,
});

export const geminiPremiumPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.GOOGLE,
  modelId: GOOGLE_GEMINI_PREMIUM_MODEL_ID,
});
