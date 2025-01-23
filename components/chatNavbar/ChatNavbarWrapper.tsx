import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';

import { ChatNavbarWireframe } from '@/components/chatNavbar/ChatNavbarWireframe';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function ChatNavbarWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const {
    sideDrawerSectionId,
    isSideDrawerOpen,
    openSideDrawer,
    sideDrawerCloseFocusRef,
  }: ChatLayoutContextValue = useChatLayoutContext();

  return (
    <ChatNavbarWireframe
      clientUser={clientUser}
      sideDrawerSectionId={sideDrawerSectionId}
      isSideDrawerOpen={isSideDrawerOpen}
      openSideDrawer={openSideDrawer}
      sideDrawerCloseFocusRef={sideDrawerCloseFocusRef}
    />
  );
}
