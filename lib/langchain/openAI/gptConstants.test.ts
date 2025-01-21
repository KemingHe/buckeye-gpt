import * as gptConstants from '@/lib/langchain/openAI/gptConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('OpenAI GPT constants', () => {
  it('has all required exports', () => {
    expect(gptConstants).toHaveProperty('OPENAI_GPT_API_KEY');
    expect(gptConstants).toHaveProperty('OPENAI_GPT_LITE_MODEL_ID');
    expect(gptConstants).toHaveProperty('OPENAI_GPT_REGULAR_MODEL_ID');
    expect(gptConstants).toHaveProperty('OPENAI_GPT_PREMIUM_MODEL_ID');
  });

  it('has all required exports as non-empty strings', () => {
    expect(isNonEmptyString(gptConstants.OPENAI_GPT_API_KEY)).toBe(true);
    expect(isNonEmptyString(gptConstants.OPENAI_GPT_LITE_MODEL_ID)).toBe(true);
    expect(isNonEmptyString(gptConstants.OPENAI_GPT_REGULAR_MODEL_ID)).toBe(
      true,
    );
    expect(isNonEmptyString(gptConstants.OPENAI_GPT_PREMIUM_MODEL_ID)).toBe(
      true,
    );
  });
});
