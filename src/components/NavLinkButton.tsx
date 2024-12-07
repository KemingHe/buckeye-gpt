import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export interface NavLinkButtonProps {
  href: string;
  text: string;
}

export function NavLinkButton({ href, text }: NavLinkButtonProps): JSX.Element {
  return (
    <Link href={href} className="btn btn-primary btn-sm flex items-center">
      <span className="-mr-1.5">{text}</span>
      <ArrowUpRightIcon className="size-4" />
    </Link>
  );
}
