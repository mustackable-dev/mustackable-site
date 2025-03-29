import LocaleSelector from "../../../configuration/locale/LocaleSelector";
import ThemeModeSwitcher from "../../../configuration/theme/ThemeModeSwitcher";

export default function ConfigurationBar() {
  return (
    <div className="flex items-center gap-4 max-sm:gap-2">
      <ThemeModeSwitcher />
      <LocaleSelector />
    </div>
  );
}
