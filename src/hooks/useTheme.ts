import { useContext } from "react";
import { ThemeProviderContext } from "../contexts/ThemeProviderContext";

export const useTheme = () => useContext(ThemeProviderContext)