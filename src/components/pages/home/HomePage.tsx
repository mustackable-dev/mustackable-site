"use client";

import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import ContactForm from "./ContactForm/ContactForm";
import { useSceneCalculation } from "../../../hooks/useSceneCalculation";
import TechStackDisplay from "./TechStackDisplay/TechStackDisplay";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("home-page");

  const { stacksRightAlignments } = useSceneCalculation();

  return (
    <div className="flex flex-col items-center">
      <AnimatedLogo />
      <LogoPanel textRight={stacksRightAlignments[0]} />
      <TextPanel
        title={t("section-1-title")}
        descriptionTexts={[t("section-1-1"), t("section-1-2")]}
        index={1}
        textRight={stacksRightAlignments[1]}
      />
      <TextPanel
        title={t("section-2-title")}
        descriptionTexts={[t("section-2-1"), t("section-2-2")]}
        index={2}
        textRight={stacksRightAlignments[2]}
      />
      <TextPanel
        title={t("section-3-title")}
        descriptionTexts={[t("section-3-1")]}
        index={3}
        textRight={stacksRightAlignments[3]}
      >
        <TechStackDisplay />
      </TextPanel>
      <TextPanel
        title={t("section-4-title")}
        descriptionTexts={[t("section-4-1"), t("section-4-2")]}
        index={4}
        textRight={stacksRightAlignments[4]}
      />
      <ContactForm headerTitle={t("call-to-contact")} />
    </div>
  );
}
