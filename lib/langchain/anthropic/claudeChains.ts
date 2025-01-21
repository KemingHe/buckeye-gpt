import 'server-only';
import type { Runnable } from '@langchain/core/runnables';

import {
  claudeLiteModel,
  claudePremiumModel,
  claudeRegularModel,
} from '@/lib/langchain/anthropic/claudeModels';
import {
  claudeLitePrompt,
  claudePremiumPrompt,
  claudeRegularPrompt,
} from '@/lib/langchain/anthropic/claudePrompts';

// wontfix: type ChatAnthropic does not perfectly match RunnableLike/RunnableMapLike required by ChatPropmtTemplate.pipe().
// DO NOT use ts-expect-error here, will be flagged as unnecessary at build time and error.
export const claudeLiteChain: Runnable = claudeLitePrompt.pipe(claudeLiteModel);
export const claudeRegularChain: Runnable =
  claudeRegularPrompt.pipe(claudeRegularModel);
export const claudePremiumChain: Runnable =
  claudePremiumPrompt.pipe(claudePremiumModel);
