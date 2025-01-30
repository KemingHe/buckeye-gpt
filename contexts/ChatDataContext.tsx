import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import { type Message, type UseChatHelpers, useChat } from 'ai/react';
import {
  type ChangeEvent,
  type Context,
  type FormEvent,
  type JSX,
  type ReactNode,
  type RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';

import {
  LANGCHAIN_OPENAI_LITE_API_ENDPOINT,
  LANGCHAIN_OPENAI_REGULAR_API_ENDPOINT,
  // LANGCHAIN_GOOGLE_GEMINI_LITE_API_ENDPOINT,
  // LANGCHAIN_GOOGLE_GEMINI_REGULAR_API_ENDPOINT,
  // LANGCHAIN_ANTHROPIC_CLAUDE_LITE_API_ENDPOINT,
  // LANGCHAIN_ANTHROPIC_CLAUDE_REGULAR_API_ENDPOINT,
} from '@/constants/apiEndpointConstants';

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

const ChatDataContext: Context<ChatDataContextValue | undefined> =
  createContext<ChatDataContextValue | undefined>(undefined);

export function ChatDataProvider({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const inputRef: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const {
    isLoading,
    error,
    messages,
    input,
    setMessages,
    setInput,
    handleSubmit,
    handleInputChange,
    stop,
  }: UseChatHelpers = useChat({
    api: clientUser
      ? LANGCHAIN_OPENAI_REGULAR_API_ENDPOINT
      : LANGCHAIN_OPENAI_LITE_API_ENDPOINT,
    onError: (e) => console.error(e),
  });

  // Auto re-focus on input textarea when loading is done.
  useEffect(() => {
    if (!isLoading) inputRef.current?.focus();
  }, [isLoading]);

  // Auto-refocus on input textarea when messages have been cleared.
  const clearMessages = useCallback(() => {
    setMessages([]);
    inputRef.current?.focus();
  }, []);

  // No need to memoize because:
  // 1. All values from useChat() are already stable references;
  // 2. Creating a simple object with references is cheap;
  // 3. When chat state changes, consumers would re-render anyway.
  const contextValue: ChatDataContextValue = {
    isLoading,
    error,
    messages,
    inputValue: input,
    inputRef,
    clearMessages,
    setInputValue: setInput,
    handleSubmit,
    handleInputChange,
    handleStopRequest: stop,
  };

  return (
    <ChatDataContext.Provider value={contextValue}>
      {children}
    </ChatDataContext.Provider>
  );
}

export function useChatDataContext(): ChatDataContextValue {
  const context: ChatDataContextValue | undefined = useContext(ChatDataContext);
  if (context === undefined) {
    throw new Error('useChatDataContext must be used within a ChatDatarovider');
  }
  return context;
}
