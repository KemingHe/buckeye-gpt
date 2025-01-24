import { ArrowPathIcon, Bars3Icon } from '@heroicons/react/20/solid';
import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import type { JSX, RefObject } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
  SignUpLinkButton,
} from '@/components/chatNavbar/navbarButtons';

// biome-ignore format: added alignment for clarity.
export interface ChatNavbarWireframeProps {
  // Current user state.
  clientUser            : CurrentUser | CurrentInternalUser | null;
  // Side drawer states and actions.
  sideDrawerSectionId   : string;
  isSideDrawerOpen      : boolean;
  openSideDrawer        : () => void;
  sideDrawerCloseFocusRef: RefObject<HTMLHeadingElement>;
  // Chat data actions.
  clearMessages         : () => void;
}

export function ChatNavbarWireframe({
  clientUser,
  sideDrawerSectionId,
  isSideDrawerOpen,
  openSideDrawer,
  sideDrawerCloseFocusRef,
  clearMessages,
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
      <div className="flex-none flex gap-3 lg:gap-0">
        {/* Display hamburger menu button when viewport is less than lg. */}
        <button
          className="btn btn-sm btn-square btn-neutral lg:hidden"
          type="button"
          onClick={openSideDrawer}
          aria-controls={sideDrawerSectionId}
          aria-expanded={isSideDrawerOpen}
          aria-label="Open side bar"
          tabIndex={undefined}
        >
          <Bars3Icon className="size-5" aria-hidden="true" />
        </button>
        {/* Clear chat button. */}
        <button
          className="btn btn-sm btn-square btn-neutral"
          type="button"
          onClick={clearMessages}
          aria-label="Clear chat conversation messages"
        >
          <ArrowPathIcon className="size-5" aria-hidden="true" />
        </button>
      </div>
      {/* Navbar items. */}
      <div className="flex-1" />
      {/* Sign in/out link button (TODO: refactor). */}
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
