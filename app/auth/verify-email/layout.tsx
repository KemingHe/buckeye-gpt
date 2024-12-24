'use client';

import type { JSX, ReactNode } from 'react';

import RedirectOnceSignedInGuard from '@/guards/RedirectOnceSignedInGuard';

export default function VerifyEmailLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <RedirectOnceSignedInGuard>{children}</RedirectOnceSignedInGuard>;
}
