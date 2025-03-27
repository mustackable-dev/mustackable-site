import { useEffect, useState } from "react";
import DarkMode from "../../../assets/images/dark_mode.svg?react";
import LightMode from "../../../assets/images/light_mode.svg?react";
import { useTheme } from "../../../hooks/useTheme";
import Button from "../../shared/Button";

export default function ThemeModeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [switchingTheme, setSwitchingTheme] = useState(false);
  const currentTheme = theme == "system" ? systemTheme : theme;
  const targetTheme = currentTheme == "dark" ? "light" : "dark";
  const Icon = currentTheme === "dark" ? LightMode : DarkMode;

  useEffect(() => {
    if (switchingTheme) {
      setSwitchingTheme(false);
    }
  }, [switchingTheme]);

  return (
    <Button
      onClick={() => {
        setSwitchingTheme(true);
        setTheme(targetTheme);
      }}
    >
      <Icon
        className={`transition-opacity duration-300 ${switchingTheme ? "opacity-0" : "opacity-100"}`}
      />
    </Button>
  );
}
