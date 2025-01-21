import 'server-only';

export const ANTHROPIC_CLAUDE_API_KEY: string = process.env
  .ANTHROPIC_CLAUDE_API_KEY as string;

export const ANTHROPIC_CLAUDE_LITE_MODEL_ID: string = process.env
  .ANTHROPIC_CLAUDE_LITE_MODEL_ID as string;
export const ANTHROPIC_CLAUDE_REGULAR_MODEL_ID: string = process.env
  .ANTHROPIC_CLAUDE_REGULAR_MODEL_ID as string;
export const ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID: string = process.env
  .ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID as string;
