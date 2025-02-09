import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import { ClearMessagesButton } from '@/components/chat-navbar-clear-messages-button';
import { OpenSideDrawerButton } from '@/components/chat-navbar-open-side-drawer-button';
import { ChatNavbarWireframe } from '@/components/chat-navbar-wireframe';
import { useChatLayoutContext } from '@/contexts/chat-layout';
import type { ChatLayoutContextValue } from '@/types/chat-context-props';

export const ChatNavbar = (): JSX.Element => {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const { sideDrawerCloseFocusRef }: ChatLayoutContextValue =
    useChatLayoutContext();

  return (
    <ChatNavbarWireframe
      clientUser={clientUser}
      sideDrawerCloseFocusRef={sideDrawerCloseFocusRef}
      openSideDrawerButton={<OpenSideDrawerButton />}
      clearMessagesButton={<ClearMessagesButton />}
    />
  );
};
