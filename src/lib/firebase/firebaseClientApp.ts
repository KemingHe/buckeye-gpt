"use client";

import { type FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { type Auth, getAuth } from "firebase/auth";
import { type Firestore, getFirestore } from "firebase/firestore";
import {
  type GenerativeModel,
  getGenerativeModel,
  getVertexAI
} from "firebase/vertexai";

import firebaseConfig from "@lib/firebase/firebaseConfig";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface FirebaseClientAppServices {
  fbApp  : FirebaseApp;
  fbAuth : Auth;
  fbStore: Firestore;
  gemini : GenerativeModel;
}

export const GENAI_REGION: string = "us-central1"; // Iowa, USA.
export const GENAI_MODEL: string = "gemini-1.5-flash"; // Auto-update version.

export function firebaseClientApp(): FirebaseClientAppServices {
  const fbApp: FirebaseApp = getApps().length
    ? getApp()
    : initializeApp(firebaseConfig);
  const fbAuth: Auth = getAuth(fbApp);
  const fbStore: Firestore = getFirestore(fbApp);
  const gemini: GenerativeModel = getGenerativeModel(
    getVertexAI(fbApp, { location: GENAI_REGION }),
    { model: GENAI_MODEL }
  );

  return { fbApp, fbAuth, fbStore, gemini };
}

export const { fbApp, fbAuth, fbStore, gemini }: FirebaseClientAppServices =
  firebaseClientApp();
