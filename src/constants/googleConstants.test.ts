import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import { measurementId } from "./googleConstants";

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe("Google constants", () => {
  it("exports a valid measurement id", () => {
    expect(isNonEmptyString(measurementId)).toBe(true);
    expect(measurementId).toMatch(/^G-[A-Z0-9]{10}$/);
  });
});
