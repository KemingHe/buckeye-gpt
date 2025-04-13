// IMPORTANT: Not a React component, DO NOT put 'use server';

import { gptLiteChain } from '@/lib/langchain/openAI/gptChains';
import { handleChatRequest } from '@/lib/langchain/utils/handleRequest';

// Disabled caching for endpoint
export const dynamic = 'force-dynamic';

// Max function runtime equals max HTTP streaming window
// Set to 60s as max for Hobby (free) plan, defaults to 10s, will cause drop
export const maxDuration: number = 60;

export const POST = async (request: Request): Promise<Response> => {
  try {
    return await handleChatRequest({ request, aiChain: gptLiteChain });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
};
