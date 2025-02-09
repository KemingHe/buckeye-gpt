import { useEffect, useState } from 'react';

import type { LoadingControls } from '@/types/loading-props';

export const useLoading = (initialState = false): LoadingControls => {
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
};
