import type { TextAreaKBDHanderProps } from '@/types/chat-input-props';

export const textAreaKBDHandler = ({
  event,
  currentInput,
  setCurrentInput,
  handleSubmit,
}: TextAreaKBDHanderProps): void => {
  const { key, shiftKey } = event;

  // Short-circuit if Enter key is not pressed.
  if (key !== 'Enter') return;

  // Prevent default behavior of Enter key.
  event.preventDefault();

  // Case 1: Just the Enter key is pressed, submit the form.
  if (key === 'Enter' && !shiftKey) {
    handleSubmit();
    return;
  }

  // Case 2: Shift + Enter key is pressed, add a new line.
  if (key === 'Enter' && shiftKey) {
    setCurrentInput(`${currentInput}\n`);
  }
};
