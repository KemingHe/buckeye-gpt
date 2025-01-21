import 'server-only';
import type { Runnable } from '@langchain/core/runnables';

import {
  gptLiteModel,
  gptPremiumModel,
  gptRegularModel,
} from '@/lib/langchain/openAI/gptModels';
import {
  gptLitePrompt,
  gptPremiumPrompt,
  gptRegularPrompt,
} from '@/lib/langchain/openAI/gptPrompts';

export const gptLiteChain: Runnable = gptLitePrompt.pipe(gptLiteModel);
export const gptRegularChain: Runnable = gptRegularPrompt.pipe(gptRegularModel);
export const gptPremiumChain: Runnable = gptPremiumPrompt.pipe(gptPremiumModel);
