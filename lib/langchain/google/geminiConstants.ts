import 'server-only';

export const GOOGLE_GEMINI_API_KEY: string = process.env
  .GOOGLE_GEMINI_API_KEY as string;

export const GOOGLE_GEMINI_LITE_MODEL_ID: string = process.env
  .GOOGLE_GEMINI_LITE_MODEL_ID as string;
export const GOOGLE_GEMINI_REGULAR_MODEL_ID: string = process.env
  .GOOGLE_GEMINI_REGULAR_MODEL_ID as string;
export const GOOGLE_GEMINI_PREMIUM_MODEL_ID: string = process.env
  .GOOGLE_GEMINI_PREMIUM_MODEL_ID as string;
