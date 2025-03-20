import { useTranslation } from "react-i18next";
import ContactBar from "../../shared/ContactBar";
import ConfigurationBar from "./ConfigurationBar/ConfigurationBar";
import Separator from "./Separator/Separator";

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className="fixed flex h-16 w-full justify-between px-4">
      <a
        href="/"
        className="text-text-color flex items-center gap-4 text-xl font-black"
      >
        <img className="size-8" src="/logo.svg" />
        {t("appName")}
      </a>
      <div className="flex items-center">
        <ContactBar />
        <Separator />
        <ConfigurationBar />
      </div>
    </header>
  );
}
