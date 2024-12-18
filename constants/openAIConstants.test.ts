import { OPENAI_API_KEY, OPENAI_MODEL_ID } from '@/constants/openAIConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe('OpenAI constants include', () => {
  it('a valid api key', () => {
    expect(isNonEmptyString(OPENAI_API_KEY)).toBe(true);
    expect(OPENAI_API_KEY).toMatch(/^sk-/);
  });

  it('a valid model', () => {
    expect(isNonEmptyString(OPENAI_MODEL_ID)).toBe(true);
    expect(OPENAI_MODEL_ID).toMatch(/^gpt-/);
  });
});
