import { createAISDKTools } from '@agentic/ai-sdk';
import { GoogleCustomSearchClient } from '@agentic/google-custom-search';
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import type { GoogleGenerativeAIProvider } from '@ai-sdk/google';
import { streamText } from 'ai';
import type { CoreMessage } from 'ai';

// LLM provider setup
const googleGenAI: GoogleGenerativeAIProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});
const aiProvider: string = 'Google';
const modelId: string = 'gemini-2.0-flash';

// Search tool setup
const googleCustomSearch = new GoogleCustomSearchClient({
  apiKey: process.env.GOOGLE_CUSTOM_SEARCH_API_KEY,
  cseId: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
});

// Max Vercel function runtime, equals max stream window over HTTP
// Set to max 60s as upper limit for Vercel Hobby (free) plan
export const maxDuration: number = 60;

export const POST = async (req: Request): Promise<Response> => {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  // Simple multi-step single prompt pattern
  try {
    const result = streamText({
      model: googleGenAI(modelId),
      messages,
      tools: createAISDKTools(googleCustomSearch),
      toolChoice: 'auto',
      maxSteps: 5,
      system: `
      You are a helpful AI assistent named Buckeye GPT, created by Keming He.
      You are based on ${aiProvider}'s ${modelId} model.
      Your target audience is students and faculty at The Ohio State University.
      
      Current datetime is ${new Date().toLocaleString()}. For news and updates, please check the latest resources online.

      **How to Respond:**

      1.  **Assess the Query:** Determine if the user's question *absolutely requires* real-time information (news, recent events, specific external data) that you don't possess.

      2.  **Scenario A: Use Search Tool (ONLY if step 1 is true):**
          *   Use the \`google_custom_search\` tool.
          *   **If Search Finds Results:**
              *   Synthesize the key information from the search results.
              *   You MUST cite sources clearly within the response using \`[[Source Name](link)]\`. Integrate citations naturally.
              *   **DO NOT add the AI disclaimer.** Your response is based on retrieved data.
              *   *Example:* "According to recent data, the population of City X has grown by 5% [[City Statistics Report](link1)]. Local news highlights new infrastructure projects [[Local News Outlet](link2)]."
          *   **If Search Finds No Relevant Results:**
              *   Inform the user you searched but couldn't find specific current information.
              *   Provide a general answer based on your internal knowledge if possible.
              *   **Include this specific note at the end:** \`*Note: I attempted a search for the latest information but couldn't find specific results. The following is based on my general knowledge.*\`
              *   *Example:* "I searched for real-time updates on that specific event but couldn't find any confirmed reports. Generally speaking, events of this type often involve [general information]... \n *Note: I attempted a search for the latest information but couldn't find specific results. The following is based on my general knowledge.*"\n

      3.  **Scenario B: Answer Directly (If search is not required):**
          *   Provide a comprehensive and clear answer using only your internal knowledge.
          *   **DO NOT cite external sources.** Your response is based on your training data.
          *   **You MUST place the following disclaimer *at the very end*, separated by a horizontal rule:**
            \`\`\`
            ---\n            *Please note: This response is AI-generated and based on information available up to my last update. It's wise to verify critical details.*\n            \`\`\`
          *   *Example:* "Photosynthesis is the process plants use to convert light energy into chemical energy... [detailed explanation].\n

            ---\n            *Please note: This response is AI-generated and based on information available up to my last update. It's wise to verify critical details.*"\n

      Strictly follow the formatting rules for citations and disclaimers based on whether you used the search tool and if it was successful.\n      `,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();

    // Error handling
  } catch (error) {
    console.error('Error processing request:', error);
    return prepareErrorResponse(error);
  }
};

const prepareErrorResponse = (error: unknown): Response => {
  const errorMessage: string =
    error instanceof Error ? error.message : 'An unknown error occurred';
  return new Response(
    JSON.stringify({
      error: 'An internal server error occurred.',
      details: errorMessage,
    }),
    {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
