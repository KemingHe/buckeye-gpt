import { type UseChatHelpers, useChat } from '@ai-sdk/react';
import {
  type Context,
  type JSX,
  type RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';

import { useChatConfigContext } from '@/contexts/chat-config';
import type {
  ChatConfigContextValue,
  ChatContextProviderProps,
  ChatDataContextValue,
} from '@/types/chat-context-props';

const ChatDataContext: Context<ChatDataContextValue | undefined> =
  createContext<ChatDataContextValue | undefined>(undefined);

export const ChatDataProvider = ({
  children,
}: ChatContextProviderProps): JSX.Element => {
  const { apiEndpoint }: ChatConfigContextValue = useChatConfigContext();
  const inputRef: RefObject<HTMLTextAreaElement> =
    useRef<HTMLTextAreaElement>(null);
  const {
    status,
    error,
    messages,
    input,
    setMessages,
    setInput,
    handleSubmit,
    handleInputChange,
    stop,
  }: UseChatHelpers = useChat({
    api: apiEndpoint,
    onError: (e) => console.error(e),
  });

  // Auto re-focus on input textarea when loading is done.
  useEffect(() => {
    if (status === 'ready') inputRef.current?.focus();
  }, [status]);

  // Auto-refocus on input textarea when messages have been cleared.
  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  // No need to memoize because:
  // 1. All values from useChat() are already stable references;
  // 2. Creating a simple object with references is cheap;
  // 3. When chat state changes, consumers would re-render anyway.
  const contextValue: ChatDataContextValue = {
    isLoading: status === 'submitted' || status === 'streaming',
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
};

export const useChatDataContext = (): ChatDataContextValue => {
  const context: ChatDataContextValue | undefined = useContext(ChatDataContext);
  if (context === undefined) {
    throw new Error('useChatDataContext must be used within a ChatDatarovider');
  }
  return context;
};
