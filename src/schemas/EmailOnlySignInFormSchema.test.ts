import { describe, expect, it } from "vitest";

import { EmailOnlySignInFormSchema } from "./EmailOnlySignInFormSchema";

describe("SignInFormSchema", () => {
  it("validates an object with a valid email field", () => {
    const validData = { email: "buckeye.1@osu.edu" };
    expect(EmailOnlySignInFormSchema.safeParse(validData).success).toBe(true);
  });

  it("invalidates an object with an invalid email field, and yieds the correct error message", () => {
    const invalidEmailData1 = { email: "buckeye.1" };
    const invalidEmailData1Result =
      EmailOnlySignInFormSchema.safeParse(invalidEmailData1);
    expect(invalidEmailData1Result.success).toBe(false);
    expect(invalidEmailData1Result.error?.issues[0].message).toBe(
      "Please enter a valid email."
    );

    const invalidEmailData2 = { email: true };
    const invalidEmailData2Result =
      EmailOnlySignInFormSchema.safeParse(invalidEmailData2);
    expect(invalidEmailData2Result.success).toBe(false);
    expect(invalidEmailData2Result.error?.issues[0].message).toBe(
      "Please enter a valid email."
    );

    const emptyEmailData = { email: "" };
    const emptyEmailDataResult =
      EmailOnlySignInFormSchema.safeParse(emptyEmailData);
    expect(emptyEmailDataResult.success).toBe(false);
    expect(emptyEmailDataResult.error?.issues[0].message).toBe(
      "Please enter a valid email."
    );

    const missingEmailData = {};
    const missingEmailDataResult =
      EmailOnlySignInFormSchema.safeParse(missingEmailData);
    expect(missingEmailDataResult.success).toBe(false);
    expect(missingEmailDataResult.error?.issues[0].message).toBe(
      "Please enter a valid email."
    );

    const invalidData = null;
    const invalidDataResult = EmailOnlySignInFormSchema.safeParse(invalidData);
    expect(invalidDataResult.success).toBe(false);
    expect(invalidDataResult.error?.issues[0].message).toBe(
      "Please complete the form as instructed."
    );
  });

  it("invalidates an object with extra fields, and yields the correct error message", () => {
    const extraFieldData = { email: "buckeye.1@osu.edu", extra: "field" };
    const result = EmailOnlySignInFormSchema.safeParse(extraFieldData);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "Please complete the form as instructed."
    );
  });
});
