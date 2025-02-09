import type { JSX } from 'react';

import { ChatHistory } from '@/components/chat-history';
import { ChatSideDrawerWireframe } from '@/components/chat-side-drawer-wireframe';
import { useChatLayoutContext } from '@/contexts/chat-layout';
import type { ChatLayoutContextValue } from '@/types/chat-context-props';

export const ChatSideDrawer = (): JSX.Element => {
  const {
    sideDrawerSectionId,
    isSideDrawerOpen,
    closeSideDrawer,
    sideDrawerOpenFocusRef,
  }: ChatLayoutContextValue = useChatLayoutContext();

  return (
    <ChatSideDrawerWireframe
      sideDrawerSectionId={sideDrawerSectionId}
      isSideDrawerOpen={isSideDrawerOpen}
      closeSideDrawer={closeSideDrawer}
      sideDrawerOpenFocusRef={sideDrawerOpenFocusRef}
    >
      <ChatHistory />
    </ChatSideDrawerWireframe>
  );
};
