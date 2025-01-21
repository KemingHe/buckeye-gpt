import 'server-only';
import { ChatAnthropic } from '@langchain/anthropic';

import {
  ANTHROPIC_CLAUDE_API_KEY,
  ANTHROPIC_CLAUDE_LITE_MODEL_ID,
  ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID,
  ANTHROPIC_CLAUDE_REGULAR_MODEL_ID,
} from '@/lib/langchain/anthropic/claudeConstants';

export const claudeLiteModel: ChatAnthropic = new ChatAnthropic({
  model: ANTHROPIC_CLAUDE_LITE_MODEL_ID,
  apiKey: ANTHROPIC_CLAUDE_API_KEY,
});

export const claudeRegularModel: ChatAnthropic = new ChatAnthropic({
  model: ANTHROPIC_CLAUDE_REGULAR_MODEL_ID,
  apiKey: ANTHROPIC_CLAUDE_API_KEY,
});

export const claudePremiumModel: ChatAnthropic = new ChatAnthropic({
  model: ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID,
  apiKey: ANTHROPIC_CLAUDE_API_KEY,
});
