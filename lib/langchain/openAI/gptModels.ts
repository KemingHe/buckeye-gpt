import 'server-only';
import { ChatOpenAI } from '@langchain/openai';

import {
  OPENAI_GPT_API_KEY,
  OPENAI_GPT_LITE_MODEL_ID,
  OPENAI_GPT_PREMIUM_MODEL_ID,
  OPENAI_GPT_REGULAR_MODEL_ID,
} from '@/lib/langchain/openAI/gptConstants';

export const gptLiteModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_GPT_LITE_MODEL_ID,
  apiKey: OPENAI_GPT_API_KEY,
});

export const gptRegularModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_GPT_REGULAR_MODEL_ID,
  apiKey: OPENAI_GPT_API_KEY,
});

export const gptPremiumModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_GPT_PREMIUM_MODEL_ID,
  apiKey: OPENAI_GPT_API_KEY,
});
