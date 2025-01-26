import {
  type Context,
  type JSX,
  type ReactNode,
  type RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import Modal from 'react-modal';

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

const ChatLayoutContext: Context<ChatLayoutContextValue | undefined> =
  createContext<ChatLayoutContextValue | undefined>(undefined);

export function ChatLayoutProvider({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
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
}

export function useChatLayoutContext(): ChatLayoutContextValue {
  const context: ChatLayoutContextValue | undefined =
    useContext(ChatLayoutContext);
  if (context === undefined) {
    throw new Error(
      'useChatLayoutContext must be used within a ChatLayoutProvider',
    );
  }
  return context;
}
