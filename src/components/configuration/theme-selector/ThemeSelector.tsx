import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../providers/ThemeProvider";
import { useTranslation } from "react-i18next";

interface ThemeSelectorProps {
  showLabel: boolean;
}

export default function ThemeSelector({ showLabel }: ThemeSelectorProps) {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  function LabelRender() {
    if (showLabel) {
      return (
        <label className="text-text col-span-1 text-right">{t("theme")}</label>
      );
    }
  }

  function SelectRender() {
    return (
      <>
        <select
          className={`bg-background text-text px-2 col-span-${showLabel ? "1" : "2"}`}
          value={theme}
          id="theme-selector"
          onChange={(x) => {
            setTheme(x.target.value.toString() as Theme);
          }}
        >
          <option value="dark">{t("themes.dark")}</option>
          <option value="light">{t("themes.light")}</option>
          <option value="system">{t("themes.system")}</option>
        </select>
      </>
    );
  }

  return (
    <>
      <LabelRender />
      <SelectRender />
    </>
  );
}
