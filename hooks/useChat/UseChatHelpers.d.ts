/*
 * Copyright 2023 Vercel, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Modifications:
 *  - Keming He on 01/18/25: modularized definition, refactored to interface,
 *                          re-organized fields, and added comments.
 */

import type {
  ChatRequestOptions,
  CreateMessage,
  JSONValue,
  Message,
} from '@ai-sdk/ui-utils';
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

export interface UseChatHelpers {
  /** Chat id, used for SWR caching. */
  id: string;

  // -------------------- Chat Input State and Options -------------------------

  /** Current value of the chat input. */
  input: string;

  /** React set-state method to update current input value. */
  setInput: Dispatch<SetStateAction<string>>;

  /**
   * Input change event handler for input or textarea element.
   *
   * @param event - The input change event.
   */
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;

  // -------------------- Chat Form Event Handlers -----------------------------

  /**
   * Form submission handler to 1. append the user message to the chat,
   * and 2. reset the input value. Can be used event-less.
   *
   * @param event - The form submission event (if any).
   * @param chatRequestOptions - Additional options for the API call.
   */
  handleSubmit: (
    event?: { preventDefault?: () => void },
    chatRequestOptions?: ChatRequestOptions,
  ) => void;

  // -------------------- Chat Message State and Methods -----------------------

  /** Current chat messages. */
  messages: Message[];

  /**
   * Append a new user message to the chat; then trigger the API call to fetch
   * the AI assistant's response.
   *
   * @param message - The new user message to append.
   * @param chatRequestOptions - Additional options for the API call.
   */
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;

  /**
   * LOCALLY update the chat messages (sync).
   *
   * Use case: first edit the message client-side, then call reloadLastMessage
   * to get a new response from the AI assistant.
   *
   * @param messages - The updated messages to set.
   */
  setMessages: (
    messages: Message[] | ((messages: Message[]) => Message[]),
  ) => void;

  /**
   * Reload the last message from the chat:
   *  - If the last message is from the AI assistant, it will be reloaded.
   *  - If the last message is from the user, a new response will be fetched.
   *
   * @param chatRequestOptions - Additional options for the API call.
   */
  reload: (
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;

  // -------------------- API Request State and Methods ------------------------

  /** Additional data added on the server via StreamData. */
  data?: JSONValue[];

  /**
   * Set the data state of StreamData.
   *
   * @param data - The updateed data to set.
   */
  setData: (
    data:
      | JSONValue[]
      | undefined
      | ((data: JSONValue[] | undefined) => JSONValue[] | undefined),
  ) => void;

  metadata?: Object;

  /** Loading state of the API reqeust. */
  isLoading: boolean;

  /** Error (if any) from the API request. */
  error: Error | undefined;

  /**
   * Immediately abort the current API request (sync),
   * keep the generated tokens if any.
   */
  stop: () => void;
}
