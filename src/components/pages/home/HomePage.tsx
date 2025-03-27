import { useTranslation } from "react-i18next";
// import Level0 from "../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../assets/images/stack_level_4.svg?react";
// import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-8">
      {/* <TextPanel>
        <p className="text-6xl font-black">{t("appName")}</p>
        <div>
          <AnimatedLogo currentLevel={0} />
          <Level0 className="relative size-52" />
        </div>
      </TextPanel> */}
      <LogoPanel />
      <TextPanel
        title={t("body.section-1-title")}
        descriptionTexts={[t("body.section-1-1"), t("body.section-1-2")]}
        Stack={Level1}
      />
      <TextPanel
        title={t("body.section-2-title")}
        descriptionTexts={[t("body.section-2-1"), t("body.section-2-2")]}
        Stack={Level2}
      />
      <TextPanel
        title={t("body.section-3-title")}
        descriptionTexts={[t("body.section-3-1")]}
        Stack={Level3}
      />
      <TextPanel
        title={t("body.section-4-title")}
        descriptionTexts={[t("body.section-4-1"), t("body.section-4-2")]}
        Stack={Level4}
      />
      {t("body.section-1-title")}

      {t("body.section-1-1")}

      {t("body.section-1-2")}

      {t("body.section-2-title")}

      {t("body.section-2-1")}

      {t("body.section-2-2")}

      {t("body.section-3-title")}

      {t("body.section-3-1")}

      {t("body.section-4-title")}

      {t("body.section-4-1")}

      {t("body.section-4-2")}

      {t("body.call-to-contact")}

    </div>
  );
}
