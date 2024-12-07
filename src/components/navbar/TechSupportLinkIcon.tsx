"use client";

import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// import { TECH_SUPPORT_ROUTE } from "@constants/routeConstants";

const TECH_SUPPORT_ROUTE: string = "/tech-support";

export default function TechSupportLinkIcon(): JSX.Element {
  return (
    <Link
      className="relative rounded-full bg-base-100 p-1 text-base-content hover:text-primary focus:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      href={TECH_SUPPORT_ROUTE}
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Link to the technical support page</span>
      <QuestionMarkCircleIcon aria-hidden="true" className="size-6" />
    </Link>
  );
}
