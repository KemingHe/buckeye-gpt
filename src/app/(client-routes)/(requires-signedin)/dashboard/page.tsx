"use client";

import { AUTH_SIGNOUT_ROUTE } from "@constants/routeConstants";

import { NavLinkButton } from "@components/NavLinkButton";

export default function DashboardPage(): JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <p>Dashboard Page</p>
      <NavLinkButton href={AUTH_SIGNOUT_ROUTE} text="Sign Out" />
    </div>
  );
}
