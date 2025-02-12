import type { JSX } from 'react';

import { ClearMessagesButtonWireframe } from '@/components/chat-navbar-clear-messages-button-daisyui-wireframe';
import { useChatDataContext } from '@/contexts/chat-data';
import type { ChatDataContextValue } from '@/types/chat-context-props';

export const ClearMessagesButton = (): JSX.Element => {
  const { isLoading, messages, inputRef, clearMessages }: ChatDataContextValue =
    useChatDataContext();

  return (
    <ClearMessagesButtonWireframe
      isLoading={isLoading}
      isMessagesEmpty={messages.length === 0}
      inputRef={inputRef}
      clearMessages={clearMessages}
    />
  );
};
