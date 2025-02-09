import Link from 'next/link';
import type { JSX } from 'react';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/external-links';

export const LegalNotice = (): JSX.Element => {
  return (
    <p className="text-center leading-snug text-sm">
      <span className="sr-only">
        By signing in, you agree to our terms and conditions and have read our
        privacy policy.
      </span>
      <span aria-hidden="true">By signing in, you agree to our&nbsp;</span>
      <Link
        href={TERMS_AND_CONDITIONS_LINK}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open terms and conditions in a new tab"
        aria-current="false"
      >
        Terms and Conditions
      </Link>
      <span aria-hidden="true">&nbsp;and have read our&nbsp;</span>
      <Link
        href={PRIVACY_POLICY_LINK}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open privacy policy in a new tab"
        aria-current="false"
      >
        Privacy Policy
      </Link>
      <span aria-hidden="true">.</span>
    </p>
  );
};
