import type { ZodError } from 'zod';

import { SignInFormFieldsSchema } from '@/zod-schemas/sign-in-form-fields';

describe('SignInFormFieldsSchema', () => {
  it('parses valid sign-in form fields without error', () => {
    expect(() =>
      SignInFormFieldsSchema.parse({ nameDotNumber: 'buckeye.1' }),
    ).not.toThrow();
  });

  it('throws an error for invalid sign-in form fields', () => {
    expect(() => SignInFormFieldsSchema.parse({ nameDotNumber: '' })).toThrow();
    expect(() =>
      SignInFormFieldsSchema.parse({ nameDotNumber: 'buckeye' }),
    ).toThrow();
    expect(() =>
      SignInFormFieldsSchema.parse({ nameDotNumber: 'buckeye.0' }),
    ).toThrow();
    expect(() =>
      SignInFormFieldsSchema.parse({ nameDotNumber: 'buckeye.1.2' }),
    ).toThrow();
  });

  it('throws an error for missing sign-in form fields', () => {
    expect(() => SignInFormFieldsSchema.parse({})).toThrow();
  });

  it('throws an error for extra sign-in form fields', () => {
    expect(() =>
      SignInFormFieldsSchema.parse({
        nameDotNumber: 'buckeye.1',
        extraField: 'extra',
      }),
    ).toThrow();
  });

  it('throws an error for non-object values', () => {
    expect(() => SignInFormFieldsSchema.parse(1)).toThrow();
    expect(() => SignInFormFieldsSchema.parse('buckeye.1')).toThrow();
    expect(() => SignInFormFieldsSchema.parse([])).toThrow();
    expect(() => SignInFormFieldsSchema.parse(null)).toThrow();
    expect(() => SignInFormFieldsSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid object', () => {
    const result = SignInFormFieldsSchema.safeParse({
      nameDotNumber: 'buckeye.0',
    });
    expect(result.success).toBe(false);

    const parseError: ZodError | undefined = result.error;
    expect(parseError).toBeDefined();
    expect(parseError?.issues[0].message).toEqual('Enter a valid name.#');
  });

  it('throws the correct error message for invalid type', () => {
    const result = SignInFormFieldsSchema.safeParse(1.2);
    expect(result.success).toBe(false);

    const parseError: ZodError | undefined = result.error;
    expect(parseError).toBeDefined();
    expect(parseError?.issues[0].message).toEqual(
      'Expected object, received number',
    );
  });

  it('returns the correct parsed value', () => {
    const value = SignInFormFieldsSchema.parse({ nameDotNumber: 'buckeye.1' });
    expect(value).toEqual({ nameDotNumber: 'buckeye.1' });
  });
});
