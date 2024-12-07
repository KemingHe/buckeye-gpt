import { describe, expect, it } from "vitest";

import isNonEmptyString from "@utils/isNonEmptyString";

import firebaseConfig from "./firebaseConfig";

describe("firebaseConfig", () => {
  it("returns a firebase config object with the correct properties", () => {
    expect(isNonEmptyString(firebaseConfig.apiKey)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.authDomain)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.projectId)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.storageBucket)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.messagingSenderId)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.appId)).toBe(true);
    expect(isNonEmptyString(firebaseConfig.measurementId)).toBe(true);
  });
});
