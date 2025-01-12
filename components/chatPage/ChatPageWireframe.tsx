import type { JSX, ReactNode } from 'react';

import {
  ChatNavbar,
  type ChatNavbarProps,
} from '@/components/chatNavbar/ChatNavbar';
import { ChatSideDrawer } from '@/components/chatSideDrawer/ChatSideDrawer';

export interface ChatPageWireframeProps extends ChatNavbarProps {
  children: ReactNode;
}

export function ChatPageWireframe({
  clientUser,
  children,
}: ChatPageWireframeProps): JSX.Element {
  return (
    <main className="drawer lg:drawer-open h-full">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-grow flex-col min-h-0">
        {/* Navbar. */}
        <ChatNavbar clientUser={clientUser} />
        {/* Main chat content. */}
        {children}
      </div>
      <ChatSideDrawer />
    </main>
  );
}
