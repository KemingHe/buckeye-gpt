"use client";

import type { AuthError, User } from "firebase/auth";
import type { DocumentData, FirestoreError } from "firebase/firestore";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode, createContext, useContext, useMemo } from "react";
import { useAuthState } from "react-firehooks/auth";

import { fbAuth } from "@lib/firebase/firebaseClientApp";

import type { UserOrgRefsType } from "@schemas/UserOrgRefsSchema";

import ErrorCard from "@components/ErrorCard";
import LoadingCard from "@components/LoadingCard";

// -----------------------------------------------------------------------------
// biome-ignore format: added alignment for clarity.
export interface UserContextReturnProps {
  clientRouter      : AppRouterInstance;
  pathname          : string;
  userAuth          : User | undefined;
  userData          : DocumentData | undefined;
  userOrgRefs       : UserOrgRefsType | undefined;
  userContextLoading: boolean;
  userContextError  : AuthError | FirestoreError | undefined;
}

// -----------------------------------------------------------------------------
const UserContext = createContext<UserContextReturnProps | undefined>(
  undefined
);

// -----------------------------------------------------------------------------
export function UserProvider({
  children
}: Readonly<{ children: ReactNode }>): JSX.Element {
  const clientRouter: AppRouterInstance = useRouter();
  const pathname: string = usePathname();
  const [userAuth, userAuthLoading, userAuthError] = useAuthState(fbAuth);

  const userContextValue: UserContextReturnProps = useMemo(
    () =>
      (
      // biome-ignore format: added alignment for clarity.
      {
        clientRouter,
        pathname,
        userAuth          : userAuth?.uid ? userAuth : undefined,
        userData          : undefined,
        userOrgRefs       : undefined,
        userContextLoading: userAuthLoading /* ||
                            TODO */,
        userContextError  : userAuthError /* ||
                            TODO */
    }),
    [
      clientRouter,
      pathname,
      userAuth,
      userAuthLoading,
      userAuthError
      /* TODO */
    ]
  );

  // ---------------------------------------------------------------------------
  // Short-circuit to loading or error card if user context is loading or errored.
  if (userContextValue.userContextLoading)
    return <LoadingCard message="Loading..." />;
  if (userContextValue.userContextError)
    return <ErrorCard message="Error Loading User Info." />;

  // ---------------------------------------------------------------------------
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}

// -----------------------------------------------------------------------------
export function useUserContext(): UserContextReturnProps {
  const context: UserContextReturnProps | undefined = useContext(UserContext);
  if (!context) {
    throw new Error(
      'useUserContext returns "undefined". Make sure the calling component is a children of <UserProvider>.'
    );
  }
  return context;
}
