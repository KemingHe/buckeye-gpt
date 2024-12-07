import type { ReactNode } from "react";

import RedirectIfSignedInGuard from "@guards/RedirectIfSignedInGuard";

export default function Layout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return <RedirectIfSignedInGuard>{children}</RedirectIfSignedInGuard>;
}
