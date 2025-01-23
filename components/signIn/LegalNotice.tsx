import Link from 'next/link';
import type { JSX } from 'react';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/externalLinkConstants';

export default function LegalNotice(): JSX.Element {
  return (
    <p className="text-center leading-snug text-sm">
      By signing in, you acknowledge that you have read and agree to our&nbsp;
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
      &nbsp;and&nbsp;
      <Link
        href={TERMS_AND_CONDITIONS_LINK}
        className="link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open terms and conditions in a new tab"
        aria-current="false"
      >
        Terms & Conditions
      </Link>
      .
    </p>
  );
}
