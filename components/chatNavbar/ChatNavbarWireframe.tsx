import { Bars3Icon } from '@heroicons/react/20/solid';
import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX, RefObject } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
  SignUpLinkButton,
} from '@/components/chatNavbar/navbarButtons';
import { HOME_ROUTE } from '@/constants/routeConstants';

// biome-ignore format: added alignment for clarity.
export interface ChatNavbarWireframeProps {
  // Current user state.
  clientUser            : CurrentUser | CurrentInternalUser | null;
  // Side drawer states and actions.
  sideDrawerSectionId   : string;
  isSideDrawerOpen      : boolean;
  openSideDrawer        : () => void;
  sideDrawerCloseFocusRef: RefObject<HTMLHeadingElement>;
}

export function ChatNavbarWireframe({
  clientUser,
  sideDrawerSectionId,
  isSideDrawerOpen,
  openSideDrawer,
  sideDrawerCloseFocusRef,
}: ChatNavbarWireframeProps): JSX.Element {
  const navbarHeadingId: string = 'chat-navbar-heading';
  return (
    <section
      className="navbar w-full flex-shrink-0 p-2 flex items-center"
      aria-labelledby={navbarHeadingId}
    >
      <h2
        id={navbarHeadingId}
        className="sr-only"
        ref={sideDrawerCloseFocusRef}
        tabIndex={-1}
      >
        Chat Navigation Bar
      </h2>
      {/* Hamburger menu button or Buckeye GPT logo. */}
      <div className="flex-none">
        {/* Display hamburger menu button when viewport is less than lg. */}
        <button
          className="btn btn-square btn-ghost lg:hidden"
          type="button"
          onClick={openSideDrawer}
          aria-controls={sideDrawerSectionId}
          aria-expanded={isSideDrawerOpen}
          aria-label="Open side bar"
        >
          <Bars3Icon className="size-7" />
        </button>
        {/* Display Buckeye GPT logo when viewport is lg or greater. */}
        <Link
          href={HOME_ROUTE}
          className="hidden lg:flex flex-shrink-0 justify-center items-center mx-2"
          aria-label="Go to Buckeye GPT homepage"
          aria-current="false"
        >
          <Image
            src="/images/transparent-buckeye-gpt-icon-512x512px.png"
            alt="Buckeye GPT logo"
            width={40}
            height={40}
            priority={true}
          />
        </Link>
      </div>
      {/* Navbar items. */}
      <div className="px-1 flex-1">{/* TODO */}</div>
      {/* Sign in/out link button (TODO: refactor). */}
      <div className="flex-shrink-0 flex justify-center items-center gap-2 ms-2 me-1">
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
