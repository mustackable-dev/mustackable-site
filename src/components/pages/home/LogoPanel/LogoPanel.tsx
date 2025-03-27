import { useRef } from "react";
import { useTranslation } from "react-i18next";
// import AnimatedLogo from "../AnimatedLogo/AnimatedLogo";
import Level0 from "../../../../assets/images/stack_level_0.svg?react";

export default function LogoPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      className="grid w-full max-w-[902px] grid-cols-3 items-center justify-between"
    >
      <div className={`col-span-2 flex flex-col gap-8`}>
        <p className="text-illuminate-heading animation-delay-700 animate-text-illuminate text-5xl font-black">
          {t("appName")}
        </p>
      </div>
      <div className="animate-stack-radiate stack-illuminate-logo flex size-60 items-center justify-center">
        {/* <AnimatedLogo currentLevel={0} /> */}
        <Level0 className="size-44" />
      </div>
    </div>
  );
}
