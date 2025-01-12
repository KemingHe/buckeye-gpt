import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatInputSection } from '@/components/chatInput/ChatInputSection';
import { ChatMessagesWrapper } from '@/components/chatMessages/ChatMessagesWrapper';
import { ChatPageWireframe } from '@/components/chatPage/ChatPageWireframe';

export default function ChatPageWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const chatId: string = uuidv4();

  return (
    <ChatPageWireframe clientUser={clientUser}>
      <ChatMessagesWrapper chatId={chatId} />
      <ChatInputSection chatId={chatId} />
    </ChatPageWireframe>
  );
}