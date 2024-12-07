"use client";

import type { ActionCodeSettings } from "firebase/auth";

import { AUTH_VERIFY_ROUTE } from "@constants/routeConstants";

export const FIREBASE_AUTH_LOCAL_STORAGE_KEY: string = "firebaseAuthEmail";

// Firebase client auth (web app only) action code settings.
export const actionCodeSettings: ActionCodeSettings = {
  url: `${window.location.origin}${AUTH_VERIFY_ROUTE}`,
  handleCodeInApp: true
};
