import type { JSX, ReactNode } from 'react';

// biome-ignore format: added alignment for clarity.
export interface ChatPageWireframeProps {
  isSideDrawerOpen: boolean;
  navbar          : ReactNode;
  children        : ReactNode;
  sideDrawer      : ReactNode;
}

export function ChatPageWireframe({
  isSideDrawerOpen,
  navbar,
  children,
  sideDrawer,
}: ChatPageWireframeProps): JSX.Element {
  return (
    <main className="drawer lg:drawer-open h-full">
      {/* Input checkbox to support DaisyUI's media query of drawer open/close state. */}
      <input
        className="drawer-toggle"
        type="checkbox"
        checked={isSideDrawerOpen}
        readOnly
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="drawer-content flex flex-grow flex-col min-h-0">
        {navbar}
        {children}
      </div>
      {sideDrawer}
    </main>
  );
}
