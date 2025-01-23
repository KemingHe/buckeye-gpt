import {
  type Context,
  type JSX,
  type ReactNode,
  createContext,
  useContext,
} from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatConfigContextValue {
  placeholder: string;
}

const ChatConfigContext: Context<ChatConfigContextValue | undefined> =
  createContext<ChatConfigContextValue | undefined>(undefined);

export function ChatConfigProvider({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const contextValue: ChatConfigContextValue = {
    placeholder: 'placeholder',
  };

  return (
    <ChatConfigContext.Provider value={contextValue}>
      {children}
    </ChatConfigContext.Provider>
  );
}

export function useChatConfigContext(): ChatConfigContextValue {
  const context: ChatConfigContextValue | undefined =
    useContext(ChatConfigContext);
  if (context === undefined) {
    throw new Error(
      'useChatConfigContext must be used within a ChatConfigProvider',
    );
  }
  return context;
}
