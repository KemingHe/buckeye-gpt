import { Bars3Icon } from '@heroicons/react/20/solid';
import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
} from '@/components/chatNavbar/navbarButtons';
import { HOME_ROUTE } from '@/constants/routeConstants';

export interface ChatNavbarProps {
  clientUser: CurrentUser | CurrentInternalUser | null;
  isSideDrawerOpen: boolean;
  openSideDrawer: () => void;
}

export function ChatNavbar({
  clientUser,
  isSideDrawerOpen,
  openSideDrawer,
}: ChatNavbarProps): JSX.Element {
  return (
    <nav className="navbar w-full flex-shrink-0 p-2 flex items-center">
      {/* Hamburger menu icon. */}
      <div className="flex-none lg:hidden">
        <button
          className="btn btn-square btn-ghost"
          type="button"
          onClick={openSideDrawer}
          aria-controls="side-bar"
          aria-expanded={isSideDrawerOpen}
          aria-label="Open side bar"
        >
          <Bars3Icon className="size-7" />
        </button>
      </div>
      {/* Navbar title. */}
      <div className="px-1 flex-1">
        {/* <Link
          href={HOME_ROUTE}
          className="flex flex-shrink-0 jusitify-center items-center gap-3"
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
          <span className="text-2xl font-extrabold hidden sm:block">
            Buckeye GPT
          </span>
        </Link> */}
      </div>
      {/* Sign in/out link button. */}
      <div className="flex-none">
        {clientUser ? <SignOutLinkButton /> : <SignInLinkButton />}
      </div>
    </nav>
  );
}
