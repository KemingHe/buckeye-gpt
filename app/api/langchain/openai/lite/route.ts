// IMPORTANT: Not a React component, DO NOT put 'use server';

import { openAILiteChain } from '@/lib/langchain/openAI/openAIChains';
import { handleChatRequest } from '@/lib/langchain/utils/handleRequest';
import isValidOrigin from '@/utils/isValidOrigin';

// Disabled caching for endpoint.
export const dynamic = 'force-dynamic';

export async function POST(request: Request): Promise<Response> {
  const origin: string | null = request.headers.get('origin');
  if (!isValidOrigin(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    return await handleChatRequest({ request, aiChain: openAILiteChain });
  } catch (error) {
    console.error(error);
    return new Response('Internal server error', { status: 500 });
  }
}
