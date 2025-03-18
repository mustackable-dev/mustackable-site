import { useTranslation } from "react-i18next";
import Locale from "../../../assets/images/locale.svg?react";
import Button from "../../shared/Button";

export default function LocaleSelector() {
  const { t, i18n } = useTranslation();

  return (
    <div className="group relative flex flex-col items-end">
      <Button>
        <Locale className="fill-primary-color size-6" />
      </Button>
      <div className="bg-tertiary-color border-secondary-color absolute top-8 flex w-fit flex-col items-start gap-2 rounded-sm border-1 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button
          onClick={async () => {
            await i18n.changeLanguage("en");
          }}
        >
          <span className="text-text-color">{t("locales.en")}</span>
        </Button>
        <Button
          onClick={async () => {
            await i18n.changeLanguage("bg");
          }}
        >
          <span className="text-text-color">{t("locales.bg")}</span>
        </Button>
      </div>
    </div>
  );
}
