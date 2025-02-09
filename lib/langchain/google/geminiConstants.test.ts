import * as geminiConstants from '@/lib/langchain/google/geminiConstants';
import { isNonEmptyString } from '@/utils/is-non-empty-string';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('Google Gemini constants', () => {
  it('has all required exports', () => {
    expect(geminiConstants).toHaveProperty('GOOGLE_GEMINI_API_KEY');
    expect(geminiConstants).toHaveProperty('GOOGLE_GEMINI_LITE_MODEL_ID');
    expect(geminiConstants).toHaveProperty('GOOGLE_GEMINI_REGULAR_MODEL_ID');
    expect(geminiConstants).toHaveProperty('GOOGLE_GEMINI_PREMIUM_MODEL_ID');
  });

  it('has all required exports as non-empty strings', () => {
    expect(isNonEmptyString(geminiConstants.GOOGLE_GEMINI_API_KEY)).toBe(true);
    expect(isNonEmptyString(geminiConstants.GOOGLE_GEMINI_LITE_MODEL_ID)).toBe(
      true,
    );
    expect(
      isNonEmptyString(geminiConstants.GOOGLE_GEMINI_REGULAR_MODEL_ID),
    ).toBe(true);
    expect(
      isNonEmptyString(geminiConstants.GOOGLE_GEMINI_PREMIUM_MODEL_ID),
    ).toBe(true);
  });
});
