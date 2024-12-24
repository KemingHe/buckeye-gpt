'use client';

import type { JSX, ReactNode } from 'react';

import RequiresSignedInGuard from '@/guards/RequiresSignedInGuard';

export default function SignOutLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <RequiresSignedInGuard>{children}</RequiresSignedInGuard>;
}
