import type { JSX } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
  SignUpLinkButton,
} from '@/components/chat-navbar-links';
import type { ChatNavbarWireframeProps } from '@/types/chat-navbar-props';

export const ChatNavbarWireframe = ({
  clientUser,
  sideDrawerCloseFocusRef,
  openSideDrawerButton,
  clearMessagesButton,
}: ChatNavbarWireframeProps): JSX.Element => {
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
};
