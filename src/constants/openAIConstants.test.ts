import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import { OPENAI_API_KEY, OPENAI_MODEL_ID } from "./openAIConstants";

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe("OpenAI constants", () => {
  it("a valid api key", () => {
    expect(isNonEmptyString(OPENAI_API_KEY)).toBe(true);
    expect(OPENAI_API_KEY).toMatch(/^sk-/);
  });

  it("a valid model", () => {
    expect(isNonEmptyString(OPENAI_MODEL_ID)).toBe(true);
    expect(OPENAI_MODEL_ID).toMatch(/^gpt-/);
  });
});
