import type { JSX } from 'react';

import { OpenSideDrawerButtonWireframe } from '@/components/openSideDrawerButton/OpenSideDrawerButtonWireframe';
import {
  type ChatLayoutContextValue,
  useChatLayoutContext,
} from '@/contexts/ChatLayoutContext';

export default function OpenSideDrawerButtonWrapper(): JSX.Element {
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
}
