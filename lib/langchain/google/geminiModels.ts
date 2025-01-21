import 'server-only';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

import {
  GOOGLE_GEMINI_API_KEY,
  GOOGLE_GEMINI_LITE_MODEL_ID,
  GOOGLE_GEMINI_PREMIUM_MODEL_ID,
  GOOGLE_GEMINI_REGULAR_MODEL_ID,
} from '@/lib/langchain/google/geminiConstants';

export const geminiLiteModel: ChatGoogleGenerativeAI =
  new ChatGoogleGenerativeAI({
    model: GOOGLE_GEMINI_LITE_MODEL_ID,
    apiKey: GOOGLE_GEMINI_API_KEY,
  });

export const geminiRegularModel: ChatGoogleGenerativeAI =
  new ChatGoogleGenerativeAI({
    model: GOOGLE_GEMINI_REGULAR_MODEL_ID,
    apiKey: GOOGLE_GEMINI_API_KEY,
  });

export const geminiPremiumModel: ChatGoogleGenerativeAI =
  new ChatGoogleGenerativeAI({
    model: GOOGLE_GEMINI_PREMIUM_MODEL_ID,
    apiKey: GOOGLE_GEMINI_API_KEY,
  });
