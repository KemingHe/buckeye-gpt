import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import {
  type Context,
  type JSX,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  LANGCHAIN_GOOGLE_GEMINI_LITE_API_ENDPOINT,
  LANGCHAIN_GOOGLE_GEMINI_REGULAR_API_ENDPOINT,
  LANGCHAIN_OPENAI_GPT_LITE_API_ENDPOINT,
  LANGCHAIN_OPENAI_GPT_REGULAR_API_ENDPOINT,
  // LANGCHAIN_ANTHROPIC_CLAUDE_LITE_API_ENDPOINT,
  // LANGCHAIN_ANTHROPIC_CLAUDE_REGULAR_API_ENDPOINT,
} from '@/constants/api-v1-endpoints';
import type {
  ChatConfigContextValue,
  ChatContextProviderProps,
} from '@/types/chat-context-props';

const ChatConfigContext: Context<ChatConfigContextValue | undefined> =
  createContext<ChatConfigContextValue | undefined>(undefined);

export const ChatConfigProvider = ({
  children,
}: ChatContextProviderProps): JSX.Element => {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const [apiEndpoint, setApiEndpoint] = useState<string>(
    LANGCHAIN_OPENAI_GPT_LITE_API_ENDPOINT,
  );
  const [fallbackApiEndpoint, setFallbackApiEndpoint] = useState<string>(
    LANGCHAIN_GOOGLE_GEMINI_LITE_API_ENDPOINT,
  );

  useEffect(() => {
    if (clientUser !== null) {
      setApiEndpoint(LANGCHAIN_OPENAI_GPT_REGULAR_API_ENDPOINT);
      setFallbackApiEndpoint(LANGCHAIN_GOOGLE_GEMINI_REGULAR_API_ENDPOINT);
    } else {
      setApiEndpoint(LANGCHAIN_OPENAI_GPT_LITE_API_ENDPOINT);
      setFallbackApiEndpoint(LANGCHAIN_GOOGLE_GEMINI_LITE_API_ENDPOINT);
    }
  }, [clientUser]);

  const contextValue: ChatConfigContextValue = {
    apiEndpoint,
    fallbackApiEndpoint,
  };

  return (
    <ChatConfigContext.Provider value={contextValue}>
      {children}
    </ChatConfigContext.Provider>
  );
};

export const useChatConfigContext = (): ChatConfigContextValue => {
  const context: ChatConfigContextValue | undefined =
    useContext(ChatConfigContext);
  if (context === undefined) {
    throw new Error(
      'useChatConfigContext must be used within a ChatConfigProvider',
    );
  }
  return context;
};
