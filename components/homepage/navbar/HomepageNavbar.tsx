import { Bars3Icon } from '@heroicons/react/20/solid';
import type { CurrentInternalUser, CurrentUser } from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';

import {
  SignInLinkButton,
  SignOutLinkButton,
} from '@/components/homepage/navbar/navbarButtons';
import { HOME_ROUTE } from '@/constants/routeConstants';

export interface HomepageNavbarProps {
  clientUser: CurrentUser | CurrentInternalUser | null;
}

export function HomepageNavbar({
  clientUser,
}: HomepageNavbarProps): JSX.Element {
  return (
    <nav className="navbar w-full flex-shrink-0 py-3 px-4">
      {/* Hamburger menu icon. */}
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          <Bars3Icon className="size-6" />
        </label>
      </div>
      {/* Navbar title. */}
      <div className="mx-2 flex-1 px-2">
        <Link
          href={HOME_ROUTE}
          className="flex flex-shrink-0 jusitify-center items-center gap-3"
          aria-label="Go to Buckeye GPT homepage"
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
        </Link>
      </div>
      {/* Sign in/out link button. */}
      <div className="flex-none">
        {clientUser ? <SignOutLinkButton /> : <SignInLinkButton />}
      </div>
    </nav>
  );
}
