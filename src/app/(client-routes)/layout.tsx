import type { ReactNode } from "react";

import { UserProvider } from "@contexts/UserContext";

export default function ClientLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <UserProvider>
      <main className="flex flex-col flex-grow justify-center items-center">
        {children}
      </main>
    </UserProvider>
  );
}
