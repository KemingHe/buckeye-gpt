import * as openAIConstants from '@/lib/langchain/openAI/openAIConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('OpenAI constants', () => {
  it('has all required exports', () => {
    expect(openAIConstants).toHaveProperty('OPENAI_API_KEY');
    expect(openAIConstants).toHaveProperty('OPENAI_LITE_MODEL_ID');
    expect(openAIConstants).toHaveProperty('OPENAI_REGULAR_MODEL_ID');
    expect(openAIConstants).toHaveProperty('OPENAI_PREMIUM_MODEL_ID');
  });

  it('has all required exports as non-empty strings', () => {
    expect(isNonEmptyString(openAIConstants.OPENAI_API_KEY)).toBe(true);
    expect(isNonEmptyString(openAIConstants.OPENAI_LITE_MODEL_ID)).toBe(true);
    expect(isNonEmptyString(openAIConstants.OPENAI_REGULAR_MODEL_ID)).toBe(
      true,
    );
    expect(isNonEmptyString(openAIConstants.OPENAI_PREMIUM_MODEL_ID)).toBe(
      true,
    );
  });
});
