import { MEASUREMENT_ID } from '@/constants/googleConstants';
import isNonEmptyString from '@/utils/isNonEmptyString';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe('Google constants', (): void => {
  it('exports a valid measurement id', (): void => {
    expect(isNonEmptyString(MEASUREMENT_ID)).toBe(true);
    expect(MEASUREMENT_ID).toMatch(/^G-[A-Z0-9]{10}$/);
  });
});
