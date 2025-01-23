'use client';

import type { JSX } from 'react';

import ChatPageWrapper from '@/components/chatPage/ChatPageWrapper';
import { ChatConfigProvider } from '@/contexts/ChatConfigContext';
import { ChatDataProvider } from '@/contexts/ChatDataContext';
import { ChatLayoutProvider } from '@/contexts/ChatLayoutContext';

export default function Homepage(): JSX.Element {
  return (
    <ChatLayoutProvider>
      <ChatConfigProvider>
        <ChatDataProvider>
          <ChatPageWrapper />
        </ChatDataProvider>
      </ChatConfigProvider>
    </ChatLayoutProvider>
  );
}
