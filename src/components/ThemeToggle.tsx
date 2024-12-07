// IMPORTANT: For centralized theme management, use strictly one toggle
// component in the navbar. This avoids wrapping the entire app in a
// context provider and allows SSR.

"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem("isDarkMode");
      if (storedTheme !== null) {
        setIsDarkMode(JSON.parse(storedTheme));
      }
    } catch (error) {
      console.error("Failed to parse theme from localStorage", error);
    }
  }, []);

  // Persist the theme preference in local storage.
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    window.localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <label
      className="flex justify-center items-center cursor-pointer space-x-2"
      htmlFor="themeToggle"
    >
      <span className="label-text">Toggle Theme</span>
      <input
        aria-label="Toggle theme"
        checked={isDarkMode}
        className="toggle theme-controller"
        id="themeToggle"
        onChange={() => setIsDarkMode(!isDarkMode)}
        type="checkbox"
      />
    </label>
  );
}
