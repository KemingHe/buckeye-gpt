"use client";

import VerifyAndSpinner from "@components/verify/VerifyAndSpinner";

export default function VerifyPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <p>Auth Verify Page</p>
      <VerifyAndSpinner />
    </div>
  );
}
