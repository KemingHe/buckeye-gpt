import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import type { JSX, ReactNode, RefObject } from 'react';

import { ChatNavbar } from '@/components/chatNavbar/ChatNavbar';
import { ChatSideDrawer } from '@/components/chatSideDrawer/ChatSideDrawer';

// biome-ignore format: added alignment for clarity.
export interface ChatPageWireframeProps {
  // User information (or lack of).
  clientUser          : CurrentUser | CurrentInternalUser | null;

  // Side drawer state, methods, and heading reference.
  isSideDrawerOpen    : boolean;
  openSideDrawer      : () => void;
  closeSideDrawer     : () => void;
  sideDrawerHeadingRef: RefObject<HTMLHeadingElement>;

  // Chat messages and input sections.
  children            : ReactNode;
}

export function ChatPageWireframe({
  clientUser,
  isSideDrawerOpen,
  openSideDrawer,
  closeSideDrawer,
  sideDrawerHeadingRef,
  children,
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
        <ChatNavbar
          clientUser={clientUser}
          isSideDrawerOpen={isSideDrawerOpen}
          openSideDrawer={openSideDrawer}
        />
        {/* Chat messages and input sections. */}
        {children}
      </div>
      <ChatSideDrawer
        isSideDrawerOpen={isSideDrawerOpen}
        closeSideDrawer={closeSideDrawer}
        sideDrawerHeadingRef={sideDrawerHeadingRef}
      />
    </main>
  );
}
