import Link from 'next/link';
import type { JSX } from 'react';

import { LEGAL_DISCLAIMER_LINK } from '@/constants/externalLinkConstants';

export default function ChatDisclaimer(): JSX.Element {
  const disclaimerHeadingId: string = 'chat-disclaimer-heading';
  return (
    <section className="w-full" aria-labelledby={disclaimerHeadingId}>
      <h2 id={disclaimerHeadingId} className="sr-only">
        Legal Disclaimer
      </h2>
      <p className="text-xs text-center leading-snug">
        Buckeye GPT uses AI. Read our&nbsp;
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
        .
      </p>
    </section>
  );
}
