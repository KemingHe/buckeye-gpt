const prefix: string = '/api/v1';

// Auth endpoints.
export const AUTH_MAGIC_LINK_SEND_API_ENDPOINT: string = `${prefix}/auth/magic-link/send`;

// Chats endpoints.
// OpenAI GPT endpoints.
export const LANGCHAIN_OPENAI_GPT_LITE_API_ENDPOINT: string = `${prefix}/chats/openai/lite`;
export const LANGCHAIN_OPENAI_GPT_REGULAR_API_ENDPOINT: string = `${prefix}/chats/openai/regular`;
export const LANGCHAIN_OPENAI_GPT_PREMIUM_API_ENDPOINT: string = `${prefix}/chats/openai/premium`;

// Google Gemini endpoints.
export const LANGCHAIN_GOOGLE_GEMINI_LITE_API_ENDPOINT: string = `${prefix}/chats/gemini/lite`;
export const LANGCHAIN_GOOGLE_GEMINI_REGULAR_API_ENDPOINT: string = `${prefix}/chats/gemini/regular`;
export const LANGCHAIN_GOOGLE_GEMINI_PREMIUM_API_ENDPOINT: string = `${prefix}/chats/gemini/premium`;

// Anthropic Claude endpoints.
export const LANGCHAIN_ANTHROPIC_CLAUDE_LITE_API_ENDPOINT: string = `${prefix}/chats/claude/lite`;
export const LANGCHAIN_ANTHROPIC_CLAUDE_REGULAR_API_ENDPOINT: string = `${prefix}/chats/claude/regular`;
export const LANGCHAIN_ANTHROPIC_CLAUDE_PREMIUM_API_ENDPOINT: string = `${prefix}/chats/claude/premium`;
