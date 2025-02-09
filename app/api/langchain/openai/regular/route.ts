// IMPORTANT: Not a React component, DO NOT put 'use server';

import { gptRegularChain } from '@/lib/langchain/openAI/gptChains';
import { handleChatRequest } from '@/lib/langchain/utils/handleRequest';
import { isAuthedWithRole } from '@/lib/stack-auth/server/is-authed-with-role';

// Disabled caching for endpoint.
export const dynamic = 'force-dynamic';

export const POST = async (request: Request): Promise<Response> => {
  const isAuthorized: boolean = await isAuthedWithRole(null);
  if (!isAuthorized) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    return await handleChatRequest({ request, aiChain: gptRegularChain });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
};
