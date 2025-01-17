import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import ChatInputWrapper from '@/components/chatInput/ChatInputWrapper';
import ChatMessagesWrapper from '@/components/chatMessages/ChatMessagesWrapper';
import { ChatPageWireframe } from '@/components/chatPage/ChatPageWireframe';
import { ChatProvider } from '@/contexts/ChatContext';

export default function ChatPageWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  return (
    <ChatProvider>
      <ChatPageWireframe clientUser={clientUser}>
        <ChatMessagesWrapper />
        <ChatInputWrapper />
      </ChatPageWireframe>
    </ChatProvider>
  );
}
