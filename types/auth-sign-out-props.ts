import type { MouseEventHandler } from 'react';

// biome-ignore format: added alignment for clarity.
export interface SignOutWireframeProps {
  isLoading     : boolean;
  signOutHandler: MouseEventHandler<HTMLButtonElement>;
}
