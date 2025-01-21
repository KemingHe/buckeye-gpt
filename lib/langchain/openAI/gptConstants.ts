import 'server-only';

export const OPENAI_GPT_API_KEY: string = process.env
  .OPENAI_GPT_API_KEY as string;

export const OPENAI_GPT_LITE_MODEL_ID: string = process.env
  .OPENAI_GPT_LITE_MODEL_ID as string;
export const OPENAI_GPT_REGULAR_MODEL_ID: string = process.env
  .OPENAI_GPT_REGULAR_MODEL_ID as string;
export const OPENAI_GPT_PREMIUM_MODEL_ID: string = process.env
  .OPENAI_GPT_PREMIUM_MODEL_ID as string;
