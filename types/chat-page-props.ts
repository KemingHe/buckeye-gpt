import type { ReactNode } from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatPageWireframeProps {
  appRootId       : string;
  isSideDrawerOpen: boolean;
  navbar          : ReactNode;
  children        : ReactNode;
  sideDrawer      : ReactNode;
}
