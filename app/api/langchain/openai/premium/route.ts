// IMPORTANT: Not a React component, DO NOT put 'use server';

import { gptPremiumChain } from '@/lib/langchain/openAI/gptChains';
import { handleChatRequest } from '@/lib/langchain/utils/handleRequest';
import isAuthedWithRole from '@/lib/stackAuth/server/isAuthedWithRole';
import isValidOrigin from '@/utils/isValidOrigin';

// Disabled caching for endpoint.
export const dynamic = 'force-dynamic';

export async function POST(request: Request): Promise<Response> {
  const origin: string | null = request.headers.get('origin');
  if (!isValidOrigin(origin) || !(await isAuthedWithRole('admin'))) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    return await handleChatRequest({ request, aiChain: gptPremiumChain });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
}
