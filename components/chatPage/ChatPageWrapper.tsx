import type { JSX } from 'react';

import ChatInputWrapper from '@/components/chatInput/ChatInputWrapper';
import ChatMessagesWrapper from '@/components/chatMessages/ChatMessagesWrapper';
import ChatNavbarWrapper from '@/components/chatNavbar/ChatNavbarWrapper';
import { ChatPageWireframe } from '@/components/chatPage/ChatPageWireframe';
import ChatSideDrawerWrapper from '@/components/chatSideDrawer/ChatSideDrawerWrapper';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function ChatPageWrapper(): JSX.Element {
  const { isSideDrawerOpen }: ChatLayoutContextValue = useChatLayoutContext();

  return (
    <ChatPageWireframe
      isSideDrawerOpen={isSideDrawerOpen}
      navbar={<ChatNavbarWrapper />}
      sideDrawer={<ChatSideDrawerWrapper />}
    >
      <ChatMessagesWrapper />
      <ChatInputWrapper />
    </ChatPageWireframe>
  );
}
