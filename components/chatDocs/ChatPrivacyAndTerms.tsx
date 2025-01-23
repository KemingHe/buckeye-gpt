import Link from 'next/link';
import type { JSX } from 'react';

import {
  PRIVACY_POLICY_LINK,
  TERMS_AND_CONDITIONS_LINK,
} from '@/constants/externalLinkConstants';

export default function ChatPrivacyAndTerms(): JSX.Element {
  const privacyAndTermsHeadingId: string = 'chat-privacy-and-terms-heading';
  return (
    <section className="w-full mb-2" aria-labelledby={privacyAndTermsHeadingId}>
      <h2 id={privacyAndTermsHeadingId} className="sr-only">
        Privacy and Terms and Conditions
      </h2>
      <p className="text-xs text-center leading-snug">
        By using our service, you agree to our&nbsp;
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
        &nbsp;and have read our&nbsp;
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
        .
      </p>
    </section>
  );
}
