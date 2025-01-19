import type { Message } from '@ai-sdk/ui-utils';
import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import {
  type ChangeEvent,
  type Context,
  type FormEvent,
  type JSX,
  type ReactNode,
  createContext,
  useContext,
  useMemo,
} from 'react';

import {
  LANGCHAIN_OPENAI_LITE_API_ENDPOINT,
  LANGCHAIN_OPENAI_REGULAR_API_ENDPOINT,
} from '@/constants/apiEndpointConstants';
import { useChat } from '@/hooks/useChat/useChat';

// biome-ignore format: added alignment for clarity.
export interface ChatContextValue {
  // Chat states.
  //  - Loading state.
  isLoading         : boolean;

  //  - Error state.
  error             : Error | undefined;

  //  - Message state.
  messages          : Message[];

  //  - (Form) Input state and handlers.
  inputValue        : string;
  setInputValue     : (value: string) => void;

  //  - Form event handlers.
  handleSubmit      : (event?: FormEvent<HTMLFormElement>) => void;
  handleInputChange : (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStopRequest : () => void;
}

const ChatContext: Context<ChatContextValue | undefined> = createContext<
  ChatContextValue | undefined
>(undefined);

export function ChatProvider({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();

  const {
    isLoading,
    error,
    messages,
    input,
    setInput,
    handleSubmit,
    handleInputChange,
    stop,
  } = useChat({
    api: clientUser
      ? LANGCHAIN_OPENAI_REGULAR_API_ENDPOINT
      : LANGCHAIN_OPENAI_LITE_API_ENDPOINT,
    onError: (e) => console.error(e),
  });

  const memoizedChatContextValue: ChatContextValue = useMemo(
    () => ({
      isLoading,
      error,
      messages,
      inputValue: input,
      setInputValue: setInput,
      handleSubmit,
      handleInputChange,
      handleStopRequest: stop,
    }),
    [
      isLoading,
      error,
      messages,
      input,
      setInput,
      handleSubmit,
      handleInputChange,
      stop,
    ],
  );

  return (
    <ChatContext.Provider value={memoizedChatContextValue}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext(): ChatContextValue {
  const context: ChatContextValue | undefined = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}
