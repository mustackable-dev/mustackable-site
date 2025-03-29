import { useTranslation } from "react-i18next";
// import Level0 from "../../../assets/images/stack_level_0.svg?react";
import Level1 from "../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../assets/images/stack_level_4.svg?react";
import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";

export default function HomePage() {
  const { t } = useTranslation();
  const [currentLevel] = useState(4);
  return (
    <div className="flex flex-col items-center gap-16">
      <AnimatedLogo currentLevel={0} />
      <LogoPanel textRight={true} visible={currentLevel > -1} />
      <TextPanel
        title={t("body.section-1-title")}
        descriptionTexts={[t("body.section-1-1"), t("body.section-1-2")]}
        Stack={Level1}
        visible={currentLevel > 0}
      />
      <TextPanel
        title={t("body.section-2-title")}
        descriptionTexts={[t("body.section-2-1"), t("body.section-2-2")]}
        Stack={Level2}
        textRight={true}
        visible={currentLevel > 1}
      />
      <TextPanel
        title={t("body.section-3-title")}
        descriptionTexts={[t("body.section-3-1")]}
        Stack={Level3}
        visible={currentLevel > 2}
      />
      <TextPanel
        title={t("body.section-4-title")}
        descriptionTexts={[t("body.section-4-1"), t("body.section-4-2")]}
        Stack={Level4}
        textRight={true}
        visible={currentLevel > 3}
      />
    </div>
  );
}
