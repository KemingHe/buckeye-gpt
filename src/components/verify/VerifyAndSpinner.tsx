import LoadingCard from "@components/LoadingCard";

import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { useEffect } from "react";

import { FIREBASE_AUTH_LOCAL_STORAGE_KEY } from "@lib/firebase/actionCodeSettings";
import { fbAuth } from "@lib/firebase/firebaseClientApp";

import { type UseLoadingReturnProps, useLoading } from "@hooks/useLoading";

export default function VerifyAndSpinner(): JSX.Element {
  const email: string | null = window.localStorage.getItem(
    FIREBASE_AUTH_LOCAL_STORAGE_KEY
  );
  const verifyEmailLink: string | null = window.location.href;

  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();

  useEffect(() => {
    async function verifyEmailLinkAndSignIn(): Promise<void> {
      // Short-circuit if email or verifyEmailLink is null.
      if (
        !email ||
        !verifyEmailLink ||
        typeof window === "undefined" ||
        !isSignInWithEmailLink(fbAuth, verifyEmailLink)
      ) {
        return;
      }

      startLoading();
      try {
        await signInWithEmailLink(fbAuth, email, verifyEmailLink);
        console.log(`Success: signed in with email link for "${email}".`);
        window.localStorage.removeItem(FIREBASE_AUTH_LOCAL_STORAGE_KEY);
        console.log(`Success: removed "${email}" from local storage.`);
      } catch (error) {
        console.error(
          `Error at "${VerifyAndSpinner.name}" when signing in with email link: ${error}`
        );
      }
      stopLoading();
    }

    if (!isLoading) {
      verifyEmailLinkAndSignIn();
    }

    // Only verify once on component mount.
  }, []);

  return <LoadingCard message="Verifying..." />;
}
