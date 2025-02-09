import Link from 'next/link';
import type { JSX } from 'react';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/external-links';

export const TermsAndPrivacy = (): JSX.Element => {
  const privacyAndTermsHeadingId: string = 'chat-privacy-and-terms-heading';
  return (
    <section className="w-full mb-2" aria-labelledby={privacyAndTermsHeadingId}>
      <h2 id={privacyAndTermsHeadingId} className="sr-only">
        Terms and Conditions and Privacy Policy
      </h2>
      <p className="text-xs text-center leading-snug">
        <span className="sr-only">
          By using our service, you agree to our terms and conditions and have
          read our privacy policy.
        </span>
        <span aria-hidden="true">
          By using our service, you agree to our&nbsp;
        </span>
        <Link
          href={TERMS_AND_CONDITIONS_LINK}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open terms and conditions in a new tab"
          aria-current="false"
        >
          Terms
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
    </section>
  );
};
