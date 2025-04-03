"use client";

import ConfigurationBar from "./ConfigurationBar/ConfigurationBar";
import ContactBar from "../shared/ContactBar";
import Separator from "./Separator/Separator";
import { useSceneDataStore } from "../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";
import { useTheme } from "../../hooks/useTheme";
import Logo from "../../assets/images/logo.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("common");
  const { delay } = useSceneDataStore(
    useShallow((s) => ({
      delay: (s.sceneData?.animationTimings[0] ?? 0) + (s.sceneData?.baseDelay ?? 0) + 1000,
    })),
  );

  const { theme } = useTheme();
  return (
    <header
      className="animate-pop-in bg-theme-background fixed z-60 flex h-16 w-full justify-between px-4 max-sm:h-8 max-sm:px-2"
      style={{ animationDelay: `${delay.toString()}ms` }}
    >
      <Link href="/" className="flex items-center gap-4 font-black max-sm:gap-2">
        <Logo className="size-8 max-sm:size-6" />
        <h3
          className={`transition-colors duration-300 ${
            theme === "dark"
              ? "text-theme-text-heading hover:text-theme-secondary"
              : "text-theme-secondary hover:text-theme-primary"
          }`}
        >
          {t("appName")}
        </h3>
      </Link>
      <div className="flex items-center">
        <ContactBar />
        <Separator />
        <ConfigurationBar />
      </div>
    </header>
  );
}
