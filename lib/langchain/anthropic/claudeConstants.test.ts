import * as claudeConstants from '@/lib/langchain/anthropic/claudeConstants';
import { isNonEmptyString } from '@/utils/is-non-empty-string';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

// Mock the 'server-only' react flag to allow unit tests to run.
vi.mock('server-only', () => {
  return { __esModule: true, default: {} };
});

describe('Anthropic Claude constants', () => {
  it('has all required exports', () => {
    expect(claudeConstants).toHaveProperty('ANTHROPIC_CLAUDE_API_KEY');
    expect(claudeConstants).toHaveProperty('ANTHROPIC_CLAUDE_LITE_MODEL_ID');
    expect(claudeConstants).toHaveProperty('ANTHROPIC_CLAUDE_REGULAR_MODEL_ID');
    expect(claudeConstants).toHaveProperty('ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID');
  });

  it('has all required exports as non-empty strings', () => {
    expect(isNonEmptyString(claudeConstants.ANTHROPIC_CLAUDE_API_KEY)).toBe(
      true,
    );
    expect(
      isNonEmptyString(claudeConstants.ANTHROPIC_CLAUDE_LITE_MODEL_ID),
    ).toBe(true);
    expect(
      isNonEmptyString(claudeConstants.ANTHROPIC_CLAUDE_REGULAR_MODEL_ID),
    ).toBe(true);
    expect(
      isNonEmptyString(claudeConstants.ANTHROPIC_CLAUDE_PREMIUM_MODEL_ID),
    ).toBe(true);
  });
});
