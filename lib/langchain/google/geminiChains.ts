import 'server-only';
import type { Runnable } from '@langchain/core/runnables';

import {
  geminiLiteModel,
  geminiPremiumModel,
  geminiRegularModel,
} from '@/lib/langchain/google/geminiModels';
import {
  geminiLitePrompt,
  geminiPremiumPrompt,
  geminiRegularPrompt,
} from '@/lib/langchain/google/geminiPrompts';

// wontfix: type ChatGoogleGenerativeAI does not perfectly match RunnableLike/RunnableMapLike required by ChatPropmtTemplate.pipe().
// DO NOT use ts-expect-error here, will be flagged as unnecessary at build time and error.
export const geminiLiteChain: Runnable = geminiLitePrompt.pipe(geminiLiteModel);
export const geminiRegularChain: Runnable =
  geminiRegularPrompt.pipe(geminiRegularModel);
export const geminiPremiumChain: Runnable =
  geminiPremiumPrompt.pipe(geminiPremiumModel);
