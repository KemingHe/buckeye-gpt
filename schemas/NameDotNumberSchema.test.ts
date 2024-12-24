import type { ZodError } from 'zod';

import { NameDotNumberSchema } from '@/schemas/NameDotNumberSchema';

describe('NameDotNumberSchema', () => {
  it('parses valid name dot numbers without error', () => {
    expect(() => NameDotNumberSchema.parse('buckeye.1')).not.toThrow();
    expect(() => NameDotNumberSchema.parse('buck-eye.123')).not.toThrow();
    expect(() => NameDotNumberSchema.parse('bu-ck-eye.1')).not.toThrow();
  });

  it('throws an error for invalid name dot numbers', () => {
    expect(() => NameDotNumberSchema.parse('')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye.0')).toThrow();
    expect(() => NameDotNumberSchema.parse('buckeye.1.2')).toThrow();
  });

  it('throws an error for non-string values', () => {
    expect(() => NameDotNumberSchema.parse(1)).toThrow();
    expect(() => NameDotNumberSchema.parse({})).toThrow();
    expect(() => NameDotNumberSchema.parse([])).toThrow();
    expect(() => NameDotNumberSchema.parse(null)).toThrow();
    expect(() => NameDotNumberSchema.parse(undefined)).toThrow();
  });

  it('throws the correct error message for invalid string', () => {
    const result = NameDotNumberSchema.safeParse('buckeye.0');
    expect(result.success).toBe(false);
    const parseError: ZodError | undefined = result.error;
    expect(parseError).not.toBeUndefined();
    expect(parseError?.issues[0].message).toEqual('Enter a valid name.#');
  });

  it('throws the correct error message for invalid type', () => {
    const result = NameDotNumberSchema.safeParse(1.2);
    expect(result.success).toBe(false);
    const parseError: ZodError | undefined = result.error;
    expect(parseError).not.toBeUndefined();
    expect(parseError?.issues[0].message).toEqual('Enter a valid name.#');
  });

  it('returns the correct parsed value', () => {
    const value: string = NameDotNumberSchema.parse('buckeye.1');
    expect(value).toEqual('buckeye.1');
  });
});
