import type { JSX } from 'react';

import { HomepageSidebar } from '@/components/homepage/sideDrawer/HomepageSidebar';

export function HomepageSideDrawer(): JSX.Element {
  return (
    <div className="drawer-side">
      <label
        htmlFor="drawer-toggle"
        aria-label="Close sidebar"
        className="drawer-overlay"
      />
      <HomepageSidebar />
    </div>
  );
}
