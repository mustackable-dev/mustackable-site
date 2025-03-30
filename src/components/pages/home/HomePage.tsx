import { useTranslation } from "react-i18next";
import Level1 from "../../../assets/images/stack_level_1.svg?react";
import Level2 from "../../../assets/images/stack_level_2.svg?react";
import Level3 from "../../../assets/images/stack_level_3.svg?react";
import Level4 from "../../../assets/images/stack_level_4.svg?react";
import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import { useSceneDataStore } from "../../../stores/SceneDataStore";
import { useShallow } from "zustand/shallow";
import { useRef } from "react";

export default function HomePage() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement | null>(null);
  const { currentStack } = useSceneDataStore(
    useShallow((s) => ({ currentStack: s.currentStack })),
  );

  return (
    <div className="flex flex-col items-center" ref={ref}>
      <AnimatedLogo />
      <LogoPanel textRight={true} visible={currentStack > -1} />
      <TextPanel
        title={t("body.section-1-title")}
        descriptionTexts={[t("body.section-1-1"), t("body.section-1-2")]}
        Stack={Level1}
        visible={currentStack > 0}
        sequenceIndex={1}
      />
      <TextPanel
        title={t("body.section-2-title")}
        descriptionTexts={[t("body.section-2-1"), t("body.section-2-2")]}
        Stack={Level2}
        textRight={true}
        visible={currentStack > 1}
        sequenceIndex={2}
      />
      <TextPanel
        title={t("body.section-3-title")}
        descriptionTexts={[t("body.section-3-1")]}
        Stack={Level3}
        visible={currentStack > 2}
        sequenceIndex={3}
      />
      <TextPanel
        title={t("body.section-4-title")}
        descriptionTexts={[t("body.section-4-1"), t("body.section-4-2")]}
        Stack={Level4}
        textRight={true}
        visible={currentStack > 3}
        sequenceIndex={4}
      />
    </div>
  );
}
