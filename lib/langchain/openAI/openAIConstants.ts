import 'server-only';

export const OPENAI_API_KEY: string = process.env.OPENAI_API_KEY as string;

export const OPENAI_LITE_MODEL_ID: string = process.env
  .OPENAI_LITE_MODEL_ID as string;
export const OPENAI_REGULAR_MODEL_ID: string = process.env
  .OPENAI_REGULAR_MODEL_ID as string;
export const OPENAI_PREMIUM_MODEL_ID: string = process.env
  .OPENAI_PREMIUM_MODEL_ID as string;
