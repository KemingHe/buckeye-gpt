'use client';

import type { JSX } from 'react';

import { ChatPage } from '@/components/chat-page';
import { ChatConfigProvider } from '@/contexts/chat-config';
import { ChatDataProvider } from '@/contexts/chat-data';
import { ChatLayoutProvider } from '@/contexts/chat-layout';

const Page = (): JSX.Element => {
  return (
    <ChatLayoutProvider>
      <ChatConfigProvider>
        <ChatDataProvider>
          <ChatPage />
        </ChatDataProvider>
      </ChatConfigProvider>
    </ChatLayoutProvider>
  );
};

export default Page;
