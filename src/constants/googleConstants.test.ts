import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import { MEASUREMENT_ID } from "./googleConstants";

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe("Google constants", () => {
  it("exports a valid measurement id", () => {
    expect(isNonEmptyString(MEASUREMENT_ID)).toBe(true);
    expect(MEASUREMENT_ID).toMatch(/^G-[A-Z0-9]{10}$/);
  });
});
