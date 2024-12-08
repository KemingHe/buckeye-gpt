"use client";

// import Image from "next/image";

export default function Header(): JSX.Element {
  return (
    <header className="p-4 flex-shrink-0 flex justify-center items-center shadow-neutral shadow-sm">
      <label className="flex cursor-pointer gap-2">
        <span className="font-semibold">Toogle Theme</span>
        <input
          type="checkbox"
          value="valentine"
          className="toggle theme-controller"
        />
      </label>
    </header>
  );
}
