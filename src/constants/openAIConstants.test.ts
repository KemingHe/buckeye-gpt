import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import { openAIAPIKey, openAIModel } from "./openAIConstants";

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe("OpenAI constants", () => {
  it("a valid api key", () => {
    expect(isNonEmptyString(openAIAPIKey)).toBe(true);
    expect(openAIAPIKey).toMatch(/^sk-proj-/);
  });

  it("a valid model", () => {
    expect(isNonEmptyString(openAIModel)).toBe(true);
  });
});
