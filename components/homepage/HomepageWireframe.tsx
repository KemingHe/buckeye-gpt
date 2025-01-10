import type { JSX, ReactNode } from 'react';

import {
  HomepageNavbar,
  type HomepageNavbarProps,
} from '@/components/homepage/navbar/HomepageNavbar';
import { HomepageSideDrawer } from '@/components/homepage/sideDrawer/HomepageSideDrawer';

export interface HomepageWireframeProps extends HomepageNavbarProps {
  children: ReactNode;
}

export function HomepageWireframe({
  clientUser,
  children,
}: HomepageWireframeProps): JSX.Element {
  return (
    <main className="drawer lg:drawer-open h-full">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-grow flex-col min-h-0">
        {/* Navbar. */}
        <HomepageNavbar clientUser={clientUser} />
        {/* Main chat content. */}
        {children}
      </div>
      <HomepageSideDrawer />
    </main>
  );
}
