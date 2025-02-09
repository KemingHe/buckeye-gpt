import type { ReactNode, RefObject } from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatSideDrawerWireframeProps {
  // Layout states and actions.
  sideDrawerSectionId   : string;
  isSideDrawerOpen      : boolean;
  closeSideDrawer       : () => void;
  sideDrawerOpenFocusRef: RefObject<HTMLHeadingElement>;
  // Children.
  readonly children     : ReactNode;
}
