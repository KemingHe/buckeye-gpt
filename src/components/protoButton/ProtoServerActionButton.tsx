"use client";

import protoServerActionWrapper from "@components/protoButton/protoServerActionWrapper";

export default function ProtoServerActionButton(): JSX.Element {
  return (
    <button
      aria-label="Server action test button"
      className="btn btn-secondary btn-sm"
      onClick={() => protoServerActionWrapper()}
      type="button"
    >
      Invoke Server Action (NextJS server console output)
    </button>
  );
}
