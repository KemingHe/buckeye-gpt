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
import { type ChatContextValue, useChatContext } from '@/contexts/ChatContext';

export default function ChatInputWrapper(): JSX.Element {
  const {
    isLoading,
    inputValue,
    setInputValue,
    handleSubmit,
    handleInputChange,
    handleStopRequest,
  }: ChatContextValue = useChatContext();

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
      currentInput: inputValue,
      setCurrentInput: setInputValue,
      handleSubmit,
    });
  };

  // Document keyboard shortcuts:
  //   - Backspace or Delete to stop chat request.
  useStopRequestKBD({
    isRequesting: isLoading,
    stopRequestHandler: handleStopRequest,
  });

  // ---------------------------------------------------------------------------
  return (
    <ChatInputWireframe
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      handleKeyDown={handleKeyDown}
      handleStopRequest={handleStopRequest}
      textAreaValue={inputValue}
      textAreaRef={taRef}
      isTextAreaExpanded={taExpanded}
      toggleTextAreaExpanded={toggleTAExpanded}
    />
  );
}
