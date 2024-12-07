"use server";

import protoServerAction from "@components/protoButton/protoServerAction";

export default async function protoServerActionWrapper(): Promise<void> {
  await protoServerAction();
}
