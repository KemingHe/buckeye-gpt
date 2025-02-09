'use client';

import type { JSX } from 'react';

import { RequiresSignedInGuard } from '@/guards/requires-signed-in';
import type { LayoutProps } from '@/types/app-layout-props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return <RequiresSignedInGuard>{children}</RequiresSignedInGuard>;
};

export default Layout;
