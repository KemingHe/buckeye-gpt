import type { JSX } from 'react';

export interface SimpleThemeToggleProps {
  themeId: string;
}

export function SimpleThemeToggle({
  themeId,
}: SimpleThemeToggleProps): JSX.Element {
  return (
    <label className="flex cursor-pointer gap-2">
      <span className="font-semibold">Toogle Theme</span>
      <input
        type="checkbox"
        value={themeId}
        className="toggle theme-controller"
      />
    </label>
  );
}
