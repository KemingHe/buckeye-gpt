import {
  type CurrentInternalUser,
  type CurrentUser,
  useUser,
} from '@stackframe/stack';
import type { JSX } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ChatHistorySection } from '@/components/chat/history/ChatHistorySection';
import { ChatInputSection } from '@/components/chat/input/ChatInputSection';
import { HomepageWireframe } from '@/components/homepage/HomepageWireframe';

export default function HomepageWrapper(): JSX.Element {
  const clientUser: CurrentUser | CurrentInternalUser | null = useUser();
  const chatId: string = uuidv4();

  return (
    <HomepageWireframe clientUser={clientUser}>
      <ChatHistorySection chatId={chatId} />
      <ChatInputSection chatId={chatId} />
    </HomepageWireframe>
  );
}
