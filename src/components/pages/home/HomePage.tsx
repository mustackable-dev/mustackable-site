import { useTranslation } from "react-i18next";
import TextPanel from "./TextPanel/TextPanel";
import LogoPanel from "./LogoPanel/LogoPanel";
import AnimatedLogo from "./AnimatedLogo/AnimatedLogo";
import ContactForm from "./ContactForm/ContactForm";
import { useSceneCalculation } from "../../../hooks/useSceneCalculation";
import CSharp from "../../../assets/images/c_sharp.svg?react";
import Net from "../../../assets/images/dotnet.svg?react";
import Typescript from "../../../assets/images/typescript.svg?react";
import ReactLogo from "../../../assets/images/react.svg?react";
import Expo from "../../../assets/images/expo.svg?react";
import Python from "../../../assets/images/python.svg?react";
import Ollama from "../../../assets/images/ollama.svg?react";

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
        <div className="-z-2 flex items-center gap-4 pt-4 max-sm:gap-2 max-sm:pt-2">
          <CSharp className="size-10 max-sm:size-5" />
          <Net className="size-10 max-sm:size-5" />
          <Typescript className="size-10 max-sm:size-5" />
          <ReactLogo className="size-10 max-sm:size-5" />
          <Expo className="text-theme-text-heading size-10 max-sm:size-5" />
          <Python className="size-10 max-sm:size-5" />
          <Ollama className="text-theme-text-heading size-10 max-sm:size-5" />
        </div>
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
