import DarkMode from "../../../assets/images/dark_mode.svg?react";
import LightMode from "../../../assets/images/light_mode.svg?react";
import { useTheme } from "../../../hooks/useTheme";
import Button from "../../shared/Button";

export default function ThemeModeSwitcher() {
  const { theme, systemTheme, setTheme } = useTheme();
  const currentTheme = theme == "system" ? systemTheme : theme;
  const targetTheme = currentTheme == "dark" ? "light" : "dark";
  const Icon = currentTheme === "dark" ? DarkMode : LightMode;
  return (
    <Button
      onClick={() => {
        setTheme(targetTheme);
      }}
    >
      <Icon className="fill-primary-color" />
    </Button>
  );
}
