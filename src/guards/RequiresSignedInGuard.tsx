"use client";

import { type ReactNode, useEffect } from "react";

import LoadingCard from "@components/LoadingCard";

import { AUTH_SIGNIN_ROUTE } from "@constants/routeConstants";
import {
  type UserContextReturnProps,
  useUserContext
} from "@contexts/UserContext";
import { type UseLoadingReturnProps, useLoading } from "@hooks/useLoading";

// -----------------------------------------------------------------------------
export default function RequiresSignedInGuard({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const {
    clientRouter,
    pathname,
    userAuth,
    userContextLoading,
    userContextError
  }: UserContextReturnProps = useUserContext();

  const { isLoading, startLoading, stopLoading }: UseLoadingReturnProps =
    useLoading();

  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (
      !userContextLoading &&
      !userContextError &&
      !isLoading &&
      // Check if user is not signed in (userAuth object is undefined).
      !userAuth
    ) {
      startLoading();
      if (pathname !== AUTH_SIGNIN_ROUTE) {
        clientRouter.push(AUTH_SIGNIN_ROUTE);
      }
    }
  }, [
    userContextLoading,
    userContextError,
    isLoading,
    userAuth,
    pathname
    // Include pathname to re-evaluate redirect logic on route change.
    // Exclude clientRouter to prevent unnecessary re-renders and infinite loops.
  ]);

  useEffect(() => {
    // Use [empty dep list and return] to cleanup on component unmount.
    return () => {
      stopLoading();
    };
  }, []);

  // ---------------------------------------------------------------------------
  if (userContextLoading || userContextError || isLoading || !userAuth) {
    return <LoadingCard message="Redirecting..." />;
  }

  return <>{children}</>;
}
