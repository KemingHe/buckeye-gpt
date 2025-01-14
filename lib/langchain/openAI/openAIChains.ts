import 'server-only';
import type { Runnable } from '@langchain/core/runnables';

import {
  openAILiteModel,
  openAIPremiumModel,
  openAIRegularModel,
} from '@/lib/langchain/openAI/openAIModels';
import {
  openAILitePrompt,
  openAIPremiumPrompt,
  openAIRegularPrompt,
} from '@/lib/langchain/openAI/openAIPrompts';

export const openAILiteChain: Runnable = openAILitePrompt.pipe(openAILiteModel);
export const openAIRegularChain: Runnable =
  openAIRegularPrompt.pipe(openAIRegularModel);
export const openAIPremiumChain: Runnable =
  openAIPremiumPrompt.pipe(openAIPremiumModel);
