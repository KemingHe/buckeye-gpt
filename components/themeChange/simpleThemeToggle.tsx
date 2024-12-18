export default function SimpleThemeToggle({
  themeName,
}: { themeName: string }): JSX.Element {
  return (
    <label className="flex cursor-pointer gap-2">
      <span className="font-semibold">Toogle Theme</span>
      <input
        type="checkbox"
        value={themeName}
        className="toggle theme-controller"
      />
    </label>
  );
}
