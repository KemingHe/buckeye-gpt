import type { JSX } from 'react';

import type { ChatPageWireframeProps } from '@/types/chat-page-props';

export const ChatPageWireframe = ({
  appRootId,
  isSideDrawerOpen,
  navbar,
  children,
  sideDrawer,
}: ChatPageWireframeProps): JSX.Element => {
  return (
    <main id={appRootId} className="drawer lg:drawer-open h-full">
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
};
