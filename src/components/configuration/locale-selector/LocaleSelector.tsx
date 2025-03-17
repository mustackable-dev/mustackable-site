import { useTranslation } from "react-i18next";

interface LocaleSelectorProps {
  showLabel: boolean;
}

export default function LocaleSelector({ showLabel }: LocaleSelectorProps) {
  const { t, i18n } = useTranslation();

  function LabelRender() {
    if (showLabel) {
      return (
        <label className="text-text col-span-1 text-right">
          {t("language")}
        </label>
      );
    }
  }

  function SelectRender() {
    return (
      <select
        className={`bg-background text-text px-2 col-span-${showLabel ? "1" : "2"}`}
        value={i18n.language}
        id="theme-selector"
        onChange={(x) => {
          void i18n.changeLanguage(x.target.value);
        }}
      >
        <option value="en">{t("locales.en")}</option>
        <option value="bg">{t("locales.bg")}</option>
      </select>
    );
  }

  return (
    <>
      <LabelRender />
      <SelectRender />
    </>
  );
}
