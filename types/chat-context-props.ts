import type { Message } from 'ai/react';
import type { ChangeEvent, FormEvent, ReactNode, RefObject } from 'react';

export interface ChatContextProviderProps {
  readonly children: ReactNode;
}

// biome-ignore format: added alignment for clarity.
export interface ChatLayoutContextValue {
  // Root ID for the app, required by react-modal.
  appRootId             : string;
  // Side drawer states, actions, and refs.
  sideDrawerSectionId    : string;
  isSideDrawerOpen       : boolean;
  openSideDrawer         : () => void;
  closeSideDrawer        : () => void;
  sideDrawerOpenFocusRef : RefObject<HTMLHeadingElement>;
  sideDrawerCloseFocusRef: RefObject<HTMLHeadingElement>;
}

// biome-ignore format: added alignment for clarity.
export interface ChatConfigContextValue {
  apiEndpoint        : string;
  fallbackApiEndpoint: string;
}

// biome-ignore format: added alignment for clarity.
export interface ChatDataContextValue {
  // Chat states.
  isLoading         : boolean;
  error             : Error | undefined;
  messages          : Message[];
  inputValue        : string;
  inputRef          : RefObject<HTMLTextAreaElement>;
  // Chat actions.
  clearMessages     : () => void;
  setInputValue     : (value: string) => void;
  handleSubmit      : (event?: FormEvent<HTMLFormElement>) => void;
  handleInputChange : (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStopRequest : () => void;
}
