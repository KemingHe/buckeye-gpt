import { useChat } from 'ai/react';
import {
  type JSX,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { ChatInputWireframe } from '@/components/chatInput/ChatInputWireframe';
import { textAreaKBDHandler } from '@/components/chatInput/textAreaKBDHandler';
import { useStopRequestKBD } from '@/components/chatInput/useStopRequestKBD';
import { LANGCHAIN_OPENAI_API_ENDPOINT } from '@/constants/apiEndpointConstants';

export function ChatInputWrapper({ chatId }: { chatId: string }): JSX.Element {
  const { input, setInput, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: LANGCHAIN_OPENAI_API_ENDPOINT,
      id: chatId,
      onError: (error) => console.error(error),
    });

  // ---------------------------------------------------------------------------
  // Auto re-focus on textarea when loading is done.
  const taRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (!isLoading && taRef.current) {
      taRef.current.focus();
    }
  }, [isLoading]);

  // ---------------------------------------------------------------------------
  // Textarea expand/collapse state.
  const [taExpanded, setTAExpanded] = useState(false);
  const toggleTAExpanded = () => setTAExpanded(!taExpanded);

  // ---------------------------------------------------------------------------
  // Textarea keyboard shortcuts:
  //   - Enter to submit form.
  //   - Shift+Enter to add new line.
  // (See textarea onKeyPress event handler.)
  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>): void => {
    textAreaKBDHandler({
      event,
      currentInput: input,
      setInput,
      handleSubmit,
    });
  };

  // Document keyboard shortcuts:
  //   - Backspace or Delete to stop chat request.
  useStopRequestKBD({ isRequesting: isLoading, stopRequestHandler: stop });

  // ---------------------------------------------------------------------------
  return (
    <ChatInputWireframe
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleStopRequest={stop}
      textAreaValue={input}
      textAreaRef={taRef}
      isTextAreaExpanded={taExpanded}
      toggleTextAreaExpanded={toggleTAExpanded}
    />
  );
}
