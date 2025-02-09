'use client';

import type { JSX } from 'react';

import { RedirectOnceSignedInGuard } from '@/guards/redirect-once-signed-in';
import type { LayoutProps } from '@/types/app-layout-props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <RedirectOnceSignedInGuard>{children}</RedirectOnceSignedInGuard>;
};

export default Layout;
