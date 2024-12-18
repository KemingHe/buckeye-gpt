import type { KeyboardEvent } from 'react';

// biome-ignore format: added alignment for clarity.
export interface TextareaKBDHanderProps {
  event       : KeyboardEvent<HTMLTextAreaElement>;
  currentInput: string;
  setInput    : (input: string) => void;
  handleSubmit: () => void;
}

export function textareaKBDHandler({
  event,
  currentInput,
  setInput,
  handleSubmit,
}: TextareaKBDHanderProps): void {
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
    setInput(`${currentInput}\n`);
  }
}
