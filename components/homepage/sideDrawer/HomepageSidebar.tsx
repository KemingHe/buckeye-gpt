import type { JSX } from 'react';

export function HomepageSidebar(): JSX.Element {
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
