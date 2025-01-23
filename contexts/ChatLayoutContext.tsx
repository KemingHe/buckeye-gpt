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

// biome-ignore format: added alignment for clarity.
export interface ChatLayoutContextValue {
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
  const sideDrawerSectionId: string = 'side-drawer-section';
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState<boolean>(false);
  const sideDrawerOpenFocusRef = useRef<HTMLHeadingElement>(null);
  const sideDrawerCloseFocusRef = useRef<HTMLHeadingElement>(null);

  // Memoize handlers at source.
  const openSideDrawer = useCallback(() => setIsSideDrawerOpen(true), []);
  const closeSideDrawer = useCallback(() => setIsSideDrawerOpen(false), []);

  useEffect(() => {
    if (isSideDrawerOpen && sideDrawerOpenFocusRef.current) {
      sideDrawerOpenFocusRef.current.focus();
      return;
    }
    if (!isSideDrawerOpen && sideDrawerCloseFocusRef.current) {
      sideDrawerCloseFocusRef.current.focus();
    }
  }, [isSideDrawerOpen]);

  const contextValue: ChatLayoutContextValue = {
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
