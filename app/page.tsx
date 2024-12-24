'use client';

import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightStartOnRectangleIcon,
  Bars3Icon,
} from '@heroicons/react/20/solid';
import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import Image from 'next/image';
import Link from 'next/link';
import type { JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatHistorySection } from '@/components/chat/ChatHistorySection';
import { ChatInputSection } from '@/components/chat/ChatInputSection';

export default function Homepage(): JSX.Element {
  const chatId = uuidv4();

  // ---------------------------------------------------------------------------
  return (
    // <div className="w-full h-full flex flex-col">
    //   <Header />
    //   <ChatHistorySection chatId={chatId} />
    //   <ChatInputSection chatId={chatId} />
    // </div>

    <main className="drawer lg:drawer-open h-full">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-grow flex-col min-h-0">
        {/* Navbar. */}
        <Navbar />
        {/* Main chat content. */}
        <ChatHistorySection chatId={chatId} />
        <ChatInputSection chatId={chatId} />
      </div>
      <DrawerSide />
    </main>
  );
}

function DrawerSide(): JSX.Element {
  return (
    <div className="drawer-side">
      <label
        htmlFor="drawer-toggle"
        aria-label="Close sidebar"
        className="drawer-overlay"
      />
      <Sidebar />
    </div>
  );
}

function Sidebar(): JSX.Element {
  return (
    // <ul className="menu bg-base-200 h-full w-80 p-4">
    //   {/* Sidebar menu items. */}
    //   <li>Sidebar item 1</li>
    //   <li>Sidebar item 2</li>
    // </ul>
    <div className="w-80 p-4 h-full bg-base-100 flex flex-col justify-center items-center border-r border-neutral">
      <p className="text-center">History coming soon...</p>
    </div>
  );
}

function Navbar(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
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
          className="flex flex-shrink-0 jusitify-center items-center gap-3"
          href="/"
        >
          <Image
            src="/images/transparent-buckeye-gpt-icon-512x512px.png"
            alt="Buckeye GPT logo"
            width={40}
            height={40}
          />
          <span className="text-2xl font-extrabold hidden sm:block">
            Buckeye GPT
          </span>
        </Link>
      </div>
      {/* Sign in/out button. */}
      <div className="flex-none">
        {clientUser ? <SignOutButton /> : <SignInButton />}
      </div>
    </nav>
  );
}

function SignOutButton(): JSX.Element {
  return (
    <Link href="/auth/sign-out" className="btn btn-square btn-ghost">
      <ArrowRightStartOnRectangleIcon className="size-7" />
    </Link>
  );
}

function SignInButton(): JSX.Element {
  return (
    <Link href="/auth/sign-in" className="btn btn-square btn-ghost text-accent">
      <ArrowRightEndOnRectangleIcon className="size-7" />
    </Link>
  );
}
