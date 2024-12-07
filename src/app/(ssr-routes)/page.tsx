"use server";

import { NavLinkButton } from "@components/NavLinkButton";

import { AUTH_SIGNIN_ROUTE, EVENTS_ROUTE } from "@constants/routeConstants";

export default async function Homepage(): Promise<JSX.Element> {
  return (
    <div className="flex flex-col justify-center items-center p-5 space-y-5">
      <p>The Buckeye App</p>
      <NavLinkButton href={AUTH_SIGNIN_ROUTE} text="Ohio State Sign In/Up" />
      <div className="divider">OR</div>
      <NavLinkButton href={EVENTS_ROUTE} text="See Upcoming Events" />
    </div>
  );
}
