import type { JSX } from 'react';

import { ChatSideDrawerWireframe } from '@/components/chatSideDrawer/ChatSideDrawerWireframe';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function ChatSideDrawerWrapper(): JSX.Element {
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
    />
  );
}
