import {
  type Context,
  type JSX,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Modal from 'react-modal';

import type {
  ChatContextProviderProps,
  ChatLayoutContextValue,
} from '@/types/chat-context-props';

const ChatLayoutContext: Context<ChatLayoutContextValue | undefined> =
  createContext<ChatLayoutContextValue | undefined>(undefined);

export const ChatLayoutProvider = ({
  children,
}: ChatContextProviderProps): JSX.Element => {
  const appRootId: string = 'app-root';
  const sideDrawerSectionId: string = 'side-drawer-section';
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<boolean>(false);
  const sideDrawerOpenFocusRef = useRef<HTMLHeadingElement>(null);
  const sideDrawerCloseFocusRef = useRef<HTMLHeadingElement>(null);

  // Memoize handlers at source.
  const openSideDrawer = useCallback(() => {
    setIsSideDrawerOpen(true);
    sideDrawerOpenFocusRef.current?.focus();
  }, []);

  const closeSideDrawer = useCallback(() => {
    setIsSideDrawerOpen(false);
    sideDrawerCloseFocusRef.current?.focus();
  }, []);

  // On mount, bind react-modal to app root element for accessibility:
  // react-modal will automatically add aria-hidden to the app root element
  // when the modal is open, preventing screen readers from reading content
  // outside the modal. (https://reactcommunity.org/react-modal/accessibility/)
  useEffect(() => {
    Modal.setAppElement(`#${appRootId}`);
  }, []);

  const contextValue: ChatLayoutContextValue = {
    appRootId,
    sideDrawerSectionId,
    isSideDrawerOpen,
    openSideDrawer,
    closeSideDrawer,
    sideDrawerOpenFocusRef,
    sideDrawerCloseFocusRef,
  };

  return (
    <ChatLayoutContext.Provider value={contextValue}>
      {children}
    </ChatLayoutContext.Provider>
  );
};

export const useChatLayoutContext = (): ChatLayoutContextValue => {
  const context: ChatLayoutContextValue | undefined =
    useContext(ChatLayoutContext);
  if (context === undefined) {
    throw new Error(
      'useChatLayoutContext must be used within a ChatLayoutProvider',
    );
  }
  return context;
};
