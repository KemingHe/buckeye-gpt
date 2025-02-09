import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import { ChatInput } from '@/components/chat-input';
import { Disclaimer } from '@/components/chat-legal-disclaimer';
import { TermsAndPrivacy } from '@/components/chat-legal-terms-and-privacy';
import { ChatMessages } from '@/components/chat-messages';
import { ChatNavbar } from '@/components/chat-navbar';
import { ChatPageWireframe } from '@/components/chat-page-wireframe';
import { ChatSideDrawer } from '@/components/chat-side-drawer';
import { ChatWelcome } from '@/components/chat-welcome';
import { useChatDataContext } from '@/contexts/chat-data';
import { useChatLayoutContext } from '@/contexts/chat-layout';
import type {
  ChatDataContextValue,
  ChatLayoutContextValue,
} from '@/types/chat-context-props';

export const ChatPage = (): JSX.Element => {
  const { appRootId, isSideDrawerOpen }: ChatLayoutContextValue =
    useChatLayoutContext();
  const { messages }: ChatDataContextValue = useChatDataContext();
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  return (
    <ChatPageWireframe
      appRootId={appRootId}
      isSideDrawerOpen={isSideDrawerOpen}
      navbar={<ChatNavbar />}
      sideDrawer={<ChatSideDrawer />}
    >
      {messages.length === 0 ? <ChatWelcome /> : <ChatMessages />}
      <Disclaimer />
      <ChatInput />
      {clientUser ? null : <TermsAndPrivacy />}
    </ChatPageWireframe>
  );
};
