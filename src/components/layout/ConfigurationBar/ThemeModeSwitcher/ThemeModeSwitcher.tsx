import { useEffect, useState } from "react";
import DarkMode from "@/assets/images/dark_mode.svg";
import LightMode from "@/assets/images/light_mode.svg";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/components/shared/Button";

export default function ThemeModeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [switchingTheme, setSwitchingTheme] = useState(false);
  const currentTheme = theme == "system" ? systemTheme : theme;
  const targetTheme = currentTheme == "dark" ? "light" : "dark";

  useEffect(() => {
    if (switchingTheme) {
      setSwitchingTheme(false);
    }
  }, [switchingTheme]);

  return (
    <Button
      title="Switch theme mode"
      onClick={() => {
        setSwitchingTheme(true);
        setTheme(targetTheme);
      }}
    >
      {currentTheme === "dark" ? (
        <LightMode
          className={`transition-opacity duration-300 ${switchingTheme ? "opacity-0" : "opacity-100"} size-6 max-sm:size-4`}
        />
      ) : (
        <DarkMode
          className={`transition-opacity duration-300 ${switchingTheme ? "opacity-0" : "opacity-100"} size-6 max-sm:size-4`}
        />
      )}
    </Button>
  );
}
