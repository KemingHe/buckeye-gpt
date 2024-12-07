import type { ReactNode } from "react";

import Footer from "@components/Footer";

export default function ServerLayout({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <>
      <main className="flex flex-col flex-grow justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
