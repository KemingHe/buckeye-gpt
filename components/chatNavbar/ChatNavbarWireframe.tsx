import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import type { JSX, ReactNode, RefObject } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
  SignUpLinkButton,
} from '@/components/chatNavbar/navbarLinks';

// biome-ignore format: added alignment for clarity.
export interface ChatNavbarWireframeProps {
  clientUser             : CurrentUser | CurrentInternalUser | null;
  sideDrawerCloseFocusRef: RefObject<HTMLHeadingElement>;
  openSideDrawerButton   : ReactNode;
  clearMessagesButton    : ReactNode;
}

export function ChatNavbarWireframe({
  clientUser,
  sideDrawerCloseFocusRef,
  openSideDrawerButton,
  clearMessagesButton,
}: ChatNavbarWireframeProps): JSX.Element {
  const navbarHeadingId: string = 'chat-navbar-heading';
  return (
    <section className="navbar p-4" aria-labelledby={navbarHeadingId}>
      <h2
        id={navbarHeadingId}
        className="sr-only"
        ref={sideDrawerCloseFocusRef}
        tabIndex={-1}
      >
        Chat Navigation Bar
      </h2>
      {/* Hamburger menu button and clear chat button. */}
      <div className="flex-none flex gap-3">
        {openSideDrawerButton}
        {clearMessagesButton}
      </div>
      {/* Navbar items. */}
      <div className="flex-1" />
      {/* Sign in/out link button. */}
      <div className="flex-none flex justify-center items-center gap-2">
        {clientUser ? (
          <SignOutLinkButton />
        ) : (
          <>
            <SignInLinkButton />
            <SignUpLinkButton />
          </>
        )}
      </div>
    </section>
  );
}
