import * as googleConstants from '@/constants/google';
import { isNonEmptyString } from '@/utils/is-non-empty-string';

// IMPORTANT: NEVER snapshot secrets or sensitive information.

describe('Google constants', () => {
  it('exports a valid measurement id', () => {
    const measurementId: string = googleConstants.MEASUREMENT_ID;
    expect(isNonEmptyString(measurementId)).toBe(true);
    expect(measurementId).toMatch(/^G-[A-Z0-9]{10}$/);
  });
});
