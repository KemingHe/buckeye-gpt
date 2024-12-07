"use client";

import { type ReactNode, useEffect } from "react";

import LoadingCard from "@components/LoadingCard";

import { USER_DASHBOARD_ROUTE } from "@constants/routeConstants";
import {
  type UserContextReturnProps,
  useUserContext
} from "@contexts/UserContext";
import { type UseLoadingReturnProps, useLoading } from "@hooks/useLoading";

// -----------------------------------------------------------------------------
export default function RedirectIfSignedInGuard({
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
      // Check if user is signed in (userAuth object is defined).
      userAuth
    ) {
      startLoading();
      if (pathname !== USER_DASHBOARD_ROUTE) {
        clientRouter.push(USER_DASHBOARD_ROUTE);
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
  if (userContextLoading || userContextError || isLoading || userAuth) {
    return <LoadingCard message="Verifying..." />;
  }

  return <>{children}</>;
}
