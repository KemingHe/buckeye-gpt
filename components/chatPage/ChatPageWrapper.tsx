import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import { type JSX, useEffect, useRef, useState } from 'react';

import ChatInputWrapper from '@/components/chatInput/ChatInputWrapper';
import ChatMessagesWrapper from '@/components/chatMessages/ChatMessagesWrapper';
import { ChatPageWireframe } from '@/components/chatPage/ChatPageWireframe';
import { ChatProvider } from '@/contexts/ChatContext';

export default function ChatPageWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<boolean>(false);
  const openSideDrawer = () => setIsSideDrawerOpen(true);
  const closeSideDrawer = () => setIsSideDrawerOpen(false);

  const sideDrawerHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (isSideDrawerOpen && sideDrawerHeadingRef.current) {
      sideDrawerHeadingRef.current.focus();
    }
  }, [isSideDrawerOpen]);

  // TODO: Use context instead of prop drilling.
  return (
    <ChatProvider>
      <ChatPageWireframe
        clientUser={clientUser}
        isSideDrawerOpen={isSideDrawerOpen}
        openSideDrawer={openSideDrawer}
        closeSideDrawer={closeSideDrawer}
        sideDrawerHeadingRef={sideDrawerHeadingRef}
      >
        <ChatMessagesWrapper />
        <ChatInputWrapper />
      </ChatPageWireframe>
    </ChatProvider>
  );
}
