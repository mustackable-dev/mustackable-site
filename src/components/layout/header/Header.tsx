import ThemeSelector from "../../configuration/theme-selector/ThemeSelector";
import { version } from "../../../../package.json";
import { useTranslation } from "react-i18next";
import LocaleSelector from "../../configuration/locale-selector/LocaleSelector";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="fixed flex h-16 w-max items-center justify-between">
      <div className="flex flex-col items-start">
        <a href="/" className="text-text text-2xl font-bold">
          {t("appName")}
        </a>
        <p className="text-text">
          {t("version")}: {version}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <ThemeSelector showLabel={true} />
        <LocaleSelector showLabel={true} />
      </div>
    </header>
  );
}
