import { useTranslation } from "react-i18next";
import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import ContactForm from "./ContactForm/ContactForm";
import { useSceneCalculation } from "../../../hooks/useSceneCalculation";
import CSharp from "../../../assets/images/c_sharp.svg?react";

export default function HomePage() {
  const { t } = useTranslation();

  useSceneCalculation();

  return (
    <div className="flex flex-col items-center">
      <AnimatedLogo />
      <LogoPanel textRight={true} />
      <TextPanel
        title={t("body.section-1-title")}
        descriptionTexts={[t("body.section-1-1"), t("body.section-1-2")]}
        index={1}
      />
      <TextPanel
        title={t("body.section-2-title")}
        descriptionTexts={[t("body.section-2-1"), t("body.section-2-2")]}
        textRight={true}
        index={2}
      />
      <TextPanel
        title={t("body.section-3-title")}
        descriptionTexts={[t("body.section-3-1")]}
        index={3}
      >
        <CSharp className="size-8" />
      </TextPanel>
      <TextPanel
        title={t("body.section-4-title")}
        descriptionTexts={[t("body.section-4-1"), t("body.section-4-2")]}
        textRight={true}
        index={4}
      />
      <ContactForm />
    </div>
  );
}
