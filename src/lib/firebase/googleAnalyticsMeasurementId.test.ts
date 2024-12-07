import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import googleAnalyticsMeasurementId from "./googleAnalyticsMeasurementId";

describe("googleAnalyticsMeasurementId", () => {
  it("returns a non-empty string matching gaId format", () => {
    expect(isNonEmptyString(googleAnalyticsMeasurementId)).toBe(true);
    expect(googleAnalyticsMeasurementId).toMatch(/^G-[A-Z0-9]{10}$/);
  });
});
