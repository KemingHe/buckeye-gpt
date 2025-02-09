import { z } from 'zod';

export enum AI_PROVIDER_ENUM {
  OPENAI = 'OpenAI',
  GOOGLE = 'Google',
  ANTHROPIC = 'Anthropic',
}

export const AI_PROVIDER_ARRAY: string[] = Object.values(AI_PROVIDER_ENUM);

const AI_PROVIDER_ERROR_MESSAGE: string = 'Invalid AI provider name.';

export const AIProviderSchema = z.nativeEnum(AI_PROVIDER_ENUM, {
  message: AI_PROVIDER_ERROR_MESSAGE,
});

export type AIProvider = z.infer<typeof AIProviderSchema>;
