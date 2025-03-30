import { useTranslation } from "react-i18next";
import ContactBar from "../../shared/ContactBar";
import ConfigurationBar from "./ConfigurationBar/ConfigurationBar";
import Separator from "./Separator/Separator";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="bg-theme-background fixed z-60 flex h-16 w-full justify-between px-4 max-sm:h-8 max-sm:px-2">
      <a href="/" className="flex items-center gap-4 font-black max-sm:gap-2">
        <img className="size-8 max-sm:size-6" src="/logo.svg" />
        <h3 className="text-theme-text-heading">{t("appName")}</h3>
      </a>
      <div className="flex items-center">
        <ContactBar />
        <Separator />
        <ConfigurationBar />
      </div>
    </header>
  );
}
