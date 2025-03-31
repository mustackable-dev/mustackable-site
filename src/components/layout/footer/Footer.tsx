import { useTranslation } from "react-i18next";
import ContactBar from "../../shared/ContactBar";
import { useSceneDataStore } from "../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";

export default function Footer() {
  const { t } = useTranslation();
  const { delay } = useSceneDataStore(
    useShallow((s) => ({
      delay: (s.sceneData?.animationTimings[4] ?? 0) + (s.sceneData?.baseDelay ?? 0) + 1000,
    })),
  );
  return (
    <footer
      className="animate-pop-in flex flex-col items-center gap-12 p-4"
      style={{ animationDelay: `${delay.toString()}ms` }}
    >
      <div className="flex w-full flex-col items-center gap-2">
        <p>{t("footer.company-address-1")}</p>
        <p>{t("footer.company-address-2")}</p>
        <p>{t("footer.company-address-3")}</p>
        <ContactBar vertical={false} />
      </div>
      <div className="w-full text-center italic">
        <p className="pb-2">
          {t("footer.trademark-notice")} {t("footer.company-name")}.
        </p>
        <p>
          © {new Date().getFullYear()} {t("footer.company-name")}. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
}
