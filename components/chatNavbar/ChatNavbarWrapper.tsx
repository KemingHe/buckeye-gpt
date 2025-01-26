import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import { ChatNavbarWireframe } from '@/components/chatNavbar/ChatNavbarWireframe';
import ClearMessagesButtonWrapper from '@/components/clearMessagesButton/ClearMessagesButtonWrapper';
import OpenSideDrawerButtonWrapper from '@/components/openSideDrawerButton/OpenSideDrawerButtonWrapper';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function ChatNavbarWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const { sideDrawerCloseFocusRef }: ChatLayoutContextValue =
    useChatLayoutContext();

  return (
    <ChatNavbarWireframe
      clientUser={clientUser}
      sideDrawerCloseFocusRef={sideDrawerCloseFocusRef}
      openSideDrawerButton={<OpenSideDrawerButtonWrapper />}
      clearMessagesButton={<ClearMessagesButtonWrapper />}
    />
  );
}
