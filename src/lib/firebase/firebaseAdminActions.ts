"use server";

import { fbAdminStore } from "@lib/firebase/firebaseAdminApp";
import type { DocumentReference } from "firebase-admin/firestore";
import { v4 as uuidv4 } from "uuid";

export async function addArbitraryDocumentToFirestore(): Promise<void> {
  const testDocRef: DocumentReference = fbAdminStore
    .collection("test")
    .doc(uuidv4());
  await testDocRef.set({ message: "This doc is set by a server function." });
  console.log("Document written with ID: ", testDocRef.id);
}
