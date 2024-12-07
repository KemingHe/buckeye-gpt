"use client";

import { HOME_ROUTE } from "@constants/routeConstants";

import { NavLinkButton } from "@components/NavLinkButton";

export default function EventsPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <NavLinkButton href={HOME_ROUTE} text="Home" />
      <p>Events Page</p>
    </div>
  );
}
