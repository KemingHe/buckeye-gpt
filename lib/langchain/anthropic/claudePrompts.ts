import type { ChatPromptTemplate } from '@langchain/core/prompts';

import {
  ANTHROPIC_CLAUDE_LITE_MODEL_ID,
  ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID,
  ANTHROPIC_CLAUDE_REGULAR_MODEL_ID,
} from '@/lib/langchain/anthropic/claudeConstants';
import { createPrompt } from '@/lib/langchain/utils/createPrompt';
import { AI_PROVIDER_ENUM } from '@/zod-schemas/ai-provider';

export const claudeLitePrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.ANTHROPIC,
  modelId: ANTHROPIC_CLAUDE_LITE_MODEL_ID,
});

export const claudeRegularPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.ANTHROPIC,
  modelId: ANTHROPIC_CLAUDE_REGULAR_MODEL_ID,
});

export const claudePremiumPrompt: ChatPromptTemplate = createPrompt({
  aiProvider: AI_PROVIDER_ENUM.ANTHROPIC,
  modelId: ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID,
});
