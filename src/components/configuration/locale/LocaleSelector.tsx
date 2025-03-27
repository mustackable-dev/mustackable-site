import { useTranslation } from "react-i18next";
import Locale from "../../../assets/images/locale.svg?react";
import Chevron from "../../../assets/images/chevron.svg?react";
import Button from "../../shared/Button";
import { useState } from "react";

export default function LocaleSelector() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  async function handleClick(locale: string) {
    await i18n.changeLanguage(locale);
    setDropdownOpen(false);
  }

  return (
    <div
      className="relative flex flex-col items-end text-base"
      aria-haspopup="true"
      aria-expanded={dropdownOpen}
      onMouseEnter={() => {
        setDropdownOpen(true);
      }}
      onMouseLeave={() => {
        setDropdownOpen(false);
      }}
    >
      <Button>
        <div className="flex items-center gap-1">
          <Locale className="size-6" />
          <Chevron className="size-5 rotate-90" />
        </div>
      </Button>
      <div
        className={`${dropdownOpen ? "opacity-100" : "pointer-events-none opacity-0"} absolute top-6 z-10 py-2 transition-opacity duration-300`}
      >
        <div className="bg-theme-accent border-theme-secondary flex w-fit flex-col items-start gap-2 rounded-sm border-1 p-2">
          <Button
            onClick={async () => {
              await handleClick("en");
            }}
          >
            <span>{t("locales.en")}</span>
          </Button>
          <Button
            onClick={async () => {
              await handleClick("bg");
            }}
          >
            <span>{t("locales.bg")}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
