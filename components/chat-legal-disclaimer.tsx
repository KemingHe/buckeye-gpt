import Link from 'next/link';
import type { JSX } from 'react';

import { LEGAL_DISCLAIMER_LINK } from '@/constants/external-links';

export const Disclaimer = (): JSX.Element => {
  const disclaimerHeadingId: string = 'chat-disclaimer-heading';
  return (
    <section className="w-full" aria-labelledby={disclaimerHeadingId}>
      <h2 id={disclaimerHeadingId} className="sr-only">
        Legal Disclaimer
      </h2>
      <p className="text-xs text-center leading-snug">
        <span className="sr-only">
          Buckeye GPT uses AI. Read our legal disclaimer.
        </span>
        <span aria-hidden="true">Buckeye GPT uses AI. Read our&nbsp;</span>
        <Link
          href={LEGAL_DISCLAIMER_LINK}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open legal disclaimer in a new tab"
          aria-current="false"
        >
          Disclaimer
        </Link>
        <span aria-hidden="true">.</span>
      </p>
    </section>
  );
};
