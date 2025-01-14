import 'server-only';
import { ChatOpenAI } from '@langchain/openai';

import {
  OPENAI_API_KEY,
  OPENAI_LITE_MODEL_ID,
  OPENAI_PREMIUM_MODEL_ID,
  OPENAI_REGULAR_MODEL_ID,
} from '@/lib/langchain/openAI/openAIConstants';

export const openAILiteModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_LITE_MODEL_ID,
  apiKey: OPENAI_API_KEY,
});

export const openAIRegularModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_REGULAR_MODEL_ID,
  apiKey: OPENAI_API_KEY,
});

export const openAIPremiumModel: ChatOpenAI = new ChatOpenAI({
  model: OPENAI_PREMIUM_MODEL_ID,
  apiKey: OPENAI_API_KEY,
});
