import type { JSX } from 'react';

export function ChatSideDrawer(): JSX.Element {
  return (
    <div className="drawer-side">
      <label
        htmlFor="drawer-toggle"
        aria-label="Close sidebar"
        className="drawer-overlay"
      />
      <div className="w-80 p-4 h-full bg-base-100 flex flex-col justify-center items-center border-r border-neutral">
        <p className="text-center">History coming soon...</p>
      </div>
    </div>
  );
}
