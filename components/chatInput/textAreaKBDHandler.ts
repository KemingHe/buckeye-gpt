import type { FormEvent, KeyboardEvent } from 'react';

// biome-ignore format: added alignment for clarity.
export interface TextAreaKBDHanderProps {
  event          : KeyboardEvent<HTMLTextAreaElement>;
  currentInput   : string;
  setCurrentInput: (input: string) => void;
  handleSubmit   : (event?: FormEvent<HTMLFormElement>) => void;
}

export function textAreaKBDHandler({
  event,
  currentInput,
  setCurrentInput,
  handleSubmit,
}: TextAreaKBDHanderProps): void {
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
}
