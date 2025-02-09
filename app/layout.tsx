import { GoogleAnalytics } from '@next/third-parties/google';
import { StackProvider } from '@stackframe/stack';
import { Inter } from 'next/font/google';
import type { JSX } from 'react';
import { ToastContainer } from 'react-toastify';

import { MEASUREMENT_ID } from '@/constants/google';
import { stackServerApp } from '@/lib/stack-auth/server/app';
import type { LayoutProps } from '@/types/app-layout-props';
import '@/app/globals.css';

export { metadata } from '@/app-config/metadata';
export { viewport } from '@/app-config/viewport';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <html lang="en">
      <body className={`h-dvh ${inter.className}`}>
        <StackProvider app={stackServerApp}>
          {children}
          <ToastContainer position="top-center" theme="colored" />
        </StackProvider>
      </body>
      <GoogleAnalytics gaId={MEASUREMENT_ID} />
    </html>
  );
};

export default Layout;
