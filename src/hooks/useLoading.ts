"use client";

import { useState } from "react";

// biome-ignore format: added alignment for clarity.
export interface UseLoadingReturnProps {
  isLoading   : boolean;
  startLoading: () => void;
  stopLoading : () => void;
}

export function useLoading(initialState = false): UseLoadingReturnProps {
  const [isLoading, setIsLoading] = useState<boolean>(initialState);
  return {
    isLoading,
    startLoading: () => setIsLoading(true),
    stopLoading: () => setIsLoading(false)
  };
}
