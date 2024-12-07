import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import { firebaseAdminConfig } from "./firebaseAdminConfig";

describe("firebaseAdminConfig", () => {
  it("returns a firebase admin config object with the correct properties", () => {
    expect(isNonEmptyString(firebaseAdminConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseAdminConfig.privateKey)).toBe(true);
    expect(isNonEmptyString(firebaseAdminConfig.clientEmail)).toBe(true);
  });
});
