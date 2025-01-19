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
 *  - Keming He on 01/18/25: modularized the processResponseStream async function.
 */

import type { FetchFunction } from '@ai-sdk/provider-utils';
import type {
  ChatRequest,
  IdGenerator,
  JSONValue,
  Message,
  UseChatOptions,
} from '@ai-sdk/ui-utils';
import { callChatApi } from '@ai-sdk/ui-utils';
import type { MutableRefObject } from 'react';
import type { KeyedMutator } from 'swr';

// biome-ignore format: added alignment for clarity.
export default async function processResponseStream (
  api                            : string,
  chatRequest                    : ChatRequest,
  mutate                         : KeyedMutator<Message[]>,
  mutateStreamData               : KeyedMutator<JSONValue[] | undefined>,
  existingDataRef                : MutableRefObject<JSONValue[] | undefined>,
  extraMetadataRef               : MutableRefObject<any>,
  messagesRef                    : MutableRefObject<Message[]>,
  abortControllerRef             : MutableRefObject<AbortController | null>,
  generateId                     : IdGenerator,
  streamProtocol                 : UseChatOptions['streamProtocol'],
  onFinish                       : UseChatOptions['onFinish'],
  onResponse                     : ((response: Response) => void | Promise<void>) | undefined,
  onToolCall                     : UseChatOptions['onToolCall'] | undefined,
  sendExtraMessageFields         : boolean | undefined,
  experimental_prepareRequestBody: 
    | ((options: {
        id          : string;
        messages    : Message[];
        requestData?: JSONValue;
        requestBody?: object;
      }) => unknown)
    | undefined,
  fetch                          : FetchFunction | undefined,
  keepLastMessageOnError         : boolean,
  id                             : string,
) {
  // Do an optimistic update to the chat state to show the updated messages immediately:
  const previousMessages = messagesRef.current;
  mutate(chatRequest.messages, false);

  const constructedMessagesPayload = sendExtraMessageFields
    ? chatRequest.messages
    : chatRequest.messages.map(
        ({
          role,
          content,
          experimental_attachments,
          data,
          annotations,
          toolInvocations,
        }) => ({
          role,
          content,
          ...(experimental_attachments !== undefined && {
            experimental_attachments,
          }),
          ...(data !== undefined && { data }),
          ...(annotations !== undefined && { annotations }),
          ...(toolInvocations !== undefined && { toolInvocations }),
        }),
      );

  const existingData = existingDataRef.current;

  return await callChatApi({
    api,
    body: experimental_prepareRequestBody?.({
      id,
      messages: chatRequest.messages,
      requestData: chatRequest.data,
      requestBody: chatRequest.body,
    }) ?? {
      id,
      messages: constructedMessagesPayload,
      data: chatRequest.data,
      ...extraMetadataRef.current.body,
      ...chatRequest.body,
    },
    streamProtocol,
    credentials: extraMetadataRef.current.credentials,
    headers: {
      ...extraMetadataRef.current.headers,
      ...chatRequest.headers,
    },
    abortController: () => abortControllerRef.current,
    restoreMessagesOnFailure() {
      if (!keepLastMessageOnError) {
        mutate(previousMessages, false);
      }
    },
    onResponse,
    onUpdate(merged, data) {
      mutate([...chatRequest.messages, ...merged], false);
      if (data?.length) {
        mutateStreamData([...(existingData ?? []), ...data], false);
      }
    },
    onToolCall,
    onFinish,
    generateId,
    fetch,
  });
}
