import { useEffect, useState } from 'react';

// biome-ignore format: added alignment for clarity.
export interface UseLoadingReturnProps {
  isLoading   : boolean;
  startLoading: () => void;
  stopLoading : () => void;
}

export function useLoading(initialState = false): UseLoadingReturnProps {
  const [isLoading, setIsLoading] = useState<boolean>(initialState);

  // Clean up the loading state (set to false) when the component unmounts.
  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  function startLoading(): void {
    setIsLoading(true);
  }

  function stopLoading(): void {
    setIsLoading(false);
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
