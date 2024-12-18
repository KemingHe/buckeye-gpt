'use server';

import { NotFoundPrompt } from '@/components/NotFoundPrompt';

export default async function NotFound(): Promise<JSX.Element> {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <NotFoundPrompt />
    </div>
  );
}
