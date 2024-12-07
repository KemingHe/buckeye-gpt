import { describe, expect, it } from "vitest";

import {
  BROWSER_OPTIONS_ARRAY,
  BrowserOptionsSchema
} from "./BrowserOptionsSchema";

describe("BROWSER_OPTIONS_ARRAY", () => {
  it("matches the snapshot", () => {
    expect(BROWSER_OPTIONS_ARRAY).toMatchSnapshot();
  });
});

describe("BrowserOptionsSchema", () => {
  it("validates an array with valid browser options", () => {
    const validData: string[] = ["Desktop Chrome", "Mobile Safari"];
    expect(BrowserOptionsSchema.safeParse(validData).success).toBe(true);
  });

  it("invalidates an array with invalid browser options, and yields the correct error message", () => {
    const invalidBrowserData1: string[] = ["Invalid Browser"];
    const invalidBrowserData1Result =
      BrowserOptionsSchema.safeParse(invalidBrowserData1);
    expect(invalidBrowserData1Result.success).toBe(false);
    expect(invalidBrowserData1Result.error?.issues[0].message).toBe(
      "Please select a valid browser."
    );

    const invalidBrowserData2: number[] = [2];
    const invalidBrowserData2Result =
      BrowserOptionsSchema.safeParse(invalidBrowserData2);
    expect(invalidBrowserData2Result.success).toBe(false);
    expect(invalidBrowserData2Result.error?.issues[0].message).toBe(
      "Please select a valid browser."
    );

    const deuplicateBrowserData: string[] = [
      "Desktop Chrome",
      "Mobile Safari",
      "Mobile Safari"
    ];
    const deuplicateBrowserDataResult = BrowserOptionsSchema.safeParse(
      deuplicateBrowserData
    );
    expect(deuplicateBrowserDataResult.success).toBe(false);
    expect(deuplicateBrowserDataResult.error?.issues[0].message).toBe(
      "Duplicate browser selections are not allowed."
    );

    const emptyBrowserData: string[] = [];
    const emptyBrowserDataResult =
      BrowserOptionsSchema.safeParse(emptyBrowserData);
    expect(emptyBrowserDataResult.success).toBe(false);
    expect(emptyBrowserDataResult.error?.issues[0].message).toBe(
      "Please select at least one browser."
    );

    const missingBrowserData = null;
    const missingBrowserDataResult =
      BrowserOptionsSchema.safeParse(missingBrowserData);
    expect(missingBrowserDataResult.success).toBe(false);
    expect(missingBrowserDataResult.error?.issues[0].message).toBe(
      "Please select a valid browser."
    );
  });
});
