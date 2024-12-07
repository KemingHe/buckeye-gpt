"use client";

import { signOut } from "firebase/auth";
import { useEffect } from "react";

import { fbAuth } from "@lib/firebase/firebaseClientApp";

import LoadingCard from "@components/LoadingCard";

export default function SignOutPage(): JSX.Element {
  // Sign user out on (page) component mount.
  useEffect(() => {
    signOut(fbAuth).catch((error) => {
      console.error(error);
    });
  }, []);

  return <LoadingCard message="Signing out..." />;
}
