import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import type { ReactNode, RefObject } from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatNavbarWireframeProps {
  clientUser             : CurrentUser | CurrentInternalUser | null;
  sideDrawerCloseFocusRef: RefObject<HTMLHeadingElement>;
  openSideDrawerButton   : ReactNode;
  clearMessagesButton    : ReactNode;
}

// biome-ignore format: added alignment for clarity.
export interface ClearMessagesButtonWireframeProps {
  isLoading      : boolean;
  isMessagesEmpty: boolean;
  inputRef       : RefObject<HTMLTextAreaElement>;
  clearMessages  : () => void;
}

// biome-ignore format: added alignment for clarity.
export interface OpenSideDrawerButtonWireframeProps {
  sideDrawerSectionId: string;
  isSideDrawerOpen   : boolean;
  openSideDrawer     : () => void;
}
