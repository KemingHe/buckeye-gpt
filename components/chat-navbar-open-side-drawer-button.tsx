import type { JSX } from 'react';

import { OpenSideDrawerButtonWireframe } from '@/components/chat-navbar-open-side-drawer-button-wireframe';
import { useChatLayoutContext } from '@/contexts/chat-layout';
import type { ChatLayoutContextValue } from '@/types/chat-context-props';

export const OpenSideDrawerButton = (): JSX.Element => {
  const {
    sideDrawerSectionId,
    isSideDrawerOpen,
    openSideDrawer,
  }: ChatLayoutContextValue = useChatLayoutContext();

  return (
    <OpenSideDrawerButtonWireframe
      sideDrawerSectionId={sideDrawerSectionId}
      isSideDrawerOpen={isSideDrawerOpen}
      openSideDrawer={openSideDrawer}
    />
  );
};
