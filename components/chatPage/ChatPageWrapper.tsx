import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import ChatInputWrapper from '@/components/chatInput/ChatInputWrapper';
import ChatDisclaimer from '@/components/chatLegal/ChatDisclaimer';
import ChatTermsAndPrivacy from '@/components/chatLegal/ChatTermsAndPrivacy';
import ChatMessagesWrapper from '@/components/chatMessages/ChatMessagesWrapper';
import ChatNavbarWrapper from '@/components/chatNavbar/ChatNavbarWrapper';
import { ChatPageWireframe } from '@/components/chatPage/ChatPageWireframe';
import ChatSideDrawerWrapper from '@/components/chatSideDrawer/ChatSideDrawerWrapper';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function ChatPageWrapper(): JSX.Element {
  const { appRootId, isSideDrawerOpen }: ChatLayoutContextValue =
    useChatLayoutContext();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  return (
    <ChatPageWireframe
      appRootId={appRootId}
      isSideDrawerOpen={isSideDrawerOpen}
      navbar={<ChatNavbarWrapper />}
      sideDrawer={<ChatSideDrawerWrapper />}
    >
      <ChatMessagesWrapper />
      <ChatDisclaimer />
      <ChatInputWrapper />
      {clientUser ? null : <ChatTermsAndPrivacy />}
    </ChatPageWireframe>
  );
}
