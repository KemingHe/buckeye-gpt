"use client";

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

// biome-ignore format: added alignment for clarity.
export interface SignOutButtonProps {
  signOutAction: () => void | Promise<void>;
}

export function SignOutButton({
  signOutAction
}: SignOutButtonProps): JSX.Element {
  return (
    <button
      aria-label="Sign out of your account"
      className="btn btn-accent btn-sm flex items-center justify-center"
      onClick={signOutAction}
      type="button"
    >
      Sign Out
      <ArrowRightStartOnRectangleIcon aria-hidden="true" className="size-4" />
    </button>
  );
}
