import type { JSX } from 'react';

import { ClearMessagesButtonWireframe } from '@/components/clearMessagesButton/ClearMessagesButtonWireframe';
import {
  type ChatDataContextValue,
  useChatDataContext,
} from '@/contexts/ChatDataContext';

export default function ClearMessagesButtonWrapper(): JSX.Element {
  const { isLoading, messages, clearMessages }: ChatDataContextValue =
    useChatDataContext();

  return (
    <ClearMessagesButtonWireframe
      isLoading={isLoading}
      isMessagesEmpty={messages.length === 0}
      clearMessages={clearMessages}
    />
  );
}
