import {
  DocumentTextIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { JSX } from 'react';

import styles from '@/components/chat-welcome.module.css';
import { useChatDataContext } from '@/contexts/chat-data';
import type { ChatDataContextValue } from '@/types/chat-context-props';
import { getVersion } from '@/utils/package';

export const ChatWelcome = (): JSX.Element => {
  const { isLoading, inputRef, setInputValue }: ChatDataContextValue =
    useChatDataContext();
  const handleSuggestionClick = (suggestion: string): void => {
    setInputValue(suggestion);
    inputRef.current?.focus();
  };
  const version: string = getVersion();
  const welcomeHeadingId: string = 'chat-welcome-heading';
  return (
    <section
      className="flex-grow min-h-0 px-2 flex flex-col justify-center items-center gap-2"
      aria-labelledby={welcomeHeadingId}
    >
      <h2 id={welcomeHeadingId} className="sr-only">
        Welcome to Using Buckeye GPT
      </h2>
      <Image
        src="/images/transparent-buckeye-gpt-icon-512x512px.png"
        className={`${styles['welcome-logo']} no-screenshot`}
        alt="Buckeye GPT logo"
        width={75}
        height={75}
        priority={true}
      />
      <ul className="flex flex-col items-center sm:flex-row gap-2 sm:gap-4">
        <li>
          <button
            type="button"
            className="group btn btn-neutral btn-outline btn-sm rounded-full"
            onClick={() => handleSuggestionClick('What is Buckeye GPT?')}
            disabled={isLoading}
            aria-label="Ask about what Buckeye GPT is"
            aria-disabled={isLoading}
          >
            <QuestionMarkCircleIcon
              className="size-5 -me-1 text-info transition-colors group-hover:text-info-content"
              aria-hidden="true"
            />
            <span aria-hidden="true">What is Buckeye GPT</span>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-neutral btn-outline btn-sm rounded-full"
            onClick={() => handleSuggestionClick('How to cite in APA style?')}
            disabled={isLoading}
            aria-label="Ask about APA citation format"
            aria-disabled={isLoading}
          >
            <DocumentTextIcon className="size-5 -me-1" aria-hidden="true" />
            <span aria-hidden="true">How to cite in APA style</span>
          </button>
        </li>
      </ul>
      <div className="no-screenshot">
        <span className="sr-only">Buckeye GPT version {version}</span>
        <span className="badge badge-neutral badge-sm" aria-hidden="true">
          ver {version}
        </span>
      </div>
    </section>
  );
};
