import type { ZodError } from 'zod';

import {
  AIProviderSchema,
  AI_PROVIDER_ARRAY,
  AI_PROVIDER_ENUM,
} from '@/zod-schemas/ai-provider';

describe('AI_PROVIDER_ENUM', () => {
  it('has the correct values', () => {
    expect(AI_PROVIDER_ENUM.OPENAI).toBe('OpenAI');
    expect(AI_PROVIDER_ENUM.GOOGLE).toBe('Google');
    expect(AI_PROVIDER_ENUM.ANTHROPIC).toBe('Anthropic');
  });
});

describe('AI_PROVIDER_ARRAY', () => {
  it('has the correct values', () => {
    expect(AI_PROVIDER_ARRAY).toEqual(['OpenAI', 'Google', 'Anthropic']);
  });
});

describe('AIProviderSchema', () => {
  it('parses valid AI provider names without error', () => {
    expect(() => AIProviderSchema.parse('OpenAI')).not.toThrow();
    expect(() => AIProviderSchema.parse('Google')).not.toThrow();
    expect(() => AIProviderSchema.parse('Anthropic')).not.toThrow();
  });

  it('throws an error for invalid AI provider names', () => {
    expect(() => AIProviderSchema.parse('')).toThrow();
    expect(() => AIProviderSchema.parse('openai')).toThrow();
    expect(() => AIProviderSchema.parse('OPENAI')).toThrow();
    expect(() => AIProviderSchema.parse('InvalidProvider')).toThrow();
  });

  it('throws an error for invalid-typed values', () => {
    expect(() => AIProviderSchema.parse(123)).toThrow();
    expect(() => AIProviderSchema.parse({})).toThrow();
    expect(() => AIProviderSchema.parse([])).toThrow();
    expect(() => AIProviderSchema.parse(null)).toThrow();
    expect(() => AIProviderSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid provider name', () => {
    const result = AIProviderSchema.safeParse('InvalidProvider');
    expect(result.success).toBe(false);

    const parseError: ZodError | undefined = result.error;
    expect(parseError).toBeDefined();
    expect(parseError?.issues[0].message).toBe('Invalid AI provider name.');
  });

  it('throws the correct error message for invalid type', () => {
    const result = AIProviderSchema.safeParse(123);
    expect(result.success).toBe(false);

    const parseError: ZodError | undefined = result.error;
    expect(parseError).toBeDefined();
    expect(parseError?.issues[0].message).toBe('Invalid AI provider name.');
  });

  it('returns the correct parsed enum value', () => {
    expect(AIProviderSchema.parse('OpenAI')).toBe(AI_PROVIDER_ENUM.OPENAI);
    expect(AIProviderSchema.parse('Google')).toBe(AI_PROVIDER_ENUM.GOOGLE);
    expect(AIProviderSchema.parse('Anthropic')).toBe(
      AI_PROVIDER_ENUM.ANTHROPIC,
    );
  });
});
