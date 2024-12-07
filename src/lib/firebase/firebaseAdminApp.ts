import "server-only";

import { credential } from "firebase-admin";
import { type App, getApps, initializeApp } from "firebase-admin/app";
import { type Auth, getAuth } from "firebase-admin/auth";
import { type Firestore, getFirestore } from "firebase-admin/firestore";

import { firebaseAdminConfig } from "@lib/firebase/firebaseAdminConfig";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface FirebaseAdminAppServices {
  fbAdminApp  : App;
  fbAdminAuth : Auth;
  fbAdminStore: Firestore;
}

// -----------------------------------------------------------------------------
function formatPrivateKey(privateKey: string): string {
  return privateKey.replace(/\\n/g, "\n");
}

// -----------------------------------------------------------------------------
export function firebaseAdminApp(): FirebaseAdminAppServices {
  const projectId: string = firebaseAdminConfig.projectId;
  const privateKey: string = formatPrivateKey(firebaseAdminConfig.privateKey);
  const clientEmail: string = firebaseAdminConfig.clientEmail;

  let fbAdminApp: App;
  const fbAdminAppList: App[] | undefined = getApps();

  if (fbAdminAppList && fbAdminAppList.length > 0 && fbAdminAppList[0]) {
    fbAdminApp = fbAdminAppList[0];
  } else {
    const cert: credential.Credential = credential.cert({
      projectId,
      privateKey,
      clientEmail
    });

    fbAdminApp = initializeApp({
      credential: cert,
      projectId
    });
  }

  const fbAdminAuth = getAuth(fbAdminApp);
  const fbAdminStore = getFirestore(fbAdminApp);

  return { fbAdminApp, fbAdminAuth, fbAdminStore };
}

// -----------------------------------------------------------------------------
export const {
  fbAdminApp,
  fbAdminAuth,
  fbAdminStore
}: FirebaseAdminAppServices = firebaseAdminApp();
