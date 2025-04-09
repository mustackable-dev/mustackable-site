import LocaleSelector from "./LocaleSelector/LocaleSelector";
import ThemeModeSwitcher from "./ThemeModeSwitcher/ThemeModeSwitcher";

export default function ConfigurationBar() {
  return (
    <div className="flex items-center gap-4 max-sm:gap-2">
      <ThemeModeSwitcher />
      <LocaleSelector />
    </div>
  );
}
