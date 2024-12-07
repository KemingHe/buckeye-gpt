"use client";

import { BellIcon } from "@heroicons/react/24/outline";

export default function NotificationBell(): JSX.Element {
  return (
    <button
      type="button"
      className="relative rounded-full bg-base-100 p-1 text-base-content hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <BellIcon aria-hidden="true" className="size-6" />
    </button>
  );
}
