import { type JSX, type KeyboardEvent, useState } from 'react';

import { ChatInputWireframe } from '@/components/chat-input-wireframe';
import { useChatDataContext } from '@/contexts/chat-data';
import { textAreaKBDHandler } from '@/handlers/chat-input-textarea-kbd-handler';
import { useStopRequestKBD } from '@/hooks/use-stop-request-kbd';
import type { ChatDataContextValue } from '@/types/chat-context-props';

export const ChatInput = (): JSX.Element => {
  const {
    isLoading,
    inputValue,
    inputRef,
    setInputValue,
    handleSubmit,
    handleInputChange,
    handleStopRequest,
  }: ChatDataContextValue = useChatDataContext();

  // ---------------------------------------------------------------------------
  // Textarea expand/collapse state.
  const [taExpanded, setTAExpanded] = useState(false);
  const toggleTAExpanded = (): void => setTAExpanded(!taExpanded);

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
      textAreaRef={inputRef}
      isTextAreaExpanded={taExpanded}
      toggleTextAreaExpanded={toggleTAExpanded}
    />
  );
};
