"use client";

import Locale from "@/assets/images/locale.svg";
import Chevron from "@/assets/images/chevron.svg";
import Button from "@/components/shared/Button";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSelector() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const t = useTranslations("locales");
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  function handleClick(locale: string) {
    router.replace(pathname, { locale: locale });
  }

  return (
    <div
      className="relative flex flex-col items-end"
      aria-label="Select language"
      onMouseEnter={() => {
        setDropdownOpen(true);
      }}
      onMouseLeave={() => {
        setDropdownOpen(false);
      }}
    >
      <Button title="Select language">
        <div className="flex items-center gap-1">
          <Locale className="size-6 max-sm:size-4" />
          <Chevron className="size-5 rotate-90 max-sm:size-3" />
        </div>
      </Button>
      <div
        className={`${dropdownOpen ? "opacity-100" : "pointer-events-none opacity-0"} absolute top-6 z-10 py-2 transition-opacity duration-300 max-sm:top-4 max-sm:py-1`}
      >
        <div className="bg-theme-accent border-theme-secondary flex w-fit flex-col items-start gap-2 rounded-sm border-1 p-2 max-sm:p-1">
          {routing.locales.map((x) => (
            <Button
              title={t(x)}
              disabled={currentLocale === x}
              key={x}
              onClick={() => {
                handleClick(x);
              }}
            >
              <p>{t(x)}</p>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
