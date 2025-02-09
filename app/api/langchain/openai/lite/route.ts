// IMPORTANT: Not a React component, DO NOT put 'use server';

import { gptLiteChain } from '@/lib/langchain/openAI/gptChains';
import { handleChatRequest } from '@/lib/langchain/utils/handleRequest';

// Disabled caching for endpoint.
export const dynamic = 'force-dynamic';

export const POST = async (request: Request): Promise<Response> => {
  try {
    return await handleChatRequest({ request, aiChain: gptLiteChain });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
};
