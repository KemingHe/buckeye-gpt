import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import type { JSX, RefObject } from 'react';

export interface ChatSideDrawerProps {
  isSideDrawerOpen: boolean;
  closeSideDrawer: () => void;
  sideDrawerHeadingRef: RefObject<HTMLHeadingElement>;
}

export function ChatSideDrawer({
  isSideDrawerOpen,
  closeSideDrawer,
  sideDrawerHeadingRef,
}: ChatSideDrawerProps): JSX.Element {
  return (
    <section
      id="side-drawer"
      className="drawer-side"
      aria-labelledby="side-drawer-heading"
      aria-hidden={!isSideDrawerOpen}
      tabIndex={isSideDrawerOpen ? undefined : -1}
    >
      <h2
        ref={sideDrawerHeadingRef}
        id="side-drawer-heading"
        className="sr-only"
        tabIndex={-1}
      >
        Side bar
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
        {/* Side drawer content. */}
        <div className="flex-grow min-h-0 overflow-y-auto flex flex-col justify-center items-center">
          <p className="text-center">History coming soon...</p>
        </div>
        {/* Close side drawer button. */}
        <button
          className="flex-shrink-0 flex justify-end items-center h-12 lg:hidden"
          type="button"
          onClick={closeSideDrawer}
          aria-controls="side-drawer"
          aria-expanded={isSideDrawerOpen}
          aria-label="Close side bar"
        >
          <ChevronLeftIcon className="size-9 pe-2" />
        </button>
      </div>
    </section>
  );
}
