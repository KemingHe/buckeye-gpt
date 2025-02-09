export interface LoadingSpinnerProps {
  message?: string;
}

// biome-ignore format: added alignment for clarity.
export interface LoadingControls {
  isLoading   : boolean;
  startLoading: () => void;
  stopLoading : () => void;
}
