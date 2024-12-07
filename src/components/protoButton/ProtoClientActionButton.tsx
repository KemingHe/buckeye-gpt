"use client";

import protoClientAction from "@components/protoButton/protoClientAction";

export default function ProtoClientActionButton(): JSX.Element {
  return (
    <button
      aria-label="Client action test button"
      className="btn btn-accent btn-sm"
      onClick={() => protoClientAction()}
      type="button"
    >
      Invoke Client Action (browser console output)
    </button>
  );
}
