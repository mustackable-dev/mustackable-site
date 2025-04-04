"use client";

import ContactBar from "../shared/ContactBar";
import { useSceneDataStore } from "@/hooks/useSceneDataStore";
import { useShallow } from "zustand/shallow";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const { delay } = useSceneDataStore(
    useShallow((s) => ({
      delay: (s.sceneData?.animationTimings[4] ?? 0) + (s.sceneData?.baseDelay ?? 0) + 1000,
    })),
  );

  return (
    <footer className="flex flex-col items-center gap-12 p-4">
      <div
        className="animate-pop-in flex flex-col items-center gap-2"
        style={{ animationDelay: `${delay.toString()}ms` }}
      >
        <p>{t("company-address-1")}</p>
        <p>{t("company-address-2")}</p>
        <p>{t("company-address-3")}</p>
        <ContactBar vertical={false} />
      </div>
      <div
        className="animate-pop-in text-center italic"
        style={{ animationDelay: `${delay.toString()}ms` }}
      >
        <p className="pb-2">
          {t("trademark-notice")} {t("company-name")}.
        </p>
        <p>
          © {new Date().getFullYear()} {t("company-name")}. {t("rights")}.
        </p>
      </div>
    </footer>
  );
}
