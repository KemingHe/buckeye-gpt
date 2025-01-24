import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { JSX, RefObject } from 'react';

import GitHubCorner from '@/components/githubCorner/GitHubCorner';

// biome-ignore format: added alignment for clarity.
export interface ChatSideDrawerWireframeProps {
  sideDrawerSectionId   : string;
  isSideDrawerOpen      : boolean;
  closeSideDrawer       : () => void;
  sideDrawerOpenFocusRef: RefObject<HTMLHeadingElement>;
}

export function ChatSideDrawerWireframe({
  sideDrawerSectionId,
  isSideDrawerOpen,
  closeSideDrawer,
  sideDrawerOpenFocusRef,
}: ChatSideDrawerWireframeProps): JSX.Element {
  const sideDrawerHeadingId: string = 'chat-side-drawer-heading';
  return (
    <section
      id={sideDrawerSectionId}
      className="drawer-side"
      aria-labelledby={sideDrawerHeadingId}
      aria-hidden={!isSideDrawerOpen}
      tabIndex={isSideDrawerOpen ? undefined : -1}
    >
      <h2
        id={sideDrawerHeadingId}
        className="sr-only"
        ref={sideDrawerOpenFocusRef}
        tabIndex={-1}
      >
        Chat Side Bar
      </h2>
      {/* Non-focusable overlay, can also be used to close side bar. */}
      <button
        className="drawer-overlay lg:hidden"
        type="button"
        onClick={closeSideDrawer}
        aria-hidden="true"
        tabIndex={-1}
      />
      <div className="w-80 h-full bg-base-100 flex flex-col border-r border-neutral">
        {/* GitHub corner. */}
        <GitHubCorner />
        {/* Side drawer content. */}
        <div className="flex-grow min-h-0 overflow-y-auto flex flex-col justify-center items-center">
          <p className="text-center">History coming soon...</p>
        </div>
        {/* Close side drawer button. */}
        <button
          className="flex-shrink-0 btn btn-block btn-ghost justify-end items-center px-2 rounded-none lg:hidden"
          type="button"
          onClick={closeSideDrawer}
          aria-controls={sideDrawerSectionId}
          aria-expanded={isSideDrawerOpen}
          aria-label="Close side bar"
        >
          <ChevronLeftIcon className="size-7" />
        </button>
      </div>
    </section>
  );
}
