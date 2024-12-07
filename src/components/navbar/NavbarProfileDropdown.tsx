"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import "daisyui";

// -----------------------------------------------------------------------------
interface MenuItemData {
  href: string;
  text: string;
}

function DropdownMenuItem({ href, text }: MenuItemData): JSX.Element {
  return (
    <MenuItem>
      <Link
        href={href}
        className="block px-4 py-2 text-sm text-base-content data-[focus]:text-primary data-[focus]:bg-base-300 data-[focus]:outline-none"
      >
        {text}
      </Link>
    </MenuItem>
  );
}

// -----------------------------------------------------------------------------
const data: MenuItemData[] = [
  { href: "#", text: "Your Profile" },
  { href: "#", text: "Settings" },
  { href: "#", text: "Sign out" }
];

export default function NavbarProfileDropdown(): JSX.Element {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-base-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user profile dropdown menu</span>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            className="size-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-base-100 py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {data.map((datapoint: MenuItemData) => (
          <DropdownMenuItem key={datapoint.text} {...datapoint} />
        ))}
      </MenuItems>
    </Menu>
  );
}
