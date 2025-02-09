import type {
  ChangeEvent,
  FormEvent,
  KeyboardEvent as ReactKeyboardEvent,
  RefObject,
} from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatInputWireframeProps {
  // Loading state.
  isLoading             : boolean;

  // Form event handlers.
  handleSubmit          : (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange     : (event: ChangeEvent<HTMLTextAreaElement>) => void;
  handleKeyDown         : (event: ReactKeyboardEvent<HTMLTextAreaElement>) => void;
  handleStopRequest     : () => void;

  // Textarea states.
  textAreaValue         : string;
  textAreaRef           : RefObject<HTMLTextAreaElement>;
  isTextAreaExpanded    : boolean;
  toggleTextAreaExpanded: () => void;
}

export interface SendMessageButtonProps {
  isLoading: boolean;
}

// biome-ignore format: added alignment for clarity.
export interface TextAreaKBDHanderProps {
  event          : ReactKeyboardEvent<HTMLTextAreaElement>;
  currentInput   : string;
  setCurrentInput: (input: string) => void;
  handleSubmit   : (event?: FormEvent<HTMLFormElement>) => void;
}

// biome-ignore format: added alignment for clarity.
export interface StopRequestButtonProps {
  isLoading: boolean;
  stop     : () => void;
}

export interface StopRequestKBDHandlerProps extends UseStopRequestKBDProps {
  event: KeyboardEvent;
}

// biome-ignore format: added alignment for clarity.
export interface UseStopRequestKBDProps {
  isRequesting      : boolean;
  stopRequestHandler: () => void;
}
