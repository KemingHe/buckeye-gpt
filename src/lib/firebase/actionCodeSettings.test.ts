import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import * as settings from "./actionCodeSettings";

describe("actionCodeSettings", () => {
  it("exports the correct firebase client action code settings object", () => {
    const actionCodeSettings = settings.actionCodeSettings;
    expect(isNonEmptyString(actionCodeSettings.url)).toBe(true);
    expect(actionCodeSettings.handleCodeInApp).toBe(true);
  });

  it("exports the correct firebase auth local storage key", () => {
    expect(settings.FIREBASE_AUTH_LOCAL_STORAGE_KEY).toMatchSnapshot();
  });
});
